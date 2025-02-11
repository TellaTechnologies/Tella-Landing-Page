import React, { useState } from 'react';
import Frame from '../assets/image/Frame.svg'
import { HomeIcon, LogOut, Settings } from 'lucide-react';
import Vector from '../assets/image/Vector.svg'
import VectorOne from '../assets/image/Vector (1).svg'
import VectorTwo from '../assets/image/Vector (2).svg'
import VectorThree from '../assets/image/Vector 2 (1).svg'
import VectorFour from '../assets/image/Vector 3.svg'
import VectorFive from '../assets/image/Vector 3(1).svg'
import Help from '../assets/image/help.svg'
import Side from '../assets/image/Vector 4.svg'
import { Link, NavLink } from 'react-router-dom';


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
                        <NavLink to={"/"}  className={({isActive}) => `flex items-center justify-start gap-3 text-white hover:bg-white md:ms-8 ms-4 md:p-3 p-3  my-3 md:my-5 ${isActive ? '': 'hover:text-black hover:border hover:border-none hover:rounded-l-[30px]' }`}>
                            <div className='hover:text-black text-white'>
                                <HomeIcon className='hover:text-black md:w-[20px] w-[18px]'/>
                            </div>
                            <div className='flex items-center justify-center'>
                                <p className="m-0 md:text-[16px] text-[14px] font-semibold">Dashboard</p>
                            </div>
                        </NavLink>
                        <div className='flex items-center justify-start gap-3 hover:text-black text-white hover:bg-white md:ms-8 md:p-3 p-3 my-4 ms-4 hover:border hover:border-none hover:rounded-l-[30px] md:my-5' onClick={() => TransactionsDropD(prevState => !prevState)}>
                           {
                            Trans ?
                            <div className='hover:text-black text-white'>
                                <img src={Vector}/>
                            </div>  :
                            <div>
                                <img className=' md:w-[20px] w-[18px]' src={VectorOne} alt="" />
                            </div>
                            }
                            <div className='flex items-center justify-center'>
                                <p className={` ${Trans ? "text-black": "text-white"}m-0 md:text-[16px] text-[14px] font-semibold`}>Transactions</p>
                            </div>                            
                        </div>
                        { Trans ? <div className='flex items-center justify-center'>
                            <div className='bg-white md:w-[230px] w-[200px] ps-3  border border-none rounded-md md:ps-2  flex items-center justify-between md:mb-0 mb-3'>
                                <div>
                                    <img src={Side}/>
                                </div>
                                <div>
                                    <NavLink to={"/dashboard/agent/transactions"} className={({isActive}) => `flex items-center gap-3 hover:text-white   md:pe-8  pe-2 p-2 hover:border hover:border-none hover:rounded-l-[30px] md:my-2 ${isActive ? "text-white bg-[#2097cF] rounded-l-[30px] " : "text-black "}`}>
                                        <div className='flex items-center justify-center'>
                                            <p className="m-0 md:text-[16px] text-[13px] font-semibold">Agent Transactions</p>
                                        </div>                            
                                    </NavLink>
                                    <NavLink  to={"/dashboard/customers/transactions"} className={({isActive}) => `flex items-center gap-3 hover:text-white   md:pe-8  pe-2 p-2 hover:border hover:border-none hover:rounded-l-[30px] md:my-2 ${isActive ? "text-white bg-[#2097cF] rounded-l-[30px] " : "text-black "}`}>
                                        <div className='flex items-center justify-center'>
                                            <p className="m-0 md:text-[16px] text-[13px] font-semibold">Customer Transactions</p>
                                        </div>                            
                                    </NavLink>
                                </div>
                            </div>
                        </div> : <div></div>}                        

                        <NavLink to={"/dashboard/customers/list"} className={({isActive}) => { 
                            return `flex items-center justify-start gap-3 hover:text-black hover:bg-white md:ms-8 md:p-3 p-3 my-3 ms-4 hover:border hover:border-none hover:rounded-l-[30px] md:my-5 
                            ${isActive ? "bg-white text-black rounded-l-[30px]" : "text-white"}`;
                        }}>
                            {({ isActive }) => (
                              <>
                                <div className=''>
                                    <img className='md:w-[20px] w-[18px]' src={isActive ? VectorThree : VectorFour} alt="" />
                                </div>
                                <div className='flex hover:text-black items-center justify-center'>
                                    <p className={` m-0 md:text-[16px] text-[14px] hover:text-black font-semibold`}>Customers</p>
                                </div>
                              </>
                            )}
                        </NavLink>
                        <NavLink to={"/dashboard/agent/list"} className={({ isActive }) => {
                            return `flex items-center hover:bg-white hover:rounded-l-[30px] hover:text-black justify-start gap-3  md:ms-8 md:p-3 p-3 my-3 ms-4 
                             ${isActive ? "bg-white text-black rounded-l-[30px]" : "text-white"}`;
                        }}>
                            {({ isActive }) => (  // Move isActive inside the function scope
                                <>
                                    <div className='hover:text-black text-white'>
                                        <img src={isActive ? VectorThree : VectorTwo} className='md:w-[20px] w-[18px]'/>
                                    </div>
                                    <div className='flex items-center justify-center'>
                                        <p className="m-0 md:text-[16px] text-[14px] font-semibold">Agents</p>
                                    </div>
                                </>
                            )}
                        </NavLink>
                        <NavLink to={"/dashboard/system-admin"} className={({isActive}) => {
                            return `flex items-center justify-start gap-3 hover:bg-white md:ms-8 md:p-3 p-3 ms-4 md:my-0 my-3 hover:border hover:border-none hover:text-black hover:rounded-l-[30px]
                            ${isActive ? "bg-white text-black rounded-l-[30px]" : "text-white"}`;
                        }}>

                           { ({isActive}) => (
                            <>
                                <div className='hover:text-black text-white'>
                                    <img className='md:w-[20px] w-[18px]' src={isActive ? VectorThree : VectorTwo} alt="" />
                                </div>
                                {/* <div className='flex items-center justify-center'>
                                    <p className="m-0 md:text-[16px] text-[14px] font-semibold">System Admin</p>
                                </div> */}
                                <div className="flex items-center justify-center">
                                    <span className={` ${isActive ? "text-black" : "text-white"}m-0 md:text-[16px] text-[14px] font-semibold`}>
                                    System Admin <span class="badge border text-white border-none rounded-[100%] px-2 py-1 bg-red-700">0</span>
                                    </span>
                                </div>
                            </>
                           )}
                        </NavLink>

                        <NavLink to={"/dashboard/settings"} className={({isActive}) => { return `flex items-center justify-start gap-3 hover:text-black  hover:bg-white md:ms-8 md:p-3 p-3 ms-4 my-4 hover:border hover:border-none hover:rounded-l-[30px] md:my-5 ${isActive ? "text-black bg-white rounded-l-[30px] " : "text-white" }`;}}>
                            {({isActive}) => (
                                <>
                                    <div className={` ${isActive ? " text-black" : "text-white"}hover:text-black `}>
                                        <Settings className={`${isActive ? "text-black" : "text-white"}hover:text-black`} size={20}/>
                                    </div>
                                    <div className='flex items-center justify-center'>
                                        <p className={`${isActive ? "text-black" : "text-white"} m-0 md:text-[16px] text-[14px] font-semibold`}>Settings</p>
                                    </div>
                                </>
                            )}
                        </NavLink>
                        <div className='md:mt-20'>                            
                            <div className='flex items-center justify-start gap-3 hover:text-black text-white hover:bg-white md:ms-8 ms-4 p-3  my-4 md:p-3 hover:border hover:border-none hover:rounded-l-[30px] md:my-5'>
                                <div className='hover:text-black text-white'>
                                    <img className=' md:w-[20px] w-[18px]' src={Help}/>
                                </div>
                                <div className='flex items-center justify-center'>
                                    <p className="m-0 md:text-[16px] text-[14px] font-semibold">Help</p>
                                </div>
                            </div>
                            <NavLink   to={"/logout"} className={({isActive}) =>  {return`flex items-center justify-start gap-3 hover:text-black text-white hover:bg-white md:ms-8 ms-4 p-3  md:p-3 hover:border hover:border-none hover:rounded-l-[30px] md:my-5 ${isActive ? "bg-white rounded-l-[30px] text-black" : "text-white"}`}}>
                                <div className='hover:text-black text-white'>
                                    <LogOut className='hover:text-black  md:w-[20px] w-[18px]' />
                                </div>
                                <div className='flex items-center justify-center'>
                                    <p className="m-0 md:text-[16px] text-[14px] font-semibold">Log out</p>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;