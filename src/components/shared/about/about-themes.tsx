import { Container } from "@/components/layout";
import { cn } from "@/lib/utils";
import { FC } from "react";
import { ThemeCard } from "../theme-card";
import { themes } from "../home/home-theme";

interface Props {
  className?: string;
}

export const AboutThemes: FC<Props> = ({ className }) => {
  return (
    <section
      className={cn("relative w-full bg-[#FDE8C4] -z-10 py-10", className)}
    >
      <img
        src="/about-bg.svg"
        alt=""
        className="absolute top-0 left-0 size-full object-cover"
      />

      <Container>
        <h3 className="h2 mb-4">Отрасли</h3>
        <p className="text-lg text-on_surface_v mb-6">
          Мероприятие объединит ключевых игроков в таких отраслях, как:
        </p>

        <div className="grid md:grid-cols-4 grid-cols-2 gap-6">
          {themes.map((item) => (
            <ThemeCard
              className="!bg-teritary_surface_container"
              key={item.title}
              {...item}
            />
          ))}
        </div>

        <div className="flex items-center gap-3 mt-8 text-on_surface_v text-lg">
          <div className="md:w-1 w-4 md:h-[38px] h-40 bg-teritary_08" />
          <p className="text-18">
            Участники смогут продемонстрировать свои инновационные решения,
            наладить взаимовыгодные партнерства и выйти на новые рынки.
          </p>
        </div>
      </Container>
    </section>
  );
};
