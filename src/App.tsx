//hooks
import { useState } from 'react'

//high level component que permite que o redux store seja acessível para todos os componentes da aplicação react
import { Provider } from 'react-redux'

//importação dos reducers e do root reducer
import { store } from './store'

//components & containers
import Header from './components/Header'
import Produtos from './containers/Produtos'

//styles
import { GlobalStyle } from './styles'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  // const [produtos, setProdutos] = useState<Produto[]>([])

  // const [carrinho, setCarrinho] = useState<Produto[]>([])

  const [favoritos, setFavoritos] = useState<Produto[]>([])

  // useEffect(() => {
  //   fetch('https://fake-api-tau.vercel.app/api/ebac_sports')
  //     .then((res) => res.json())
  //     .then((res) => setProdutos(res))
  // }, [])

  // function adicionarAoCarrinho(produto: Produto) {
  //   if (carrinho.find((p) => p.id === produto.id)) {
  //     alert('Item já adicionado')
  //   } else {
  //     setCarrinho([...carrinho, produto])
  //   }
  // }

  function favoritar(produto: Produto) {
    if (favoritos.find((p) => p.id === produto.id)) {
      const favoritosSemProduto = favoritos.filter((p) => p.id !== produto.id)
      setFavoritos(favoritosSemProduto)
    } else {
      setFavoritos([...favoritos, produto])
    }
  }

  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className="container">
        <Header favoritos={favoritos} />
        <Produtos
          // produtos={produtos}
          favoritos={favoritos}
          favoritar={favoritar}
          // adicionarAoCarrinho={adicionarAoCarrinho}
        />
      </div>
    </Provider>
  )
}

export default App
