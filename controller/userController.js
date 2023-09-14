// const httpStatus = require('../utils/statusCodes');
// const User = require('../models/users')
// const Sequelize = require("../models/db");
// const userService = require('../services/userServices')


// const UserController = {
//   async createUser(req, res) {
//     const { full_name, username } = req.body;
//     const user = await userService.createUser(full_name, username);
//     return res.status(httpStatus.CREATED).json({
//       message: 'User created successfully!',
//       data: user
//     });    
//   },
//   async getUserByid(req, res) {
//       const { id } = req.params;    
//       const user = await userService.getUserById(id);      
//       return res.status(httpStatus.OK).json(user);
//   },
//   async getUsers(req, res) {    
//       const users = await userService.getAllUsers();      
//       return res.status(httpStatus.OK).json(users);
//   },
//   async updateUser(req, res) {
//     const { id } = req.params;
//     const { full_name, username, birth_date} = req.body;
//     const user = await userService.updateUser(id, full_name, username, birth_date);
//     return res.status(httpStatus.OK).json({
//       details: "User updated successfully"
//     });  
//   },
//   async deleteUser(req, res) {
//     const { id } = req.params;
//     const userId = await userService.deleteUser(id);    
//     return res.status(httpStatus.OK).json({
//       details: "User deleted successfully"
//     });
//   }
// };

// module.exports = UserController;


const httpStatus = require('../utils/statusCodes');
const userService = require('../services/userServices');

const UserController = {
  async createUser(req, res) {
    const {  full_name, user_name, password, profile_image, 
      email, birth_date, zip_code, address, city, neighborhood, state } = req.body;
    const user = await userService.createUser( full_name, user_name, password, profile_image, 
      email, birth_date, zip_code, address, city, neighborhood, state);
    return res.status(httpStatus.CREATED).json({
      message: 'User created successfully!',
      data: user
    });    
  },
  async getUserByid(req, res) {
      const { id } = req.params;    
      const user = await userService.getUserById(id);      
      return res.status(httpStatus.OK).json(user);
  },
  async getUsers(req, res) {    
      const users = await userService.getAllUsers();      
      return res.status(httpStatus.OK).json(users);
  },
  async updateUser(req, res) {
    const { id } = req.params;    
    const user = await userService.updateUser(req);
    return res.status(httpStatus.OK).json({
      details: "User updated successfully"
    });  
  },
  async deleteUser(req, res) {
    const { id } = req.params;
    const userId = await userService.delete(id);    
    return res.status(httpStatus.OK).json({
      details: "User deleted successfully"
    });
  }
};

module.exports = UserController;
