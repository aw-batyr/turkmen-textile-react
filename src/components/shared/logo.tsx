import { cn } from "@/lib/utils";
import { FC } from "react";

interface Props {
  className?: string;
}

export const Logo: FC<Props> = ({ className }) => {
  return (
    <div className={cn("xl:h-14 h-10 w-auto", className)}>
      <img src="/logo.svg" alt="logo" className="size-full object-contain" />
    </div>
  );
};
