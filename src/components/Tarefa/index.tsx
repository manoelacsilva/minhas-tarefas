import { useState, useEffect, ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'

import * as Style from './styles'

import { remover, editar, alteraStatus } from '../../store/reducers/tarefas'
import TarefaClass from '../../models/Tarefa'
import { Botao, BotaoSalvar } from '../../styles'

import * as enums from '../../utils/enums/Tarefa'

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

  function alteraStatusTarefa(evento: ChangeEvent<HTMLInputElement>) {
    dispatch(
      alteraStatus({
        id,
        finalizado: evento.target.checked
      })
    )
  }

  return (
    <Style.Card>
      <label htmlFor={titulo}>
        <input
          type="checkbox"
          id={titulo}
          checked={status === enums.Status.CONCLUIDA}
          onChange={alteraStatusTarefa}
        />
        <Style.Titulo>
          {estaEditando && <em>Editando: </em>}
          {titulo}
        </Style.Titulo>
      </label>
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
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
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
