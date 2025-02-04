import { FC } from "react";
import { Container, Burger } from "./";
import { MapPin, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { LangMenu, Logo } from "../shared";
import { useLangStore } from "@/store/lang";
import { navData } from "@/data/header.data";
import { useTranslate } from "@/hooks/use-translate";

export const Header: FC = () => {
  const lang = useLangStore((state) => state.lang);

  return (
    <header>
      <div className="h-12 hidden lg:flex bg-sur text-surface-bg items-center overflow-hidden">
        <Container className="flex items-center justify-between">
          <div className="gap-8 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MapPin />
              <h4 className="text-sm">
                {lang === "ru"
                  ? "Ашхабад, Туркменистан"
                  : "Ashgabat, Turkmenistan"}
              </h4>
            </div>

            <nav className="flex items-center gap-6">
              {navData[useTranslate(lang)].data
                .slice(0, 2)
                .map(({ title, link }) => (
                  <Link className="py-2" key={title} to={link}>
                    {title}
                  </Link>
                ))}
            </nav>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Smartphone size={16} strokeWidth="3px" />
              <h4 className="text-sm ">+99371871812</h4>
            </div>

            <LangMenu />
          </div>
        </Container>
      </div>

      <div className="bg-primary py-2 flex items-center justify-between h-20 overflow-hidden">
        <Container className="flex items-center justify-between ">
          <div className="flex items-center gap-8">
            <Link to="/">
              <Logo />
            </Link>

            <nav className="lg:flex hidden items-center gap-6 text-white">
              {navData[useTranslate(lang)].data
                .slice(2, 5)
                .map(({ title, link }) => (
                  <Link
                    key={title}
                    to={link}
                    className="flex items-center gap-2"
                  >
                    {title} <img src="/chevron.svg" />
                  </Link>
                ))}
            </nav>
          </div>

          <div className="flex items-center">
            {/* <LangMenu className="lg:hidden" /> */}
            <Burger />
          </div>

          <div className="lg:flex hidden items-center gap-2">
            <Link
              to="https://turkmentextile.turkmenexpo.com/app/storage/app/media/official_support/official_support_ru.pdf"
              target="_blank"
            >
              <Button
                variant={"secondary"}
                size={"sm"}
                className="bg-white text-primary hover:bg-white/90"
              >
                {lang === "ru" ? "Официальная поддержка" : "Official Support"}
              </Button>
            </Link>

            <Link to="/become-sponsor">
              <Button
                variant={"secondary"}
                size={"sm"}
                className="bg-teritary text-white hover:bg-teritary/90"
              >
                {lang === "ru" ? "Стать спонсором" : "Become a sponsor"}
              </Button>
            </Link>
          </div>
        </Container>
      </div>
    </header>
  );
};
