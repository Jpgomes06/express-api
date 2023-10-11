const User = require('../models/users');
const httpStatus = require('../utils/statusCodes');
const Sequelize = require('../models/db');

class Repository {
    async createUser(full_name, user_name, password, profile_image, 
        email, birth_date, zip_code, address, city, neighborhood, state) {
            const t = await Sequelize.transaction();
      const user = await User.create(        
          {
             full_name: full_name,
             user_name: user_name,
             password: password,
             profile_image: profile_image,
             email: email,
             birth_date: birth_date,
             zip_code: zip_code,
             address: address,
             city: city,
             neighborhood: neighborhood,
             state: state
           },
           { transaction: t }
         );
      await t.commit();
      return user;
    };

    async getById(id){
        const user = await User.findOne({ where: { id } });
        return user;
    };
    async getAll(){
        const users = await User.findAll();
        return users
    };
    
    async update(req) {           
        const t = await Sequelize.transaction();
        const { id } = req.params
        const {  full_name, user_name, password, profile_image, 
            email, birth_date, zip_code, address, city, neighborhood, state } = req.body;
        const user = await User.findByPk(id, { transaction: t });
        user.set({
            "full_name": full_name,
            "user_name" : user_name,
            "password" :password,
            "profile_image": profile_image,
            "email": email,
            "birth_date": birth_date,
            "zip_code": zip_code,
            "address": address,
            "city": city,
            "neighborhood": neighborhood,
            "state": state
        });

        await user.save({ transaction: t });    
        await t.commit()            
    };

    async deleteUSer (id) {
        const user = await User.findOne({ where: { id } });
        if (user) {
          await user.destroy();
          return true;
        }
        return false;
    };
    
};


module.exports = new Repository();
