import CarouselRender from '@/Components/Carousel/Carousel';
import HotelInfo from '@/Components/Pages/Home/hotelInfo';
import Advantages from '@/Components/Pages/Home/Advantage';

export default function Home() {
  return (
    <main className="">
      <CarouselRender/>
      <HotelInfo/>
      <Advantages/>
    </main>
  );
}
