import SelectPayments from './selectPayments'
import CardForm from './cardForm'
import GetQRCode from './getQRCode'
import { useState } from 'react'

type TCheckPaymentProps = React.HTMLAttributes<HTMLSpanElement> & {
  onClick: EventListener
}

const CheckPayment = (props: TCheckPaymentProps) => {
  const [show, setShow] = useState(1)
  const handleShow = () => setShow(show + 1)
  return (
    <>
      {show === 1 && <SelectPayments onClick={handleShow} />}
      {show === 2 && <CardForm onClick={handleShow} />}
      {show === 3 && <GetQRCode {...props} />}
    </>
  )
}

export default CheckPayment
