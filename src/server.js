import ENVIRONMENT from "./config/environment.config.js"
import connectMongoDB from "./config/mongoDB.config.js"
import express from "express"
import UserRepository from "./repositories/user.repository.js"
import WorkspacesRepository from "./repositories/workspace.repository.js"
import mongoose from "mongoose"
import workspace_router from "./routes/workspace.route.js"
import user_router from "./routes/users.router.js"
import auth_router from "./routes/auth.route.js"
import jwt from 'jsonwebtoken'





connectMongoDB()
 
const app = express()
app.use(express.json())



app.use('/api/workspaces', workspace_router)
app.use('/api/users', user_router)
app.use('/api/auth', auth_router)






app.listen(8080, () => {
    console.log("Esto está funcionando")
})



