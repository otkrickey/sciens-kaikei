import React, { useState } from "react";

const Order = () => {
    const submitHandler = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, price: number) => {
        e.preventDefault();
        const res = await fetch("http://kaikei.otkrickey.com/api/order", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                date: new Date(),
                clerk: "test",
                price: price,
            }),
        });

        //api側のレスポンスを受け取る
        const data = await res.json();
        if (data.success) {
            console.log("Success:Order");
        } else {
            console.log("Failure:Order");
        }
    };

    return (
        <>
            <div className="flex flex-row items-center justify-center">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => submitHandler(event, 300)}>300</button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => submitHandler(event, 500)}>500</button>
            </div>
        </>
    );
};

export default Order;