import {
  HomeAbout,
  HomeActions,
  HomeHero,
  HomeNews,
  HomeOffers,
  HomeSponsors,
  HomeTheme,
  HomeTime,
} from "@/components/shared";
import { useScrollTop } from "@/hooks/use-scroll-top";

export default function Home() {
  useScrollTop();

  return (
    <div className="flex flex-col">
      <HomeHero />
      <HomeActions />
      <HomeAbout />
      <HomeSponsors />
      <HomeOffers />
      <HomeTheme />
      <HomeTime />
      <HomeNews />
    </div>
  );
}
