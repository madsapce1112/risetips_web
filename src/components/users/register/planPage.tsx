import { Button, Heading02, Heading04, Paragraph02 } from '@/components'

type TPlanProps = React.HTMLAttributes<HTMLSpanElement> & {
  onClick: EventListener
}

const planData = [
  {
    title: 'Iniciante',
    perPrice: 'R$ 40,00/mês',
    content: [
      'Acesso completo à plataforma de análises',
      'Criação de 5 robôs com estratégias próprias'
    ]
  },
  {
    title: 'Intermediário',
    perPrice: 'R$ 60,00/mês',
    content: [
      'Acesso completo à plataforma de análises',
      'Criação de 10 robôs com estratégias próprias',
      'Possibilidade de criação de robôs para envio de TIP’s em canais(com referência ao nosso site)',
      'Acesso à nossa Fábrica de Padrões limitado(apenas ambas marcam)'
    ]
  },
  {
    title: 'Avançado',
    perPrice: 'R$ 80,00/mês',
    content: [
      'Acesso completo à plataforma de análises',
      'Criação de 10 robôs com estratégias próprias',
      'Possibilidade de criação de robôs para envio de TIP’s em canais(crie sua mensagem personalizada)',
      'Acesso à nossa Fábrica de Padrões automática',
      'Acesso ao Painel do Tipster'
    ]
  }
]
const PlanPage = (props: TPlanProps) => {
  return (
    <div className="flex justify-center items-center gap-8 self-stretch">
      {planData.map((data, index) => (
        <div
          key={index}
          className="flex flex-1 flex-col p-8 items-center gap-8 self-stretch rounded-xl bg-neutral-100 shadow-sm"
        >
          <Heading04 fontWeight="semi">{data.title}</Heading04>
          <Heading02 fontWeight="semi">{data.perPrice}</Heading02>
          <div className="flex h-[280px] flex-col items-center gap-4">
            {data.content.map((item, index) => (
              <Paragraph02 key={index} className="self-stretch">
                - {item}
              </Paragraph02>
            ))}
          </div>
          <Button type="primary" size="large" text="Assinar" className="w-full" {...props} />
        </div>
      ))}
    </div>
  )
}

export default PlanPage
