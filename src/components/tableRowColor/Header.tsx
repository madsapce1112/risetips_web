import { THeaderProps, TTableRowColorProps } from './type'

const Header = ({ header }: TTableRowColorProps) => {
  return (
    <thead>
      <tr className="flex px-20 py-1 justify-between items-center self-stretch bg-shades-0">
        {header &&
          header.map(({ text }: THeaderProps, index: number) => (
            <th key={index} className="flex w-[200px] justify-center items-center gap-2.5">
              {text}
            </th>
          ))}
      </tr>
    </thead>
  )
}

export default Header
