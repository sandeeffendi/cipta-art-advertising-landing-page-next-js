export default function Experience() {
  return (
    <section id="experience" className="py-12 md:py-20">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
          <h2 className="text-4xl font-semibold lg:text-5xl">
            Our Experience In Numbers
          </h2>
          <p>
            <strong>Cipta Art Advertising</strong> bukan sekadar penyedia
            reklame kami adalah mitra visual yang membantu bisnis tampil
            menonjol. Dengan pengalaman lebih dari dua tahun di industri
            periklanan, kami telah mendukung puluhan brand membangun identitas
            visual yang kuat.
          </p>
        </div>

        <div className="grid gap-0.5 *:text-center md:grid-cols-3 dark:[--color-muted:var(--color-zinc-900)]">
          <div className="bg-muted rounded-(--radius) space-y-4 py-12 px-2">
            <div className="text-5xl font-bold">+1000</div>
            <p>
              <strong>Projects</strong> delivered with quality and precision
            </p>
          </div>
          <div className="bg-muted rounded-(--radius) space-y-4 py-12 px-2">
            <div className="text-5xl font-bold">100+</div>
            <p>
              <strong>Clients</strong> across various business sectors
            </p>
          </div>
          <div className="bg-muted rounded-(--radius) space-y-4 py-12 px-2">
            <div className="text-5xl font-bold">20+</div>
            <p>
              <strong>Years</strong> in the signage and advertising industry
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
