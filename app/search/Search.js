'use client'

import React, { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'

function Search () {
    const [search, setSearch] = useState("");
    const router = useRouter();

    const handleSearch = async (e) => {
        e.preventDefault();
        setSearch("");
        router.push(`/search/${search}`)
    }

  return (
    <form onSubmit={handleSearch}>
    <input 
    type="text" 
    value={search}
    placeholder="Enter your search"
    onChange={(e)=> setSearch(e.target.value)}
    />
    <button className='bg-blue-500 rounded-lg text-white px-4 py-2 font-bold hover:scale-105 ease-in duration-300'>Search</button>
    </form>

  )
}

export default Search 