import { Request, Response } from 'express';  // Importa funcionalidades do Express
import { Product } from '../../models/Product';  // Importa o modelo 'Product'

export async function listProductsByCategory(req: Request, res: Response) {  // Função para listar produtos por categoria
    try {
        const { categoryId } = req.params;  // Pega o ID da categoria dos parâmetros da URL

        const products = await Product.find().where('category').equals(categoryId);  // Encontra produtos no banco de dados com base no ID da categoria

        res.json(products);  // Responde com a lista de produtos encontrados em formato JSON
    } catch (error) {
        console.log(error);  // Registra erros no console
        res.sendStatus(500);  // Responde com um erro HTTP 500
    }
}
