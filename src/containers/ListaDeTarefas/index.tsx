import { useSelector } from 'react-redux'

import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

import { RootReducer } from '../../store'

const ListaDeTarefas = () => {
  const { tarefas } = useSelector((state: RootReducer) => state)

  return (
    <Container>
      <p>
        2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;
      </p>
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
}

export default ListaDeTarefas
