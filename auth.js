const express = require('express'); 
const session = require('express-session'); 
const app = express(); 
app.use(express.urlencoded({extended: true})); 
const USER ={username: 'admin',password: '1234'}; 
app.get('/',(req,res)=> res.send(` 
    <h1>login</h1> 
    <form method="POST" action="/login"> 
        <input type="text" name="username" placeholder="username" required/> 
        <input type="password" name="password" placeholder="password" 
reqired/> 
        <button type="submit">Login</button> 
    </form>`)); 
app.post('/login',(req,res) =>{ 
    req.body.username === USER.username && req.body.password === 
USER.password 
    ? res.send('<h1>Login Successful</h1>')
    : res.send('<h1>Login Failed</h1>'); 
}); 
app.listen(3006,()=> console.log('server running on http://localhost:3006'));
