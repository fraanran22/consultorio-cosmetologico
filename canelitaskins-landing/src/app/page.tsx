import Image from "next/image";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero"; 

export default function Home() {
  //Datos temporales para el boton principal de whatsapp
    const whatsappNumber = "5493401412237";
    const whatsappMessage = "Hola Cande, ¿cómo estás? Soy ... y quería saber qué días estas trabajando.";
        
    //Creamos una URL segura con el numeroo y el mensaje.
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage,
    )}`;
  return (
    <>
    <Header />
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Hero />
      </main>
  </>
  );
}
