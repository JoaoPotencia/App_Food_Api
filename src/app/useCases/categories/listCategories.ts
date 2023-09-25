import { Request, Response } from 'express';  // Importa funcionalidades do Express
import { Category } from '../../models/Category';  // Importa o modelo 'Category'

export async function listCategories(req: Request, res: Response) {  // Função para listar categorias
    try {
        const categories = await Category.find();  // Encontra categorias no banco de dados

        res.json(categories);  // Responde com a lista de categorias em formato JSON
    } catch (error) {
        console.log(error);  // Registra erros no console
        res.sendStatus(500);  // Responde com um erro HTTP 500
    }
}
