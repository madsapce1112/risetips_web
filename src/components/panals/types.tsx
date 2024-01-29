import { TTableRowColorProps } from '..'

export type TPanalsProp = React.HTMLAttributes<HTMLElement> & {
  data: TPanalProp[]
}

export type TPanalProp = React.HTMLAttributes<HTMLElement> & {
  title: string
  tabs: TTabProps[]
}

export type TTabProps = React.HTMLAttributes<HTMLElement> & {
  title: string
  tableData: TTableRowColorProps
}
