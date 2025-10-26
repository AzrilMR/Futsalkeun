import Image from "next/image";

export default function Contact() {
    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            <h1 className="text-2xl font-bold m-10 text-center">Hubungi kami</h1>
            <div className="flex flex-col gap-4">
            <p className="text-xl">Menerima layanan daring mulai dari pukul 08.00-17.00.</p>
            
            <h2>Ikuti Sosial Media Kami:</h2>
             <div className="flex flex-col gap-4 bg-[#FAFAFA] shadow-xl p-6 rounded-md w-[400]">

                <div className=" flex flex-row gap-4">
                <Image  
                src = "/Instagram.png"
                alt = "instagram"
                width = {30}
                height = {30}
                />
                <a href="https://www.instagram.com/azrilllmuhammad?igsh=dXZhdXhjZmZpNXh0">
                <h3 className="hover:underline">@futsalkeun_id</h3>
                </a>
                </div>

                <div className=" flex flex-row gap-4">
                <Image 
                src = "/Facebook.png"
                alt = "facebook"
                width = {30}
                height = {30}
                />
                <a href="https://www.facebook.com/share/18EVGDr9br">
                <h3 className="hover:underline">Futsalkeun</h3>
                </a>
                </div>

                <div className="flex flex-row gap-4">
                <Image 
                src = "/Mail.png"
                alt = "email"
                width = {30}
                height = {30}
                />
                <a href="mailto:azril3121@email.com">
                <h3 className="hover:underline">futsalkeun1428@gmail.com</h3>
                </a>
                </div>

                <div className="flex flex-row gap-4">
                <Image 
                src = "/Whatsapp.png"
                alt = "whatsapp"
                width = {30}
                height = {30}
                />
                <a href="https://wa.me/62895397432051">
                <h3 className="hover:underline">+62 895-3974-32051</h3>
                </a>
                </div>
            </div>

            <div className="">
            <h2>Kunjungi Juga Toko Kami</h2>
            <h3>Lokasi:</h3>

                <div className="flex flex-row gap-4 mt-2">
                <Image 
                src = "/map-pin-line.svg"
                alt = "map"
                width = {30}
                height = {30}
                />
                <p className="hover:underline">Jl. Terusan Pasir Koja kel. Sukahaji Kec. Babakan Ciparay </p>
                </div>

                </div>

            </div>
        </div>
    );
};