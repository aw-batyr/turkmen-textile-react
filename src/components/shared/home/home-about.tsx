import { FC } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import { Container } from "@/components/layout";
import { AboutCard } from "../about-card";

const data = [
  {
    nums: "8,400 m²",
    text: "выставочной площади",
  },
  {
    nums: "10000+",
    text: "Посетители посетят выставку",
  },
  {
    nums: "100+",
    text: "Экспоненты из более чем 30 стран",
  },
  {
    nums: "80%",
    text: "Участники принимают участие в принятии решений о закупках",
  },
];

export const HomeAbout: FC = () => {
  const [ebmblaRef] = useEmblaCarousel();

  return (
    <section>
      <Container className="flex flex-col gap-6">
        <div className="text-center">
          <h2 className="h2 md:mb-3 mb-6 text-left sm:text-center">
            Выставка-ярмарка «TurkmenTextile Expo 2025» в Ашхабаде{" "}
          </h2>
          <p className="md:text-base text-sm normal text-left sm:text-center text-[#454545]">
            Глобальная выставка и ярмарка текстиля и моды, которая объединит
            мировых лидеров отрасли, инновационных производителей и творческих
            дизайнеров. Наша миссия — укрепить позиции Туркменистана как
            ключевого центра текстильной и модной индустрии. Выставка станет
            платформой для изучения устойчивых практик, современных технологий и
            новых дизайнерских решений, вдохновляя на развитие индустрии.{" "}
          </p>
        </div>

        <div ref={ebmblaRef} className="embla overflow-hidden">
          <div className="flex embla__container items-center gap-6">
            {data.map((item) => (
              <AboutCard
                key={item.text}
                {...item}
                className="embla__slide flex-[0_0_288px]"
              />
            ))}
          </div>
        </div>
        <Link to="/about" className="mx-auto">
          <Button variant={"outline"}>Подробнее о выставке</Button>
        </Link>
      </Container>
    </section>
  );
};
