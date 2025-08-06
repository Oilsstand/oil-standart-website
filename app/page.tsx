import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Products } from "@/components/products"
import { CoolantFluids } from "@/components/coolant-fluids"
import { TechnicalFluids } from "@/components/technical-fluids"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Products />
      <CoolantFluids />
      <TechnicalFluids />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}
