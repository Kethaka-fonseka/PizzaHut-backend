const Order = require('../models/order.model');


// Add  new order

const addOrder = async (req, res) => {
    if (req.body) {
        const order = new Order(req.body);

        try {
            const newOrder = await order.save();
            res.status(200).json(newOrder);

        } catch (err) {
            res.status(400).json({message: err.message})
        }

    }
}


// update the order status

const editOrderStatus = async (req, res) => {
    if (req.params.id) {
        const order = Order.findById(req.params.id);
        if (req.body.status) {
            order.status = req.body.status;
        }
        try {
            const updatedOrder = await order.save();
            res.status(200).json(updatedOrder);
        } catch (err) {
            res.status(400).json({message: err.message})
        }

    }
}

// assign employee to the order

const assignToOrder = async (req, res) => {
    if (req.params.id) {
        const order = Order.findById(req.params.id);
        if (req.body.assign_to) {
            order.status = req.body.assign_to;
        }
        try {
            const assignedOrder = await order.save();
            res.status(200).json(assignedOrder);
        } catch (err) {
            res.status(400).json({message: err.message})
        }

    }
}


// get all orders

const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find({});
        res.status(200).json(orders)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
}


// filter by status

const filterOrderByStatus = async (req, res) => {
    if (req.params.status) {
        try {
            const order = await Order.find({status: req.params.status});
            res.status(200).json(order);
        } catch (err) {
            res.status(500).json({message: err.message})
        }
    }
}

module.exports={
    addOrder,
    editOrderStatus,
    assignToOrder,
    getAllOrders,
    filterOrderByStatus
}
