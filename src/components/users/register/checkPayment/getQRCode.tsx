import { Button, Paragraph03 } from '@/components'
import Image from 'next/image'

type TGetQRCodeProps = React.HTMLAttributes<HTMLSpanElement> & {
  onClick: EventListener
}

const GetQRCode = (props: TGetQRCodeProps) => {
  return (
    <div className="flex flex-col w-[592px] py-12 px-8 justify-center items-center gap-6 rounded-xl bg-neutral-100 shadow-sm">
      <div className="flex w-[282px] h-[282px] p-4 justify-center items-center bg-shades-0">
        <Image src="/assets/QRcode.svg" alt="logo" width={250} height={250} />
      </div>
      <div className="flex py-75 px-300 justify-between items-center self-stretch rounded-[4px] border border-neutral-300 bg-neutral-50">
        <Paragraph03 className="text-neutral-600">Govadaisuhdausdasddadas.pix</Paragraph03>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="25"
          viewBox="0 0 26 25"
          fill="none"
        >
          <rect
            x="7.99805"
            y="7.25293"
            width="14.0058"
            height="14.0058"
            rx="2"
            stroke="#475569"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.99825 17.2571H5.99742C4.89239 17.2571 3.99658 16.3613 3.99658 15.2562V5.25205C3.99658 4.14702 4.89239 3.25122 5.99742 3.25122H16.0016C17.1066 3.25122 18.0024 4.14702 18.0024 5.25205V7.25289"
            stroke="#475569"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <Button
        type="primary"
        size="large"
        text="Confirmar pagamento:0/mês"
        className="w-full"
        {...props}
      />
    </div>
  )
}

export default GetQRCode
