import { model, Schema } from 'mongoose';  // Importa funcionalidades do Mongoose

// Cria um modelo de dados chamado 'Product' para produtos
export const Product = model('Product', new Schema({
    name: {
        type: String,  // Campo 'name' é do tipo String
        required: true,  // É obrigatório ter um valor
    },
    description: {
        type: String,  // Campo 'description' é do tipo String
        required: true,  // É obrigatório ter um valor
    },
    imagePath: {
        type: String,  // Campo 'imagePath' é do tipo String
        required: true,  // É obrigatório ter um valor
    },
    price: {
        type: Number,  // Campo 'price' é do tipo Number
        required: true,  // É obrigatório ter um valor
    },
    ingredients: {
        required: true,  // É obrigatório ter um valor
        type: [{
            name: {
                type: String,  // Campo 'name' dentro de 'ingredients' é do tipo String
                required: true,  // É obrigatório ter um valor
            },
            icon: {
                type: String,  // Campo 'icon' dentro de 'ingredients' é do tipo String
                required: true,  // É obrigatório ter um valor
            },
        }],
    },
    category: {
        type: Schema.Types.ObjectId,  // Campo 'category' é do tipo ObjectID referenciando um 'Category'
        required: true,  // É obrigatório ter um valor
        ref: 'Category',  // Referência o modelo 'Category'
    },
}));
