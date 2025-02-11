import React, { useState } from 'react';
import AdminLayout from '../../../components/admin/adminLayout';
import Rectangle from '../../../assets/image/Rectangle.svg'
import RectangleOne from '../../../assets/image/Rectangle2.svg'
import Frame from '../../../assets/image/Frame1.svg'
import FrameTwo from '../../../assets/image/Frame2.svg'
import FrameThree from '../../../assets/image/Frame3.svg'
import FrameFive from '../../../assets/image/Frame55.svg'
import MagnifyingGlass from '../../../assets/image/coolicon.svg'
import { ArrowDownToLine, ArrowUp } from 'lucide-react';
import { Button } from "@/components/ui/button"
function ListOfCustomers(props) {
    const [date, setDate] = useState(null); // Add state for date

    return (
        <div>
            <AdminLayout title={"List Of Customers"}>
                <div className="flex flex-wrap mx-auto lg:mx-0 items-center justify-around">

                    <div className='bg-white md:w-[258px] w-[250px] md:h-[138px] md:p-4  border border-none rounded-md md:ps-2  p-5 flex items-center justify-between md:my-5 lg:my-0 my-4'>
                        <div>
                            <div className='flex  justify-between md:gap-24 gap-20 lg:gap-20'>
                                <div className='flex justify-center gap-3'>
                                    <div>
                                        <img src={Rectangle}/>
                                    </div>
                                    <div>
                                        <p className="m-0 text-gray-300">Total Agents</p>
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
                    <div className='bg-white md:w-[258px] w-[250px] md:h-[138px] md:p-4  border border-none rounded-md md:ps-2  p-5 flex items-center justify-between md:my-5 lg:my-0 my-3'>
                        <div>
                            <div className='flex  justify-between gap-10'>
                                <div className='flex justify-center gap-3'>
                                    <div>
                                        <img src={Rectangle}/>
                                    </div>
                                    <div>
                                        <p className="m-0 text-gray-300">Agent Transactions</p>
                                        <p className='lg:text-[30px] text-black  md:text-[25px]'>₦4,987.00</p>
                                    </div>
                                </div>
                                <div>
                                    <img src={FrameThree}/>
                                </div>
                            </div>
                            <div className='flex items-center gap-1 lg:mt-0  mt-1 md:mt-6'>
                                <div>
                                    <ArrowUp  size={15}/>
                                </div>
                                <div>
                                    <p className="m-0 text-[14px]">
                                        <span className='text-green-950'>+12%</span>
                                        <span className='ps-1 '>
                                            high last week
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#fff]  md:w-[258px] w-[250px]  md:h-[138px] md:p-4  border border-none rounded-md md:ps-2 p-5 flex items-center justify-between md:my-5 lg:my-0 my-4'>
                        <div>
                            <div className='flex  justify-between md:gap-3 lg:gap-3'>
                                <div className='flex justify-center gap-3'>
                                    <div>
                                        <img src={Rectangle}/>
                                    </div>
                                    <div>
                                        <p className="m-0 text-gray-400">Customer Transactions</p>
                                        <p className='lg:text-[30px] text-black md:text-[25px]'>₦5,876.00</p>
                                    </div>
                                </div>
                                <div>
                                    <img src={FrameFive}/>
                                </div>
                            </div>
                            <div className='flex items-center gap-1 lg:mt-0  mt-1 md:mt-6'>
                                <div>
                                    <ArrowUp color='#000' size={15}/>
                                </div>
                                <div>
                                    <p className="m-0 text-[14px]">
                                        <span className='text-green-950'>+12%</span>
                                        <span className='ps-1'>
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
                    <div className='flex items-center justify-between'>
                        <div>
                            <p className="m-0">Customer Lists</p>
                            <div>
                                <p className="m-0 md:text-[16px] text-[13px] text-gray-500"> Here below are the lists of<br/>  customers</p>
                            </div>
                        </div>
                        <div className='flex items-center md:gap-4   justify-end'>
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
                            <div>
                                <div className="border rounded-[20px] gap-3 justify-center hidden  lg:flex items-center p-2 bg-white">
                                    <input className="outline-none border-none md:ps-2 box-border bg-transparent" placeholder="Search Name/ID" type="search"/>
                                    <img className="md:pe-2 md:w-[25px]" src={MagnifyingGlass}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AdminLayout>
        </div>
    );
}

export default ListOfCustomers;