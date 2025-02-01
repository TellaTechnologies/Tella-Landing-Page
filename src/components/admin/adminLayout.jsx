import { AppSidebar } from "@/components/app-sidebar"
import {Button} from '@/components/ui/button'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import Sidebar from "../Sidebar"
import { Menu } from "lucide-react"
import { useState } from "react"

export default function AdminLayout({ children }) {
  const [nav, setNavDisplay] = useState(false)
  const NavControl = () => {
    setNavDisplay(true)
    console.log("press")
  }
  return (
    <SidebarProvider>
      <AppSidebar />
      <Sidebar className=""/>
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <div className="class">
          <Menu onClick={() => NavControl()} size={20} className="text-black"/>

          </div>
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink className="font-[800] text-black" href="#">
                  Agent Transactions          
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Data Fetching</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
