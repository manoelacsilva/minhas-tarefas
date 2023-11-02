import * as Style from './styles'

export type Props = {
  ativo?: boolean
}

const FiltroCard = (props: Props) => (
  <Style.Card ativo={props.ativo}>
    <Style.Contador>3</Style.Contador>
    <Style.Label>pendentes</Style.Label>
  </Style.Card>
)

export default FiltroCard
