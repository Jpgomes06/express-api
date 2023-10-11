const yup = require('yup');
const userSchema = yup.object({
    full_name: yup.string().required(),
    user_name: yup.string().required(),
    email: yup.string().email().required(),
    birth_date: yup.number().required(),
    address: yup.string().required(),
    city: yup.string().required(),
    neighborhood: yup.string().required(),
    state: yup.string().required(),
    zip_code: yup.number().required(),
    password: yup.string().required(),
    profile_image: yup.string().required()
});

module.exports =  userSchema;
