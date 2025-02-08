import React, { useState, useEffect } from 'react';
import AdminLayout from '../../../components/admin/adminLayout';
import Rectangle from '../../../assets/Rectangle.svg'
import RectangleOne from '../../../assets/Rectangle2.svg'
import Frame from '../../../assets/Frame1.svg'
import FrameTwo from '../../../assets/Frame2.svg'
import FrameThree from '../../../assets/Frame3.svg'
import MagnifyingGlass from '../../../assets/coolicon.svg'
import { ArrowDownToLine, ArrowUp, CalendarIcon, ChevronDown } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar" 
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
function Transactions() {
    const [date, setDate] = useState(null)
    const [state, setState] = useState('');

    useEffect(() => {
        return () => {

        }
    }, []);

    return (
        <>
            <div>
                <AdminLayout title={"Agent Transactions"}>
                    <div>
                        <p className="m-0 md:text-[22px] font-medium">Overview</p>
                    </div>
                    <div className="flex flex-wrap mx-auto lg:mx-0 items-center justify-around">

                        <div className='bg-white md:w-[258px] w-[250px] md:h-[138px] md:p-4  border border-none rounded-md md:ps-2  p-5 flex items-center justify-between md:my-5 lg:my-0 my-4'>
                            <div>
                                <div className='flex  justify-between md:gap-24 gap-20 lg:gap-20'>
                                    <div className='flex justify-center gap-3'>
                                        <div>
                                            <img src={Rectangle}/>
                                        </div>
                                        <div>
                                            <p className="m-0 text-gray-300">Total Users</p>
                                            <p className='lg:text-[34px] md:text-[25px]'>0</p>
                                        </div>
                                    </div>
                                    <div>
                                        <img src={Frame}/>
                                    </div>
                                </div>
                                <div className='flex items-center gap-1 lg:mt-0  mt-1 md:mt-6'>
                                    <div>
                                        <ArrowUp size={15}/>
                                    </div>
                                    <div>
                                        <p className="m-0 text-[14px]">
                                            <span className='text-green-400'>+12%</span>
                                            <span className='ps-1'>
                                                high last week
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='bg-[#2097CF] md:w-[258px] w-[250px] md:h-[138px] md:p-4  border border-none rounded-md md:ps-2  p-5 flex items-center justify-between md:my-5 lg:my-0 my-3'>
                            <div>
                                <div className='flex  justify-between gap-10'>
                                    <div className='flex justify-center gap-3'>
                                        <div>
                                            <img src={RectangleOne}/>
                                        </div>
                                        <div>
                                            <p className="m-0 text-white">Agent Transactions</p>
                                            <p className='lg:text-[30px] text-white  md:text-[25px]'>₦4,987.00</p>
                                        </div>
                                    </div>
                                    <div>
                                        <img src={FrameTwo}/>
                                    </div>
                                </div>
                                <div className='flex items-center gap-1 lg:mt-0  mt-1 md:mt-6'>
                                    <div>
                                        <ArrowUp color='#fff' size={15}/>
                                    </div>
                                    <div>
                                        <p className="m-0 text-[14px]">
                                            <span className='text-green-950'>+12%</span>
                                            <span className='md:ps-1 text-white'>
                                                high last week
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white md:w-[258px] w-[250px]  md:h-[138px] md:p-4  border border-none rounded-md md:ps-2 p-5 flex items-center justify-between md:my-5 lg:my-0 my-4'>
                            <div>
                                <div className='flex  justify-between md:gap-3 lg:gap-3'>
                                    <div className='flex justify-center gap-3'>
                                        <div>
                                            <img src={Rectangle}/>
                                        </div>
                                        <div>
                                            <p className="m-0 text-gray-300">Customer Transactions</p>
                                            <p className='lg:text-[30px] md:text-[25px]'>₦5,876.00</p>
                                        </div>
                                    </div>
                                    <div>
                                        <img src={Frame}/>
                                    </div>
                                </div>
                                <div className='flex items-center gap-1 lg:mt-0  mt-1 md:mt-6'>
                                    <div>
                                        <ArrowUp size={15}/>
                                    </div>
                                    <div>
                                        <p className="m-0 text-[14px]">
                                            <span className='text-green-400'>+12%</span>
                                            <span className='md:ps-1'>
                                                high last week
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white md:w-[258px] w-[250px] md:h-[138px] md:p-4  border border-none rounded-md md:ps-2 p-4 flex items-center justify-between md:my-5 lg:my-2'>
                            <div>
                                <div className='flex  justify-between md:gap-12 gap-x-16 md:ps-0 lg:gap-6'>
                                    <div className='flex justify-center gap-3'>
                                        <div>
                                            <img src={Rectangle}/>
                                        </div>
                                        <div>
                                            <p className="m-0 text-gray-300">Revenue</p>
                                            <p className='lg:text-[30px] md:text-[25px]'>₦49,875.00</p>
                                        </div>
                                    </div>
                                    <div className='md:ps-0 ps-3'>
                                        <img src={FrameThree}/>
                                    </div>
                                </div>
                                <div className='flex items-center gap-1 lg:mt-0 mt-3 md:mt-6'>
                                    <div>
                                        <ArrowUp size={15}/>
                                    </div>
                                    <div>
                                        <p className="m-0 text-[14px]">
                                            <span className='text-red-500'>+12%</span>
                                            <span className='ps-1'>
                                                high last week
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='flex flex-wrap items-center justify-between'>
                            <div>
                                <p className="m-0">Agent Transactions</p>
                                
                            </div>
                            <div className='flex items-center md:gap-4   justify-end'>
                                <div>
                                    <div className="border rounded-[20px] gap-3 justify-center hidden  lg:flex items-center p-2 bg-white">
                                    <input className="outline-none border-none md:ps-2 box-border bg-transparent" placeholder="Search" type="search"/>
                                    <img className="md:pe-2 md:w-[25px]" src={MagnifyingGlass}/>
                                    </div>
                                </div>
                                <div>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button
                                            variant={"outline"}
                                            className={cn(
                                                "flex items-center  hover:bg-transparent bg-transparent border-none outline-none box-border font-normal",
                                                !date && "text-muted-foreground"
                                            )}>
                                            <CalendarIcon />
                                            <ChevronDown/>
                                            {date ? format(date, "PPP") : <span></span>}
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0" align="start">
                                            <Calendar
                                            mode="single"
                                            selected={date}
                                            onSelect={setDate}
                                            initialFocus
                                            />
                                        </PopoverContent>
                                    </Popover>
                                </div>
                                <div>
                                    <Button className="flex items-center justify-center  bg-[#2097CF]">
                                        <div>
                                            <ArrowDownToLine/>
                                        </div>
                                        <div>
                                            <p className="m-0 text-white">Export PDF</p>
                                        </div>
                                    </Button>
                                </div>
                            </div>

                        </div>
                    </div>
                </AdminLayout>
            </div>

        </>
    )
}

export default Transactions;