import AuthService from "../services/auth.service.js"
import { ServerError } from "../utils/customError.utils.js"

class AuthController{
    static async register(request,response){
        try{
            const {name,email,password,} = request.body
            if(!name){
                 throw new ServerError (400, 'Debes enviar un nombre de usuario' ) }
            else if (!email || !String(email).toLowerCase().match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
                 throw new  ServerError (400, 'Debes enviar un email de usuario' )}
            else if (!password || password.length < 8){
                 throw new  ServerError (400, 'Debes tener una contraseñas mayor a 8 caracteres')
            }
            
            await AuthService.register(name,email,password)
            response.json({
                ok:true
            })
           }
        catch (error) {
            console.log(error)
         
            if (error.status) {
                return response.status(error.status).json(
                    {
                        ok: false,
                        status: error.status,
                        message: error.message
                    }
                )
            }
            else {
                return response.status(500).json(
                    {
                        ok: false,
                        status: 500,
                        message: 'Error interno del servidor'
                    }
                )
            }
        }
    }
    static async login(request,response){
          try{}
          catch (error) {
            console.log(error)
            //Evaluamos si es un error que nosotros definimos
            if (error.status) {
                return response.status(error.status).json(
                    {
                        ok: false,
                        status: error.status,
                        message: error.message
                    }
                )
            }
            else {
                return response.status(500).json(
                    {
                        ok: false,
                        status: 500,
                        message: 'Error interno del servidor'
                    }
                )
            }
        }
    }
    static async verifyEmail(request,response){
          try{
            const {verification_token} = request.params
            await AuthService.verifyEmail(verification_token)
        
             return response.json({
                ok: true, 
                status: 200,
                message: 'Usuario validado ;)'
            })
          }
        catch (error) {
            console.log(error)
            //Evaluamos si es un error que nosotros definimos
            if (error.status) {
                return response.status(error.status).json(
                    {
                        ok: false,
                        status: error.status,
                        message: error.message
                    }
                )
            }
            else {
                return response.status(500).json(
                    {
                        ok: false,
                        status: 500,
                        message: 'Error interno del servidor'
                    }
                )
            }
        }
    }
}


export default AuthController