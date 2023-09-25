import { model, Schema } from 'mongoose';  // Importa funcionalidades do Mongoose

// Cria um modelo de dados chamado 'Order' para pedidos
export const Order = model('Order', new Schema({
    table: {
        type: String,  // Campo 'table' é do tipo String
        required: true,  // É obrigatório ter um valor
    },
    status: {
        type: String,  // Campo 'status' é do tipo String
        enum: ['WAITING', 'IN_PRODUCTION', 'DONE'],  // Aceita apenas esses valores
        default: 'WAITING',  // Valor padrão é 'WAITING'
    },
    createdAt: {
        type: Date,  // Campo 'createdAt' é do tipo Date
        default: Date.now,  // Valor padrão é a data e hora atual
    },
    products: {
        required: true,  // É obrigatório ter um valor
        type: [{
            product: {
                type: Schema.Types.ObjectId,  // Campo 'product' é do tipo ObjectID referenciando um 'Product'
                required: true,  // É obrigatório ter um valor
                ref: 'Product',  // Referência o modelo 'Product'
            },
            quantity: {
                type: Number,  // Campo 'quantity' é do tipo Number
                default: 1,  // Valor padrão é 1
            },
        }],
    },
}));
