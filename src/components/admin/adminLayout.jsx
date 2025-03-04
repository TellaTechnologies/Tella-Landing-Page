import { AppSidebar } from "@/components/app-sidebar"
import {Button} from '@/components/ui/button'
import MagnifyingGlass from '../../assets/image/coolicon.svg'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import Sidebar from "../Sidebar"
import { Bell, Menu, Search, User } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"
export default function AdminLayout({ children, title, SetAgentProfile }) {
  const [nav, setNavDisplay] = useState(false);  

  return (
    <SidebarProvider>
      {nav ? (
        <div>
          <Sidebar className="" />
          <div className="absolute md:hidden icons right-[120px] z-10">
            <Link className="text-blue-300 underline" onClick={() => setNavDisplay(false)}>close</Link>
          </div>
        </div>
      ) : null}

      <SidebarInset className=" md:h-[500px] md:overflow-y-scroll"> 
        <header className="flex h-16 shrink-0 items-center justify-between gap-2 border-b px-4">
          <div className="flex justify-start items-center gap-3">
            <Menu onClick={() => setNavDisplay(true)} size={30} className="text-black" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList className="flex justify-between">  
                <BreadcrumbItem className="md:block">
                  <BreadcrumbLink className="font-[800] text-black" href="#">
                    <h2 className="lg:text-[24px] md:text-[20px] text-[18px]">{title}</h2>         
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div className="flex items-center gap-3 md:gap-5">
            <div className="border lg:flex hidden rounded-[50%] p-3">
              <Bell size={20} />
            </div>
            <div className="border lg:hidden md:flex rounded-[50%] p-3">
              <Bell size={14} />
            </div>
            <div className="border rounded-[20px] gap-3 justify-center hidden lg:flex items-center p-2">
              <input className="outline-none border-none md:ps-2 box-border bg-transparent" placeholder="Search" type="search" />
              <img className="md:pe-2 md:w-[25px]" src={MagnifyingGlass} />
            </div>
            <div className="border lg:flex md:hidden rounded-[50%] p-3">
              <User onClick={() => SetAgentProfile(prevState => !prevState)} size={16} strokeWidth={3} />
            </div>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 bg-[#2097CF] bg-opacity-[20%]">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
