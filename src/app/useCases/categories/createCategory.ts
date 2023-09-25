import { Request, Response } from 'express';  // Importa funcionalidades do Express
import { Category } from '../../models/Category';  // Importa o modelo 'Category'

export async function createCategory(req: Request, res: Response) {  // Função para criar uma categoria
    try {
        const { icon, name } = req.body;  // Pega os dados do corpo da requisição

        const category = await Category.create({ icon, name });  // Cria uma nova categoria no banco de dados

        res.status(201).json(category);  // Responde com a categoria criada em formato JSON
    } catch (error) {
        console.log(error);  // Registra erros no console
        res.sendStatus(500);  // Responde com um erro HTTP 500.
    }
}
