import { Input, Button } from "@material-tailwind/react";
import { Props } from "../../interfaces/Qrcode";


export const InputGenerator = ({ qrcode, handleChange, handleSubmit }: Props) => {


    return (
        <form className="relative flex w-full max-w-[24rem] text-white bg-blue-900/10 " onSubmit={handleSubmit}>
            <Input
                type='url'
                value={qrcode}
                onChange={handleChange}
                className="pr-20 text-gray-100 font-sans"
                color="blue"
                label="Enter an url"
                containerProps={{
                    className: "min-w-0",
                }}
                crossOrigin={undefined}
            />
            <Button
                size="sm"
                type="submit"
                color={qrcode ? "blue" : "blue-gray"}
                disabled={!qrcode}
                className="!absolute right-1 top-1 rounded "
            >
                QR code
            </Button>
        </form>
    );
}