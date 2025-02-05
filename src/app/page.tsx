import Image from "next/image";
import Herosection from '@/components/Herosection'

export default function Home() {
  return (
    <div>
      <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] text-white">
        <h1 className="text-2xl text-center">Chai aur code</h1>
      <Herosection/>
      </main>
    </div>
  );
}
