// app/page.tsx
"use client"
import Footer from "@/components/Footer"
import ThreeSteps from "@/components/ThreeSteps"
import LandingPage from "@/components/LandingPage"
import RolePicker from "@/components/RolePicker"
import VisionSection from "@/components/VisionSection"
import MissionSection from "@/components/MissionSection"
import StatsSection from "@/components/StatsSection"
import HeroSection from "@/components/HeroSection"
import Navbar2 from "@/components/Navbar2"
export default function Home() {
  return (
    <>
        <Navbar2 />
        <LandingPage />
        <HeroSection />
        <RolePicker />
        <ThreeSteps />
        <VisionSection />
        <MissionSection />
        <StatsSection />
        <Footer />
    </>
  )
}
