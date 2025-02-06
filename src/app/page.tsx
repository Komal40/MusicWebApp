import Image from "next/image";
import Herosection from '@/components/Herosection'
import FeaturesCourses from "@/components/FeaturesCourses";

export default function Home() {
  return (
    <div>
      <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] text-white">
      <Herosection/>
      <FeaturesCourses/>
      </main>
    </div>
  );
}
