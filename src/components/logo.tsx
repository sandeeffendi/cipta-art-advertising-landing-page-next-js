import { cn } from "../lib/utils";
import clsx from "clsx";

export const Logo = ({
  className,
  uniColor,
}: {
  className?: string;
  uniColor?: boolean;
}) => {
  return (
    <img
      src="img\CiptaArtLogo2-Photoroom.png"
      alt=""
      className={cn("text-foreground h-10 w-auto", className)}
    />
  );
};

export const LogoIcon = ({
  className,
  uniColor,
}: {
  className?: string;
  uniColor?: boolean;
}) => {
  return (
    <img
      src="img\CiptaArtLogo2-Photoroom.png"
      alt=""
      className={cn("text-foreground h-5 w-auto", className)}
    />
  );
};

export const LogoStroke = ({ className }: { className?: string }) => {
  return (
    <img
      src="img\CiptaArtLogo2-Photoroom.png"
      alt=""
      className={cn("text-foreground h-5 w-auto", className)}
    />
  );
};
