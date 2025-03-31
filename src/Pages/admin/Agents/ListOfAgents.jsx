import React, { useEffect, useState } from 'react';
import AdminLayout from '../../../components/admin/adminLayout';
import Rectangle from '../../../assets/image/Rectangle.svg'
import RectangleOne from '../../../assets/image/Rectangle2.svg'
import Frame from '../../../assets/image/Frame1.svg'
import FrameTwo from '../../../assets/image/Frame2.svg'
import FrameThree from '../../../assets/image/Frame3.svg'
import FrameFive from '../../../assets/image/Frame55.svg'
import MagnifyingGlass from '../../../assets/image/coolicon.svg'
import { ArrowDownToLine, ArrowUp} from 'lucide-react';
import { Button } from "@/components/ui/button"
import {DummyImage} from '../../../components/DummyImage'
import Rating from '../../../components/rating';
import Image4 from '../../../assets/image/image 4.svg'
import { Link } from 'react-router-dom';
import axios from 'axios';

function ListOfAgents() {
    const [showAgentProfile, setShowAgentProfile] = useState(true);
    const [selectedImage, setSelectedImage] = useState(null);
    const [agent, setAgents] = useState([])
    const token = localStorage.getItem("token")
    const [listofagent, ListOfAgentsSet] = useState(false)
    const [profile, setProfile] = useState(null)

    
        const handleFileChange = (e) => {
            const file = e.target.files[0];
            if (file) {
                const imageUrl = URL.createObjectURL(file);
                setSelectedImage(imageUrl);
            }
        }

        const ListOfAgentsSets = () => {
            ListOfAgentsSet(true)
            setShowAgentProfile("")

        }

    const agentsOrigList = async() => {
        try {
            const response = await axios.get("http://ec2-44-205-21-123.compute-1.amazonaws.com:8080/api/v1/admin/users?userRole=agent", 
                {
                    headers: {
                        "Content-Type": "application/json",                
                        'Authorization': `Bearer ${token}`,
                    }
                }
            )
            
            const List = response.data.data
            setAgents(List)
            console.log(response.data.data)


        } catch (error) {
            console.log(error)
        }
    }


    const handleProfile = (agents) =>{
        setShowAgentProfile(false)
        setProfile(agents)
    }


    useEffect(()=> {
        agentsOrigList()
    }, [])
    return (
        <div>
            {
                // agent ?
                <AdminLayout SetAgentProfile={setShowAgentProfile}  title={`${listofagent ? `${profile.username}'s Customers` : "List Of Agents"}`}>
                    {
                        showAgentProfile ?
                        <>
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
                                        <p className="m-0 text-[17px] md:text-[22px] text-[#282828]">Agent Lists</p>
                                        <div>
                                            <p className="m-0 md:text-[16px] text-[13px] text-gray-500"> Here below are the lists of agents</p>
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
                            <div className='flex flex-wrap justify-center gap-5'>
                            {
                                agent.length === 0 ? (
                                    <svg className="animate-spin h-6 w-6 text-gray-500 mx-auto" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                                    </svg>
                                ) : (
                                    agent.map((agents, index) => (
                                        <div 
                                            key={index} // Added key prop
                                            className='bg-white md:p-5 p-2 rounded-lg lg:w-[360px] lg:h-[161px] md:w-[300px] md:h-[150px] w-[300px] h-[130px]'
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
                                                    <Rating/>
                                                </div>
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
                        </> :
                        <div className={`${listofagent ? "hidden" : "lg:flex"}  items-center justify-between`}>
                            <div className='md:h-[307px] md:flex items-center justify-center md:gap-3  lg:gap-4 lg:w-[60%] md:w-[100%] bg-white border rounded-md'>
                                <div>
                                    <img className=' md:w-[250px] md:h-[250px] w-[150px] mx-auto md:my-0 my-3 rounded-[100%]' src={profile.profile.selfieImage}  />                                      
                                </div>
                                <div className='md:block flex justify-center md:my-0 my-3'>
                                    <div>
                                        <p className="m-0 md:text-[24px] text-[#282828] text-[17px]  lg:text-[32px] font-semibold">{profile.username}</p>
                                        <p className='text-gray-400 md:text-[18px] text-[15px] lg:text-[20px] font-semibold'>{profile.phoneNumber}</p>
                                        <Rating/>
                                    </div>
                                    <div className='md:mt-10'>
                                        <Button  className="bg-[#2097CF] text-[16px] font-semibold text-white">Disable Agent</Button>
                                    </div>
                                </div>
                            </div>
                            <div className='md:h-[307px] my-3 h-[240px] md:w-[80%] md:mx-auto md:my-4 lg:w-[40%] bg-white border rounded-md border-l-2'>                               
                                <div className='mx-auto md:w-[60%] lg:w-[60%] md:my-5 lg:my-9'>
                                    <div className='flex justify-end md:me-0 md:mt-0 mt-2 me-2'>
                                        <Link onClick={() => ListOfAgentsSets()} className='text-[#00ADFF] text-[16px]'>See all</Link>
                                    </div>
                                    <div className='bg-white  md:w-[258px] w-[250px] md:h-[160px] lg:p-4  border-2 rounded-[20px] md:ps-2  p-5  mx-auto items-center justify-between md:my-4 lg:my-0 my-4'>
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
                                                    <img src={FrameFive}/>
                                                </div>
                                            </div>
                                            <div className='flex items-center gap-1 lg:mt-0  mt-1 md:mt-2'>
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
                                </div>
                            </div> 
                        </div>                        
                    }
                        <div className={`${listofagent ? "block" : "hidden"}`}>
                            <div className={`${listofagent? "flex flex-wrap" : "hidden"}  mx-auto lg:mx-0 items-center justify-around`}>
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
                            <div className={`${listofagent ? "block" : "hidden"}`}>
                                <div className={`flex items-center justify-between`}>
                                    <div>
                                        <p className={`m-0 md:text-[22px] text-[#282828]`}>
                                            {profile ? `${profile.username}'s Customers` : "Customers"}
                                        </p>
                                        <div>
                                            <p className="m-0 md:text-[16px] text-[13px] text-gray-500">
                                                {profile ? `Below are the list of customers created by ${profile.username}` : "Loading..."}
                                            </p>
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
                                {/* <div className='flex flex-wrap md:mt-3 mt-2 justify-start gap-5'>
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
                                    )))}
                                </div>                       */}
                            </div>                               
                        </div>                                    
                </AdminLayout>
                // :
                // <AdminLayout setAgentProfile={setAgentProfile}  title={"List Of Agents"}>
                //     <div>d</div>
                // </AdminLayout>
            }
        </div>
    );
}

export default ListOfAgents;