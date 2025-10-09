import Image from "next/image";

export default function Contact() {
    return (
        <div>
            <h1 className="text-2xl absolute top-30 left-15 size-50 ... font-bold m-10">Hubungi kami</h1>
            <p className="text-xl absolute top-50 left-25">Menerima layanan daring mulai dari pukul 08.00-17.00.</p>
            <div className="absolute inset-y-50 right-25 w-75 ...">
                <Image className="rounded-xl"
                src = "/images.jpeg"
                alt = "image"
                width = {500}
                height ={500}
                />
            </div>

            <div className="absolute inset-y-60 left-35 w-20..">

                <a href="https://www.instagram.com/azrilllmuhammad?igsh=dXZhdXhjZmZpNXh0">
                <h3 className="mb-5">@futsalkeun_id</h3>
                </a>

                <a href="https://www.facebook.com/share/18EVGDr9br">
                <h3 className="mb-5">Futsalkeun</h3>
                </a>

                <a href="mailto:azril3121@email.com">
                <h3 className="mb-5">futsalkeun1428@gmail.com</h3>
                </a>

                <a href="https://wa.me/62895397432051">
                <h3>+62 895-3974-32051</h3>
                </a>
            </div>

            <div className="absolute inset-y-60 left-25 w-20..">

                <Image  className="mb-3"
                src = "/instagram.png"
                alt = "instagram"
                width = {30}
                height = {30}
                />

                <Image  className="mb-3"
                src = "/facebook.png"
                alt = "facebook"
                width = {30}
                height = {30}
                />

                <Image  className="mb-3"
                src = "/mail.png"
                alt = "email"
                width = {30}
                height = {30}
                />

                <Image className="mb-3"
                src = "/whatsapp.png"
                alt = "whatsapp"
                width = {30}
                height = {30}
                />

            </div>
        </div>
    );
};