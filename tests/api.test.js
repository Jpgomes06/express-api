const axios = require('axios');

it('should create an user', async () => {
    const input = {
        "name": "João Pedro",
        "email": "jpgomes06@hotmail.com"
    } 
    
    const response = await axios.post("http://localhost:3000/users", input);
    
    expect(response.data.name).toEqual("João Pedro")
});

it('should not create an user', async () => {
    const input = {
        "name": "João Pedro",
        "email": ""  
    } 
    
    const response = await axios.post('http://localhost:3000/users', input, {// url fazendo uma requisição usando os dados do input
        validateStatus: function (status) {
            return status;
        },
    });

    expect(response.status).toEqual(400)
    expect(response.data.message).toEqual("Name and e-mail are necessary")
       
});


