import React, { useEffect, useState } from 'react';
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
import axios from 'axios';
import { Link } from 'react-router-dom';
function ListOfCustomers(props) {
    const [date, setDate] = useState(null); // Add state for date
    const [customer, setCustomers] = useState("")
    const token = localStorage.getItem("token")

    const customerOrigList = async() => {
        try {
            const response = await axios.get("http://ec2-44-205-21-123.compute-1.amazonaws.com:8080/api/v1/admin/users?userRole=customer", 
                {
                    headers: {
                        "Content-Type": "application/json",                
                        'Authorization': `Bearer ${token}`,
                    }
                }
            )
            const List = response.data.data
            setCustomers(List)
            console.log(response.data.data)
        } catch (error) {
           console.log(error)
        }
    }


    useEffect(() =>{
        customerOrigList();
    }, [])
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
                                        <p className='lg:text-[34px] text-[#282828] md:text-[25px]'>0</p>
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
                                        <span className='ps-1 text-[#282828]'>
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
                                        <p className='lg:text-[30px] text-[#282828] md:text-[25px]'>₦5,876.00</p>
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
                                        <span className='ps-1 text-[#282828]'>
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
                                        <p className='lg:text-[30px] text-[#282828] md:text-[25px]'>₦49,875.00</p>
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
                                        <span className='ps-1 text-[#282828]'>
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
                            <p className="m-0 text-[#282828]">Customer Lists</p>
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
                    <div className='flex flex-wrap justify-center gap-5'>
                            {
                                customer.length === 0 ? (
                                    <svg className="animate-spin h-6 w-6 text-gray-500 mx-auto" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                                    </svg>
                                ) : (
                                    customer.map((agents, index) => (
                                        <div 
                                            key={index} // Added key prop
                                            className='bg-white md:p-5 p-2 rounded-lg lg:w-[360px] lg:h-[161px] md:w-[300px] md:h-[150px] w-[250px] h-[130px]'
                                        >
                                            <div className="flex gap-3 items-center">
                                                <div>
                                                    <img src={agents.profile.selfieImage}  className='rounded-full w-[50px] h-[50px]' alt="" />
                                                </div>
                                                <div>
                                                    <p className="m-0 lg:text-[18px] md:text-[16px] font-extrabold text-[#282828]">
                                                        {agents.username} 
                                                    </p>
                                                    <p className="m-0 lg:ps-9 font-bold text-[#282828] opacity-[50%]">
                                                        {agents.phoneNumber}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex justify-between md:mt-6 lg:mt-9 mt-6 items-center">
                                                <div>
                                                    <Link onClick={() => handleProfile(agents)}  className="flex items-center justify-center md:px-5 md:py-2 px-4 py-2 rounded-md bg-[#2097CF]">
                                                        <p className="m-0 text-white">Profile</p>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>                                            
                                    ))
                                )
                            }

                            </div>                    
                </div>
            </AdminLayout>
        </div>
    );
}

export default ListOfCustomers;