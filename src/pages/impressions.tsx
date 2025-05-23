import { Container } from "@/components/layout";
import { DesignerCard } from "@/components/shared";
import { Button } from "@/components/ui/button";
import { useScrollTop } from "@/hooks/use-scroll-top";
import useEmblaCarousel from "embla-carousel-react";

export default function Impressions() {
  useScrollTop();

  const [emblaRef] = useEmblaCarousel({ align: "center" });

  return (
    <div className="overflow-x-hidden">
      <section className="">
        <img
          src="/impressions-cover.png"
          alt=""
          className="w-full object-contain max-h-[610px]"
        />
        <h1 className="absolute opacity-0 top-0 left-0">Показы</h1>

        <div className="bg-[url('/impressions-bg.png')] py-[200px] ">
          <Container className="grid grid-cols-2 gap-6 h-[570px]">
            <div className="flex flex-col gap-6 justify-center">
              <h2 className="text-5xl leading-[120%]">
                Дефиле туркменской моды на выставке "ТуркменТекстиль"
              </h2>
              <p className="text-on_surface_v normal text-base">
                В рамках международной выставки "Туркмен текстиль" состоятся
                эксклюзивные показы коллекций ведущих туркменских дизайнеров и
                Домов моды. Гости мероприятия смогут оценить высокое мастерство
                исполнения, богатство национальных традиций в современном
                прочтении и актуальные тенденции текстильной индустрии
                Туркменистана, воплощенные в уникальных моделях одежды и
                аксессуаров.
              </p>
            </div>
            <div className="relative">
              <img
                src="/impressions/gallery-1.png"
                alt="impression image"
                className="absolute top-0 right-0 z-10 shadow-xl drop-shadow-sm"
              />
              <img
                src="/impressions/gallery-2.png"
                className="absolute left-0 top-1/4 shadow-xl drop-shadow-sm"
              />
              <img
                src="/impressions/gallery-3.png"
                alt=""
                className="absolute bottom-0 right-0 z-10 shadow-xl drop-shadow-sm"
              />
            </div>
          </Container>
        </div>
      </section>

      <section className="py-[200px]">
        <Container className="flex flex-col gap-10">
          <h2 className="text-5xl">Дизайнеры одежды</h2>

          <div ref={emblaRef} className="embla">
            <div className="flex embla__container">
              {[...Array(9)].map((_, i) => (
                <DesignerCard
                  key={i}
                  name="Batyr"
                  info="test tesat tesxt test"
                  imgUrl="/impressions/designer.png"
                  className="embla__slide flex-[0_0_714px] mr-4"
                />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[url('/CTA.png')] py-20 ">
        <div className="flex flex-col gap-6 text-center max-w-[808px] mx-auto">
          <h3 className="text-white text-3xl">
            Тренды туркменского текстиля 2025/2026
          </h3>
          <p className="text-lg text-primary_03 normal">
            Скачайте наш эксклюзивный гид и первыми узнайте о новейших
            тенденциях, инновационных материалах и вдохновляющих коллекциях,
            которые определят будущее туркменской текстильной индустрии
          </p>
          <Button
            className="bg-reverse_primary w-fit mx-auto hover:bg-reverse_primary/90 text-on_secondary_container"
            size={"sm"}
          >
            Скачать гид
          </Button>
        </div>
      </section>
    </div>
  );
}
