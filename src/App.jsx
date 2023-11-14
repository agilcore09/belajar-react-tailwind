import HomePage from './Page/HomePage';
import data from "./blog.json"
import { useState } from 'react';
function App() {

  const [cari, setCari] = useState("");

  const search = (event) => {
    setCari(event.target.value);
  }

  return (

    <>
      <h3 className='text-center text-3xl font-medium text-gray-800 mt-7'>Blog Sederhana</h3>
      <div className="blog-search ml-36 my-3">
        <input type="text" placeholder='Cari Blog' className='w-60 border rounded border-cyan-500 focus:outline-none' onChange={search} />
        <button className='w-20 bg-cyan-500 text-white rounded ml-2'>Cari</button>
      </div>
      <div className="result ml-36">
        <p>Di temukan 0 dari kata : {cari}</p>
      </div>
      <div className='container flex justify-center mt-10'>
        {data.map((e, index) => {
          return (
            <HomePage judul={e.judul} date={e.date} body={e.body} key={index} />
          )
        })}
      </div>
    </>
  )
}

export default App
