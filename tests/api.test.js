const axios = require('axios');

it('should create an user', async () => {
    const input = {
        "name": "João Pedro",
        "email": "jpgomes06@hotmail.com"
    } 
    
    const response = await axios.post("http://localhost:3000/users", input);
    
    expect(response.data.name).toEqual("João pedro")
});

it('should not create an user', async () => {
    const input = {
        "name": "João Pedro"
    } 
    
    const response = await axios.post("http://localhost:3000/users", input);
    
    expect(response.data.name).toEqual("João Pedro")
    expect(response.data.email).toEqual("jpgomes06@hotmail.com")

});



