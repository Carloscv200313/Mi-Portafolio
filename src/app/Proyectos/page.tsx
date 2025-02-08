import Portfolio from "@/components/Portfolio"
import Achievements from "@/components/Achievements"
export default function Home() {
    return (
        <main className="relative overflow-hidden ">
            <div className="py-12">
                <Portfolio />
            </div>
            <div className="py-12">
                <Achievements />
            </div>
        </main>
    )
}


