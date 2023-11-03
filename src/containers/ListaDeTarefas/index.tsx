import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

import * as enums from '../../utils/enums/Tarefa'

const tarefas = [
  {
    titulo: 'Estudar TypeScript',
    descricao: 'Ver a aula 3 da EBAC',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PENDENTE
  },
  {
    titulo: 'Pagar internet',
    descricao: 'baixar fatura',
    prioridade: enums.Prioridade.NORMAL,
    status: enums.Status.CONCLUIDA
  },
  {
    titulo: 'Ir para a academia',
    descricao: 'Treinar perna',
    prioridade: enums.Prioridade.URGENTE,
    status: enums.Status.PENDENTE
  }
]

const ListaDeTarefas = () => (
  <Container>
    <p>2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;</p>
    <ul>
      {tarefas.map((taref) => (
        <li key={taref.titulo}>
          <Tarefa
            descricao={taref.descricao}
            titulo={taref.titulo}
            status={taref.status}
            prioridade={taref.prioridade}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListaDeTarefas
