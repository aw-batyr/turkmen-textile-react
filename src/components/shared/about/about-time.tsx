import { cn } from "@/lib/utils";
import { FC } from "react";
import { Container } from "@/components/layout";
import { TimeCard } from "../";
import { useTranslate } from "@/hooks/use-translate";
import { useLangStore } from "@/store/lang";
import { times } from "@/data/home-time.data";

interface Props {
  className?: string;
}

export const AboutTime: FC<Props> = ({ className }) => {
  const lang = useLangStore((state) => state.lang);
  return (
    <section
      className={cn("bg-bg_surface_container py-10 md:py-[160px]", className)}
    >
      <Container>
        <h2 className="h2 mb-6">{times[useTranslate(lang)].title}</h2>
        <div className="flex flex-col md:flex-row items-center gap-6">
          {times[useTranslate(lang)].data.map((item) => (
            <TimeCard
              bottomClassName="!bg-white rounded-b-[2px]"
              {...item}
              key={item.name}
              className="w-full"
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
