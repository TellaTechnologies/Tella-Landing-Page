import React, { useState } from 'react';
import AdminLayout from '../../../components/admin/adminLayout';
import Rectangle from '../../../assets/Rectangle.svg'
import RectangleOne from '../../../assets/Rectangle2.svg'
import Frame from '../../../assets/Frame1.svg'
import FrameTwo from '../../../assets/Frame2.svg'
import FrameThree from '../../../assets/Frame3.svg'
import FrameFive from '../../../assets/Frame55.svg'
import MagnifyingGlass from '../../../assets/coolicon.svg'
import { ArrowDownToLine, ArrowUp} from 'lucide-react';
import { Button } from "@/components/ui/button"
import {DummyImage} from '../../../components/DummyImage'
import Rating from '../../../components/rating';
import { Link } from 'react-router-dom';

function ListOfAgents() {
    const [showAgentProfile, setShowAgentProfile] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);


    
        const handleFileChange = (e) => {
            const file = e.target.files[0];
            if (file) {
                const imageUrl = URL.createObjectURL(file);
                setSelectedImage(imageUrl);
            }
        }
    return (
        <div>
            {
                // agent ?
                <AdminLayout SetAgentProfile={setShowAgentProfile}  title={"List Of Agents"}>
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
                                        <p className="m-0">Agent Lists</p>
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
                        </> :
                        <div className="lg:flex items-center justify-between">
                            <div className='md:h-[307px] flex items-center justify-center gap-4 lg:w-[60%] md:[100%] bg-white border rounded-md'>
                                <div>
                                    <label htmlFor="fileInput" style={{ cursor: "pointer" }}>
                                        <DummyImage src={selectedImage} width={250} height={250} shape="avatar" />  
                                    </label>                                    
                                    <input 
                                        type="file" 
                                        id="fileInput" 
                                        style={{ display: "none" }} 
                                        onChange={handleFileChange} 
                                        accept="image/*"
                                    />
                                </div>
                                <div>
                                    <div>
                                        <p className="m-0 md:text-[32px] font-semibold">Oluwatobi Fasanmi </p>
                                        <p className='text-gray-400 md:text-[20px] font-semibold'>0903546789</p>
                                        <Rating/>
                                    </div>
                                    <div className='md:mt-10'>
                                        <Button  className="bg-[#2097CF] text-[16px] font-semibold text-white">Disable Agent</Button>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[307px] md:w-[60%] md:mx-auto md:my-4 lg:w-[40%] bg-white border rounded-md border-l-2'>                               
                                <div className='mx-auto md:w-[60%] lg:w-[50%] md:my-5 lg:my-9'>
                                    <div className='flex justify-end'>
                                        <Link className='text-[#00ADFF] text-[16px]'>See all</Link>
                                    </div>
                                    <div className='bg-white  md:w-[258px] w-[250px] md:h-[138px] lg:p-4  border-2 rounded-[20px] md:ps-2  p-5 flex items-center justify-between md:my-4 lg:my-0 my-4'>
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
                                                        <span className='ps-1'>
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