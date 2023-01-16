import Image from "next/image"
import Link from "next/link"
import Ahmad from "./1.jpeg"

function Header() {
  return (
      <header className="flex items-center justify-between px-10 py-5 space-x-2 font-bold">
        <div className="flex items-center space-x-2">
          <Link href="/">
            <Image
              className="rounded-full"
              src={Ahmad}
              width={50}
              height={50}
              alt="logo"
            />
          </Link>
          <h1>The Future Connect Blog</h1>
        </div>
        
        <div>
          <Link 
          href="https://lnkd.in/dSKkuMve"
          className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#F7AB0A]
          flex items-center rounded-full text-center">
            Sign up to the Future Connect Courses
          </Link>
        </div>
    </header>
  )
}

export default Header