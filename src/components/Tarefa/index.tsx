import { useState } from 'react'
import * as Style from './styles'

import * as enums from '../../utils/enums/Tarefa'

type Props = {
  titulo: string
  prioridade: enums.Prioridade
  status: enums.Status
  descricao: string
}

const Tarefa = ({ descricao, prioridade, status, titulo }: Props) => {
  const [estaEditando, setEstaEditando] = useState(false)

  return (
    <Style.Card>
      <Style.Titulo>{titulo}</Style.Titulo>
      <Style.Tag parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </Style.Tag>
      <Style.Tag parametro="status" status={status}>
        {status}
      </Style.Tag>
      <Style.Descricao value={descricao} />
      <Style.BarraAcoes>
        {estaEditando ? (
          <>
            <Style.BotaoSalvar>Salvar</Style.BotaoSalvar>
            <Style.BotaoCancelarRemover onClick={() => setEstaEditando(false)}>
              Cancelar
            </Style.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <Style.Botao onClick={() => setEstaEditando(true)}>
              Editar
            </Style.Botao>
            <Style.BotaoCancelarRemover>Remover</Style.BotaoCancelarRemover>
          </>
        )}
      </Style.BarraAcoes>
    </Style.Card>
  )
}

export default Tarefa
