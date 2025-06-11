import Image from "next/image";

export default function Projects() {
  return (
    <section id="project" className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">
          Discover our projects
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          <div className="relative mb-6 sm:mb-0">
            <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
              <Image
                src="/img/3d-signage-project-dark.png"
                className="hidden rounded-[15px] dark:block"
                alt="3d Signage dark"
                width={1207}
                height={929}
              />
              <Image
                src="/img/3d-signage-project.png"
                className="rounded-[15px] shadow dark:hidden"
                alt="3d Signage light"
                width={1207}
                height={929}
              />
            </div>
          </div>

          <div className="relative space-y-4">
            <h1 className="text-muted-foreground font-bold text-left text-4xl">
              3D Signage
            </h1>
            <p className="text-muted-foreground">
              3D Signage memberikan kesan eksklusif dan profesional,
              menjadikannya pilihan populer bagi berbagai jenis bisnis. Umumnya
              digunakan sebagai elemen identitas visual dan dekorasi interior di
              area seperti resepsionis, rooftop, fasad bangunan, hingga ruang
              publik.
            </p>
            <p className="text-muted-foreground">
              3D Signage dapat dibuat dari berbagai bahan seperti akrilik,
              stainless steel, aluminium, dan besi semua dapat disesuaikan
              dengan kebutuhan dan selera pelanggan.
            </p>

            <div className="pt-6">
              <blockquote className="border-l-4 pl-4 italic font-semibold">
                <p>
                  Memberi dimensi nyata pada brand kamu dengan signage yang
                  menonjol dan elegan.
                </p>
              </blockquote>
            </div>
          </div>

          <div className="relative space-y-4">
            <h1 className="text-muted-foreground font-bold text-right text-4xl">
              Backlite Letter Sign
            </h1>
            <p className="text-muted-foreground text-right">
              Backlite Letter Sign adalah jenis signage huruf timbul dengan
              pencahayaan dari belakang (backlit), menghasilkan efek cahaya yang
              lembut dan mewah. Cocok untuk kebutuhan branding yang ingin tampil
              eksklusif, baik di luar ruangan maupun dalam ruangan—seperti di
              fasad gedung, lobi kantor, toko retail, dan ruang pamer.
            </p>
            <p className="text-muted-foreground text-right">
              Cocok untuk kebutuhan branding yang ingin tampil eksklusif, baik
              di luar ruangan maupun dalam ruangan seperti di fasad gedung, lobi
              kantor, toko retail, dan showroom.
            </p>

            <div className="pt-6">
              <blockquote className="border-r-4 pr-4">
                <p className="text-right italic font-semibold">
                  Ciptakan kesan elegan di siang hari dan tampil memukau di
                  malam hari.
                </p>
              </blockquote>
            </div>
          </div>
          <div className="relative mb-6 sm:mb-0">
            <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
              <Image
                src="/img/3d-backlite-project-dark.png"
                className="hidden rounded-[15px] dark:block"
                alt="Letter Sign Dark"
                width={1207}
                height={929}
              />
              <Image
                src="/img/3d-backlite-project.png"
                className="rounded-[15px] shadow dark:hidden"
                alt="Letter Sign Light"
                width={1207}
                height={929}
              />
            </div>
          </div>

          <div className="relative mb-6 sm:mb-0">
            <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
              <Image
                src="/img/BP-cargo-3dSignage-dark.png"
                className="hidden rounded-[15px] dark:block"
                alt="Facade Sign Dark"
                width={1207}
                height={929}
              />
              <Image
                src="/img/BP-cargo-3dSignage.png"
                className="rounded-[15px] shadow dark:hidden"
                alt="Facade Sign Light"
                width={1207}
                height={929}
              />
            </div>
          </div>

          <div className="relative space-y-4">
            <h1 className="text-muted-foreground font-bold text-left text-4xl">
              Facade Sign
            </h1>
            <p className="text-muted-foreground">
              Facade Sign adalah papan nama yang dipasang pada bagian depan
              bangunan yang berfungsi sebagai penanda utama sekaligus elemen
              branding yang menarik perhatian. Dengan desain yang mencolok dan
              material tahan cuaca, Facade Sign cocok untuk toko, kantor, kafe,
              dan berbagai jenis bisnis lainnya. Tersedia dalam berbagai pilihan
              bentuk, ukuran, dan bahan seperti akrilik, galvanis, maupun
              stainless steel—semua dapat disesuaikan dengan konsep visual usaha
              Kamu.
            </p>
            <p className="text-muted-foreground">
              Tersedia dalam berbagai pilihan bentuk, ukuran, dan bahan seperti
              akrilik, galvanis, maupun stainless steel semua dapat disesuaikan
              dengan konsep visual usaha Kamu.
            </p>

            <div className="pt-6">
              <blockquote className="border-l-4 pl-4 italic font-semibold">
                <p>
                  Beri kesan pertama yang kuat dengan signage yang mencerminkan
                  identitas bisnis Anda.
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
