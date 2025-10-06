import Image from "next/image";

export default function Home() {

    return(
        <div>
            <div className="relative h-65">
            <Image 
                src="/home.jpg"
                alt="Home"              
                fill
                className="object-cover"
            />
            </div>
            <h1 className="m-8 p-5 bg-[#204B57] w-[300] text-white text-4xl rounded-xl">Apa yang baru dari kami</h1>
        </div>
    );
};                                  