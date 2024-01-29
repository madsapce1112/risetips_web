type TTableRowColorProps = React.HTMLAttributes<HTMLElement> & {
  header?: THeaderProps[]
  body?: string[][]
}

type THeaderProps = React.HTMLAttributes<HTMLElement> & {
  text: string
}

export type { TTableRowColorProps, THeaderProps }
