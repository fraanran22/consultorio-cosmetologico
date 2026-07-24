//Seccion principal de bienvenida para la landing
export function Hero() {
    const whatsappNumber = "5493401412237";
    const whatsappMessage = "Hola Cande, ¿cómo estás? Soy ... y quería saber qué días estas trabajando.";
    // creamos una URL segura para abrir whatsapp con un mensaje
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    return (
        <section className="w-full bg-[#fff9f2] px-6 py-20">
            <p className="mb-4 text-sm font-medium text-[#f7941d]">
                COSMETOLOGIA PROFESIONAL
            </p>
            <h1 className="max-w-xl text-4xl font-semibold text-black">
                TU PIEL ESTÁ EN LAS MEJORES MANOS
            </h1>
            <p className= "mt-6 max-w-lg text-lg text-zinc-600">
                Tratamientos personalizados para cuidar, renovar y realzar la salud de tu piel.
            </p>
            <a 
                className="mt-8 inline-flex rounded-full bg-[#f7941d] px-6 py-3 font-medium text-black"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
            >
                Solicitá tu turno
            </a>
        </section>
    );
}