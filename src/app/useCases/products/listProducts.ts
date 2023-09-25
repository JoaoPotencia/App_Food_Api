import { Request, Response } from 'express';  // Importa funcionalidades do Express
import { Product } from '../../models/Product';  // Importa o modelo 'Product'

export async function listProducts(req: Request, res: Response) {  // Função para listar produtos
    try {
        const products = await Product.find();  // Encontra produtos no banco de dados

        res.json(products);  // Retorna os produtos em formato JSON
    } catch (error) {
        console.log(error);  // Registra erros no console
        res.sendStatus(500);  // Responde com um erro HTTP 500
    }
}
