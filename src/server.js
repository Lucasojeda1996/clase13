import ENVIRONMENT from "./config/environment.config.js";
import connectMongoDB from "./config/mongoDB.config.js";
import express from 'express'
import UserRepository from './repositories/user.repository.js'

connectMongoDB()

const app = express()


app.listen(
    8080, 
    () => {
        console.log("Esto esta funcionado")
    }
)

app.get('/',(req,res)=>{
    res.send('hi')
})

app.get('/test',(req,res)=>{
    res.send('hola')
})

app.get('/status',(req,res)=>{
    res.json({
        oks:true,
        message:'servidor funcionando'})
})


app.get(
    '/users',(req,res) =>{
        const users = UserRepository.getAll()
        res.json({
        oks:true,
        message:'usuarios obtenidos',
        users:users}
 
        )

}
)