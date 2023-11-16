import { useState } from 'react';

function Search() {

    const [cari, setCari] = useState("");

    const search = (event) => {
        setCari(event.target.value);
    }

    return (
        <>
            <div className="blog-search ml-36 my-3">
                <input type="text" placeholder='Cari Blog' className='w-60 border rounded border-cyan-500 focus:outline-none' onChange={search} />
                <button className='w-20 bg-cyan-500 text-white rounded ml-2'>Cari</button>
            </div>
            <div className="result ml-36">
                <p>Di temukan 0 dari kata : {cari}</p>
            </div>
        </>
    )
}

export default Search;