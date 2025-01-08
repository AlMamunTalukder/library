import Slider from "@/components/shared/Slider/Slider";
import FeaturedBooks from "@/components/ui/Home/FeaturedBooks/FeaturedBooks";
import InfoSection from "@/components/ui/Home/InfoSection/InfoSection";



export default function Home() {
  return (
    <main >
     <Slider/>  
     <InfoSection/>
     <FeaturedBooks/>
    </main>
  );
}