import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Slider from "@/components/Slider";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ekso Süt</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-red-600">
        <Navbar />
        {/*main*/}
        <div className="mt-0">
          <section className="h-110 bg-gradient-to-b from-red-800 to-red-600 ">
            <Slider/>
          </section>
        </div>
        <h1 className="uppercase text-3xl font-serif text-center mb-3 text-zinc-200 shadow-md">
            ÜRÜNLERİMİZ
          </h1>

        <div className="mt-20 inline-flex space-x-44 items-center shadow-md">
          <div className="ml-24">
            <div className="p-10 rounded-2xl border-2 border-gray-300 hover:bg-red-800 w-80">
              <Link href="/urunler/50demineralizepast">
                <div className="flex justify-center">
                  <img src="/urunler/kirmizi.png" alt="kirmizi" className="" />
                </div>

                <div className="flex justify-center mt-3">
                  <span className="font-normal text-2xl text-zinc-200">
                    %50 Demineralize Süt
                  </span>
                </div>
              </Link>
            </div>
          </div>
          <div className="p-10 rounded-2xl border-2 border-gray-300 hover:bg-red-800 w-80">
            <Link href="/urunler/70demineralizepast">
              <div className="flex justify-center">
                <img src="/urunler/mavi.png" alt="mavi" className="" />
              </div>
              <div className="flex justify-center mt-3">
                <span className="font-normal text-2xl text-zinc-200">
                  %70 Demineralize Süt
                </span>
              </div>
            </Link>
          </div>
          <div className="p-10 rounded-2xl border-2 border-gray-300 hover:bg-red-800 w-80">
            <Link href="/urunler/yagsizsuttozu">
              <div className="flex justify-center">
                <img src="/urunler/yesil.png" alt="yesil" className="" />
              </div>

              <div className="flex justify-center mt-3">
                <span className="font-normal text-2xl text-zinc-200">
                  Yağsız Süt Tozu
                </span>
              </div>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}