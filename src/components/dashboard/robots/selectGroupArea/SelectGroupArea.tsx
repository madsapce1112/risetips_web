import { Select } from '@/components'
import { TSelectGroupProps } from './type'

const SelectGroupArea = ({ title, selects }: TSelectGroupProps) => {
  return (
    <div className="border rounded">
      <div className="flex px-1 py-2 justify-center items-center gap-2.5 bg-neutral-200">
        <p className="text-black text-center text-xs font-normal leading-normal">{title}</p>
      </div>
      <div className="flex items-start pt-2.5 pb-2 px-100 gap-3  bg-neutral-100">
        {selects.map((item, index) => {
          return <Select key={index} label={item.label} id={item.id} optionData={item.optionData} />
        })}
      </div>
    </div>
  )
}

export default SelectGroupArea
