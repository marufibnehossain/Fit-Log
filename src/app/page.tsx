import HeroBanner from "@/components/Home/HeroBanner";
import WorkoutLibrary from "@/components/Home/WorkoutLibrary";

export default function Home() {
  return (
    <div className="px-[5vw] lg:py-14 py-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <HeroBanner />
        <WorkoutLibrary />
      </div>
      
    </div>
  );
}
