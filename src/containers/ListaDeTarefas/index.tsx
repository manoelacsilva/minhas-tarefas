import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

const tarefas = [
  {
    titulo: 'Estudar TypeScript',
    descricao: 'Ver a aula 3 da EBAC',
    prioridade: 'importante',
    status: 'pendente'
  },
  {
    titulo: 'Pagar internet',
    descricao: 'baixar fatura',
    prioridade: 'importante',
    status: 'concluída'
  },
  {
    titulo: 'Ir para a academia',
    descricao: 'Treinar perna',
    prioridade: 'urgente',
    status: 'pendente'
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
