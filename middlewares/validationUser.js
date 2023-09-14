const User = require('../models/users');
const httpStatus = require('../utils/statusCodes');

const validation = (schema) => async (req, res, next) => {
  const {
    full_name, user_name, password, profile_image, 
    email, birth_date, zip_code, address, city, neighborhood, state
  } = req.body;
  if(!full_name || !user_name || !password || !profile_image || !email 
    || !birth_date || !zip_code || !address || !city || !neighborhood || !state){
      return res.status(httpStatus.BAD_REQUEST).json({         
            message: "Fill in all the fields",
            success: false         
      });
    }
    next(); 
};

const validateId = async (req, res, next) => {
    const { id } = req.params;
    const user = await User.findOne({ where: { id: id } });  
    if (!user) {
      return res.status(httpStatus.NOT_FOUND).json({ error: 'User not found' });
    }; 
    next();  
};

const validationUsers = async (req, res, next) => {
    const users = await User.findAll();  
    if (!users) {
      return res.status(httpStatus.NOT_FOUND).json({ error: 'Users not found' });
    }; 
    next();  
};

module.exports = {
 validation,
 validateId,
 validationUsers
}
