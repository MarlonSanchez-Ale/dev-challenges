import { AiOutlineLink } from "react-icons/ai";
import { BsRepeat } from 'react-icons/bs'
import { useState } from 'react'
import { Alert } from "@material-tailwind/react";
import { AiFillAlert } from "react-icons/ai";

interface Props {
  handleQuoteRandom: () => void,
  content?: string,
  author?: string
}

export default function FormRandomQuote({ handleQuoteRandom, content, author }: Props) {

  const [copiado, setCopiado] = useState<boolean>(false);

  const copiarAlPortapapeles = () => {
    const textoACopiar = `"${content}", ${author}`;
    setCopiado(false)
    if (textoACopiar) {
      navigator.clipboard.writeText(textoACopiar)
        .then(() => {
          setCopiado(true);
          setTimeout(() => setCopiado(false), 2000); // Resetear el estado después de 2 segundos
        })
        .catch(err => console.error('Error al copiar el texto: ', err));
    }
  };

  return (
    <div className="grid place-items-center mt-5">
      <div className="flex flex-1 rounded-2xl border border-gray-700 ring-1 ring-gray-700 shadow-lg opacity-50">
        <div className="p-3 cursor-pointer" onClick={handleQuoteRandom}>
          <BsRepeat size={30} className=" hover:-translate-y-1" color="gray" />
        </div>
        <div
          className="inline-block h-[55px] min-h-[1em] w-0.5 self-stretch bg-gray-700 opacity-50 "></div>
        <div className="p-3 cursor-pointer" onClick={copiarAlPortapapeles}>
          <AiOutlineLink size={30} className=" hover:-translate-y-1" color="gray" />
        </div>
      </div>

      {copiado && (
        <Alert
          icon={<AiFillAlert size={20} />}
          className="rounded-none border-l-4 border-[#2ec946] bg-[#2ec946]/10 font-medium text-[#2ec946] mt-5"
        >
          Text copied to the clipboard
        </Alert>
      )}
    </div >
  )
}
