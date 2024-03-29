import Image from "next/image"
import Link from "next/link"
import GenreDropDown from "./GenreDropDown"
import SearchBar from "./SearchBar"
import { ThemeToggler } from "./ThemeToggler"

function Header() {
    return (
        <header className="fixed w-full z-30 top-0 flex items-center justify-between p-5 bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900">
            <Link href="/" className="mr-10">
                <Image
                    src={"/disney_logo.png"}
                    width={120}
                    height={100}
                    alt="Disney Logo"
                    className={"cursor-pointer invert"}
                />
            </Link>

            <div className="flex space-x-2">
                <GenreDropDown />
                <SearchBar />
                <ThemeToggler />
            </div>
        </header>
    )
}

export default Header