import { RegistrationForm } from "@/components/registration-form"
import { Footer } from "@/components/footer"
import { Founder } from "@/components/founder"
import { Benefits } from "@/components/benefits"
import { Header } from "@/components/header"
import { FinalCTA } from "@/components/final-cta"
import { TopBanner } from "@/components/top-banner"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBanner />
      <Header />

      <main className="flex-grow">
        <RegistrationForm />
        <Benefits />
        <Founder />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  )
}
