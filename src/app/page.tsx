import CarouselRender from '@/Components/Carousel/Carousel';
import HotelInfo from '@/Components/Pages/Home/hotelInfo';
import Footer from '@/Components/Footer/footer';

export default function Home() {
  return (
    <main className="">
      <CarouselRender/>
      <HotelInfo/>
    </main>
  );
}
