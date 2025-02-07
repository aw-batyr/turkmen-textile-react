import { Container } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface Props {
  className?: string;
}

export const AboutInfo: FC<Props> = () => {
  const { t } = useTranslation("about");

  const block_1 = t("main.block.texts", { returnObjects: true }) as string[];
  const block_2 = t("main.block_2.texts", { returnObjects: true }) as string[];
  const block_3 = t("main.block_3.texts", { returnObjects: true }) as string[];

  return (
    <Container className="flex flex-col md:my-20 my-10 gap-16">
      <div className="flex flex-col gap-6">
        <h2 className="h2">{t("main.block.title")}</h2>

        <div className="flex flex-col gap-3">
          {block_1.map((item) => (
            <p className="p">{item}</p>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <h3 className="h2">{t("main.block_2.title")}</h3>

        <h4 className="p">{t("main.block_2.subtitle")}</h4>

        <ol type="1" className="list-decimal pl-8 flex flex-col gap-3 ">
          {block_2.map((item) => (
            <li className="p">{item}</li>
          ))}
        </ol>
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="h2">{t("main.block_3.title")}</h2>

        <h3>{t("main.block_3.subtitle")}</h3>
        <ul className="list-disc pl-8 flex flex-col gap-3 p">
          {block_3.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <Link to="/become-sponsor">
        <Button className="w-full">{t("main.button")}</Button>
      </Link>
    </Container>
  );
};
