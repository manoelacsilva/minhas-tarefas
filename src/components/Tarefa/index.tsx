import { useState } from 'react'
import * as Style from './styles'

type Props = {
  titulo: string
  prioridade: string
  status: string
  descricao: string
}

const Tarefa = ({ descricao, prioridade, status, titulo }: Props) => {
  const [estaEditando, setEstaEditando] = useState(false)

  return (
    <Style.Card>
      <Style.Titulo>{titulo}</Style.Titulo>
      <Style.Tag>{prioridade}</Style.Tag>
      <Style.Tag>{status}</Style.Tag>
      <Style.Descricao value={descricao} />
      <Style.BarraAcoes>
        {estaEditando ? (
          <>
            <Style.Botao>Salvar</Style.Botao>
            <Style.Botao onClick={() => setEstaEditando(false)}>
              Cancelar
            </Style.Botao>
          </>
        ) : (
          <>
            <Style.Botao onClick={() => setEstaEditando(true)}>
              Editar
            </Style.Botao>
            <Style.Botao>Remover</Style.Botao>
          </>
        )}
      </Style.BarraAcoes>
    </Style.Card>
  )
}

export default Tarefa
