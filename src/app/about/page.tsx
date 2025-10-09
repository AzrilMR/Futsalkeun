import Image from "next/image";

export default function About() {
    return(
        <div className="m-10">
            <h1 className="text-2xl absolute top-20 left-20 size-50 ... font-bold m-10">Tentang Kami</h1>
            <p className=" w-[500] p-5 m-20 text-justify">Futsalkeun dibuat untuk membantu anda dalam pemilihan produk produk kami
            yang berkualitas dan terpercaya. Kami menyediakan berbagai macam perlengkapan futsal seperti jersey, sepatu, dan aksesoris lainnya.
            </p>
            <div className="absolute inset-y-30 right-25 w-60 ... inset-shadow-sm...">
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
