import Image from "next/image";
import Link from "next/link";

export default function Detail(){
    return(
        <div>

        <Link href="/sepatu">
                    <div className="absolute top-20 left-5">
                        <Image 
                        src="/arrow-left-line.png"
                        alt="kembali"
                        width={20}
                        height={20}
                        />
                    </div>
                    </Link>

            <h1 className="absolute top-30 left-165 text-4xl font-bold">ORTUSEIGHT-CATALYST LIBERTE V4</h1>
            <h2 className="absolute top-40 left-165 text-2xl mt-3 mb-3">Navy</h2>
            <h2 className="absolute top-50 left-165 text-2xl mt-3 mb-3">UKURAN</h2>
            <p className="absolute top-60 left-165 text-xl">39-40-41-42-43-44-45</p>
            <p className="absolute top-70 left-165 text-lg text-justify w-[700] bg-[#FAFAFA] opacity-75 p-7 rounded-xl inset-shadow-sm">Tampil klasik di lapangan dengan jersey retro legendaris AC Milan. 
            Desain ikonik Rossoneri dengan sponsor Opel yang akan membawa Anda kembali ke era keemasan sepak bola Italia.</p>
            <h2 className="absolute top-135 left-165 text-3xl">RP. 649,000.00</h2>
            <a href="https://wa.me/62895397432051"><button className="absolute top-145 left-165 text-2xl bg-[#204B57] text-white p-3 rounded-lg mt-3 hover:bg-black-200 cursor-pointer">BELI</button></a>
            <div className="bg-[#FAFAFA] m-8 p-5 shadow-lg rounded-xl w-[600] h-[600] flex">
                <Image
            src="/catalystliberte_v4_in_navyaqua.png"
            alt="ortuseight liberte v4"
            width={500}
            height={500}
            className="m-8"
            />
            </div>
        </div>
    );
};