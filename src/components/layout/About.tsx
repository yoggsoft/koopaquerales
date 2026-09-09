export default function About() {
  return (
    <section className="about grid" aria-labelledby="about-heading">
      <div className="container m-6 p-6 mx-auto max-w-3xl">
        <h2 id="about-heading" className="text-3xl font-bold mb-4">About</h2>
        <p className='text-lg md:text-xl leading-relaxed mb-4'>
          Singer-songwriter and guitarist from Venezuela now living in Brussels.
        </p>
        <p className='text-lg md:text-xl leading-relaxed mb-4'>
          Born in &apos;85, I grew up with MTV, so I was right there when world premiere videos from Linkin Park, Blink-182, and Papa Roach hit the screen.
        </p>
        <p className='text-lg md:text-xl leading-relaxed'>
          My sound draws from &apos;80s and early &apos;00s rock, but I&apos;m also a bit of a nerd—gaming and software development are big parts of my life too.
        </p>
      </div>
    </section>
  );
}
