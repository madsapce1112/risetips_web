import { Button, Heading04, Paragraph01 } from '@/components'

const data = [
  { key: 'Plano escolhido', value: 'Plano iniciante' },
  { key: 'E-mail da compra', value: 'raisetips@gmail.com' },
  { key: 'Data de renovação', value: '17/08/2023' }
]
const ConfirmInformation = () => {
  return (
    <div className="flex flex-col w-[592px] py-12 px-8 justify-center items-center gap-8 rounded-xl bg-neutral-100 shadow-sm">
      <div className="flex flex-col justify-center items-center gap-6 self-stretch">
        {data.map((item, index) => (
          <div key={index} className="flex justify-between items-center self-stretch">
            <Paragraph01 className="text-neutral-900">{item.key}</Paragraph01>
            <Heading04 fontWeight="semi" className="text-neutral-900">
              {item.value}
            </Heading04>
          </div>
        ))}
      </div>
      <Button type="primary" size="large" text="Ir para área do usuário" />
    </div>
  )
}

export default ConfirmInformation
