import { InputGenerator } from "../elements/InputGenerator"
import { Props } from "../../interfaces/Qrcode";
import { Typography } from "@material-tailwind/react";

export default function SearchPage({ qrcode, handleChange, handleSubmit }: Props) {
  return (
    <div className='grid place-items-center gap-5 p-5'>
      <div className="flex flex-col justify-center sm:gap-28 lg:gap-3">
        <img
          className="h-20 w-52 "
          src={'/images/logo-qr-generator.svg'}
          alt=""
        />
        <Typography color="gray">
          QR code generator
        </Typography>
      </div>
      <InputGenerator qrcode={qrcode}  handleChange={handleChange} handleSubmit={handleSubmit} />
    </div>
  )
}
