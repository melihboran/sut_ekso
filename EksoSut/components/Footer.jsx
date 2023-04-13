import React from 'react'

export default function Footer() {
  return (
    <div className="bg-red-800 pt-44 pb-24 border-t-2 border-gray-300 mt-10">
    <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-6">
      <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
        
       
        <div className=" mt-2 mb-8 -mx-2">
        <p className="mb-4">
          <strong className="text-2xl text-zinc-200">Bize Ulaşın</strong> 
        </p>
          <div className="mx-2 p-2 shadow-md">
            <p className='text-zinc-200'>Organize Sanayi Bölgesi 07190 ANTALYA / TÜRKİYE</p>
          </div>
          <div className="mx-2 flex p-2 shadow-md">
            <p className='text-zinc-200'>+90 242 258 13 96 (Pabx)</p>
          </div>
          <div className="mx-2 p-2 shadow-md">
            <p className='text-zinc-200'>+90 242 258 13 95</p>
          </div>
          <div className="mx-2 p-2 shadow-md">
            <p className='text-zinc-200'>info@eksosut.com</p>
          </div>
        </div>
        <p className="text-zinc-200">©{new Date().getFullYear()} - EKSO</p>
      </div>
      
      <div className=" mt-2 ml-4 mb-8 -mx-2 row-span-2 sm:col-span-4 col-start-5 col-end-8 sm:col-end-9 flex flex-col items-start ">
      <p className="mb-4">
          <strong className="ml-4 p-2 text-2xl text-zinc-200">Hakkımızda</strong> 
        </p>
          <div className="mx-2 ml-4 p-2 shadow-md">
            <p className='text-zinc-200'> Son teknolojinin tüm imkanlarını etkin bir şekilde kullanan Ekso Süt, çevreyi ve toplum sağlığını korumayı kendisine ilke edinen bir işletmedir. Şu anda sadece Ekici Peynir’den çıkan atık suyun doğaya yeniden kazandırılması için çalışan Ekso Süt, ilerleyen zamanlarda bulunduğu bölgede bulunan tüm işletmelerdeki atıkları doğaya kazandırma misyonuyla hareket etmektedir.</p>
          </div>
          </div>

          <div className=" mt-2 mb-8 -mx-2 row-span-2 sm:col-span-4 col-start-10 col-end-14 sm:col-end-15 flex flex-col items-start ">
              <div className="mx-2 ml-40">
              <img
              src="/images/logo.png" 
              alt="VPN Illustrasi"
              quality={100}
              className='w-72 h-56 opacity-40'
            />
            
              </div>
          </div>

    
    </div>
    
      
  </div>
  )
}
