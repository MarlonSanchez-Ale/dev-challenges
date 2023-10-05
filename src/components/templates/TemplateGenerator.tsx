import { useState, ChangeEvent } from 'react'
import SearchPage from "../modules/SearchPage"
import QRCodePage from "../modules/QRCodePage"

type HandleInputChange = ChangeEvent<HTMLInputElement>
type FormEvent = React.FormEvent<HTMLFormElement>

export default function TemplatesGenerator() {

  const [qrcode, setQrcode] = useState<string>("");
  const [qr, setQr] = useState<string>("")
  const [showQr, setShowQr] = useState<boolean>(false)

  const handleChange = ({ target: { value } }: HandleInputChange) => setQrcode(value);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setQr(qrcode)
    setQrcode("")
    handleShowQr()
  }

  const handleShowQr = () => {
    setShowQr(!showQr)
  }


  return (
    <div className={`App p-5 flex flex-col gap-10`} >
      {!showQr && (<SearchPage qrcode={qrcode} handleChange={handleChange} handleSubmit={handleSubmit} />)}
      {showQr && (<QRCodePage qrcode={qr} handleShowQr={handleShowQr} />)}
    </div>
  )
}


