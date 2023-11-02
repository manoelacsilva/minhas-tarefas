import * as Style from './styles'

export type Props = {
  ativo?: boolean
  contador: number
  legenda: string
}

const FiltroCard = ({ ativo, contador, legenda }: Props) => (
  <Style.Card ativo={ativo}>
    <Style.Contador>{contador}</Style.Contador>
    <Style.Label>{legenda}</Style.Label>
  </Style.Card>
)

export default FiltroCard
