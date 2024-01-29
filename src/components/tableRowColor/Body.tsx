import { TTableRowColorProps } from './type'

const Body = ({ body }: TTableRowColorProps) => {
  return (
    <tbody>
      {body &&
        body.map((item: string[], index: number) => (
          <tr
            key={index}
            className={`flex px-20 py-2 justify-between items-center self-stretch ${
              index % 2 == 0 ? 'bg-shades-0' : 'bg-neutral-100'
            } `}
          >
            {item.map((text: string, cell_index) => (
              <td key={cell_index} className="flex w-[200px] justify-center items-center gap-2.5">
                {text}
              </td>
            ))}
          </tr>
        ))}
    </tbody>
  )
}

export default Body
