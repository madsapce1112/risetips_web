export type TInputFieldProps = React.HTMLAttributes<HTMLInputElement> & {
  label?: string
  type?: string
  placeholder?: string
  value?: string
  className?: string
  onChange?: EventListener
}
