export type TCustomTableProps = React.HTMLAttributes<HTMLElement> & {
  headers?: TCustomHeaderProps[]
  data?: TCustomBodyProps[]
  isFooter?: boolean
}

export type TCustomHeaderProps = React.HTMLAttributes<HTMLElement> & {
  id: string
  title?: string
  sortable?: boolean
  type?: string
  className?: string
  width?: number
  edit?: boolean
  isBorder?: boolean
}

export type TCustomBodyProps = React.HTMLAttributes<HTMLElement> & { [key: string]: any }

export type TCustomBodyCellProps = React.HTMLAttributes<HTMLElement> & {
  header: TCustomHeaderProps
  item: TCustomBodyProps
}
