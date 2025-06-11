import { Cpu, Lock, Sparkles, Zap } from "lucide-react";

export default function WhyUs() {
  return (
    <section id="whyUs" className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
        <div className="mx-auto max-w-xl space-y-6 text-center md:space-y-12 ">
          <h2 className="text-balance text-4xl font-medium lg:text-5xl">
            Why Choose Us?
          </h2>
          <div>
            <p className="font-bold">
              Pengalaman Tak Tertandingi & Rekam Jejak Terbukti
            </p>
            <p className="mt-1">
              Dengan lebih dari 20 tahun di industri ini, kami membawa kedalaman
              pengetahuan dan keahlian yang sulit ditandingi.
            </p>
          </div>
        </div>
        {/* <Image
          className="rounded-(--radius) grayscale"
          src="/img/3d-backlite-project.png"
          alt="team image"
          fill
          loading="lazy"
        /> */}

        <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Zap className="size-4" />
              <h3 className="text-sm font-medium">
                Pengalaman Tak Tertandingi
              </h3>
            </div>
            <p className="text-muted-foreground text-sm">
              20+ tahun di industri ini berarti kami memahami setiap nuansa dan
              tantangan reklame di Batam.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Cpu className="size-4" />
              <h3 className="text-sm font-medium">Layanan Komprehensif</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Kami adalah one-stop solution untuk semua kebutuhan visual
              bisnismu.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Lock className="size-4" />
              <h3 className="text-sm font-medium">Aftersales Services</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Komitmen kami tidak berhenti di instalasi, kami siap membantu Kamu
              kapan pun dibutuhkan.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Sparkles className="size-4" />

              <h3 className="text-sm font-medium">Newest Technology</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Kami berinvestasi pada teknologi terbaru, memberikan output
              reklame paling modern untuk bisnis Kamu.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
