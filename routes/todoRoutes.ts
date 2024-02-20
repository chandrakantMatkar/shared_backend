import express, { Router } from 'express'
import { editTodoById, getAllTodos, getTodoById, createNewTodo } from '../controllers/todo';

const router: Router = express.Router();

router.post('/create-todo', createNewTodo)
router.delete('/:id', editTodoById)
router.put('/:id', editTodoById)
router.get('/:id', getTodoById)
router.get('/', getAllTodos)

export default router;