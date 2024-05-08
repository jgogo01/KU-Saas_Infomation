import CarouselRender from '@/Components/Carousel/Carousel';
import HotelInfo from '@/Components/Pages/Home/hotelInfo';
import Advantages from '@/Components/Pages/Home/Advantage';
import Navigation from '@/Components/navigation/navigation';
import Footer from '@/Components/Footer/footer';

export default async function Home() {
  // Function to delay execution
  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  await delay(3000);

  return (
    <main className="">
      <Navigation/>
      <>
        <CarouselRender/>
        <HotelInfo/>
        <Advantages/>      
      </>

      <Footer/>
    </main>
  );
}
