import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <>
        {/*menu*/}
    <div className='bg-red-800 pr-96 p-8 flex justify-between items-center '>  
        <Link href="/">
         <img
          src="/images/logo.png" 
          className='ml-16 w-30 h-16'/>
        </Link>
    <ul className='flex'>
    <li className='mx-7'>
      <details className=''>
        <summary className='cursor-pointer text-cream font-serif text-zinc-200 text-lg'>Kurumsal</summary>
        <ul className='bg-gradient-to-r from-red-800 to-red-400 absolute w-52 p-3 mt-3 rounded-lg z-10 '>
          <li>
            <Link href="/kurumsal/hakkimizda" className='font-serif text-lg text-white hover:text-black'>Hakkımızda</Link>
          </li>
          <li className='mt-1'>
            <Link href="/kurumsal/kvkk" className='font-serif text-lg text-white hover:text-black'>KVKK</Link>
          </li>
          <li className='mt-1'>
            <Link href="/kurumsal/haberlerveduyurular" className='font-serif text-lg text-white hover:text-black'>Haberler ve duyurular</Link>
          </li>
        </ul>
      </details>
    </li>

    <li className='mx-7'>
      <details>
        <summary className='cursor-pointer text-cream font-serif text-zinc-200 text-lg'>Faydalı Bigiler</summary>
        <ul className='bg-gradient-to-r from-red-800 to-red-400 absolute w-52 p-3 mt-3 rounded-lg z-10 '>
          <li>
            <Link href="/faydalibilgiler/peyniraltisuyutozu" className='font-serif text-lg text-white hover:text-black'>Peyniraltı Suyu Tozu</Link>
          </li>
          <li  className='mt-1'>
            <Link href="/faydalibilgiler/suttozu" className='font-serif text-lg text-white hover:text-black'>Süt tozu</Link>
          </li>
        </ul>
      </details>
    </li>

      <li className='mx-7'>
        <details>
          <summary className='cursor-pointer text-cream font-serif text-zinc-200 text-lg'>Ürünler</summary>
          <ul className='bg-gradient-to-r from-red-800 to-red-400 absolute w-52 p-3 mt-3 rounded-lg z-10 '>
            <li>
              <Link href="/urunler/50demineralizepast" className='font-serif text-lg text-white hover:text-black'>%50 Deminarelize PAST</Link>
            </li>
            <li  className='mt-1'>
            <Link href="/urunler/70demineralizepast" className='font-serif text-lg text-white hover:text-black'>%70 Deminarelize PAST</Link>
            </li>
            <li  className='mt-1'>
              <Link href="/urunler/yagsizsuttozu" className='font-serif text-lg text-white hover:text-black'>Yağsız Süt Tozu</Link>
            </li>
          </ul>
        </details>
      </li>
    

    <li className='mx-7'> 
      <Link href="/ihracat" className='text-cream font-serif text-zinc-200 text-lg'>İhracat</Link>
    </li>
    <li className='mx-7'>
      <Link href="/iletisim" className='text-cream font-serif text-zinc-200 text-lg'>İletişim</Link>
    </li>
  </ul>
     <div className='absolute bottom-15 right-14 '>
      <img
          src="/images/logo_gray.png" 
          className='ml-16 w-30 h-20 cl-red-200 opacity-40'/>
     </div>
   </div>
   
  
    </>
    
  )
}
