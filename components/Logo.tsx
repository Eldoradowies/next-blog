import Image from "next/image";
import Ahmad from "./1.jpeg"

function Logo(props: any) {
    const {renderDefault, title} = props;
  return (
    <div className="flex items-center space-x-2">
        <Image
        className="rounded-full object-cover"
        height={50}
        width={50}
        src={Ahmad}
        alt="logo"
        />
        {renderDefault(props)}
    </div>
  )
}

export default Logo