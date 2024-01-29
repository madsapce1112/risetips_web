import { Button, Paragraph02 } from '..'

const Footer = () => {
  return (
    <tfoot>
      <tr>
        <td>
          <div className="flex justify-between py-4 px-6 items-center self-stretch bg-shades-0">
            <Button text="Anterior" type="disabled" size="small" />
            <Paragraph02 className="text-neutral-600">Página 1 de 10</Paragraph02>
            <Button text="Próxima" size="small" />
          </div>
        </td>
      </tr>
    </tfoot>
  )
}

export default Footer
