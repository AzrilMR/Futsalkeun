import Image from "next/image";

export default function Jersey() {
    return(
        <div>
            <div className="relative h-65">
                        <Image 
                            src="/jersey.jpg"
                            alt="jersey"
                            fill
                            className="object-cover"
                        />
                        </div>
        </div>
    );
};