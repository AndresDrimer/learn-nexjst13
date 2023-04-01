import React from 'react'

const search  = async (searchTerm) =>{
    const res = await fetch(`https://serpapi.com/search.json?q=${searchTerm}&api_key=${process.env.API_KEY}`);
    const data = await res.json();
    return data;
}

async function SearchResults({params: {searchTerm}}) {
  const searchResults = await search(searchTerm)
    return (
    <div>
    <p className='text-gray-500 text-sm'>You searched for: {searchTerm}</p>
    
    <ol className='space-y-5 p-5'>
        {searchResults.organic_results.map(result =>(
            <li key={result.position} className='list-decimal'>
            <p className='font-bold'>{result.title}</p>
            <a href={result.link} className='text-gray-500 py-2'>{result.link}</a>
            <p>{result.snippet}</p>
            </li>
        ))}
    </ol>
    </div>
  )
}

export default SearchResults