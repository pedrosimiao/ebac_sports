//hooks
import { useDispatch } from 'react-redux'

//action
import { adicionar } from '../../store/reducers/carrinho'

//components
import { Produto as ProdutoType } from '../../App'

//style
import * as S from './styles'

type Props = {
  produto: ProdutoType
  // aoComprar: (produto: ProdutoType) => void
  favoritar: (produto: ProdutoType) => void
  estaNosFavoritos: boolean
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const ProdutoComponent = ({
  produto,
  // aoComprar,
  favoritar,
  estaNosFavoritos
}: Props) => {
  //dispatch receberá como argumento uma ação a ser despachada
  //no caso, a ação será 'adicionar' que está em
  //'reducers' do reducer carrinhoSlice em store/reducers/carrinho.ts
  const dispatch = useDispatch()

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar onClick={() => favoritar(produto)} type="button">
        {estaNosFavoritos
          ? '- Remover dos favoritos'
          : '+ Adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar onClick={() => dispatch(adicionar(produto))} type="button">
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
