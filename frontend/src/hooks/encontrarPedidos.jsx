import api from "../utils/api";

export async function encontrarPedidos() {
    try {
        const pedidos = await api.get('/pedido/buscar-pedido') 
        console.log(pedidos)
        return pedidos.data
    } catch (erro) { 
        console.log(erro) 
    }
}

export async function encontrarPedidosById(id){
    try {
        const pedidos = await api.get(`/pedido/buscar-pedido/${id}`) 
        console.log(pedidos)
        return pedidos.data
    } catch (erro) { 
        console.log(erro) 
    }
}