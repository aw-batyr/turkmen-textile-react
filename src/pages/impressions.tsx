import { Designers, Hero, Videos } from "@/components/shared/impressions";
import { Button } from "@/components/ui/button";
import { useScrollTop } from "@/hooks/use-scroll-top";

export default function Impressions() {
  useScrollTop();

  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Videos />
      <Designers />
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
