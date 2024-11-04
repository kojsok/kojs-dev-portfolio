// import Approach from "@/components/approach";
import ContactCTA from "@/components/contactCTA";
// import Experience from "@/components/experiance";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
// import Logos from "@/components/logos";
import Navigation from "@/components/navigation";
import Portfolio from "@/components/portfolio";
import TechStack from "@/components/techstack";
// import Testimonials from "@/components/testionals";


export default function Home() {
  return (
    <div className="flex flex-col">
      <main className="flex overflow-hidden flex-col items-center pt-8 w-full bg-slate-950 max-md:max-w-full">
        <Navigation />
        <Hero />
        <TechStack />
        <Portfolio />
        {/* <Testimonials /> */}
        {/* <Logos /> */}
        {/* <Experience /> */}
        {/* <Approach /> */}
        <ContactCTA />
        <Footer />
      </main>
    </div>
  );
}
