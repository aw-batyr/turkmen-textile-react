import { FC } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Container } from "@/components/layout";
import { OfferCard } from "../";

export const HomeOffers: FC = () => {
  const [emblaRef] = useEmblaCarousel({ align: "start" });

  return (
    <section className="bg-surface_high py-10 relative overflow-hidden">
      <Container>
        <div ref={emblaRef} className="embla ">
          <div className="mb-2 flex gap-6 embla__container">
            <OfferCard
              img="/offer-1.png"
              className="embla__slide flex-[0_0_300px] md:flex-[0_0_600px]"
              title="Гостиницы, трансфер, визы"
              text="По вопросам размещения в гостиницах, визовой поддержки, транспортного и экскурсионного обслуживания Вы можете обращаться к официальным туроператорам выставки"
            />
            <OfferCard
              img="/offer-2.png"
              className="embla__slide flex-[0_0_300px] md:flex-[0_0_600px]"
              title="Ознакомьтесь с планом выставки ITSE 2025"
              text="Как выбрать лучшее место на выставке? Вы всегда должны помнить, что удачное расположение выставочной экспозиции повышает Ваши шансы привлечь внимание Ваших потенциальных клиентов"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
