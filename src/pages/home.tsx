import {
  HomeAbout,
  HomeHero,
  HomeOffers,
  HomeSponsors,
  HomeTheme,
  HomeTime,
} from "@/components/shared";

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <HomeHero />
      <HomeAbout />
      <HomeSponsors />
      <HomeOffers />
      <HomeTheme />
      <HomeTime />
    </div>
  );
}
