export type TStepProps = React.HTMLAttributes<HTMLSpanElement> & {
  stepNumber: number
  stepName: string
  status: 'unActive' | 'active' | 'completed'
}
