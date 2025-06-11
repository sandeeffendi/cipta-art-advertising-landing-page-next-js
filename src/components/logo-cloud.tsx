import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import Image from "next/image";

export const LogoCloud = () => {
  return (
    <section className="bg-background pb-16 md:pb-32">
      <div className="group relative m-auto max-w-6xl px-6">
        <div className="flex flex-col items-center md:flex-row">
          <div className="inline md:max-w-44 md:border-r md:pr-6">
            <p className="text-end text-sm">Discover Our Clients</p>
          </div>
          <div className="relative py-6 md:w-[calc(100%-11rem)] ">
            <InfiniteSlider speedOnHover={20} speed={40} gap={112}>
              <div className="flex">
                <Image
                  className="mx-auto h-10 w-fit dark:invert"
                  src="img/infineonlogo.png"
                  alt="Infineon Logo"
                  height={20}
                  width={20}
                  style={{ height: "auto", width: "100%" }}
                />
              </div>

              <div className="flex">
                <Image
                  className="mx-auto h-10 w-fit dark:invert"
                  src="img\BP-Batam-Arti-Logo-2-Photoroom.png"
                  alt="BP Batam Logo"
                  height={20}
                  width={20}
                  style={{ height: 'auto', width: '100%' }}
                />
              </div>
              <div className="flex">
                <Image
                  className="mx-auto h-30 w-fit dark:invert"
                  src="img\alconLogo-(2).png"
                  alt="Alcon Logo"
                  height={30}
                  width={30}
                  style={{ height: 'auto', width: '100%' }}
                />
              </div>
              <div className="flex">
                <Image
                  className="mx-auto h-8 w-fit dark:invert"
                  src="img\j&tLogo-Photoroom.png"
                  alt="JNT Logo"
                  height={20}
                  width={20}
                  style={{ height: 'auto', width: '100%' }}
                />
              </div>
              <div className="flex">
                <Image
                  className="mx-auto h-13 w-fit dark:invert"
                  src="img\polologo.png"
                  alt="Polo Ralph Lauren Logo"
                  height={20}
                  width={20}
                  style={{ height: 'auto', width: '100%' }}
                />
              </div>
            </InfiniteSlider>

            <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
            <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
            <ProgressiveBlur
              className="pointer-events-none absolute left-0 top-0 h-full w-20"
              direction="left"
              blurIntensity={1}
            />
            <ProgressiveBlur
              className="pointer-events-none absolute right-0 top-0 h-full w-20"
              direction="right"
              blurIntensity={1}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
