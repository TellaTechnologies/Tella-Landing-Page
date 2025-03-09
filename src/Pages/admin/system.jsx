import React, { useState } from 'react';
import AdminLayout from '../../components/admin/adminLayout';
import Rectangle from '../../assets/image/Rectangle.svg'
import RectangleOne from '../../assets/image/Rectangle2.svg'
import Frame from '../../assets/image/Frame1.svg'
import FrameTwo from '../../assets/image/Frame2.svg'
import FrameThree from '../../assets/image/Frame3.svg'
import FrameFive from '../../assets/image/Frame55.svg'
import { ArrowDownToLine, ArrowUp, ChevronDown, CalendarIcon} from 'lucide-react';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar" 
import { cn } from "@/lib/utils"
import {Input} from '../../components/ui/input'
import { Label } from "@/components/ui/label"
import {Button} from '@/components/ui/button'
import MagnifyingGlass from '../../assets/image/coolicon.svg'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import NotificationsSystem, { atalhoTheme, setUpNotifications, useNotifications }  from 'reapop';
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
    email: z.string().email({message: "Invalid data submitted"})
});

const ITEMS = 8

function system(props) {
    setUpNotifications({
        defaultProps: {
            position: 'top-right',
            dismissible: true
        } 
    })
    const [system, setSystemContext] = useState(true)
    const [admin, createAdmin] = useState(false)
    const [showAdminlist, setShowAdminList] = useState(false)
    const token = localStorage.getItem("token")
    const [loading, setLoading] = useState(false)
    const [seeAdmin, setAdmin]= useState([])
    const [date, setDate] = useState(null)
    const [sumofUser, setSum]= useState(0)
    const Total = sumofUser * ITEMS
    const displaySum = Total + ITEMS
    const AdminsDisplay = seeAdmin.slice(Total, displaySum)
    const [AdminDetails, setAdminDetails] = useState(false)
    const [error, setError] = useState("")
    const [user, setUserRole] = useState("ADMIN")
    const {notifications, dismissNotification} = useNotifications()
    const {notify} = useNotifications()


    const AdminsTotalList = () => {
        if(system || admin || showAdminlist == true){
            setSystemContext(false)
            createAdmin(false)
            setShowAdminList(true)
            AdminSetList()
        }
    }
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
          first_name: "",
          last_name: "",
        //   middle_name: "",
          phone_number: "",
          email: ""
        },
    });

    
    const AdminSetList = async() =>{
        setLoading(true)
        try {
            const responseAdmin = await axios.get(`http://ec2-44-205-21-123.compute-1.amazonaws.com:8080/api/v1/admin/users?userRole=${user}`,
                {
                    headers: {
                    "Content-Type": "application/json",                
                    'Authorization': `Bearer ${token}`,
                    }
                }
            )
            setLoading(false)
            const data = responseAdmin.data.data || []
            setAdmin(data)
            console.log(seeAdmin)
        } catch (error) {
            console.log(error)
        }
    }

    const createAdminReq = async (data) => {
        setLoading(true)
        AdminSetList()

        try {
            
            const res = await axios.post("http://ec2-44-205-21-123.compute-1.amazonaws.com:8080/api/v1/admin/registration",
                data,
                    {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    "Content-Type": "application/json",                
                },
                
            })
            // console.log(res.data)
            notify('admin has succesfully been registered')
            setSystemContext(false)
            createAdmin(true)
            setLoading(false)
            AdminSetList()
            reset();
        } catch (error) {
            console.log(error.message)
            setError(error.message)
            notify('Error Occurred While Registering Admin')

            if(first_name == 3){
                notify("First Name must contain atleast 5 characters")
            }

        }
    }

    
    return (
        <div> 
            <AdminLayout title={"System Admin"}>
                <NotificationsSystem
                    // 2. Pass the notifications you want Reapop to display.
                    notifications={notifications}
                    // 3. Pass the function used to dismiss a notification.
                    dismissNotification={(id) => dismissNotification(id)}
                    // 4. Pass a builtIn theme or a custom theme.
                    theme={atalhoTheme}
                />
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
                    system &&
                    <div className={`${admin ? " hidden" : "lg:flex sm:flex items-start"} flex-wrap  mx-auto  justify-center gap-4 `}>
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
                                                <Label className="font-semibold" htmlFor="last_name">Last Name</Label>
                                                <Input className='md:p-7' type="text" id="last_name" placeholder="Last-name" {...register("last_name")}/>
                                            </div>
                                            {/* <div className="md:my-4 justify-center w-[100%] mx-auto max-w-sm items-center gap-1.5">
                                                <Label className="font-semibold" htmlFor="middle_name">Middle Name</Label>
                                                <Input className='md:p-7' type="text" id="middle_name" placeholder="Middle-name" {...register("middle_name")}/>
                                                {errors.middle_name && <p className="text-red-500">{errors.middle_name.message}</p>}
                                            </div> */}
                                            <div className="md:my-4 justify-center w-[100%] mx-auto max-w-sm items-center gap-1.5">
                                                <Label className="font-semibold" htmlFor="phone_number">Phone Number</Label>
                                                <Input className='md:p-7' type="number" id="phone_number" placeholder="091*********" {...register("phone_number")}/>
                                            </div>
                                            <div className="md:my-4 justify-center w-[100%] mx-auto max-w-sm items-center gap-1.5">
                                                <Label className="font-semibold" htmlFor="email">Email Address</Label>
                                                <Input className='md:p-7' type="email" id="email" placeholder="example@gmail.com" {...register("email")}/>
                                                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                                            </div>
                                            <div className='flex justify-center my-5 md:my-5'>
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
                    </div>
                }
                {
                    admin &&
                    <div className='lg:w-[90%] md:w-[100%] sm:w-[70%] mx-auto bg-white border-none rounded-[20px] h-[640px]'>  
                        <div className='md:flex md:w-[100%] flex-wrap justify-between '>
                            <div className='md:pt-4 md:w-[50%]  mt-3 md:p-4 pt-5 p-9'>
                                <div className=''>
                                    <p className="m-0 md:text-[17px] lg:text-[22px] font-semibold text-center text-[18px]">
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
                                        <Label className="font-semibold" htmlFor="last_name">Last Name</Label>
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
                                    <div className='text-red-400'>
                                        {error}
                                    </div>
                                </form>
                            </div>
                            <div className='md:w-[50%] md:pt-8  mt-3 md:border-l-2  sm:border-l-[#D9D9D9]'>
                                <div className='flex md:gap-2 lg:gap-6 justify-center'>
                                    <div>
                                        <p className="text-center md:text-[16px] lg:text-[22px] text-[18px] font-semibold">New Admin</p>
                                        <p className='text-[#282828] md:ms-0 ms-3 opacity-[0.4] md:text-[12px] lg:text-[16px] text-[14px]'>These are the list of new admin added to tella</p>
                                    </div>
                                    <div>
                                        <Link onClick={() => AdminsTotalList()}  className="text-blue-600 md:me-0 me-4 md:text-[12px] text-[11px] lg:text-[16px] ">See all</Link>
                                    </div>
                                </div>
                                <div className='flex md:gap-0 gap-3 md:py-5 mx-4  py-3 items-start md:w-[80%] md:mx-auto justify-between'>
                                    <div>
                                            {
                                            loading ? 
                                            (<div>
                                                <svg className="animate-spin h-6 w-6 text-gray-500 mx-auto" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                                                </svg>
                                            </div>)
                                            :
                                           ( <div>
                                                {
                                                    seeAdmin.slice(0,6).map((adminslist, index) => (
                                                        <div className='md:mb-6 md:mt:4   mb-3' key={index}>
                                                            <p className="m-0 font-semibold md:text-[16px]">{adminslist.username}</p>
                                                            <p className="m-0 text-[#282828] opacity-[0.4] md:text-[16px] text-[14px]">{adminslist.phoneNumber}</p>
                                                        </div>
                                                    ))
                                                }
                                            </div>)
                                            }
                                    </div>
                                </div>                                
                            </div> 
                        </div>                                                 
                    </div>
                }
                {
                    showAdminlist&&
                    <div>
                        <div>
                            <div className='flex items-center justify-between'>
                                <div>
                                    <p className="m-0 font-semibold lg:text-[20px]  text-[#282828] md:text-[18px] text-[17px]">Lists of Admin</p>
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
                                            <input className="outline-none border-none md:ps-2 box-border bg-transparent" placeholder="Search Name" type="search"/>
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
                                </div>
                            </div>
                        </div>
                        <div className='bg-white rounded-xl md:mt-3 md:p-5'>
                            <Table>
                                {/* <TableCaption>No Data, Just Yet.</TableCaption> */}
                                <TableHeader className=" border-[#282828] border-b-2">
                                    <TableRow className="bg-transparent text-[#282828]">
                                        <TableHead className="font-semibold text-[#282828]">S/N</TableHead>
                                        <TableHead className="flex font-semibold gap-1 items-center text-[#282828]">Admin <p className='sm:block hidden'>Name</p></TableHead>
                                        <TableHead className="font-semibold text-[#282828]">Phone No</TableHead>
                                        <TableHead className="text-center font-semibold flex  gap-1 items-center md:justify-center   text-[#282828]">Email <p className='lg:block hidden'>Address</p></TableHead>
                                        <TableHead className="text-center font-semibold text-[#282828]">Date Created</TableHead>
                                        <TableHead className="text-center font-semibold text-[#282828]">Status</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {loading ? (
                                    <TableRow>
                                        <TableCell colSpan="4" className="text-center py-4">
                                            <svg className="animate-spin h-6 w-6 text-gray-500 mx-auto" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                                            </svg>
                                        </TableCell>
                                    </TableRow>
                                     ) : AdminsDisplay.length === 0 ? (
                                    <TableRow>
                                        <TableCell colSpan="4" className="text-center text-[#282828]">
                                            No users created yet.
                                        </TableCell>
                                    </TableRow>
                                    ) :
                                    (AdminsDisplay.map((admins, index) => (
                                    <TableRow className="" key={index}>
                                        <TableCell className="font-medium p-4 text-[#282828]">{index + 1}</TableCell>
                                        <TableCell className="p-4 text-[#282828]">{admins.username}</TableCell>
                                        <TableCell className="p-4 text-[#282828]">{admins.phoneNumber}</TableCell>
                                        <TableCell className="p-4 text-center text-[#282828]">{admins.email}</TableCell>
                                        <TableCell className="p-4 text-right text-[#282828]">{admins.createdAt}</TableCell>
                                    </TableRow>
                                    )))
                                    }
                                </TableBody>
                            </Table>  
                        </div>
                    </div>
                }
                {
                    AdminDetails &&
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
            </AdminLayout>                           
        </div>
    );
}

export default system;