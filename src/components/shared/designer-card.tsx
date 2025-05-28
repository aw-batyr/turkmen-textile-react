import { FC, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useLangStore } from "@/store/lang";

interface Props {
  name: string;
  biography: string;
  className?: string;
  achievements: {
    ru: string;
    en: string;
  }[];
  image: { path: string };
  images: { path: string }[];
}

export const DesignerCard: FC<Props> = ({
  className,
  name,
  achievements,
  biography,
  image,
  images,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({});
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const lang = useLangStore((state) => state.lang);

  const [activePhoto, setActivePhoto] = useState(100);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <Dialog>
      <DialogTrigger
        className={cn(
          "relative bg-[url('/impressions/card-bg.png')] group bg-no-repeat h-[326px] overflow-hidden",
          className
        )}
      >
        <article>
          <img
            src="/impressions/card-bg-bg.png"
            className="absolute top-2.5 left-2.5 -z-10 size-full"
          />

          <div className="flex gap-4">
            <img
              src={image?.path}
              alt={name}
              className="flex-[0_0_44%] object-contain overflow-hidden"
            />

            <div className="flex-auto text-left text-white z-20 pt-6 pl-4 pr-4">
              <h3 className="text-xl mb-6">{name}</h3>
              <ul className="text-sm list-disc pl-4 flex flex-col gap-2">
                {achievements.slice(0, 7).map((item, i) => (
                  <li key={i}>{lang === "ru" ? item?.ru : item?.en}</li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      </DialogTrigger>

      <DialogContent
        className={cn("p-6 flex flex-col gap-4 xl:!w-[1224px] max-h-[80vh]")}
      >
        {activePhoto === 100 ? (
          <>
            <div className="flex gap-4 overflow-y-auto">
              <div className="flex-1 h-[345px]">
                <img
                  src={image?.path}
                  alt=""
                  className="size-full object-cover"
                />
              </div>
              <div className="flex-[0_0_70%] overflow-y-auto">
                <div className="text-2xl mb-4">{name}</div>
                <hr />
                <div
                  className="mt-4 flex flex-col gap-3 normal"
                  dangerouslySetInnerHTML={{ __html: biography ?? "" }}
                />
              </div>
            </div>
            <hr />
          </>
        ) : (
          <div className="">
            <button
              onClick={() => setActivePhoto(100)}
              className="flex items-center gap-2 mb-4"
            >
              <ChevronLeftIcon />
              Вернуться назад
            </button>

            <div className="h-[35vh] bg-[#f4f4f4]">
              <img
                src={images?.[activePhoto]?.path}
                className="size-full object-contain"
              />
            </div>
          </div>
        )}

        <div className="">
          <h3 className="text-xl mb-2.5">Работы дизайнера</h3>
          <div ref={null} className="embla overflow-hidden">
            <div className="embla__container items-center flex gap-4">
              {canScrollPrev && (
                <ChevronLeftIcon
                  onClick={() => canScrollPrev && emblaApi?.scrollPrev()}
                  className={cn(
                    "cursor-pointer",
                    !canScrollPrev && "opacity-20"
                  )}
                />
              )}
              <div className="flex items-center gap-4">
                {images?.map((item, i) => (
                  <div className="size-[140px] overflow-hidden">
                    <img
                      key={i}
                      onClick={() => setActivePhoto(i)}
                      src={item?.path}
                      className="size-full hover:scale-105 transition-all cursor-pointer overflow-hidden object-cover object-top"
                    />
                  </div>
                ))}
              </div>
              {canScrollNext && (
                <ChevronRightIcon
                  onClick={() => canScrollPrev && emblaApi?.scrollNext()}
                  className={cn(
                    "cursor-pointer",
                    !canScrollNext && "opacity-20"
                  )}
                />
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
