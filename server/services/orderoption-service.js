const OrderOption = require('../models/orderoption-schema');

class OrderOptionService {
    async getAllOrderOptions() {
        try {
            return await OrderOption.find();
        } catch (error) {
            throw error;
        }
    }

    async getOrderOptionById(orderOptionId) {
        try {
            return await OrderOption.findById(orderOptionId);
        } catch (error) {
            throw error;
        }
    }

    async createOrderOption(orderOptionData) {
        const orderOption = new OrderOption(orderOptionData);
        try {
            return await orderOption.save();
        } catch (error) {
            throw error;
        }
    }

    async updateOrderOption(orderOptionId, updatedData) {
        try {
            const orderOption = await OrderOption.findById(orderOptionId);
            if (!orderOption) {
                throw new Error('Order option not found');
            }
            if (updatedData.name) {
                orderOption.name = updatedData.name;
            }
            if (updatedData.price) {
                orderOption.price = updatedData.price;
            }
            return await orderOption.save();
        } catch (error) {
            throw error;
        }
    }


    async deleteOrderOption(orderOptionId) {
        try {
            const orderOption = await OrderOption.findById(orderOptionId);
            if (!orderOption) {
                throw new Error('Order option not found');
            }
            await orderOption.remove();
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new OrderOptionService();
