const axios = require('axios');
const httpStatus = require('../utils/statusCodes');

it('Should return error and status 400 if the body is empty', async () => {
    const user = {        
            "full_name": "", 
            "user_name": "", 
            "password": "", 
            "profile_image":"", 
            "email": "", 
            "birth_date": "",
            "zip_code": "", 
            "address": "", 
            "city": "", 
            "neighborhood": "", 
            "state": ""         
            };
  
    const response = await axios.post('http://localhost:8080/users', user).catch(error => error);//catch captura qualquer erro que ocorra durante a requisição
  
    expect(response.response.status).toBe(httpStatus.BAD_REQUEST);
    expect(response.response.data).toEqual(expect.objectContaining({ //verifica se o objeto possui o valor especificado que está em { xxx } está dentro      
            "message": "Fill in all the fields",
            "success": false        
    }));
});    
    
it('should create a user', async () => {
    const input = {
        "full_name": "Joao pedro Morais Gomes", 
        "user_name": "jpgomes36", 
        "password": "123123", 
        "profile_image":"teste", 
        "email": "jpgomes36@hotmail.com", 
        "birth_date": "1990-09-15",
        "zip_code": "1231313", 
        "address": "rua das couves", 
        "city": "taubate", 
        "neighborhood": "cecap", 
        "state": "Sao Paulo"
    };


    const response = await axios.post('http://localhost:8080/users', input);

    expect(response.status).toBe(httpStatus.CREATED); // Verifica se o status da resposta é 201 - created
    expect(response.data.data.full_name).toEqual('Joao pedro Morais Gomes'); // Verifica se o nome é igual 
});

it('Should return a list of users', async () => {

    const response = await axios.get("http://localhost:8080/users").catch(error => error);
    
    expect(response.status).toBe(httpStatus.OK);
    expect(response.data).toBeDefined();//toBeDefined() está verificando se o valor data na resposta não é undefined
});

it('Should return a user by id', async () => {
    const userId = 1;
    const response = await axios.get(`http://localhost:8080/users/${userId}`).catch(error => error);

    expect(response.status).toBe(httpStatus.OK);
    expect(response.data).toBeDefined();
});

it("Should modify the user's body and return a success message", async () =>{
    const userId = 1;

    const newUser = {
        "full_name": "teste", 
        "user_name": "teste", 
        "password": "teste", 
        "profile_image":"teste", 
        "email": "teste@hotmail.com", 
        "birth_date": "1995-06-25",
        "zip_code": "teste", 
        "address": "teste", 
        "city": "teste", 
        "neighborhood": "teste", 
        "state": "teste"
    };

    const response = await axios.put(`http://localhost:8080/users/${userId}`, newUser);

    expect(response.status).toBe(httpStatus.OK);    
    expect(response.data).toEqual(expect.objectContaining({        
        details: "User updated successfully"
    }));
});
    
it("Should delete the user and return a success message", async () => {
    const userId = 1;
    const response = await axios.delete(`http://localhost:8080/users/${userId}`);
    expect(response.status).toBe(httpStatus.OK);    
    expect(response.data).toEqual(expect.objectContaining({       
        details: "User deleted successfully"
    }));
});



