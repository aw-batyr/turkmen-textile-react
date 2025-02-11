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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <div className="flex flex-col gap-6">
            <h2 className="h2 text-left ">
              {homeAbout[useTranslate(lang)].h2}
            </h2>
            <div className="md:text-base flex flex-col gap-6 text-sm normal text-left  text-[#454545]">
              <p>{homeAbout[useTranslate(lang)].p}</p>
              <p>{homeAbout[useTranslate(lang)].p_2}</p>
            </div>

            <Link to="/about" className="">
              <Button variant={"outline"}>
                {homeAbout[useTranslate(lang)].button}
              </Button>
            </Link>
          </div>

          <video
            src="https://turkmentextile.turkmenexpo.com/app/storage/app/media/video/Textile2025.mp4"
            muted
            controls
            autoPlay
            loop
            className="w-full h-auto"
          />
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
      </Container>
    </section>
  );
};
