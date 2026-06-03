import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import ScrollProgress from "@/components/ui/ScrollProgress";
import PageLoader from "@/components/ui/PageLoader";

// Lazy load heavy sections
const About = dynamic(() => import("@/components/sections/About"), {
  loading: () => <div className="h-screen shimmer" />,
});
const Services = dynamic(() => import("@/components/sections/Services"), {
  loading: () => <div className="h-screen shimmer" />,
});
const WhyChoose = dynamic(() => import("@/components/sections/WhyChoose"), {
  loading: () => <div className="h-96 shimmer" />,
});
const Testimonials = dynamic(
  () => import("@/components/sections/Testimonials"),
  { loading: () => <div className="h-96 shimmer" /> }
);
const Process = dynamic(() => import("@/components/sections/Process"), {
  loading: () => <div className="h-96 shimmer" />,
});
const Gallery = dynamic(() => import("@/components/sections/Gallery"), {
  loading: () => <div className="h-96 shimmer" />,
});
const FAQ = dynamic(() => import("@/components/sections/FAQ"), {
  loading: () => <div className="h-96 shimmer" />,
});
const Contact = dynamic(() => import("@/components/sections/Contact"), {
  loading: () => <div className="h-96 shimmer" />,
});
const Footer = dynamic(() => import("@/components/layout/Footer"));
const WhatsAppButton = dynamic(() => import("@/components/ui/WhatsAppButton"));
const CustomCursor = dynamic(() => import("@/components/ui/CustomCursor"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <PageLoader />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChoose />
        <Testimonials />
        <Process />
        <Gallery />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
