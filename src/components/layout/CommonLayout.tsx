import type { ReactNode } from "react"
import Footer from "./Footer"
import Navbar from "./Navbar";


interface IProps {
    children : ReactNode
}


export default function CommonLayout({children} : IProps) {
  return (
        <div className="flex flex-col min-h-screen bg-slate-100 dark:bg-background">
            <Navbar/>
             
            <div className="grow-1 max-w-[1256px] w-full mx-auto">{children}</div> 
            <div className="bg-[#0F172A]">

            <Footer/></div>
            
        </div>
    );
}
