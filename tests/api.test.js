const axios = require('axios');

it('should create an user', async () => {
  const input = {
      "name": "João Pedro",
      "email": "jpgomes06@hotmail.com"
  } 

  const response = await axios.post("http://localhost:3000/users", input);

  expect(response.data.name).toEqual("João Pedro")
});

it('Should return error and status 400 if the body is empty', async () => {
  const user = {
              "name": "",
              "email": ""
          };

  const response = await axios.post('http://localhost:3000/users', user).catch(error => error);//catch captura qualquer erro que ocorra durante a requisição

  expect(response.response.status).toBe(400);
  expect(response.response.data).toEqual(expect.objectContaining({ //verifica se o objeto possui o valor especificado que está em { xxx } está dentro 
    message: 'Name and e-mail are necessary'
  }));
});
  
it("Should modify the user's body and return the status 201", async () =>{
  const newBody = {
    "name": "Matheus M",
    "email": "matheus_m@hotmail.com"
  }
  const userId = "ec493503-eada-410d-b8e0-1e6674edfe11";
  const response = await axios.put(`http://localhost:3000/users/${userId}`, newBody);

  expect(response.status).toBe(201);
  expect(response.data).toEqual({
    "id": "ec493503-eada-410d-b8e0-1e6674edfe11", 
    "name": "Matheus M",
    "email": "matheus_m@hotmail.com"
  });
});

it("Should return an user by id", async () => {
  const userId = "ec493503-eada-410d-b8e0-1e6674edfe11"; // id do usuário que se deseja buscar

  const response = await axios.get(`http://localhost:3000/users/${userId}`).catch(error => error);

  expect(response.status).toBe(200);
  expect(response.data).toEqual(expect.objectContaining({
    id: userId,
    name: expect.any(String),
    email: expect.any(String)
  }));
});

it('Should return a list of users', async () => {
  const response = await axios.get('http://localhost:3000/users');
  expect(response.status).toBe(200);
  expect(response.data).toBeDefined();
});


it("Should return the error and status 400 if the ID does not exist", async () => {
  const userId = "ec493503-eada-410d-b8e0-1e6674edfe1"; // ID do usuário 

  const response = await axios.delete(`http://localhost:3000/users/${userId}`).catch(error => error);
  
  expect(response.response.status).toBe(400);
  expect(response.response.data).toEqual(expect.objectContaining({
      success: false,
      details: "user not found"
  }));
});