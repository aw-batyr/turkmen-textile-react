import {
  HomeAbout,
  HomeHero,
  HomeOffers,
  HomeTheme,
  HomeTime,
} from "@/components/shared";
import { HomePartners } from "@/components/shared/home/home-partners";

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <HomeHero />
      <HomeAbout />
      <HomeOffers />
      <HomeTheme />
      <HomePartners />
      <HomeTime />
    </div>
  );
}
