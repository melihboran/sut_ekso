import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import React from "react";
import Link from "next/link";

export default function demineralizepast() {
  return (
    <>
    <Head>
      <title>%50 Demineralize Past</title>
    </Head>
    <div className="bg-cream">
      <Navbar />
    
      <div className="flex mt-20 justify-center">
        <div className="mr-11 border-2 border-gray-200 rounded-lg flex items-center p-3 ">
          <img
            src="/urunler/kirmizi.png"
            alt="kirmizi"
            className="w-40 h-96 mr-2"
          />
        </div>
        <div className="border-2 border-gray-200 p-4 rounded-xl w-96 ">
          <h1 className="uppercase text-3xl font-bold text-black w-96">
            %50 Demineralize Süt
          </h1>
          <p className="font-googlefont text-lg text-black mt-2">
            Çiğ sütlerin peynir olup sonrasında taze peynir altı sularının
            demineralize işlemi ve kurutma teknikleri ile elde edilen toz
            halindeki üründür. Bisküvi, çikolata, pasta gibi gıda sanayiye uygun
            olup, katkı maddesi olarak kullanılır. Süt ve süt ürünleri
            grubundadır
          </p>

        </div>
        
        <Link href="/urunler/70demineralizepast">
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
