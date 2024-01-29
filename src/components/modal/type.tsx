export type TModalProps = React.HTMLAttributes<HTMLElement> & {
  type?: string
  buttonTitle?: string
  buttonType?: 'primary' | 'secondary' | 'destructive-outline' | 'destructive' | 'disabled'
  buttonSize?: 'large' | 'medium' | 'small'
  buttonClassName?: string
  children?: React.HTMLAttributes<HTMLElement>
  className?: string
}
