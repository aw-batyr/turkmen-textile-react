import { Container } from "@/components/layout";
import { cn } from "@/lib/utils";
import { FC } from "react";
import { ThemeCard } from "../theme-card";
import { useLangStore } from "@/store/lang";
import { useTranslate } from "@/hooks/use-translate";
import { homeTheme } from "@/data/home/home-theme.data";

interface Props {
  className?: string;
}

export const AboutThemes: FC<Props> = ({ className }) => {
  const lang = useLangStore((state) => state.lang);

  return (
    <section
      className={cn("relative w-full bg-[#FDEDEE] -z-10 py-10", className)}
    >
      <Container>
        <h3 className="h2 mb-4">Отрасли</h3>
        <p className="text-lg text-primary_09 mb-6">
          Мероприятие объединит ключевых игроков в таких отраслях, как:
        </p>

        <div className="grid md:grid-cols-4 grid-cols-2 gap-6">
          {homeTheme[useTranslate(lang)].data.map((item) => (
            <ThemeCard className="!bg-[#F5F4F4]" key={item.title} {...item} />
          ))}
        </div>

        <div className="flex items-center gap-3 mt-8 text-on_surface_v text-lg">
          <div className="md:w-1 w-4 md:h-[38px] h-40 bg-primary_09" />
          <p className="text-18 !text-primary_09">
            Участники смогут продемонстрировать свои инновационные решения,
            наладить взаимовыгодные партнерства и выйти на новые рынки.
          </p>
        </div>
      </Container>
    </section>
  );
};
