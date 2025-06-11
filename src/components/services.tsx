import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Settings2, Sparkles, Zap } from "lucide-react";
import { ReactNode } from "react";
import { FaCar } from "react-icons/fa";

export default function Services() {
  return (
    <section
      id="services"
      className="bg-zinc-50 py-16 md:py-32 dark:bg-transparent"
    >
      <div className="@container mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            We Build Your Needs.
          </h2>
          <p className="mt-4">Discover our services</p>
        </div>
        <Card className="@min-4xl:max-w-full @min-4xl:grid-cols-3 @min-4xl:divide-x @min-4xl:divide-y-0 mx-auto mt-8 grid max-w-sm divide-y overflow-hidden shadow-zinc-950/5 *:text-center md:mt-16">
          <div className="group shadow-zinc-950/5">
            <CardHeader className="pb-3">
              <CardDecorator>
                <img
                  src="icons\3dsignageIconFIX-Photoroom.png"
                  alt=""
                  className="h-10 w-auto"
                />
              </CardDecorator>

              <h3 className="mt-6 font-medium">3D Signage</h3>
            </CardHeader>

            <CardContent>
              <p className="text-sm">
                Tingkatkan daya tarik visual bisnis Anda dengan 3D Signage yang
                elegan dan profesional.
              </p>
            </CardContent>
          </div>

          <div className="group shadow-zinc-950/5">
            <CardHeader className="pb-3">
              <CardDecorator>
                <img
                  src="icons\Signage-icon-FIX-Photoroom.png"
                  alt="Signage Icon"
                  className="h-10 w-auto"
                />
              </CardDecorator>

              <h3 className="mt-6 font-medium">Signboard</h3>
            </CardHeader>

            <CardContent>
              <p className="mt-3 text-sm">
                Kami hadir untuk menciptakan signboard berkualitas tinggi yang
                awet dan siap menjadi wajah terdepan usahamu.
              </p>
            </CardContent>
          </div>

          <div className="group shadow-zinc-950/5">
            <CardHeader className="pb-3">
              <CardDecorator>
                <img
                  src="icons\wall-wrapping-icon-FIX-Photoroom.png"
                  alt="wallwrapping icon"
                  className="h-10 w-auto"
                />
              </CardDecorator>

              <h3 className="mt-6 font-medium">Wall Wrapping</h3>
            </CardHeader>

            <CardContent>
              <p className="mt-3 text-sm">
                Maksimalkan potensi ruang bisnismu dengan wall wrapping yang
                inovatif dan berdampak visual kuat.
              </p>
            </CardContent>
          </div>

          <div className="group shadow-zinc-950/5">
            <CardHeader className="pb-3">
              <CardDecorator>
                <img
                  src="icons\Signage-icon-FIX-Photoroom.png"
                  alt="Billboard icon"
                  className="h-10 w-auto"
                />
              </CardDecorator>

              <h3 className="mt-6 font-medium">Billboard</h3>
            </CardHeader>

            <CardContent>
              <p className="mt-3 text-sm">
                Pastikan bisnismu bersinar paling terang di setiap sudut kota!
                Kami hadir untuk menciptakan billboard berkualitas tinggi yang
                menarik perhatian dan tahan cuaca ekstrem di Batam
              </p>
            </CardContent>
          </div>

          <div className="group shadow-zinc-950/5">
            <CardHeader className="pb-3">
              <CardDecorator>
                <FaCar className="size-10 text-gray-500" />
              </CardDecorator>

              <h3 className="mt-6 font-medium">Car Wrapping</h3>
            </CardHeader>

            <CardContent>
              <p className="mt-3 text-sm">
                Elements to functionality, you have complete control to create a
                unique experience.
              </p>
            </CardContent>
          </div>

          <div className="group shadow-zinc-950/5">
            <CardHeader className="pb-3">
              <CardDecorator>
                <img
                  src="icons\Signage-icon-FIX-Photoroom.png"
                  alt="Neonbox icon"
                  className="h-10 w-auto"
                />
              </CardDecorator>

              <h3 className="mt-6 font-medium">Neonbox</h3>
            </CardHeader>

            <CardContent>
              <p className="mt-3 text-sm">
                Ciptakan visibilitas maksimal dan kesan modern untuk usahamu.
                Kami menyediakan neon box profesional yang dirancang tahan lama
                dan memukau, sempurna untuk menarik pelanggan di jalanan Batam
                yang ramai.
              </p>
            </CardContent>
          </div>
        </Card>
      </div>
    </section>
  );
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div className="relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:bg-white/5 dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
    <div
      aria-hidden
      className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]"
    />
    <div
      aria-hidden
      className="bg-radial to-background absolute inset-0 from-transparent to-75%"
    />
    <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">
      {children}
    </div>
  </div>
);
