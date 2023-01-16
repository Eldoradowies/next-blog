import Link from 'next/link'
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid"

function StudioNavbar(props: any) {
  return (
    <div>
        <div className='flex items-center justify-between p-5'>
            <Link href="/" className='text-[#F7AB0A] flex items-center'>
            <ArrowUturnLeftIcon className='w-8 mr-2'/>
                Go to Website
            </Link>

            <div className="hidden md:flex p-5 rounded-lg justify-center border-2 border-[#F8AB0A]">
                <h1 className="font-bold text-white">
                    Want Coding challenge & Solution or hire a software engineering?.
                </h1>
                <Link className='text-[#F7AB0A] font-bold ml-2' href="https://lnkd.in/dSKkuMve">Portfolio</Link>
            </div>
        </div>
         <>{props.renderDefault(props)}</>
    </div>
  )
}

export default StudioNavbar