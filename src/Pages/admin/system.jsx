import React from 'react';
import AdminLayout from '../../components/admin/adminLayout';
import Rectangle from '../../assets/Rectangle.svg'
import RectangleOne from '../../assets/Rectangle2.svg'
import Frame from '../../assets/Frame1.svg'
import FrameTwo from '../../assets/Frame2.svg'
import FrameThree from '../../assets/Frame3.svg'
import FrameFive from '../../assets/Frame55.svg'
import { ArrowDownToLine, ArrowUp} from 'lucide-react';
import {Input} from '../../components/ui/input'
import { Label } from "@/components/ui/label"
import {Button} from '@/components/ui/button'

function system(props) {
    return (
        <div> 
            <AdminLayout title={"System Admin"}>
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
                <div className='flex flex-wrap mx-auto items-center justify-center gap-4 '>
                    {/*Add User Admin  */}
                    <div>
                        <div>
                            <p className="m-0 md:text-[22px]  font-semibold text-[18px]">
                                Add a New user
                            </p>
                            <p className="m-0 text-[#282828] opacity-[0.4] md:text-[16px] text-[14px]">Register a new user</p>
                        </div>
                        <div className='md:pt-8  mt-3 md:p-0 pt-5 p-9 bg-white md:w-[537px] md:h-[610px] border border-none rounded-[20px]'>
                            <div>
                                <p className="m-0 md:text-[22px] font-semibold text-center text-[18px]">
                                    Add a new Admin
                                </p>
                                <p className="m-0 text-center text-[#282828] opacity-[0.4] md:text-[16px] text-[14px]">Fill in the details to add a new Admin</p>
                            </div>
                            <div className="md:my-6 justify-center w-[100%] mx-auto max-w-sm items-center gap-1.5">
                                <Label className="font-semibold" htmlFor="name">Full Name</Label>
                                <Input className='md:p-7 w-[100%]' type="name" id="name" placeholder="First Name" />
                            </div>
                            <div className="md:my-4 justify-center w-[100%] mx-auto max-w-sm items-center gap-1.5">
                                <Label className="font-semibold" htmlFor="Pnumber">Phone Number</Label>
                                <Input className='md:p-7' type="number" id="Pnumber" placeholder="Phone  Number" />
                            </div>
                            <div className='flex justify-center my-5 md:my-20'>
                                <Button className="bg-[#2097CF] w-[100%] text-white md:w-[80%] mx-auto md:p-8">Save</Button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div  class="relative flex w-[30%] font-semibold rounded-lg">
                                <p className="m-0 md:text-[22px] text-[18px]">
                                    New Requests
                                </p>
                                <span class="absolute top-0 right-0 -mt-2 -mr-2 px-2 py-1 text-xs font-bold text-white bg-red-500 rounded-full">
                                    0
                                    <span class="sr-only">unread messages</span>
                                </span>
                            </div>
                        </div>
                        <div className='md:pt-8 md:mt-9 mt-4 md:p-0 p-4 bg-white md:w-[537px] md:h-[610px] border border-none rounded-[20px]'>
                            <div>
                                <p className="md:ms-8 text-start text-[#282828] opacity-[0.4] md:text-[16px] text-[14px]">New Admin Requests</p>
                            </div> 
                            <div>
                                <div className='flex md:gap-0 gap-3 md:py-5 py-3 items-start md:w-[80%] mx-auto justify-between'>
                                    <div>
                                        <p className="m-0 font-semibold md:text-[16px]">
                                            Oluwatobi Fasanmi Ltd
                                        </p>
                                        <p className="m-0 text-[#282828] opacity-[0.4] md:text-[16px] text-[14px]">
                                            9088065789
                                        </p>
                                    </div>
                                    <div>
                                        <Button className='bg-[#2097CF] '>View Details</Button>
                                    </div>
                                </div>
                                <div></div>
                            </div>                           
                            <div className='flex justify-center my-5 md:my-20'>
                                <Button className="bg-[#2097CF] w-[100%] text-white md:w-[80%] mx-auto md:p-8">Accept All</Button>
                            </div>
                        </div>
                    </div>
                </div> 
            </AdminLayout>                           
        </div>
    );
}

export default system;