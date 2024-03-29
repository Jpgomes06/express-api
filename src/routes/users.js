const express = require("express");
const router = express.Router();// ferramenta do express que permite criar rotas em diversas rotas e usar no index.js
const crypto = require('crypto');

const users = 
[
    {
        "id": "ec493503-eada-410d-b8e0-1e6674edfe11", 
        "name": "Matheus Martins",
        "email": "matheus_martins@hotmail.com"
    }
];

router.get("/", (req, res) => {
        return res.json(users);
});

router.get("/:id", (req, res) => { 
    const { id } = req.params;  
    
    const userIndex = users.findIndex((user) => user.id == id);    
    
    if( userIndex == -1 ) {
        return res.status(400).json({
            success: false,
            details: "user not found"
        })
    } 

    return res.json(users[userIndex]);

}); 
     
router.put("/:id", (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;

    const newUSer = {
        // id: "ec493503-eada-410d-b8e0-1e6674edfe11",
        id,
        name, 
        email
    };
    const userIndex = users.findIndex((user) => user.id == id);

    users[userIndex] = newUSer; 
    
    if( userIndex == -1 ) {
        return res.status(400).json({
            success: false,
            details: "user not found"
        })
    }

    return res.status(201).json(newUSer);
});

router.post("/", (req, res) => {
        const { name, email } = req.body;
   
        const user = {
            id: crypto.randomUUID(),
            name,
            email
        };

        if (!name || !email) { // if verifica se o name ou email são valores falsos (false, null, undefined, string vazia ("") ...)
            return res.status(400).json({ message: "Name and e-mail are necessary" });
        }
    
        users.push(user); 
            
        return res.status(201).json(user);
});

router.delete("/:id",(req, res) => {
    const { id } = req.params;

    const userIndex = users.findIndex((user) => user.id == id);
    
    if( userIndex !== -1 ){
        users.splice(userIndex, 1);
        return res.status(202).json({ 
            success: true
        })        
    }
        
    return res.status(400).json({
                success: false,
                details: "user not found"
            })
});

module.exports = router;