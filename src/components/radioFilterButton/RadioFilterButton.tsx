import { Button } from '@/components'
import { TRadioFilterButtonProps } from './type'

const RadioFilterButton = ({ data, values, ...rest }: TRadioFilterButtonProps) => {
  return (
    <div className="flex py-4 px-6 justify-center items-center gap-6 self-stretch rounded-lg bg-shades-0">
      {data.map((text: string, index: number) => (
        <Button
          key={index}
          name={`${index}`}
          type={values[index] ? 'primary' : 'secondary'}
          size="small"
          text={text}
          className={values[index] ? '' : 'text-neutral-600'}
          {...rest}
        />
      ))}
    </div>
  )
}

export default RadioFilterButton
