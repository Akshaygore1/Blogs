import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im"
import Link from "next/link"

export default function header() {
  return (
    <header className="bg-gray-50">
      <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
        <div className="shrink w-80 sm:order-2">
          <Link href={"/"}>
            <a className="font-bold uppercase text-3xl">Blog</a>
          </Link>
        </div>
      </div>
    </header>
  )
}
