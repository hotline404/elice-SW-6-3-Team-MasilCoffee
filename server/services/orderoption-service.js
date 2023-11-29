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
                throw new Error('주문 옵션을 찾을 수 없습니다');
            }

            for (const category in updatedData) {
                if (updatedData.hasOwnProperty(category) && Array.isArray(orderOption[category])) {
                    const updatedItems = updatedData[category];

                    orderOption[category].forEach((item) => {
                        const matchingItem = updatedItems.find((updatedItem) => updatedItem.name === item.name);

                        if (matchingItem && (matchingItem.name || matchingItem.price)) {
                            if (matchingItem.name) {
                                item.name = matchingItem.name;
                            }
                            if (matchingItem.price) {
                                item.price = matchingItem.price;
                            }
                        }
                    });
                }
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
