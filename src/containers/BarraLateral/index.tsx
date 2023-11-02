import FiltroCard from '../../components/FiltroCard'

import * as Style from './styles'

const BarraLateral = () => (
  <Style.Aside>
    <div>
      <Style.Campo type="text" placeholder="Buscar" />
      <Style.Filtros>
        <FiltroCard />
        <FiltroCard />
        <FiltroCard />
        <FiltroCard />
        <FiltroCard />
        <FiltroCard ativo />
      </Style.Filtros>
    </div>
  </Style.Aside>
)

export default BarraLateral
