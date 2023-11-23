import { useEffect, useState } from "react";
import { useApp } from "../components/useApp";
import * as Realm from "realm-web";
import Order from "./order";


// Order型の定義
interface Order {
    _id: string;
    date: string;
    clerk: string;
    price: number;
    __v: number;
}


function MongoDbDataAccess({ name }: { name: string; }) {
    // const [orders, setOrders] = useState<any>([]); // オーダーのリストを管理するステート
    const [orders, setOrders] = useState<Order[]>([]);
    const { app, isLoading } = useApp();

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const month = String(date.getMonth() + 1).padStart(2, '0'); // 月
        const day = String(date.getDate()).padStart(2, '0'); // 日
        const hours = String(date.getHours()).padStart(2, '0'); // 時
        const minutes = String(date.getMinutes()).padStart(2, '0'); // 分

        return `${month}月${day}日 ${hours}時${minutes}分`;
    };

    const buttonColor = (price: number) => {
        if (price == 100) {
            return "bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded";
        }
        else if (price == 200) {
            return "bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded";
        }
        else if (price == 300) {
            return "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";
        }
        else if (price == 500) {
            return "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded";
        }
        else {
            return "bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded";
        }
    };

    const deleteOrder = async (id: string) => {
        if (!app || isLoading) {
            console.log("App is not initialized or loading.");
            return;
        }

        try {
            const credentials = Realm.Credentials.anonymous();
            await app.logIn(credentials);

            if (!app.currentUser) {
                console.error("Failed to log in.");
                return;
            }

            const mongodb = app.currentUser.mongoClient('mongodb-atlas');
            const collection = mongodb.db('test').collection('orders');

            const result = await collection.deleteOne({ _id: id });

            setOrders((prevOrders: any) => prevOrders.filter((order: any) => order._id !== id));

            console.log("Deleted order:", result);
        } catch (error) {
            console.error("Failed to fetch and watch orders:", error);
        }
    };


    useEffect(() => {
        const fetchData = async () => {
            if (!app || isLoading) {
                console.log("App is not initialized or loading.");
                return;
            }

            try {
                const credentials = Realm.Credentials.anonymous();
                await app.logIn(credentials);

                if (!app.currentUser) {
                    console.error("Failed to log in.");
                    return;
                }

                const mongodb = app.currentUser.mongoClient('mongodb-atlas');
                const collection = mongodb.db('test').collection('orders');

                // 最初に最新の20件のオーダーを取得
                const recentOrders = await collection.find({}, {
                    sort: { _id: -1 },
                    limit: 20
                });
                setOrders(recentOrders);

                // データベースの変更を監視
                for await (const change of collection.watch()) {
                    console.log("Change event:", change);
                    if (change.operationType === 'insert' && change.fullDocument) {
                        setOrders((prevOrders: any) => [change.fullDocument, ...prevOrders.slice(0, 19)]);
                    }
                }
            } catch (error) {
                console.error("Failed to fetch and watch orders:", error);
            }
        };

        fetchData();
    }, [app, isLoading]);

    if (isLoading) {
        return <div className="text-center">Loading...</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-xl font-bold mb-4">Data for Collection: {name}</h1>
            <table className="min-w-full table-auto border-collapse bg-white shadow-md">
                <thead className="bg-gray-100">
                    <tr>
                        {/* <th className="px-4 py-2 border">Clerk</th> */}
                        <th className="px-4 py-2 border">Date</th>
                        <th className="px-4 py-2 border">Price</th>
                        <th className="px-4 py-2 border">Controls</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order: Order, index: number) => (
                        <tr key={order._id} className="border-t">
                            {/* <td className="px-4 py-2 border">{order.clerk}</td> */}
                            <td className="px-4 py-2 border">{formatDate(order.date)}</td>
                            <td className="px-4 py-2 border">{order.price}</td>
                            <td className="px-4 py-2 border">
                                <button
                                    className={buttonColor(order.price)}
                                    onClick={() => deleteOrder(order._id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default function OrderInformation() {
    return <MongoDbDataAccess name="order" />;
}
