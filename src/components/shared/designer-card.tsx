import { FC } from "react";
import { cn } from "@/lib/utils";

interface Props {
  imgUrl: string;
  name: string;
  info: string;
  className?: string;
}

export const DesignerCard: FC<Props> = ({ className, ...props }) => {
  return (
    <article
      className={cn(
        "relative bg-[url('/impressions/card-bg.png')] bg-no-repeat h-[326px] overflow-hidden",
        className
      )}
    >
      <img
        src="/impressions/card-bg-bg.png"
        className="absolute top-2.5 left-2.5 -z-10 size-full"
      />

      <div className="flex items-center gap-4">
        <img
          src={props.imgUrl}
          alt=""
          className="flex-[0_0_44%] object-contain overflow-hidden"
        />

        <div className="flex-auto z-20">
          <h3>{props.name}</h3>
          <p>{props.info}</p>
        </div>
      </div>
    </article>
  );
};
