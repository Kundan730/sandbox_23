import type { Metadata } from 'next';
import './globals.css';
import { newAgeFont } from '@/lib/fonts/font';
import { DM_Sans } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/sonner';
import { Analytics } from '@vercel/analytics/react';
import { auth } from "@/auth";
import Navbar from "@/components/navbar/navbar";
import Spinner from "@/components/spinner";
import { getNotifications, getProductsByUserId } from "@/lib/server-actions";
import { redirect } from "next/navigation";
import { Suspense } from "react";


const font = DM_Sans({ subsets: ['latin'] });
export const metadata: Metadata = {
  title: 'sanbox 23',
  description: 'One platform for all your projects',
};  


const RootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {

    // get the user from the server

    const authenticatedUser = await auth();
    const notifications = await getNotifications();
    const products = await getProductsByUserId(authenticatedUser?.user?.id || "");
  
  
  return (
    <html
    // suppressHydrationWarning={true}
      lang="en"
      className={` ${newAgeFont.className} bg-white overflow-x-hidden   h-full text-black  flex flex-col w-screen px-5 sm:px-7 md:px-10 lg:px-12 xl:px-16 xl:pl-12 `}
      style={{
        backgroundColor: '#ffffff',
      }}  
    >
      <body className="bg-white">
        <Suspense fallback={<Spinner />}>
          <Navbar
            authenticatedUser={authenticatedUser}
            notifications={notifications}
            products={products}
          />
        {children}
        </Suspense>
        <Toaster />
        <Analytics />
      </body>  
    </html>    
  );
}  

export default RootLayout;