import Image from "next/image";

export default function About() {
    return(
        <div className="m-10">
            <h1 className="text-2xl absolute top-30 left-15 size-50 ... font-bold m-10">Tentang Kami</h1>
            <p className=" w-[600] text-justify text-xl absolute top-50 left-25 text-sm">Futsalkeun dibuat untuk membantu anda dalam pemilihan produk produk kami
            yang berkualitas dan terpercaya. Kami menyediakan berbagai macam perlengkapan futsal seperti jersey, sepatu, dan aksesoris lainnya.
            </p>
            <div className="absolute inset-y-40 right-25 w-60 ... inset-shadow-sm...">
            <Image className="rounded-xl"
            src="/iconn.png"
            alt= "icon"
            width={500}
            height={500}
            />
            </div>
        </div>
    );
};                                                                                                                                                                                                                                          
