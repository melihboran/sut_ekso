import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";
import Link from "next/link";

export default function demineralizepast() {
  return (
    <>
    <Head>
      <title>%70 Demineralize Past</title>
    </Head>
    <div className="bg-cream">
      <Navbar />
      <Link href="/urunler/50demineralizepast">
         <div className="mt-36 absolute bottom-64 left-4 text-red-600 opacity-80">

         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-68 h-14">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
</svg>

         </div>
        </Link>

      <div className="flex mt-20 justify-center">
        <div className="mr-11 border-2 border-gray-200 rounded-lg p-3 flex items-center">
          <img src="/urunler/mavi.png" alt="mavi" className="w-40 h-96 mr-2" />
        </div>
        <div className="border-2 border-gray-00 p-4 rounded-xl w-96">
          <h1 className="uppercase text-3xl font-bold text-black w-96">
            %70 Demineralize Süt
          </h1>
          <p className="font-googlefont text-lg text-black mt-2">
            Çiğ sütlerin peynir olup sonrasında taze peynir altı sularının extra
            demineralize işlemi ve kurutma teknikleri ile elde edilen toz
            halindeki üründür. Bisküvi, çikolata, pasta gibi gıda sanayiye uygun
            olup, katkı maddesi olarak kullanılır. Süt ve süt ürünleri
            grubundadır
          </p>
        </div>
        <Link href="/urunler/yagsizsuttozu">
         <div className="mt-36 absolute bottom-15 right-4 text-red-600 opacity-80">

         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-68 h-14">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
</svg>  
         </div>
        </Link>
      </div>
      <Footer />
    </div>
    </>
    
  );
}
