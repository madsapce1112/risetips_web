import { Paragraph02 } from '@/components'
import { TProgressProps } from './type'

const ProgressBar = () => {
  return <div className="h-6 self-stretch rounded-lg bg-white"></div>
}

const Progress = ({ label, value }: TProgressProps) => (
  <div className="flex flex-col items-start gap-1 self-stretch">
    <div className="flex justify-between items-center self-stretch">
      <Paragraph02>{label}</Paragraph02>
      <Paragraph02>{value}</Paragraph02>
    </div>
    <ProgressBar />
  </div>
)
export default Progress
