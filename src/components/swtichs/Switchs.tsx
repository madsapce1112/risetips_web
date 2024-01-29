import { Paragraph03 } from '..'
import { TSwitchProps } from './types'

const Switch = ({ id, label, checked, ...rest }: TSwitchProps) => {
  return (
    <>
      <label className="flex cursor-pointer select-none items-center space-x-100 pl-300">
        <div className="relative">
          <input type="checkbox" className="sr-only" checked={checked} name={id} {...rest} />
          <span
            aria-checked={checked}
            className={`${
              checked ? 'bg-success-contrast' : 'bg-neutral-300'
            } flex items-center p-0.5 w-16 gap-0 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200`}
            role="checkbox"
          >
            <span
              aria-hidden="true"
              className={`${
                checked ? 'translate-x-9' : 'translate-x-0'
              } h-6 w-6 flex-shrink-0 rounded-full bg-shades-0 transform transition ease-in-out duration-200`}
            />
          </span>
        </div>
        {label && <Paragraph03 className="text-secondary">{label}</Paragraph03>}
      </label>
    </>
  )
}

export default Switch
