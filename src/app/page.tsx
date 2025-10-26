import Image from "next/image";
import Link from "next/link";

export default function Home() {

    return(
        <div>
            <div className="relative h-80">
            <Image 
                src="/home.jpg"
                alt="Home"              
                fill
                className="object-cover"
            />
            </div>
            <h1 className="m-8 p-5 bg-[#204B57] w text-white text-4xl rounded text-center">Rekomendasi Dari Kami</h1>

            <div className="flex flex-row justify-center flex-wrap">

            <Link href="/detail_ortuslyberte">
            <div className="m-8 p-5 bg-[#FAFAFA] shadow-lg w-[250] h-[310] rounded-xl hover:bg-gray-200">
                <Image className="rotate-14 m-5 " 
                    src="/catalystliberte_v4_in.png"
                    alt="sepatu1"
                    width={150}
                    height={100}
                />
                <h3>ORTUSEIGHT-CATALYST LIBERTE V4</h3>
                <p className="text-xs">Navy</p>
                <p>RP.649,000.00</p>
            </div>
            </Link>

            <Link href="/detail_specsreacto">
             <div className="m-8 p-6 bg-[#FAFAFA] shadow-lg w-[250] h-[310] rounded-xl hover:bg-gray-200">
                <Image className="rotate-14 m-5" 
                    src="/SPECS_REACTO_DEVIANT_PRO_IN.png"
                    alt="sepatu2"
                    width={150}
                    height={100}
                />
                <h3>SPECS-REACTO DEVIANT IN</h3>
                <p className="text-xs">Putih</p>
                <p>RP.499,000.00</p>
            </div>
            </Link>
    
            <Link href="/detail_ortusjogosala">
            <div className="m-8 p-5 bg-[#FAFAFA] shadow-lg w-[250] h-[310] rounded-xl hover:bg-gray-200">
                <Image className="rotate-14 m-5" 
                    src="/JOGOSALA_VANQUISh_GREY.png"
                    alt="sepatu3"
                    width={150}
                    height={100}
                />
                <h3>ORTUSEIGHT-JOGOSALA VANQUISH</h3>
                <p className="text-xs">Abu-abu</p>
                <p>RP.399,000.00</p>
            </div>
            </Link>

            <Link href="/detail_specsessorer">
            <div className="m-8 p-6 bg-[#FAFAFA] shadow-lg w-[250] h-[310] rounded-xl hover:bg-gray-200">
                <Image className="rotate-14 m-5" 
                    src="/SPECS_ESSORER_INDESSERT_FLOWER.png"
                    alt="sepatu4"
                    width={150}
                    height={100}
                />
                <h3>SPECS-ESSORER IN DESSERT FLOWER</h3>
                <p className="text-xs">Pink</p>
                <p>RP.299,550.00</p>
            </div>
            </Link>

            </div>

             <div className="relative h-70 mt-20 mb-20">
            <Image 
                src="/jerseytim.jpg"
                alt="Home2"              
                fill
                className="object-cover"
            />
            </div>

           
          <div className="flex flex-row justify-center flex-wrap">
            <Link href="/detail_jerseymilan">
            <div className="m-8 p-5 bg-[#FAFAFA] shadow-lg w-[250] h-[310] rounded-xl hover:bg-gray-200">
                <Image className="m-5" 
                    src="/Ac_Milan.png"
                    alt="jersey"
                    width={150}
                    height={100}
                />
                <h3 className="mb-3">AC MILAN HOME JERSEY 95/96</h3>
                <p>RP.799,000.00</p>
            </div>
            </Link>
            
            <Link href="/detail_jerseycity">
            <div className="m-8 p-5 bg-[#FAFAFA] shadow-lg w-[250] h-[310] rounded-xl hover:bg-gray-200">
                <Image className="m-7" 
                    src="/city away.jpg"
                    alt="jersey"
                    width={130}
                    height={100}
                />
                <h3 className="mb-3">MANCHESTER CITY AWAY 25/26</h3>
                <p>RP.650,000.00</p>
            </div>
            </Link>

            <Link href="/detail_jerseymadrid">
           <div className="m-8 p-5 bg-[#FAFAFA] shadow-lg w-[250] h-[310] rounded-xl hover:bg-gray-200">
                <Image className="m-5" 
                    src="/Rma_away.png"
                    alt="jersey"
                    width={150}
                    height={100}
                />
                <h3 className="mb-3">REAL MADRID AWAY JERSEY 25/26</h3>
                <p>RP.699,999.99</p>
            </div>
            </Link>

            <Link href="/detail_jerseydortmund">
           <div className="m-8 p-5 bg-[#FAFAFA] shadow-lg w-[250] h-[310] rounded-xl hover:bg-gray-200">
                <Image className="m-5" 
                    src="/dortmund_home.png"
                    alt="jersey"
                    width={150}
                    height={100}
                />
                <h3 className="mb-3">BORUSSIA DORTMUND HOME JERSEY 25/26</h3>
                <p>RP.540,000.00</p>
            </div>
            </Link>

            </div>

        </div>
    );
};                                  