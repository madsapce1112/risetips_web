import { Button, Caption, Heading06, Paragraph01, Paragraph03, Select, Switch } from '@/components'

type TTimeButtonProps = { time: number; active?: boolean }

const Statistic = () => {
  const timeData: TTimeButtonProps[] = [
    { time: 1, active: true },
    { time: 1, active: true },
    { time: 1 },
    { time: 1 },
    { time: 1 },
    { time: 1 },
    { time: 1 },
    { time: 1 },
    { time: 25 },
    { time: 28 },
    { time: 1 },
    { time: 1 },
    { time: 1 },
    { time: 1 },
    { time: 1 },
    { time: 1 },
    { time: 1 },
    { time: 1 },
    { time: 1 },
    { time: 58 }
  ]

  const scoreboard: string[] = [
    '1 - 1',
    '1 - 1',
    '1 - 1',
    '1 - 1',
    '1 - 1',
    '1 - 1',
    '1 - 1',
    '1 - 1',
    '1 - 1',
    '1 - 1'
  ]

  return (
    <div className="flex items-center self-stretch rounded-lg bg-shades-0">
      <div className="flex p-6 flex-col items-start gap-2 self-stretch rounded">
        <Heading06 fontWeight="semi">Estatíticas</Heading06>
        <div className="flex flex-col items-start gap-1 self-stretch border-b-[0.5px] border-neutral-300">
          <Paragraph03 fontWeight="semi" className="text-neutral-600">
            Brasil: W L W W L
          </Paragraph03>
          <Caption className="font-Inter text-neutral-600 text-rigth">Média gols (5): 3.5</Caption>
        </div>
        <div className="flex flex-col items-start gap-1 self-stretch border-b-[0.5px] border-neutral-300">
          <Paragraph03 fontWeight="semi" className="text-neutral-600">
            Alemanha: L L L W W
          </Paragraph03>
          <Caption className="font-Inter text-neutral-600 text-rigth">Média gols (5): 0.5</Caption>
        </div>
      </div>
      <div className="flex p-6 items-start content-start gap-6 flex-1 self-stretch flex-wrap rounded">
        <div className="flex flex-col items-start gap-2">
          <Heading06 fontWeight="semi">Tempo</Heading06>
          <div className="flex w-[432px] items-start content-start gap-2 flex-wrap">
            {timeData.map(({ time, active }: TTimeButtonProps, index) => (
              <div
                key={index}
                className={`flex flex-col w-9 h-9 p-1 justify-center items-center gap-2.5 rounded border border-primary-900 ${
                  active && 'bg-primary-900'
                }`}
              >
                <Paragraph01 className={active ? 'text-shades-0' : 'text-neutral-600'}>
                  {time}
                </Paragraph01>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col h-[125px] items-start gap-2">
          <Heading06 fontWeight="semi">Tempo</Heading06>
          <div className="flex w-[267px] items-start content-start gap-2 flex-1 flex-wrap">
            {scoreboard.map((text: string, index: number) => (
              <div
                key={index}
                className="flex h-9 py-1 px-1.5 justify-center items-center gap-2.5 rounded border border-neutral-300 bg-neutral-200"
              >
                <Paragraph01 className="text-right text-neutral-600">{text}</Paragraph01>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col w-[329px] items-start gap-4">
          <div className="flex items-end gap-2 self-stretch">
            <Select label="Canal" optionData={['Selecione']} />
            <div className="flex flex-col pb-1 justify-between items-start self-stretch">
              <Paragraph03>Mostrar gráfico</Paragraph03>
              <Switch></Switch>
            </div>
            <div className="flex flex-col pb-1 justify-between items-start self-stretch">
              <Paragraph03>Mostrar filtros</Paragraph03>
              <Switch></Switch>
            </div>
          </div>
          <div className="flex items-start gap-4 self-stretch">
            <Button type="primary" size="small" text="Criar padrão" className="w-full"></Button>
            <Button type="primary" size="small" text="Enviar Tip" className="w-full"></Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Statistic
