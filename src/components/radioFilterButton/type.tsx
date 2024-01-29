export type TRadioFilterButtonProps = React.HTMLAttributes<HTMLElement> & {
  data: string[]
  onClick?: EventListener
  values: { [key: string]: boolean }
}
