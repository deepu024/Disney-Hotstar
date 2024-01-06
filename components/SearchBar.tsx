"use client"

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

function SearchBar() {
    const router = useRouter();
    const [value, setValue] = useState<string>('');
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!value){
            return;
        }
        router.push(`/search/${value}`)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Search..."
                className="border-gray-400 border-2 outline-none"
                onChange={(e) => setValue(e.target.value)}
            />
        </form>

    )
}

export default SearchBar