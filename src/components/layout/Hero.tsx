import Image from "next/image";

export default function Hero() {
  return (
    <section className='h-screen'>
      <Image
        src="/img/DMA_6812.jpg"
        width={1785}
        height={958}
        className="object-cover w-full h-full z-10 grayscale"
        alt="koopa-querales-hero"
        title="Koopa Querales"
      />
    </section>
  );
}
