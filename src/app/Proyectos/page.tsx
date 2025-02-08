import Portfolio from "@/components/Portfolio"
import Achievements from "@/components/Achievements"
export default function Home() {
    return (
        <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]  overflow-hidden">
            <div className="py-12">
                <Portfolio />
            </div>
            <div className="py-12 bg-transparent">
                <Achievements />
            </div>
        </main>
    )
}


