import Image from "next/image";

export default function Aksesoris() {
    return(
        <div>
            <div className="relative h-65">
                        <Image 
                            src="/aksesoris.jpeg"
                            alt="aksesoris"
                            fill
                            className="object-cover"
                        />
                        </div>
        </div>
    );
};