export type TTypographyProps = React.HTMLAttributes<HTMLHeadingElement> & {
  component?: React.ElementType | string
  children: React.ReactNode
  className?: string
  fontWeight?: 'normal' | 'bold' | 'semi' | 'extra'
}
