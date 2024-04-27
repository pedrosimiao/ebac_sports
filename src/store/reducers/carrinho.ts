//Os reducers recebem um state (inicial ou atualizado) e uma action (que é uma função modificadora),
//No TypeScript deve-se especificar o tipo de objeto no argumento e retorno das funções, portanto ao utilizar
//o PayloadAction do redux toolkit, definir que o que ele vai passar, no caso será um
//component <Produto>

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

//tipando o estado como um array de components Produto
type CarrinhoState = {
  itens: Produto[]
}

//criando um objeto para o state inicial, que será do tipo CarrinhoState com o atributo intens vazio.
const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      //armazenar o payload do tipo produto numa constante
      const produto = action.payload

      if (state.itens.find((p) => p.id === produto.id)) {
        alert('Item já adicionado')
      } else {
        state.itens = [...state.itens, produto]
      }
    }
  }
})

export const { adicionar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
