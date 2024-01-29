export type TButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  name?: string
  className?: string
  type?: 'primary' | 'secondary' | 'destructive-outline' | 'destructive' | 'disabled'
  size?: 'large' | 'medium' | 'small'
  onClick?: EventListener
  text?: string
}
