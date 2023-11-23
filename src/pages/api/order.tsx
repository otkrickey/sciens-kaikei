import Image from 'next/image';
import { Inter } from 'next/font/google';
import { useState } from 'react';
import { OrderModel } from '@/utils/schemaModels';
import connectDB from '@/utils/connectDB';

const Order = async (req: any, res: any) => {
    try {
        await connectDB();
        const order = await OrderModel.create({
            date: new Date(),
            clerk: req.body.clerk,
            price: req.body.price,
        });
        if (!order) {
            return res.status(400).json({ success: false });  // 400: Bad Request
        }
        res.status(201).json({ success: true, data: order });  // 201: Created
    }
    catch (err) {
        res.status(400).json({ success: false });
    }
};

export default Order;