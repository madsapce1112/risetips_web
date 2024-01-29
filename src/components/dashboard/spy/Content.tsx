import SpyCard from './SpyCard'
import { TSpyCardProps } from './type'

const SpyContent = () => {
  const spyData: TSpyCardProps[] = [
    {
      name: 'Espião 01',
      time: '49/53 (24h)',
      percent: '(92.5%)',
      times: ['19:40', '19:40', '19:40', '19:40']
    },
    {
      name: 'Espião 02',
      time: '49/53 (24h)',
      percent: '(92.5%)',
      times: ['19:40', '19:40', '19:40', '19:40']
    },
    {
      name: 'Espião 03',
      time: '49/53 (24h)',
      percent: '(92.5%)',
      times: ['19:40', '19:40', '19:40', '19:40']
    },
    {
      name: 'Espião 04',
      time: '49/53 (24h)',
      percent: '(92.5%)',
      times: ['19:40', '19:40', '19:40', '19:40']
    },
    {
      name: 'Espião 05',
      time: '49/53 (24h)',
      percent: '(92.5%)',
      times: ['19:40', '19:40', '19:40', '19:40']
    },
    {
      name: 'Espião 301',
      time: '49/53 (24h)',
      percent: '(92.5%)',
      times: ['19:40', '19:40', '19:40', '19:40']
    }
  ]
  return (
    <div className="flex items-start content-start gap-6 self-stretch flex-wrap">
      {spyData.map((item: TSpyCardProps, index: number) => (
        <SpyCard key={index} {...item}></SpyCard>
      ))}
    </div>
  )
}

export default SpyContent
