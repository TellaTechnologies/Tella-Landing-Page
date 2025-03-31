import React, { useEffect, useState } from 'react';
import AdminLayout from '../../../components/admin/adminLayout';
import Rectangle from '../../../assets/image/Rectangle.svg'
import RectangleOne from '../../../assets/image/Rectangle2.svg'
import Frame from '../../../assets/image/Frame1.svg'
import FrameTwo from '../../../assets/image/Frame2.svg'
import FrameThree from '../../../assets/image/Frame3.svg'
import FrameFive from '../../../assets/image/Frame5.svg'
import MagnifyingGlass from '../../../assets/image/coolicon.svg'
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
import axios from 'axios';
const Transactions = (props) => {
    const [date, setDate] = useState(null)
    const [loading, setLoading] = useState(false)
    const [customers,setCustomerList] = useState([])
    const token = localStorage.getItem("token")
    const [searchQuery, setSearchQuery] = useState('');
    
    const shuffleArray = (array) => array.sort(() => Math.random() - 0.5); 

    const filteredCustomers = customers.filter(agent =>
        agent.username.toLowerCase().includes(searchQuery.toLowerCase())
    );


    let globalIndex = 1;
    const formatDate = (isoString) => {
        const date = new Date(isoString);
        return date.toLocaleString("en-GB", { 
            day: "2-digit", 
            month: "short", 
            hour: "2-digit", 
            minute: "2-digit",
            hour12: true 
        }).replace(",", "");
    };



        const GetCustomersList = async() =>{
            setLoading(true)
            try {
                const response = await axios.get("http://ec2-44-205-21-123.compute-1.amazonaws.com:8080/api/v1/transactions/byUserRole?userRole=CUSTOMER", 
                    {
                        headers: {
                            "Content-Type": "application/json",                
                            'Authorization': `Bearer ${token}`,
                        }
                    }
                )
                setLoading(false)
                const customers= response.data.data
                setCustomerList(customers)
            } catch (error) {
                console.error("Error fetching agents:", error.response ? error.response.data : error.message);
            }
        }
    
    
        useEffect(() => {
            return () => {
                GetCustomersList();
    
            }
        }, []);
    return (
        <div>
            <AdminLayout title={"Customers Transactions"}>
                <div>
                    <p className="m-0 md:text-[22px] text-[#282828] font-medium">Overview</p>
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
                                            <p className="m-0 text-[#282828] opacity-[50%]">Total Users</p>
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
                                            <p className="m-0 text-[#282828] opacity-[50%]">Agent Transactions</p>
                                            <p className='lg:text-[30px] text-[#282828]  md:text-[25px]'>₦4,987.00</p>
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
                                            <span className='ps-1 text-[#282828]'>
                                                high last week
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='bg-[#2097CF]  md:w-[258px] w-[250px]  md:h-[138px] md:p-4  border border-none rounded-md md:ps-2 p-5 flex items-center justify-between md:my-5 lg:my-0 my-4'>
                            <div>
                                <div className='flex  justify-between md:gap-3 lg:gap-3'>
                                    <div className='flex justify-center gap-3'>
                                        <div>
                                            <img src={RectangleOne}/>
                                        </div>
                                        <div>
                                            <p className="m-0 text-white">Customer Transactions</p>
                                            <p className='lg:text-[30px] text-white md:text-[25px]'>₦5,876.00</p>
                                        </div>
                                    </div>
                                    <div>
                                        <img src={FrameFive}/>
                                    </div>
                                </div>
                                <div className='flex items-center gap-1 lg:mt-0  mt-1 md:mt-6'>
                                    <div>
                                        <ArrowUp color='#fff' size={15}/>
                                    </div>
                                    <div>
                                        <p className="m-0 text-[14px]">
                                            <span className='text-green-950'>+12%</span>
                                            <span className='ps-1 text-white'>
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
                                            <p className="m-0 text-[#282828] opacity-[50%]">Revenue</p>
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
                                <p className="m-0 md:text-[20px] text-[#282828]">Customer Transactions</p>
                                
                            </div>
                            <div className='flex items-center md:gap-4   justify-end'>
                                <div>
                                    <div className="border rounded-[20px] gap-3 justify-center hidden  lg:flex items-center p-2 bg-white">
                                    <input className="outline-none border-none md:ps-2 box-border bg-transparent" placeholder="Search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} type="search"/>
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
                        <div className='bg-white md:my-5 my-3 md:p-3 rounded-[20px]'>
                            <Table className="">
                                {/* <TableCaption>No Data, Just Yet.</TableCaption> */}
                                <TableHeader className=" border-[#282828] border-b-2">
                                    <TableRow className="bg-transparent text-[#282828]">
                                    <TableHead className="font-semibold text-[#282828]">S/N</TableHead>
                                    <TableHead className="flex font-semibold gap-1 items-center text-[#282828]">Agent Name </TableHead>
                                    <TableHead className="font-semibold text-[#282828]">Type</TableHead>
                                    <TableHead className=" font-semibold flex  gap-1 items-center md:justify-start   text-[#282828]">Amount</TableHead>
                                    <TableHead className="text-center font-semibold text-[#282828] ">Date</TableHead>
                                    <TableHead className="text-center font-semibold text-[#282828]">Status</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {loading ? (
                                    <TableRow>
                                        <TableCell colSpan="6" className="text-center py-4">
                                            <svg className="animate-spin h-6 w-6 text-gray-500 mx-auto" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                                            </svg>
                                        </TableCell>                    
                                    </TableRow>
                                     ) : customers.length === 0 ? (
                                    <TableRow>
                                        <TableCell colSpan="4" className="text-center text-[#282828]">
                                        No users created yet.
                                        </TableCell>
                                    </TableRow>
                                    ) :
                                    shuffleArray(filteredCustomers).flatMap((customer) =>
                                        shuffleArray(customer.transactions).slice(0, 6).map((transaction) => (
                                            <TableRow key={`${customer.username}-${globalIndex}`}>
                                                <TableCell className="font-medium p-4 text-[#282828]">
                                                    {globalIndex++}
                                                </TableCell>
                                                <TableCell className="p-4 text-[#282828]">
                                                    {customer.username}
                                                </TableCell>
                                                <TableCell className="p-4 text-[#282828]">
                                                    {transaction.transactionType.toLowerCase()}
                                                </TableCell>
                                                <TableCell className="p-4 text-left text-[#282828]">
                                                    {transaction.amount}
                                                </TableCell>
                                                <TableCell className="p-4 text-center text-[#282828]">
                                                    {formatDate(transaction.date)}
                                                </TableCell>
                                               <TableCell className="p-4 text-center text-[#282828]">
                                                    {transaction.status === "COMPLETED" ? (
                                                        <p className="font-extrabold text-[#00B43C]">Success</p>
                                                    ) : (
                                                        <p className="text-[#FF0000]">Failed</p>
                                                    )}
                                                </TableCell>

                                            </TableRow>
                                        ))
                                    )}             
                                </TableBody>
                            </Table> 
                        </div>                          
                    </div>  
                                  
            </AdminLayout>
        </div>
    );
};

export default Transactions;