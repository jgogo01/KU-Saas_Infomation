
import Footer from "@/Components/Footer/footer";
import Navigation from "@/Components/navigation/navigation";


export default function PagesLayout({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <main>
            <Navigation/>
                {children}
            <Footer/>
        </main>
    );
  }
  