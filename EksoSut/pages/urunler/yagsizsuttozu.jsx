import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";
import Link from "next/link";

export default function yagsizsuttozu() {
  return (
    <>
    <Head>
      <title>Yağsız Süt Tozu</title>
    </Head>
    <div className="bg-cream">
      <Navbar />
      <Link href="/urunler/70demineralizepast">
         <div className="mt-36 absolute bottom-64 left-4 text-red-600 opacity-80">

         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-68 h-14">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
</svg>

         </div>
        </Link>

      <div className="flex mt-20 justify-center">
        <div className="mr-11 border-2 border-gray-200 rounded-lg flex items-center p-3">
          <img
            src="/urunler/yesil.png"
            alt="yesil"
            className="w-40 h-96 mr-2"
          />
        </div>
        <div className="border-2 border-gray-200 p-4 rounded-xl w-96 ">
          <h1 className="uppercase text-3xl font-bold text-black">
            Yağsız Süt Tozu
          </h1>
          <p className="font-googlefont text-lg text-black">
            Çiğ sütlerin suyunu kurutularak uzaklaştırılması ile elde edilen toz
            halindeki üründür. Gıda sanayi için uygundur. Süt ve süt ürünleri
            grubundadır
          </p>
        </div>
      </div>
      <Footer />
    </div>
    </>
    
  );
}
