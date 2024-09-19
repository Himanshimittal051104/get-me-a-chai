import { initiate } from '../../path/to/your/initiate/actions/page'; // Path to your server-side logic

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { amount, to_username, paymentform } = req.body;

            // Call the initiate function to create a Razorpay order
            const order = await initiate(amount, to_username, paymentform);

            // Respond with the order ID
            res.status(200).json({ order_id: order.id });
        } catch (error) {
            console.error('Error creating order:', error);
            res.status(500).json({ error: 'Failed to create order' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
