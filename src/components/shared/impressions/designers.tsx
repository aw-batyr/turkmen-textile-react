import { Container } from "@/components/layout";
import { DesignerCard, Loader } from "../";
import useEmblaCarousel from "embla-carousel-react";
import { useDesigners } from "@/hooks/tanstack/use-designers";
import { useTranslation } from "react-i18next";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const Designers = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    skipSnaps: true,
    slidesToScroll: 3,
    dragFree: true,
  });
  const [activeIndex, setActiveIndex] = useState(0);
  const { t } = useTranslation("main");

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const scrollToSnap = useCallback(
    (index: number) => {
      if (emblaApi) {
        emblaApi.scrollTo(index);
      }
    },
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setActiveIndex(emblaApi?.selectedScrollSnap());
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };

    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const { title, text } = t("impressions.designers", {
    returnObjects: true,
  }) as {
    title: string;
    text: string;
  };

  const { data, isPending } = useDesigners(1);

  return (
    <section className="md:py-20 py-10">
      <Container className="flex flex-col md:gap-10 gap-6">
        <h2 className="md:text-5xl text-2xl leading-[120%]">{title}</h2>
        <p className="md:text-xl text-lg normal text-on_surface_v">{text}</p>

        <div ref={emblaRef} className="embla">
          <div className="flex embla__container">
            {isPending ? (
              <Loader />
            ) : (
              data?.designers?.map((item, i) => (
                <DesignerCard
                  key={i}
                  {...item}
                  className="embla__slide flex-[0_0_714px] mr-4"
                />
              ))
            )}
          </div>

          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              className={cn(
                "size-12 flex items-center justify-center",
                !canScrollPrev && "opacity-20 pointer-events-none"
              )}
            >
              <ChevronLeft />
            </button>

            <div className="flex items-center gap-2">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  onClick={() => scrollToSnap?.(i)}
                  className={cn(
                    "w-5 h-1  rounded-[2px] cursor-pointer",
                    activeIndex === i ? "bg-teritary" : "bg-on_surface_v"
                  )}
                />
              ))}
            </div>

            <button
              onClick={() => emblaApi?.scrollNext()}
              className={cn(
                "size-12 flex items-center justify-center",
                !canScrollNext && "opacity-20 pointer-events-none"
              )}
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Designers;
