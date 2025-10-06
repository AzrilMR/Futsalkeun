import Image from "next/image";

export default function Home() {

    return(
        <div>
            <div className="relative h-65">
            <Image 
                src="/pxfuel.jpg"
                alt="sepatu"
                fill
                className="object-cover"
            />
            </div>
        </div>
    );
};                                  