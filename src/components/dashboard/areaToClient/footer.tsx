import { Button, Heading04, Paragraph03, TTableProps, Table } from '@/components'

type TDataProps = React.HTMLAttributes<HTMLElement> & {
  title: string
  subTitle: string
  buttonText: string
  tableData: TTableProps
}

const data: TDataProps[] = [
  {
    title: 'Meus robôs',
    subTitle: 'Confira o desempenho dos seus robôs',
    buttonText: 'Ver todos os robôs',
    tableData: {
      header: [
        {
          contents: [
            { content: 'Nome', isBorder: false },
            { content: 'Último sinal', isBorder: false },
            { content: 'Estatística (%)', isBorder: false },
            { content: 'Status', isBorder: false }
          ]
        }
      ],
      body: [
        {
          contents: [
            { content: 'Ligue bot 1', isBorder: false },
            { content: '01/02/2023 as 14:14', isBorder: false },
            { content: '80/20', isBorder: false },
            { content: 'ON', colorType: 'lightBlue', isBorder: false }
          ]
        },
        {
          contents: [
            { content: 'Ligue bot 1', isBorder: false },
            { content: '01/02/2023 as 14:14', isBorder: false },
            { content: '80/20', isBorder: false },
            { content: 'OFF', colorType: 'lightRed', isBorder: false }
          ]
        }
      ]
    }
  },
  {
    title: 'Meus chamados',
    subTitle: 'Confira os últimos chamados',
    buttonText: 'Ver todos os chamados',
    tableData: {
      header: [
        {
          contents: [
            { content: 'Nome', isBorder: false },
            { content: 'Status', isBorder: false }
          ]
        }
      ],
      body: [
        {
          contents: [
            { content: 'Ligue bot 1', isBorder: false },
            { content: 'ON', colorType: 'lightBlue', isBorder: false }
          ]
        },
        {
          contents: [
            { content: 'Ligue bot 1', isBorder: false },
            { content: 'OFF', colorType: 'lightRed', isBorder: false }
          ]
        }
      ]
    }
  }
]
const footer = () => {
  return (
    <div className="flex gap-6">
      {data.map(({ title, subTitle, buttonText, tableData }: TDataProps, index) => (
        <div key={index} className="flex flex-col p-6 gap-2 flex-1 rounded-lg bg-shades-0">
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex flex-col">
              <Heading04 fontWeight="semi">{title}</Heading04>
              <Paragraph03>{subTitle}</Paragraph03>
            </div>
            <div>
              <Button type="primary" size="small" text={buttonText} />
            </div>
          </div>
          <Table {...tableData} />
        </div>
      ))}
    </div>
  )
}

export default footer
