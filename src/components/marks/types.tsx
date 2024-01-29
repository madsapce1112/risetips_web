export type TMarkProps = React.HTMLAttributes<HTMLInputElement> & {
  id: string
  label: string
  colorType: string
  checkMark?: { [key: string]: any }
  onChange?: (e: React.SyntheticEvent<EventTarget>) => void
}
