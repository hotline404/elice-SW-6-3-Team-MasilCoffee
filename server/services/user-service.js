const User = require('../models/user-schema');
const bcrypt = require('bcrypt');

class UserService {
  async createUser(userData) {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    userData.password = hashedPassword;
    const user = await User.create(userData);
    return user;
  }

  async authenticateUser(email, password) {
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return null;
    }
    return user;
  }

  async getAllUsers() {
    return User.find();
  }

  async getUserById(userId) {
    return User.findById(userId);
  }

  async updateUser(userId, updates) {
    const user = await User.findByIdAndUpdate(userId, updates, { new: true, runValidators: true });
    if (!user) {
      throw { status: 404, message: 'User not found' };
    }
    return user;
  }

  async deleteUser(userId) {
    const user = await User.findByIdAndDelete(userId);
    if (!user) {
      throw { status: 404, message: 'User not found' };
    }
    return user;
  }
}

module.exports = new UserService();
