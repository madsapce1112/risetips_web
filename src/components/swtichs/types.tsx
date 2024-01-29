export type TSwitchProps = React.HTMLAttributes<HTMLSpanElement> & {
  id?: string
  label?: string
  checked?: boolean
  onChange?: EventListener
}
