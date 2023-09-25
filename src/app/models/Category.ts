import { model, Schema } from 'mongoose';  // Importa funcionalidades do Mongoose

// Cria um modelo de dados chamado 'Category' para categorias
export const Category = model('Category', new Schema({
    name: {
        type: String,  // Campo 'name' é do tipo String
        required: true,  // É obrigatório ter um valor
    },
    icon: {
        type: String,  // Campo 'icon' é do tipo String
        required: true,  // É obrigatório ter um valor
    }
}));
