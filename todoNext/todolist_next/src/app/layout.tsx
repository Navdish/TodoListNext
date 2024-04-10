import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} style={{margin:"0px"}}>
      <AppRouterCacheProvider>
        <header style={{backgroundColor:"lightgrey", height:"50px"}}> 
        </header>
        {children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
