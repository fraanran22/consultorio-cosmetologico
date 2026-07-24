import Image from "next/image";

// Cabecera reutilizable de Canelita Skin.
export function Header() {
  return (
    <header className="flex w-full items-center px-6 py-4">
      <Image
        src="/images/logo-canelita.png"
        alt="Logo de Canelita Skin"
        width={190}
        height={86}
      />
    </header>
  );
}
