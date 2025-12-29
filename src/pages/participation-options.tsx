import { Cover, Container } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { useLangStore } from "@/store/lang";

const exampleImage = "/about-place.jpg";

const participationOptionsContent = {
  title: {
    ruText: "Варианты участия",
    enText: "Participation Options",
  },
  exhibitionSpace: {
    ruText: "Аренда выставочной площади",
    enText: "Exhibition Space Rental",
  },
  spaceOnly: {
    ruText: "Необорудованная площадь",
    enText: "Space Only",
  },
  example: {
    ruText: "Пример",
    enText: "Example",
  },
  spaceOnlyDescription: {
    ruText:
      "Чистая площадь для последующей застройки (стандартная застройка или по индивидуальному дизайну). Включает: общую уборку и охрану павильона. Электричество в стоимость не включено.",
    enText:
      "Raw exhibition space for subsequent construction (standard booth or customized design). Includes general cleaning and pavilion security. Electricity is not included in the price.",
  },
  standardBooth: {
    ruText: "Стандартная застройка",
    enText: "Standard Booth Construction",
  },
  customBooth: {
    ruText: "Индивидуальный дизайн",
    enText: "Custom Booth Design",
  },
  boothExampleDescription: {
    ruText:
      "Включает: базовое электроподключение (220V - 2 кВт), стены (стандартные или индивидуальный дизайн). Общую уборку и охрану павильона.",
    enText:
      "Includes: basic electrical connection (220V - 2 kW), walls (standard or customized design), general cleaning, and pavilion security.",
  },
  registrationFee: {
    ruText: "Участие со стендом включает регистрационную оплату.",
    enText: "Participation with a booth includes a registration fee.",
  },
  pricingNote: {
    ruText: "Пожалуйста уточните стоимость у менеджера проекта.",
    enText: "Please check the pricing with the project manager.",
  },
  partnershipTitle: {
    ruText: "Партнёрские возможности",
    enText: "Partnership Opportunities",
  },
  partnershipIntro: {
    ruText:
      'Если Вы заинтересованы в более активном выходе на рынок или целью Вашей компании является максимальное продвижение на рынок, используйте пакет "Партнерство выставки". Приобретая данную опцию, Вы получаете:',
    enText:
      'If your company is interested in a more active market presence or aims to maximize market promotion, we recommend the "Exhibition Partnership" package. By choosing this option, you will receive:',
  },
  partnershipItems: [
    {
      ruText: "Статус Партнера выставки, в зависимости от выбранного пакета",
      enText: "Exhibition Partner status, depending on the selected package",
    },
    {
      ruText:
        "Масштабную рекламную кампанию (размещение логотипа компании на всей рекламной продукции выставки)",
      enText:
        "A large-scale advertising campaign (placement of your company logo on all exhibition promotional materials)",
    },
    {
      ruText: "Широкую узнаваемость",
      enText: "Wide recognition",
    },
    {
      ruText: "Ассоциирование выставки с именем Вашей компании и др.",
      enText:
        "Association of the exhibition with your company's name, and more",
    },
  ],
  partnershipNote: {
    ruText: "Пожалуйста, уточните стоимость у менеджера проекта.",
    enText: "Please contact the project manager to clarify the cost.",
  },
  exampleImageAlt: {
    ruText: "Пример площадки",
    enText: "Example space",
  },
  standardExampleAlt: {
    ruText: "Пример стандартной застройки",
    enText: "Standard booth example",
  },
  customExampleAlt: {
    ruText: "Пример индивидуального дизайна",
    enText: "Custom booth example",
  },
};

const ArrowIcon = () => (
  <svg
    width="14"
    height="20"
    viewBox="0 0 14 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M7 1V15M7 15L2 10M7 15L12 10"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function ParticipationOptions() {
  useScrollTop();
  const lang = useLangStore((state) => state.lang);
  const getText = (item: { ruText: string; enText: string }) =>
    lang === "ru" ? item.ruText : item.enText;

  return (
    <div>
      <Cover title={getText(participationOptionsContent.title)} />

      <Container className="page-padding">
        <div className="mx-auto max-w-[900px] text-on_surface">
          <p className="mb-10 text-3xl font-medium">
            {getText(participationOptionsContent.title)}
          </p>

          <Button className="mb-2 bg-primary md:text-sm w-full">
            1. {getText(participationOptionsContent.exhibitionSpace)}
          </Button>

          <Button
            variant={"outline"}
            className="w-full mb-10 border border-primary py-1 text-center text-sm text-primary md:text-sm"
          >
            {getText(participationOptionsContent.spaceOnly)}
          </Button>

          <p className="mb-5 text-center text-lg">
            {getText(participationOptionsContent.example)}
          </p>

          <div className="mx-auto h-[180px] w-full max-w-[754px] md:h-[377px]">
            <img
              src={exampleImage}
              alt={getText(participationOptionsContent.exampleImageAlt)}
              className="size-full rounded-sm object-cover"
            />
          </div>

          <div className="mt-5 text-center text-sm leading-relaxed">
            <p>{getText(participationOptionsContent.spaceOnlyDescription)}</p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="w-full flex flex-col items-center gap-2 text-primary">
              <ArrowIcon />
              <div className="w-full border border-primary py-1 text-center text-sm text-primary md:text-sm">
                {getText(participationOptionsContent.standardBooth)}
              </div>
            </div>
            <div className="flex flex-col items-center gap-2 text-primary">
              <ArrowIcon />
              <div className="w-full border border-primary py-1 text-center text-sm text-primary md:text-sm">
                {getText(participationOptionsContent.customBooth)}
              </div>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <p className="mb-5 text-sm">
                {getText(participationOptionsContent.example)}:
              </p>
              <img
                src={exampleImage}
                alt={getText(participationOptionsContent.standardExampleAlt)}
                className="h-[160px] w-full rounded-sm object-cover md:h-[190px]"
              />
              <p className="mt-2 text-sm leading-relaxed">
                {getText(participationOptionsContent.boothExampleDescription)}
              </p>
            </div>
            <div>
              <p className="mb-5 text-sm">
                {getText(participationOptionsContent.example)}:
              </p>
              <img
                src={exampleImage}
                alt={getText(participationOptionsContent.customExampleAlt)}
                className="h-[160px] w-full rounded-sm object-cover md:h-[190px]"
              />
              <p className="mt-2 text-sm leading-relaxed">
                {getText(participationOptionsContent.boothExampleDescription)}
              </p>
            </div>
          </div>

          <p className="mt-6 text-center text-sm text-on_surface">
            {getText(participationOptionsContent.registrationFee)}
          </p>
          <p className="text-center text-sm">
            {getText(participationOptionsContent.pricingNote)}
          </p>

          <div className="mt-6 bg-primary py-3 text-center text-xs font-medium text-on_primary md:text-sm">
            2. {getText(participationOptionsContent.partnershipTitle)}
          </div>

          <div className="mt-3 text-sm leading-relaxed">
            <p className="mb-2">
              {getText(participationOptionsContent.partnershipIntro)}
            </p>
            <ul className="list-disc pl-5">
              {participationOptionsContent.partnershipItems.map((item) => (
                <li key={item.enText}>{getText(item)}</li>
              ))}
            </ul>
            <p className="mt-2">
              {getText(participationOptionsContent.partnershipNote)}
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
