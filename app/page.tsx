import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Audience } from "@/components/audience";
import { Process } from "@/components/process";
import { About } from "@/components/about";
import { Areas } from "@/components/areas";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main id="top">
      <Header />
      <Hero />
      <Services />
      <Audience />
      <Process />
      <About />
      <Areas />
      <Contact />
      <Footer />
    </main>
  );
}
