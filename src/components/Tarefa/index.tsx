import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import * as Style from './styles'

import { remover, editar } from '../../store/reducers/tarefas'
import TarefaClass from '../../models/Tarefa'
import { BotaoSalvar } from '../../styles'

type Props = TarefaClass

const Tarefa = ({
  descricao: descricaoOriginal,
  prioridade,
  status,
  titulo,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [descricao, setDescricao] = useState('')

  useEffect(() => {
    if (descricaoOriginal.length > 0) {
      setDescricao(descricaoOriginal)
    }
  }, [descricaoOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setDescricao(descricaoOriginal)
  }

  return (
    <Style.Card>
      <Style.Titulo>{titulo}</Style.Titulo>
      <Style.Tag parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </Style.Tag>
      <Style.Tag parametro="status" status={status}>
        {status}
      </Style.Tag>
      <Style.Descricao
        disabled={!estaEditando}
        value={descricao}
        onChange={(evento) => setDescricao(evento.target.value)}
      />
      <Style.BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    descricao,
                    prioridade,
                    status,
                    titulo,
                    id
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </BotaoSalvar>
            <Style.BotaoCancelarRemover onClick={cancelarEdicao}>
              Cancelar
            </Style.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <Style.Botao onClick={() => setEstaEditando(true)}>
              Editar
            </Style.Botao>
            <Style.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </Style.BotaoCancelarRemover>
          </>
        )}
      </Style.BarraAcoes>
    </Style.Card>
  )
}

export default Tarefa
