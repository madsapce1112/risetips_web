import { TSelectProps } from '@/components'

export type TSelectGroupProps = React.HTMLAttributes<HTMLSelectElement> & {
  title: string
  selects: TSelectProps[]
}
