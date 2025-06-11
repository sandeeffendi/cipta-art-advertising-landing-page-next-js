import { cn } from "../lib/utils";
import Image from "next/image";

export const Logo = ({
  className,
}: {
  className?: string;
  uniColor?: boolean;
}) => {
  return (
    <Image
      src="/img/CiptaArtLogo2-Photoroom.png"
      alt=""
      height={10}
      width={10}
      className={cn("text-foreground h-10 w-auto", className)}
    />
  );
};

export const LogoIcon = ({
  className,
}: {
  className?: string;
  uniColor?: boolean;
}) => {
  return (
    <Image
      src="/img/CiptaArtLogo2-Photoroom.png"
      alt=""
      height={5}
      width={5}
      className={cn("text-foreground h-5 w-auto", className)}
    />
  );
};

export const LogoStroke = ({ className }: { className?: string }) => {
  return (
    <Image
      src="/img/CiptaArtLogo2-Photoroom.png"
      alt=""
      className={cn("text-foreground h-5 w-auto", className)}
    />
  );
};
