const express=require("express")


const app=express()

app.get("/",(req,res)=>{
    res.send("welcome to node js app")
})

app.get("/:name",(req,res)=>{
    res.send(`hello ${req.params.name}`)
   
   
})

app.listen(5500,()=>{
    console.log("server is running on port 5500")
})