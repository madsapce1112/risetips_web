import { Paragraph02, Paragraph03 } from '..'
import { TStepProps } from './types'

const Step = (data: { [key: number]: TStepProps }) => {
  const classNames = {
    unActive: [
      'flex flex-col justify-center items-center gap-2 w-7 h-7 p-[9px] rounded-[20px] bg-neutral-300',
      'text-neutral-600',
      'text-primary-600'
    ],
    active: [
      'flex flex-col justify-center items-center gap-2 w-7 h-7 p-[9px] rounded-[20px] ring-4 ring-shades-0 bg-primary-700',
      'text-shades-0',
      'text-primary-700'
    ],
    completed: [
      'flex flex-col justify-center items-center gap-2 w-7 h-7 p-[9px] rounded-[20px] bg-primary-700',
      'text-shades-0',
      'text-custom-100'
    ]
  }
  return (
    <div className="flex items-center gap-8">
      {data &&
        Object.values(data).map(({ stepNumber, stepName, status }: TStepProps, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className={classNames[status][0]}>
              <Paragraph02 fontWeight="semi" className={classNames[status][1]}>
                {stepNumber}
              </Paragraph02>
            </div>
            <Paragraph03 fontWeight="semi" className={classNames[status][2]}>
              {stepName}
            </Paragraph03>
          </div>
        ))}
    </div>
  )
}

export default Step
