const express =require('express')
const app=express();
const port=3000;

app.use(express.json())


app.listen(port,()=>{
    console.log(`server is running in port ${port}`)
})


const users=[
    {username:"alice",age:25,email:"alice@example.com"},
    {username:"bob",age:30,email:"bob@example.com"},
    {username:"charlie",age:28,email:"charlie@gamail.com"}

]

app.get('/user',(req,res)=>{
    try{
        const username=req.query.users;

        if(!username){
            return res.status(400).json({message:"user parameter cannot be empty"})
        }
        const userdata=users[username];

        if(!userdata){
            res.json({message:"user found"})
        }
        res.json({message:"user not found"})


    }catch(error){
        return res.status(404).send("internal server error")

    }
})



