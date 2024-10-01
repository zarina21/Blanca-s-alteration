import { Inter } from "next/font/google";
import "/src/app/globals.scss";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Blanca's' Alterations",
  description: "alteraciones",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body>
        <div>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
