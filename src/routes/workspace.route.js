import express from 'express'
import WorkspacesRepository from '../repositories/workspace.repository.js'
import { validarId } from '../utils/validations.utils.js'
import { ServerError } from '../utils/customError.utils.js'
import WorkspaceController from '../controllers/workspace.controller.js'

const workspace_router = express.Router()

// Obtener todos los workspaces
workspace_router.get('/', WorkspaceController.getAll)

// Obtener workspace por ID
workspace_router.get('/:id', WorkspaceController.getById)

// Crear workspace
workspace_router.post('/', WorkspaceController.post)

export default workspace_router
