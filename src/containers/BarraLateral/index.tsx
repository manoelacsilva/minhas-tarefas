import FiltroCard from '../../components/FiltroCard'

import * as Style from './styles'

const BarraLateral = () => (
  <Style.Aside>
    <div>
      <Style.Campo type="text" placeholder="Buscar" />
      <Style.Filtros>
        <FiltroCard legenda="pendentes" contador={1} />
        <FiltroCard legenda="concluídas" contador={2} />
        <FiltroCard legenda="urgentes" contador={3} />
        <FiltroCard legenda="importantes" contador={2} />
        <FiltroCard legenda="normal" contador={2} />
        <FiltroCard legenda="todas" contador={2} ativo />
      </Style.Filtros>
    </div>
  </Style.Aside>
)

export default BarraLateral
