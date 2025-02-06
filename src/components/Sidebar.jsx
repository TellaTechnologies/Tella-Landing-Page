import React, { useState } from 'react';
import Frame from '../assets/Frame.svg'
import { HomeIcon, LogOut, Settings } from 'lucide-react';
import Vector from '../assets/Vector.svg'
import VectorOne from '../assets/Vector (1).svg'
import VectorTwo from '../assets/Vector (2).svg'
import VectorThree from '../assets/Vector 2 (1).svg'
import VectorFour from '../assets/Vector 3.svg'
import VectorFive from '../assets/Vector 3(1).svg'
import Help from '../assets/help.svg'
import Side from '../assets/Vector 4.svg'
import { Link } from 'react-router-dom';


const Sidebar = () => {
    const [Trans, TransactionsDropD] = useState(false)
   
    return (
        <div className='bg-[#2097CF]'>
            <div className="group peer md:relative fixed z-10 bg-[#2097CF] text-sidebar-foreground md:block">
                <div className='class relative w-[--sidebar-width] bg-transparent transition-[width] duration-200 ease-linear group-data-[collapsible=offcanvas]:w-0 group-data-[side=right]:rotate-180 group-data-[collapsible=icon]:w-[--sidebar-width-icon] h-[100vh] overflow-x-scroll'>
                    <div className='flex  items-center justify-center md:py-5 py-4'>
                        <img src={Frame} alt="" />
                    </div>
                    <div className=''>
                        <div className='flex items-center justify-start gap-3 hover:text-black text-white hover:bg-white md:ms-8 ms-4 md:p-3 p-3 hover:border hover:border-none hover:rounded-l-[30px] my-3 md:my-5'>
                            <div className='hover:text-black text-white'>
                                <HomeIcon className='hover:text-black md:w-[20px] w-[18px]'/>
                            </div>
                            <div className='flex items-center justify-center'>
                                <p className="m-0 md:text-[16px] text-[14px] font-semibold">Dashboard</p>
                            </div>
                        </div>
                        <div className='flex items-center justify-start gap-3 hover:text-black text-white hover:bg-white md:ms-8 md:p-3 p-3 my-4 ms-4 hover:border hover:border-none hover:rounded-l-[30px] md:my-5' onClick={() => TransactionsDropD(prevState => !prevState)}>
                           {
                            // <div className='hover:text-black text-white'>
                            //     <img src={Vector}/>
                            // </div> 
                            <div>
                                <img className=' md:w-[20px] w-[18px]' src={VectorOne} alt="" />
                            </div>
                            }
                            <div className='flex items-center justify-center'>
                                <p className="m-0 md:text-[16px] text-[14px] font-semibold">Transactions</p>
                            </div>                            
                        </div>
                        { Trans ? <div className='flex items-center justify-center'>
                            <div className='bg-white md:w-[230px] w-[200px] ps-3  border border-none rounded-md md:ps-2  flex items-center justify-between md:mb-0 mb-3'>
                                <div>
                                    <img src={Side}/>
                                </div>
                                <div>
                                    <div className='flex items-center  hover:bg-[#2097CF]  gap-3 hover:text-white text-black md:pe-8  pe-2 p-2 hover:border hover:border-none hover:rounded-l-[30px] md:my-2'>
                                        <div className='flex items-center justify-center'>
                                            <p className="m-0 md:text-[16px] text-[13px] font-semibold">Agent Transactions</p>
                                        </div>                            
                                    </div>
                                    <div className='flex items-center  hover:bg-[#2097CF]  gap-3 hover:text-white text-black md:pe-8  pe-4 p-2 hover:border hover:border-none hover:rounded-l-[30px] md:my-2'>
                                        <div className='flex items-center justify-center'>
                                            <p className="m-0 md:text-[16px] text-[13px] font-semibold">Customer Transactions</p>
                                        </div>                            
                                    </div>
                                </div>
                            </div>
                        </div> : <div></div>}
                        <div className='flex items-center justify-start gap-3 hover:text-black text-white hover:bg-white md:ms-8 md:p-3 p-3  md:my-0 my-3 ms-4 hover:border hover:border-none hover:rounded-l-[30px]'>
                            <div className='hover:text-black text-white'>
                                {
                                // <div className='hover:text-black text-white'>
                                //     <img src={VectorThree}/>
                                // </div> 
                                <div>
                                    <img className=' md:w-[20px] w-[18px]' src={VectorTwo} alt="" />
                                </div>
                                }
                            </div>
                            <div className='flex items-center justify-center'>
                                <p className="m-0 md:text-[16px] text-[14px] font-semibold">Agents</p>
                            </div>
                        </div>
                        <div className='flex items-center justify-start gap-3 hover:text-black text-white hover:bg-white md:ms-8 md:p-3 p-3 my-3 ms-4 hover:border hover:border-none hover:rounded-l-[30px] md:my-5'>
                            <div className='hover:text-black text-white'>
                                {
                                // <div className='hover:text-black text-white'>
                                //     <img src={VectorTh}/>
                                // </div> 
                                <div>
                                    <img className=' md:w-[20px] w-[18px]' src={VectorFour} alt="" />
                                </div>
                                }
                            </div>
                            <div className='flex items-center justify-center'>
                                <p className="m-0 md:text-[16px] text-[14px] font-semibold">Customers</p>
                            </div>
                        </div>
                        <div className='flex items-center justify-start gap-3 hover:text-black text-white hover:bg-white md:ms-8 md:p-3 p-3 ms-4 md:my-0 my-3  hover:border hover:border-none hover:rounded-l-[30px]'>
                            <div className='hover:text-black text-white'>
                                {
                                // <div className='hover:text-black text-white'>
                                //     <img src={VectorThree}/>
                                // </div> 
                                <div>
                                    <img className=' md:w-[20px] w-[18px]' src={VectorTwo} alt="" />
                                </div>
                                }
                            </div>
                            <div className='flex items-center justify-center'>
                                <p className="m-0 md:text-[16px] text-[14px] font-semibold">System Admin</p>
                            </div>
                        </div>
                        <div className='flex items-center justify-start gap-3 hover:text-black text-white hover:bg-white md:ms-8 md:p-3 p-3 ms-4 my-4 hover:border hover:border-none hover:rounded-l-[30px] md:my-5'>
                            <div className='hover:text-black text-white'>
                                <Settings className='hover:text-black' size={20}/>
                            </div>
                            <div className='flex items-center justify-center'>
                                <p className="m-0 md:text-[16px] text-[14px] font-semibold">Settings</p>
                            </div>
                        </div>
                        <div className='md:mt-20'>                            
                            <div className='flex items-center justify-start gap-3 hover:text-black text-white hover:bg-white md:ms-8 ms-4 p-3  my-4 md:p-3 hover:border hover:border-none hover:rounded-l-[30px] md:my-5'>
                                <div className='hover:text-black text-white'>
                                    <img className=' md:w-[20px] w-[18px]' src={Help}/>
                                </div>
                                <div className='flex items-center justify-center'>
                                    <p className="m-0 md:text-[16px] text-[14px] font-semibold">Help</p>
                                </div>
                            </div>
                            <div className='flex items-center justify-start gap-3 hover:text-black text-white hover:bg-white md:ms-8 ms-4 p-3  md:p-3 hover:border hover:border-none hover:rounded-l-[30px] md:my-5'>
                                <div className='hover:text-black text-white'>
                                    <LogOut className='hover:text-black  md:w-[20px] w-[18px]' />
                                </div>
                                <div className='flex items-center justify-center'>
                                    <p className="m-0 md:text-[16px] text-[14px] font-semibold">Log out</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;