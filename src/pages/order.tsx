import React from "react";
import { useApp } from "@/components/useApp";
import * as Realm from "realm-web";

const Order = () => {
    const submitHandler = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, price: number) => {
        e.preventDefault();
        await createOrder(price);
    };

    const { app, isLoading } = useApp();

    const createOrder = async (price: number) => {
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

            const mongoClient = app.currentUser.mongoClient("mongodb-atlas");
            const orders = mongoClient.db("sat").collection("orders");

            const result = await orders.insertOne({
                date: new Date(),
                clerk: "test",
                price: price,
            });

            console.log(result);
        } catch (err) {
            console.error("Failed to insert order", err);
        }
    };

    return (
        <>
            <div className="flex flex-row items-center justify-center">
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => submitHandler(event, 100)}>100</button>
                <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
                    onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => submitHandler(event, 200)}>200</button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => submitHandler(event, 300)}>300</button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => submitHandler(event, 500)}>500</button>
            </div>
        </>
    );
};

export default Order;