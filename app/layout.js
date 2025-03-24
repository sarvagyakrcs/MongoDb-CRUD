import { Geist } from 'next/font/google';
import "./globals.css";
import { Toaster } from "react-hot-toast";
import QueryClientProvider from "@/lib/query-client-provider";

const font = Geist({ weight: "400", subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased text-white`}
      >
        <QueryClientProvider>
          {children}
        </QueryClientProvider>
        <Toaster />
      </body>
    </html>
  );
}
