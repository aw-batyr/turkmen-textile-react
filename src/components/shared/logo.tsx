import { cn } from "@/lib/utils";
import { FC } from "react";

interface Props {
  className?: string;
}

export const Logo: FC<Props> = ({ className }) => {
  return (
    <div className={cn("md:h-16 h-10 w-auto", className)}>
      <img src="/logo.svg" alt="logo" className="size-full object-cover" />
    </div>
  );
};
