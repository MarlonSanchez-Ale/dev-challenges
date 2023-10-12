import QRCode from "react-qr-code";
import { Button } from "@material-tailwind/react";
import { AiOutlineDownload, AiOutlineLink, AiOutlineRetweet } from "react-icons/ai";
import { useRef } from "react";
import html2canvas from 'html2canvas';

interface Props {
  qrcode: string,
  handleShowQr: () => void
}

//type FormEvent = React.FormEvent<HTMLFormElement>

export default function QRCodePage({ qrcode, handleShowQr }: Props) {

  const qrCodeRef = useRef<HTMLDivElement | null>(null);

  // download QR code
  const downloadQRCode = async () => {
    // Generate download with use canvas and stream
    if (qrCodeRef.current) {
      const canvas = await html2canvas(qrCodeRef.current);
      const url = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = url;
      link.download = 'qrcode.png';
      link.click();
    }
  };


  const handleShareQRCode = async () => {
    if (qrCodeRef.current) {
      const canvas = await html2canvas(qrCodeRef.current);

      canvas.toBlob((blob) => {
        if (blob) {
          const file = new File([blob], 'qrcode.png', { type: 'image/png' });

          if (navigator.share) {
            navigator
              .share({
                files: [file],
                title: 'Compartir Código QR',
              })
              .then(() => {
                console.log('Código QR compartido con éxito');
              })
              .catch((error) => {
                console.error('Error al compartir el código QR', error);
              });
          }
        }
      }, 'image/png');
    }
  };


  return (
    <div className='flex flex-col justify-center gap-5 mt-20 '>
      {qrcode && (
        <>
          <div className="flex justify-center relative w-full">
            <div className="bg-blue-900/20 rounded-full h-96 w-96 shadow-lg"></div>
            <div className='flex !absolute top-10 rounded-xl p-7 bg-white shadow-xl' ref={qrCodeRef}>
              <QRCode
                id="canvas"
                level="H"
                size={256}
                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                value={qrcode}
                viewBox={`0 0 256 256`}
                className=" bg-transparent rounded-xl bg-white  shadow-2xl"
              />
            </div>
          </div>

          <div className="flex justify-center gap-5 sm:flex-col lg:flex-row">
            <Button className="flex items-center gap-3 bg-blue-700 shadow-lg hover:bg-blue-800 hover:-translate-y-1" onClick={() => handleShowQr()}>
              <AiOutlineRetweet size={20} />
              Generator
            </Button>
            <Button className="flex items-center gap-3 bg-blue-700 shadow-lg hover:bg-blue-800 hover:-translate-y-1" onClick={() => downloadQRCode()}>
              <AiOutlineDownload size={20} />
              Download
            </Button>
            <Button className="flex items-center gap-3 bg-blue-700 shadow-md hover:bg-blue-800 hover:-translate-y-1" onClick={() => handleShareQRCode()}>
              <AiOutlineLink size={20} />
              Share
            </Button>
          </div>
        </>
      )}
      {!qrcode && <></>}
    </div>
  )
}

/*

 let canvas = qrRef.current?.querySelector("canvas") as HTMLCanvasElement | null;

    if (canvas) {
      let image = canvas.toDataURL("image/png");
      let anchor: HTMLAnchorElement = document.createElement("a");
      anchor.href = image;
      anchor.download = "qr-code.png";
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
    }

*/

