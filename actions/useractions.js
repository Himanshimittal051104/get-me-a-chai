"use server"
import Razorpay from "razorpay"
import Payment from "@/models/Payment"
import connectDB from "@/db/connectDb"
import User from "@/models/User"

export const initiate = async (amount,currency,to_username, paymentform) => {
    try{
        await connectDB();
        var instance = new Razorpay({ key_id: 'YOUR_KEY_ID', key_secret: 'YOUR_SECRET'})
    
        const options={
            amount:Number.parseInt(amount),
            currency:"INR",
            receipt:`receipt#${new Date().getTime()}`,
            notes:{
                to_user: to_username,
                name: paymentform.name,
                message: paymentform.message
            }
        }
        const order=await instance.orders.create(options);
    
        await Payment.create({
            oid:order.id ,
            amount:amount,
            to_username:to_username,
            name:paymentform.name,
            message:paymentform.message,
        })
        return order;
        
    }catch(error){
        console.error("Error initiating payment:", error);
        throw new Error("Payment initiation failed.");
    }
}