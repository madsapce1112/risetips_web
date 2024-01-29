import { Paragraph03 } from '..'
import { TCheckBoxProps } from './type'

const CheckBox = ({ label }: TCheckBoxProps) => {
  return (
    <div className="inline-flex items-center gap-2">
      <input
        type="checkbox"
        value=""
        className="w-4 h-4 text-primary-700 bg-gray-100 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600"
      />
      {label && <Paragraph03>{label}</Paragraph03>}
    </div>
  )
}

export default CheckBox
