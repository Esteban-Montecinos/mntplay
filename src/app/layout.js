import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "*MNTplay | Tailwind CSS",
  description: "Editor html y css con Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='dark'>
      <body className={`${inter.className} bg-neutral-800`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
