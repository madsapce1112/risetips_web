export type TSelectProps = React.HTMLAttributes<HTMLSelectElement> & {
  className?: string
  label?: string
  optionData: Array<string>
  disabled?: boolean
}
