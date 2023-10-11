const express = require('express');
const router = express.Router();
const UserController = require('../controller/userController');
const { validation , validateId, validationUsers }  = require('../middlewares/validationUser');
const userSchema = require('../validation/userValidation')

router.post('/', validation(userSchema), UserController.createUser);
router.get('/', validationUsers, UserController.getUsers);
router.get('/:id', validateId, UserController.getUserByid);
router.put('/:id', validateId, UserController.updateUser);
router.delete('/:id', validateId, UserController.deleteUser);

module.exports = router;
