import React, { useState } from 'react';
import AdminLayout from '../../components/admin/adminLayout';
import Rectangle from '../../assets/image/Rectangle.svg'
import RectangleOne from '../../assets/image/Rectangle2.svg'
import Frame from '../../assets/image/Frame1.svg'
import FrameTwo from '../../assets/image/Frame2.svg'
import FrameThree from '../../assets/image/Frame3.svg'
import FrameFive from '../../assets/image/Frame55.svg'
import { ArrowDownToLine, ArrowUp, ChevronDown} from 'lucide-react';
import {Input} from '../../components/ui/input'
import { Label } from "@/components/ui/label"
import {Button} from '@/components/ui/button'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const formSchema = z.object({
    first_name: z.string().min(5, {
      message: "first name must be at least 5 characters.",
    }),
    last_name: z.string().min(5, {
        message: "last name must be at least 5 characters.",
    }),
    // middle_name: z.string().min(5, {
    //     message: "last name must be at least 5 characters.",
    // }),
    phone_number: z.string().regex(/^\d+$/, "Phone number must be digits only"),
    email: z.string().email({message: "Invalid email format"})
});

function system(props) {
    const [system, setSystemContext] = useState(true)
    const [admin, createAdmin] = useState(false)
    const [showAdminlist, setShowAdminList] = useState(false)
    const token = localStorage.getItem("token")
    const [loading, setLoading] = useState(false)


    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
          first_name: "",
          last_name: "",
        //   middle_name: "",
          phone_number: "",
          email: ""
        },
    });

    const createAdminReq = async (data) => {
        setLoading(true)
        try {
            
            const res = await axios.post("http://ec2-44-205-21-123.compute-1.amazonaws.com:8080/api/v1/admin/registration",
                data,
                    {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    "Content-Type": "application/json",                
                },
                
            })
            console.log(res.data)
            
        } catch (error) {
            console.log(error)
        }
    }


    const AdminList =() =>{

    }
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
                {
                    system ?
                    <div className={`${admin ? " hidden" : "lg:flex"} flex-wrap  mx-auto items-center justify-center gap-4 `}>
                        {/*Add User Admin  */}
                        <div>
                            <div>
                                <p className="m-0 md:text-[22px]  font-semibold text-[18px]">
                                    Add a New user
                                </p>
                                <p className="m-0 text-[#282828] opacity-[0.4] md:text-[16px] text-[14px]">Register a new user</p>
                            </div>
                            <div>
                                <div >
                                    <div className='md:pt-8  mt-3 md:p-0 pt-5 p-9 bg-white md:w-[450px] lg:w-[537px] md:h-[610px] border border-none rounded-[20px]'>
                                        <div>
                                            <p className="m-0 md:text-[22px] font-semibold text-center text-[18px]">
                                                Add a new Admin
                                            </p>
                                            <p className="m-0 text-center text-[#282828] opacity-[0.4] md:text-[16px] text-[14px]">Fill in the details to add a new Admin</p>
                                        </div>
                                        <form onSubmit={handleSubmit(createAdminReq)}>
                                            <div className="md:my-6 justify-center w-[100%] mx-auto max-w-sm items-center gap-1.5">
                                                <Label className="font-semibold" htmlFor="first_name">First-Name</Label>
                                                <Input className='md:p-7 w-[100%]' type="text" id="first_name" placeholder="First-Name"  {...register("first_name")}/>
                                                {errors.first_name && <p className="text-red-500">{errors.first_name.message}</p>}
                                            </div>
                                            <div className="md:my-4 justify-center w-[100%] mx-auto max-w-sm items-center gap-1.5">
                                                <Label className="font-semibold" htmlFor="lname">Phone Number</Label>
                                                <Input className='md:p-7' type="text" id="last_name" placeholder="Last-name" {...register("last_name")}/>
                                                {errors.last_name && <p className="text-red-500">{errors.last_name.message}</p>}
                                            </div>
                                            {/* <div className="md:my-4 justify-center w-[100%] mx-auto max-w-sm items-center gap-1.5">
                                                <Label className="font-semibold" htmlFor="middle_name">Middle Name</Label>
                                                <Input className='md:p-7' type="text" id="middle_name" placeholder="Middle-name" {...register("middle_name")}/>
                                                {errors.middle_name && <p className="text-red-500">{errors.middle_name.message}</p>}
                                            </div> */}
                                            <div className="md:my-4 justify-center w-[100%] mx-auto max-w-sm items-center gap-1.5">
                                                <Label className="font-semibold" htmlFor="phone_number">Phone Number</Label>
                                                <Input className='md:p-7' type="number" id="phone_number" placeholder="091*********" {...register("phone_number")}/>
                                                {errors.phone_number && <p className="text-red-500">{errors.phone_number.message}</p>}
                                            </div>
                                            <div className="md:my-4 justify-center w-[100%] mx-auto max-w-sm items-center gap-1.5">
                                                <Label className="font-semibold" htmlFor="email">Email Address</Label>
                                                <Input className='md:p-7' type="email" id="email" placeholder="example@gmail.com" {...register("email")}/>
                                                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                                            </div>
                                            <div className='flex justify-center my-5 md:my-7'>
                                                <Button type="submit"  className="bg-[#2097CF] w-[100%] text-white md:w-[80%] mx-auto md:p-8">{loading ? "Saving": "Save"}</Button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div  className="relative flex md:w-[35%] w-[42%]  lg:mt-0 mt-4 lg:w-[30%] font-semibold rounded-lg">
                                    <p className="m-0 md:text-[22px] text-[18px]">
                                        New Requests
                                    </p>
                                    <span className="absolute top-0 right-0 -mt-2 -mr-2 px-2 py-1 text-xs font-bold text-white bg-red-500 rounded-full">
                                        0
                                        <span className="sr-only">unread messages</span>
                                    </span>
                                </div>
                            </div>
                            <div className='md:pt-8 md:mt-9 mt-4 md:p-0 p-4 bg-white md:w-[450px] lg:w-[537px] md:h-[610px] border border-none rounded-[20px]'>
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
                                            <Button onClick={()=> setSystemContext(prev=> !prev)} type="button" className='bg-[#2097CF] '>View Details</Button>
                                        </div>
                                    </div>
                                    <div></div>
                                </div>                           
                                <div className='flex justify-center my-5 md:my-20'>
                                    <Button className="bg-[#2097CF] w-[100%] text-white md:w-[80%] mx-auto md:p-8">Accept All</Button>
                                </div>
                            </div>
                        </div>
                    </div>  :
                    <div>                               
                        <div  className="relative flex w-fit font-semibold rounded-lg">
                            <p className="m-0 md:text-[22px] text-[18px]">
                                New Requests
                            </p>
                            <span className="absolute top-0 right-0 -mt-2 -mr-2 px-2 py-1 text-xs font-bold text-white bg-red-500 rounded-full">
                                0
                                <span className="sr-only">unread messages</span>
                            </span>
                        </div>
                        <div className='flex items-center md:px-5 md:pt-5 md:pb-3  justify-between bg-white  border-b-[#D9D9D9] border-b-2  pt-4 pb-2 px-4 rounded-t-3xl'>
                            <div>
                                <p className="m-0 text-[#282828] opacity-[0.4] md:text-[16px] text-[14px]">
                                    New Admin Requests
                                </p>
                            </div>
                            <div>
                                <div className="m-0 flex justify-between items-center text-[#282828] opacity-[0.4] md:text-[16px] text-[14px]">
                                    <div>
                                        Assign to
                                    </div>
                                    <div>
                                        <ChevronDown/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-wrap'>
                            <div className='bg-white md:h-[400px]  w-[50%]'>
                                <div className='md:w-[90%] w-[80%] mx-3  my-3 md:my-6 md:mx-auto'>
                                    <p className=" text-[#282828] opacity-[0.4] md:text-[16px] text-[14px]">
                                        Business Name
                                    </p>
                                    <p className='md:pb-2 font-semibold'>-------------</p>
                                    <p className=" text-[#282828] opacity-[0.4] md:text-[16px] text-[14px]">
                                        Phone Number
                                    </p>
                                    <p className='font-semibold'>---------</p>
                                    <p className=" text-[#282828] opacity-[0.4] md:text-[16px] text-[14px]">
                                        State
                                    </p>
                                    <p className='md:pb-2 font-semibold'>----------</p>
                                    <p className=" text-[#282828] opacity-[0.4] md:text-[16px] text-[14px]">
                                        City
                                    </p>
                                    <p className='md:pb-2 font-semibold'>----------</p>
                                    <p className=" text-[#282828] opacity-[0.4] md:text-[16px] text-[14px]">
                                        Postal code
                                    </p>
                                    <p className='md:pb-2 font-semibold'>-----------</p>
                                </div>
                            </div>
                            <div  className='bg-white  border border-r-[#D9D9D9] md:h-[400px]  w-[50%]'>
                                <div className='md:w-[50%] md:ms-0 ms-3 my-2  mx-auto md:my-4 '>
                                    <p className=" text-[#282828] opacity-[0.4] md:text-[16px] text-[14px]">
                                        Residential Address
                                    </p>
                                    <p className='md:pb-2 font-semibold'>-------------</p>
                                    <p className=" text-[#282828] opacity-[0.4] md:text-[16px] text-[14px]">
                                        State
                                    </p>
                                    <p className='font-semibold'>---------</p>
                                    <p className=" text-[#282828] opacity-[0.4] md:text-[16px] text-[14px]">
                                        City
                                    </p>
                                    <p className='md:pb-2 font-semibold'>----------</p>
                                    <p className=" text-[#282828] opacity-[0.4] md:text-[16px] text-[14px]">
                                        Postal Code
                                    </p>
                                    <p className='md:pb-2 font-semibold'>----------</p>
                                    <p className=" text-[#282828] opacity-[0.4] md:text-[16px] text-[14px]">
                                        Bank Verification Number
                                    </p>
                                    <p className='md:pb-2 font-semibold'>----------</p>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white flex gap-4 justify-center p-3 md:p-5 w-full rounded-b-[20px] border border-t-2 border-t-[#D9D9D9]'>
                            <div>
                                <Button className="bg-[#2097CF] md:px-20 md:py-7">Accept</Button>
                            </div>
                            <div>
                                <Button className="bg-transparent text-black border-2 md:px-20 md:py-[1.6rem]">Reject</Button>
                            </div>
                        </div>
                    </div>
                }
                {
                    admin ?
                    <div className='md:w-[100%] sm:w-[70%] mx-auto bg-white border-none rounded-[20px] h-[610px]'>  
                        <div className='md:flex md:w-[100%] flex-wrap justify-between '>
                            <div className='md:pt-8 md:w-[50%]  mt-3 md:p-4 pt-5 p-9'>
                                <div>
                                    <p className="m-0 md:text-[17px] lg:text-[22px] font-semibold text-center text-[18px]">
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
                            <div className='md:w-[50%] md:pt-8  mt-3 md:border-l-2  sm:border-l-[#D9D9D9]'>
                                <div className='flex md:gap-2 lg:gap-6 justify-center'>
                                    <div>
                                        <p className="text-center md:text-[16px] lg:text-[22px] text-[18px] font-semibold">New Admin</p>
                                        <p className='text-[#282828] md:ms-0 ms-3 opacity-[0.4] md:text-[12px] lg:text-[16px] text-[14px]'>These are the list of new admin added to tella</p>
                                    </div>
                                    <div>
                                        <Link onClick={() => AdminList()} className="text-blue-600 md:me-0 me-4 md:text-[12px] text-[11px] lg:text-[16px] ">See all</Link>
                                    </div>
                                </div>
                                <div className='flex md:gap-0 gap-3 md:py-5 mx-4  py-3 items-start md:w-[80%] md:mx-auto justify-between'>
                                    <div>
                                        <p className="m-0 font-semibold md:text-[16px]">
                                            Oluwatobi Fasanmi Ltd
                                        </p>
                                        <p className="m-0 text-[#282828] opacity-[0.4] md:text-[16px] text-[14px]">
                                            9088065789
                                        </p>
                                    </div>
                                    <div>
                                        <Button onClick={()=> setSystemContext(prev=> !prev)} type="button" className='bg-[#2097CF] '>View Details</Button>
                                    </div>
                                </div>                                
                            </div> 
                        </div>                                                 
                    </div> :
                    <div>
                        
                    </div>
                }
            </AdminLayout>                           
        </div>
    );
}

export default system;