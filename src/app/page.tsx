import { Header, About, Hero, Media, Footer } from '@/components';

export default function Home() {
  return (
    <>
      <Header />
      <main className='mt-40 md:mt-24'>
        <Hero />
        <About />
        <Media />
      </main>
      <Footer />
    </>
  );
}
