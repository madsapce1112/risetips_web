import Image from 'next/image'
import { Heading05, Heading06, Paragraph01, Paragraph03 } from '../typography'
import { TMatchResultCardProps } from './type'
import { Button } from '..'

const MatchResultCard = ({ title, subTitle, contents }: TMatchResultCardProps) => {
  const winStatus = Boolean(Object.values(contents)[0] > Object.values(contents)[1])
  const compareStatus = Boolean(Object.values(contents)[0] === Object.values(contents)[1])
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col p-300 gap-2 rounded-t-md bg-shades-0">
        <div className="flex flex-col gap-1">
          <Heading06 fontWeight="semi">{title}</Heading06>
          <Paragraph03>{subTitle}</Paragraph03>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-2 items-center">
            <Image
              src={`/assets/team_mark_icons/${Object.keys(contents)[0]}.png`}
              alt="logo"
              width={64}
              height={62}
            />
            <Heading05
              fontWeight="semi"
              className={
                !compareStatus
                  ? winStatus
                    ? 'text-success-primary'
                    : 'text-error-primary'
                  : 'text-black'
              }
            >
              {Object.values(contents)[0]}
            </Heading05>
          </div>
          <Paragraph01 fontWeight="semi">x</Paragraph01>
          <div className="flex flex-col gap-2 items-center">
            <Image
              src={`/assets/team_mark_icons/${Object.keys(contents)[1]}.png`}
              alt="logo"
              width={64}
              height={62}
            />
            <Heading05
              fontWeight="semi"
              className={
                !compareStatus
                  ? winStatus
                    ? 'text-error-primary'
                    : 'text-success-primary'
                  : 'text-black'
              }
            >
              {Object.values(contents)[1]}
            </Heading05>
          </div>
        </div>
      </div>
      <Button text="Ver mais" className="rounded-t-none" />
    </div>
  )
}

export default MatchResultCard
