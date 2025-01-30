import {
  HomeAbout,
  HomeHero,
  HomeOffers,
  HomeTheme,
  HomeTime,
} from "@/components/shared";

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <HomeHero />
      <HomeAbout />
      <HomeOffers />
      <HomeTheme />
      <HomeTime />
    </div>
  );
}
