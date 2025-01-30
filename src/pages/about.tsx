import { Cover } from "@/components/layout";
import {
  AboutBron,
  AboutInfo,
  AboutPlace,
  AboutThemes,
  AboutTime,
} from "@/components/shared";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";

export default function About() {
  useScrollTop();

  return (
    <div className={cn("")}>
      <Cover title="О выставке" />

      <AboutInfo />
      <AboutThemes />
      <AboutTime />
      <AboutPlace />
      <AboutBron />
    </div>
  );
}
