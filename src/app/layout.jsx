// SEO
import { staticPageMetadata } from "@/SEO";
// STYLE
import "swiper/css";
import "./globals.css";
// Provider
import Providers from "@/providers";
// COMPONENT
import { Header, Footer, PageLoadingProgressBar, ToastContainer  } from "@/components";
import HeaderProvider from "../context/Header/HeaderContext";


export const metadata = {
                           manifest: "/manifest.json",
                           title: staticPageMetadata.home.title,
                           description: staticPageMetadata.home.desc,
                        };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
         <body className="relative overflow-x-hidden font-satoshi">
            <PageLoadingProgressBar />
            <Providers>
               <HeaderProvider>
                  <Header/>
               </HeaderProvider>
               <ToastContainer />
               {children}
               <Footer />
            </Providers>
         </body>
      </html>
  )
}


// export default RootLayout;
