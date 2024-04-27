import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'
import { useGetProdutoQuery } from '../services/api'

import * as S from './styles'

type Props = {
  // produtos: ProdutoType[]
  favoritos: ProdutoType[]
  // adicionarAoCarrinho: (produto: ProdutoType) => void
  favoritar: (produto: ProdutoType) => void
}

const ProdutosComponent = ({
  // produtos,
  favoritos,
  // adicionarAoCarrinho,
  favoritar
}: Props) => {
  //fetching com Redux Toolkit Query
  const { data: produtos } = useGetProdutoQuery()

  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    const produtoId = produto.id
    const IdsDosFavoritos = favoritos.map((f) => f.id)

    return IdsDosFavoritos.includes(produtoId)
  }

  return (
    <>
      <S.Produtos>
        {produtos?.map((produto) => (
          <Produto
            estaNosFavoritos={produtoEstaNosFavoritos(produto)}
            key={produto.id}
            produto={produto}
            favoritar={favoritar}
            // aoComprar={adicionarAoCarrinho}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
