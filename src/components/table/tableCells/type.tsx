export type TTableCellProps = React.HTMLAttributes<HTMLTableElement> & {
  title?: string
  content?: string
  colorType?: string
  textColorType?: string
  isCheckBox?: boolean
  isBorder?: boolean
  rowSpanNumber?: number
}
