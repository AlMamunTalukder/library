import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
// import Providers from "@/lib/Providers/Providers";
const inter = Inter({ subsets: ["latin"] });
import { Toaster } from 'sonner';
// import Hydrate from "@/components/shared/Hydrate/Hydrate";
export const metadata: Metadata = {
  title: "Library",
  description: "Unkot",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <Providers>
      <html lang="en">
        <body className={inter.className}>
          {/* <Hydrate> */}
            <AppRouterCacheProvider>
              <>
                <Toaster position='top-center' />
                {children}
              </>
            </AppRouterCacheProvider>
          {/* </Hydrate> */}
        </body>
      </html>

    // </Providers>
  );
}
