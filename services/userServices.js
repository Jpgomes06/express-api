// const User = require('../models/users');
// const ApiError = require('../utils/ApiError');
// const Sequelize = require('../models/db');

// class UserService {
//   async createUser(full_name, username) {
//     const t = await Sequelize.transaction();
//     const user = await User.create(
//       {
//         full_name: full_name,
//         username: username       
//       },
//       { transaction: t }
//     );
//     await t.commit();
//     return user;   
//   }

//   async getUserById(id) {
//     const user = await User.findOne({ where: { id: id } });
//     return user;    
//   }

//   async getAllUsers() {
//     const users = await User.findAll();
//     return users;
//   }

//   async updateUser(id, name, email) {
//     const t = await Sequelize.transaction();   
//     const user = await User.findByPk(id, { transaction: t });
//     user.name = name;
//     user.email = email;
//     await user.save({ transaction: t });
//     await t.commit();
//     return true;    
//   }

//   async deleteUser(id) {
//     const t = await Sequelize.transaction();
//     const user = await User.findOne({ where: { id: id } });
//     await user.destroy({ transaction: t });
//     await t.commit();
//     return true;    
//   }
// }

// const userService = new UserService();

// module.exports = userService;

// services/userService.js
// const {
//   createUser,
//   getById,
//   getAll,
//   update,
//   deleteUSer2
// } = require('../repositories/userRepository');
const Repository = require('../repositories/userClassRepository')

class UserService {
  async createUser( full_name, user_name, password, profile_image, 
    email, birth_date, zip_code, address, city, neighborhood, state) {
    const user = await Repository.createUser( full_name, user_name, password, profile_image, 
      email, birth_date, zip_code, address, city, neighborhood, state);
    return user;
  };

  async getUserById(id) {
    return Repository.getById(id);
  };

  async getAllUsers() {
    return Repository.getAll();
  };

  async updateUser(req) {
    return Repository.update(req);
  };

  async delete(id) {
    return Repository.deleteUSer(id);
  };
};

module.exports = new UserService();
