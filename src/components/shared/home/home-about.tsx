import { FC } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import { Container } from "@/components/layout";
import { AboutCard } from "../about-card";
import { homeAbout } from "@/data/home/home-about.data";
import { useTranslate } from "@/hooks/use-translate";
import { useLangStore } from "@/store/lang";

export const HomeAbout: FC = () => {
  const [ebmblaRef] = useEmblaCarousel();
  const lang = useLangStore((state) => state.lang);

  return (
    <section>
      <Container className="flex flex-col gap-6">
        <div className="text-center">
          <h2 className="h2 md:mb-3 mb-6 text-left sm:text-center">
            {homeAbout[useTranslate(lang)].h2}
          </h2>
          <p className="md:text-base text-sm normal text-left sm:text-center text-[#454545]">
            {homeAbout[useTranslate(lang)].p}
          </p>
        </div>

        <div ref={ebmblaRef} className="embla overflow-hidden">
          <div className="flex embla__container items-center gap-6">
            {homeAbout[useTranslate(lang)].data.map((item) => (
              <AboutCard
                key={item.text}
                {...item}
                className="embla__slide flex-[0_0_288px]"
              />
            ))}
          </div>
        </div>
        <Link to="/about" className="mx-auto">
          <Button variant={"outline"}>
            {homeAbout[useTranslate(lang)].button}
          </Button>
        </Link>
      </Container>
    </section>
  );
};
