import { Request, Response } from 'express';  // Importa funcionalidades do Express
import { Product } from '../../models/Product';  // Importa o modelo 'Product'

export async function createProduct(req: Request, res: Response) {  // Função para criar um produto
    try {
        const imagePath = req.file?.filename;  // Pega o nome do arquivo de imagem, se existir

        const { name, description, price, category, ingredients } = req.body;  // Pega os dados do corpo da requisição

        const product = await Product.create({  // Cria um novo produto no banco de dados
            name,
            description,
            imagePath,
            price: Number(price),
            category,
            ingredients: ingredients ? JSON.parse(ingredients) : [],  // Analisa ingredientes em formato JSON, se existirem
        });

        res.status(201).json(product);  // Responde com o produto criado em formato JSON com status 201

    } catch (error) {
        console.log(error);  // Printa os erros no console
        res.sendStatus(500);  // Responde com um erro HTTP 500
    }
}
