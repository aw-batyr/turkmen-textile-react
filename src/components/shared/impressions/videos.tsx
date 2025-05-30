import { Container } from "@/components/layout";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

const Videos = () => {
  const { t } = useTranslation("main");
  const { pathname } = useLocation();

  const { videosTitle, videosTitle2 } = t("impressions", {
    returnObjects: true,
  }) as { videosTitle: string; videosTitle2: string };

  const filter = () => (pathname !== "/impressions" ? true : false);

  return (
    <section className="bg-[url('/impressions/videos-block-bg.png')] md:py-20 py-10">
      <Container>
        <h2 className="mb-10 md:text-5xl text-2xl leading-[120%] text-white text-center">
          {filter() ? videosTitle : videosTitle2}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-1 mx-0 lg:mx-48 gap-4 text-white overflow-hidden h-auto md:h-[497px]">
          {/* FIRST BLOCK */}
          <div className="bg-gray_10 p-2 rounded-[8px] border border-gray_09 flex flex-col h-full">
            <div className="maxh-[453px]">
              <video
                src="https://turkmentextile.turkmenexpo.com/app/storage/app/media/video/Textile2025.mp4"
                muted
                controls
                autoPlay
                loop
                className="w-full size-full mb-2 rounded"
              />
            </div>
            {/* <div className="flex items-center justify-between mt-auto">
              <h3 className="text-sm">
                Алена Ахмадуллина | 'Царевна-Лебедь' (74 симв.)
              </h3>
              <span className="text-xs normal">1/10</span>
            </div> */}
          </div>

          {/* SECOND BLOCK */}
          {/* <div className="bg-gray_10 px-2 pt-2 rounded-[8px] border border-gray_09 flex flex-col h-full min-h-0">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm">Смотрите также</h3>
              <span className="text-xs normal">1/10</span>
            </div>

            <div className="flex flex-col gap-2 overflow-y-auto flex-grow">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className="h-[59px] w-full flex items-center gap-2"
                >
                  <div className="flex-[0_0_27%]">
                    <img
                      src="/impressions/test.png"
                      alt=""
                      className="object-contain rounded-tl rounded-bl"
                    />
                  </div>
                  <h3 className="text-sm">
                    Алена Ахмадуллина | 'Царевна-Лебедь' 'Царевна-Лебедь' |
                    Алена Ахмадуллина
                  </h3>
                </div>
              ))}
            </div>
          </div> */}
          {/* SECOND BLOCK */}
        </div>
      </Container>
    </section>
  );
};

export default Videos;
