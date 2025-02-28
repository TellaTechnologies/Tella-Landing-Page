import React, { useEffect, useState } from 'react';
import AdminLayout from '../../components/admin/adminLayout';
import { ArrowRight, ArrowUp, Filter, RefreshCcw } from 'lucide-react';
import { Link } from 'react-router-dom';
import MagnifyingGlass from '../../assets/image/magnifyinglass2.svg'
import FrameThree from '../../assets/image/Frame3.svg'
import RectangleOne from '../../assets/image/Rectangle.svg'
import Warning from '../../assets/image/warning.svg'
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
import { Label } from "@/components/ui/label"
import { Input } from '../../components/ui/input';
import {Button} from '@/components/ui/button'
import Error from '../../assets/image/error.svg'
import Checkbox from "../../assets/image/Checkboxes.svg"
import {Switch} from '@/components/ui/switch'
import axios from 'axios';
import Delete from '../../assets/image/delete.svg'
import Write from '../../assets/image/button.svg'
import Padlock from '../../assets/image/padlock.svg'
import Key from '../../assets/image/key.svg'
import ErrorOne from '../../assets/image/error1.svg'

const ITEMS_PER_PAGE = 4; // Number of items per page

function settings() {
    const [view, setView] = useState('admin'); // 'admin', 'user', 'transactions'
    const [num, setNum ]= useState(0)
    const token = localStorage.getItem("token")
    const [Users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const [status, setStatus]= useState([])
    const [color, setColor] = useState()
    const [currentPage, setCurrentPage] = useState(0);
    const [userImage, setUserImage] = useState(""); // Store the image URL
    const [number, setPNumber ]= useState("")
    const [userset, SetUsersSet] = useState(false)
    const [delset, SetDelsSet] = useState(false)

    const startIndex = currentPage * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const paginatedUsers = Users.slice(startIndex, endIndex);

    // Handle Next and Previous
    const nextPage = () => {
        if (endIndex < Users.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };
        useEffect(() => {
            const fetchUsers = async () => {
                try {
                    // Fetch users first
                    const response1 = await axios.get(
                        "http://ec2-44-205-21-123.compute-1.amazonaws.com:8080/api/v1/admin/users",
                        {
                            headers: {
                                'Authorization': 'Bearer ' + token, // Ensure token is available
                            }
                        }
                    );
        
                    // Extract user data
                    const data = response1.data.data || [];
                    setUsers(data);
        
                    // Get the first user's ID (or another logic based on your needs)
                        const userid = data[0].userId; // Ensure this matches your API response structure
                        // console.log(userid)
                        // Now update user status
                        const response2 = await axios.put(
                            `http://ec2-44-205-21-123.compute-1.amazonaws.com:8080/api/v1/admin/users/${userid}/status?statusType=APPROVED`,
                            {},
                            {
                                headers: {
                                    'Authorization': 'Bearer ' + token,
                                    "Content-Type": "application/json",
                                }
                            }
                        );
                        console.log("Status Update Response:", response2.data.data);
                        const status = response2.data.data.approvalStatus
                        const UserImage = response2.data.data.profile.selfieImage
                        const Pnumber = response2.data.data.phoneNumber
                        if(status =="pending"){
                            setColor(false)
                        } else if(status== "active"){
                            setColor(true)
                        }
                        // console.log(status)
                        setStatus(status)     
                        setUserImage(UserImage)   
                        setPNumber(Pnumber)
                    setLoading(false);
                } catch (error) {
                    console.log(error);
                    setUsers([]);
                }
            };
        
            fetchUsers();
        }, [token]); // Only run when token changes
        

        const Edit = (e) => {
            e.preventDefault();
            SetUsersSet(true)
        }

        const DeActiveUser = (e) => {
            e.preventDefault();
            SetDelsSet(true)
        }

        const cancelUser = (e) => {
            e.preventDefault();
            SetDelsSet(false)
        }   
    return (
        <div>
            {
                view === 'admin' && (
                <AdminLayout  title={"System Admin Settings"}>
                    <div>
                        <p className="m-0 md:text-[20px] text-[16px] font-semibold text-black">User Management</p>
                    </div>
                    <div className='bg-white gap-4 md:p-5 p-4 md:flex  items-center justify-center w-[100%] h-[350px] md:h-[249px] border border-none rounded-3xl'>
                        <div className="md:w-[500px] md:p-5 p-4 md:h-[171px] border-2 rounded-md">
                            <p className="m-0 md:text-[20px] text-[18px] font-semibold">User Accounts</p>
                            <div>
                                <p className="m-0 'text-[#282828] opacity-[0.7] md:text-[12px] lg:text-[16px] text-[14px]">View, edit and deactivate user accounts </p>
                            </div>
                            <Link onClick={()=> setView("user")} className='flex md:mt-4 mt-5 items-center gap-2'>
                                <div>
                                    <p className="text-[#2097CF] m-0">Manage Users</p>
                                </div>
                                <div>
                                    <ArrowRight color='#2097CF' size={20}/>
                                </div>
                            </Link>
                        </div>
                        <div className="md:w-[500px] md:mt-0 mt-4 md:p-5 p-4  md:h-[171px] border-2 rounded-md">
                            <p className="m-0  md:text-[20px] text-[18px] font-semibold">Assign Sales Officer</p>
                            <div>
                                <p className="m-0 'text-[#282828]  opacity-[0.7] md:text-[12px] lg:text-[16px] text-[14px]">Assign sales officers to Agents</p>
                            </div>
                            <Link className='flex md:mt-4 mt-5 items-center gap-2'>
                                <div>
                                    <p className="text-[#2097CF] m-0">Manage Assignment</p>
                                </div>
                                <div>
                                    <ArrowRight color='#2097CF' size={20}/>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <p className="m-0 md:text-[20px] text-[16px] font-semibold text-black">Transaction Management</p>
                        <div className='bg-white gap-4 md:p-5 p-4 md:flex mt-3  items-center justify-center w-[100%] h-[200px] md:h-[200px] border border-none rounded-3xl'>
                            <div className='border-2 md:p-5 p-4 md:w-[100%] md:h-[140px] rounded-md'>
                                <p className="m-0 md:text-[20px] text-[18px] font-semibold">All Transactions</p>
                                <div>
                                    <p className="m-0 'text-[#282828] opacity-[0.7] md:text-[12px] lg:text-[16px] text-[14px]">Review and resolve failed or pending transactions </p>
                                </div>
                                <Link onClick={() => setView("transactions")} className='flex md:mt-4 mt-5 items-center gap-2'>
                                    <div>
                                        <p className="text-[#2097CF] m-0">View Transactions</p>
                                    </div>
                                    <div>
                                        <ArrowRight color='#2097CF' size={20}/>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white gap-4 md:p-5 p-4 md:flex flex-wrap items-center lg:justify-start justify-center  w-[100%] h-[500px] md:h-[425px] border border-none rounded-3xl'>
                        <div className="lg:w-[500px] md:mt-0 mt-4 md:p-5 p-4  md:h-[171px] border-2 rounded-md">
                            <p className="m-0  md:text-[20px] text-[18px] font-semibold">Platform Security</p>
                            <div>
                                <p className="m-0 'text-[#282828]  opacity-[0.7] md:text-[12px] lg:text-[16px] text-[14px]">Configure 2FA and password policies </p>
                            </div>
                            <Link onClick={()=> setView("security")} className='flex md:mt-4 mt-5 items-center gap-2'>
                                <div>
                                    <p className="text-[#2097CF] m-0">Security Settings</p>
                                </div>
                                <div>
                                    <ArrowRight color='#2097CF' size={20}/>
                                </div>
                            </Link>
                        </div>
                        <div className="lg:w-[500px] md:mt-0 mt-4 md:p-5 p-4  md:h-[171px] border-2 rounded-md">
                            <p className="m-0  md:text-[20px] text-[18px] font-semibold">Activity logs</p>
                            <div>
                                <p className="m-0 'text-[#282828]  opacity-[0.7] md:text-[12px] lg:text-[16px] text-[14px]">View system activity and login attempts </p>
                            </div>
                            <Link className='flex md:mt-4 mt-5 items-center gap-2'>
                                <div>
                                    <p className="text-[#2097CF] m-0">View logs</p>
                                </div>
                                <div>
                                    <ArrowRight color='#2097CF' size={20}/>
                                </div>
                            </Link>
                        </div>
                        <div className="md:w-[500px] md:mt-0 mt-4 md:p-5 p-4  md:h-[171px] border-2 rounded-md">
                            <p className="m-0  md:text-[20px] text-[18px] font-semibold">Blacklist Management</p>
                            <div>
                                <p className="m-0 'text-[#282828]  opacity-[0.7] md:text-[12px] lg:text-[16px] text-[14px]">Block and manage fraudulent accounts </p>
                            </div>
                            <Link className='flex md:mt-4 mt-5 items-center gap-2'>
                                <div>
                                    <p className="text-[#2097CF] m-0">Manage Blacklists</p>
                                </div>
                                <div>
                                    <ArrowRight color='#2097CF' size={20}/>
                                </div>
                            </Link>
                        </div>
                    </div>
                </AdminLayout>
            )}
            {
                view === 'user' && (
                <AdminLayout title={"User Management"}>
                    <div>
                        <p className="m-0 md:text-[20px] text-[16px] font-semibold text-black">Manage user accounts and permission </p>
                    </div>
                    <div className='bg-white gap-4 md:p-5 p-4   w-[100%] h-[450px] md:h-[509px] border border-none rounded-3xl'>
                        <div className='flex gap-3 md:my-2 my-1 justify-between'>
                            <div>
                                <p  className="m-0 md:text-[20px] text-[16px] font-semibold text-black">User Accounts</p>
                            </div>
                            <div>
                                <div className="border rounded-[10px] gap-3 justify-center hidden lg:flex items-center p-2">
                                    <img className="md:pe-2 md:w-[26px]" src={MagnifyingGlass} />
                                    <input className="outline-none border-none md:ps-2 box-border bg-transparent" placeholder="Search" type="search" />
                                </div>
                            </div>
                        </div>
                        <Table>
                            { Users == [] ? 
                                <TableCaption>No Registered Users Yet.</TableCaption> :
                                // <div>
                                    <Table>
                                    <TableHeader>
                                        <TableRow className="bg-[#f3f4f680]">
                                            <TableHead className="w-[60%]">User</TableHead>
                                            <TableHead>Role</TableHead>
                                            <TableHead>Status</TableHead>
                                            <TableHead className="">Actions</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {loading ? (
                                             <tr>
                                                <td colSpan="4" className="text-center py-4">
                                                    <svg className="animate-spin h-6 w-6 text-gray-500 mx-auto" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                                                    </svg>
                                                </td>
                                            </tr>
                                        ) : Users.length === 0 ? (
                                            <tr>
                                                <td colSpan="4" className="text-center text-gray-500">
                                                    No users created yet.
                                                </td>
                                            </tr>
                                        ) : (
                                            paginatedUsers.map((user, index) => (
                                                <TableRow key={index} className="my-2">
                                                    <TableCell className="font-medium md:text-[16px] text-[14px] p-4">
                                                        <div className='flex md:gap-3 items-center'>
                                                            <div>
                                                                <img src={userImage} alt="" loading='true' className='w-[32px] h-[32px] rounded-full'/>
                                                            </div>
                                                            <div>
                                                                <div>
                                                                    <p className="m-0 md:text-[15px] lg:text-[16px] text-[14px]">{user.username}</p>
                                                                </div>
                                                                <div>
                                                                    <p className="text-sm text-gray-400 m-0">{number}</p>
                                                                </div>
                                                            </div>
                                                        </div></TableCell>
                                                    <TableCell className="p-4 capitalize">{user.role.toLowerCase()}</TableCell>
                                                    <TableCell className={`p-0 capitalize m-7 w-[70px] flex justify-center items-center rounded-lg ${color ? "bg-[#DCFCE7]" : "bg-[#f3c7a8] text-[#E8731F]"}`}>
                                                        {status.toLowerCase()}
                                                    </TableCell>
                                                    <TableCell colSpan="3" className="text-right">
                                                        <div className='flex justify-start gap-2'>
                                                            <Link onClick={(e) => Edit(e)} className='outline-none'>
                                                                <img src={Write} alt="editIcon" />
                                                            </Link>
                                                            <Link onClick={(e) => DeActiveUser(e)} className='outline-none'>
                                                                <img src={Delete} alt="deleteIcon" />
                                                            </Link>
                                                        </div>                                                  
                                                    </TableCell>
                                                </TableRow>
                                            ))
                                            
                                        )}                                      
                                    </TableBody>
                                       
                                    </Table>
                                // </div>                           
                            }
                        </Table> 
                        <div className='flex md:my-3 my-2 w-[100%] justify-between items-center'>
                            <div>
                                <p className="m-0 text-[#282828] opacity-[40%]">Showing 1 to 2 of 30 entries</p>
                            </div>
                            <div className='gap-3 flex'>
                                <Link onClick={() => prevPage()} className='border px-5 text-[#282828] opacity-[60%]'>
                                    Previous
                                </Link>
                                <Link onClick={() => nextPage()} className='border px-5 text-[#282828] opacity-[60%]'>
                                    Next
                                </Link>
                            </div>
                        </div>                        
                    </div>
                    <div className='bg-white gap-4 md:p-5 p-4 w-[100%] h-[350px] md:h-[249px] border border-none rounded-3xl'>
                        <div>.

                            <p className="m-0 md:text-[20px] text-[16px] font-semibold text-black">Assign Sales Officer </p>
                        </div>
                        <div className='sm:flex md:mb-0 mb-4 justify-between gap-3'>
                            <div className="md:my-6  w-[100%] gap-1.5">
                                <Label className="text-[#282828] opacity-[0.4]" htmlFor="Search">Sales Officer</Label>
                                <Input className='md:p-5 w-[100%]' type="search" id="Search" placeholder="Search" />
                            </div>
                            <div className="md:my-6  w-[100%] gap-1.5">
                                <Label className="text-[#282828] opacity-[0.4]" htmlFor="Agent">Agent</Label>
                                <Input className='md:p-5 w-[100%]' type="search" id="Agent" placeholder="Search" />
                            </div>
                        </div>
                        <div className=' '>
                            <Button type="button"  className="bg-[#2097CF]  text-white w-[30%] md:p-4">Assign</Button>
                        </div>
                    </div>
                    {userset &&<div className="fixed inset-0 flex justify-center items-center bg-black/50 z-50">
                        <div className="bg-white w-[300px] h-[450px] lg:w-[553px] md:px-9 px-5 lg:h-[474px] p-4 rounded-lg shadow-lg relative">
                            <form onSubmit="">
                                <div className='flex items-center justify-between'>
                                    <div>
                                        <p className="m-0 text-[#282828] opacity-[60%] md:text-[22px] text-[18px]">Edit</p>
                                    </div>
                                    <div>
                                        <Link className="md:text-[22px] text-[18px] text-blue-500">
                                            Save
                                        </Link>
                                    </div>                                    
                                </div>
                                <div className='md:my-5 my-4'>
                                    <label className='text-[#282828] opacity-[60%] ' htmlFor="username">User</label>
                                    <Input id="username" type='username' className='p-8 md:text-[16px] text-[14px]'/>
                                </div>
                                <div className='md:my-3 my-2'>
                                    <label className='text-[#282828] opacity-[60%] ' htmlFor="role">Role</label>
                                    <select id="role" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-7 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option selected value="admin">Admin</option>
                                        <option value="agent">Agent</option>
                                        <option value="user">User</option>
                                    </select>
                                </div>
                                <div>
                                    <label className='text-[#282828] opacity-[60%] ' htmlFor="status">Status</label>
                                    <select id="status" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-7 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option selected value="active">Active</option>
                                        <option value="pending">Pending</option>
                                        <option value="inactve">Inactive</option>
                                    </select>
                                </div>
                            </form>                            
                        </div>
                    </div>}
                    {delset &&<div className="fixed inset-0 flex justify-center items-center bg-black/50 z-50">
                        <div className="bg-white md:w-[350px] w-[300px] h-[300px] lg:w-[553px] md:px-9 px-5 lg:h-[304px] p-4 rounded-lg shadow-lg relative">
                            <form onSubmit="">
                                <div className='flex items-center justify-center'>
                                    <div>
                                        <p className="m-0 text-[#282828] opacity-[60%] md:text-[22px] text-[18px]">De-activate</p>
                                    </div>
                                </div>
                                <div className='md:my-5 my-4'>
                                    <p className="m-0 md:text-[24px] text-[20px] text-center">Are you sure you want to deactivate John Doe (9165448290)</p>
                                </div>
                                <div className='flex md:mt-12 mt-8 items-center md:gap-3 gap-2 justify-center'>
                                    <div>
                                        <button className='md:py-2 text-white py-2 rounded-md bg-[#2097CF] md:px-7 px-3'>De-activate</button>
                                    </div>
                                    <div>
                                        <button onClick={(e) => cancelUser(e)} className='md:px-5 px-3 rounded-md  py-2 border bg-white'>Cancel</button>
                                    </div>
                                </div>                               
                            </form>                            
                        </div>
                    </div>}
                </AdminLayout>  
            )} 
            { 
                view == 'transactions' && (
                    <AdminLayout title={"Transaction Management"}>
                        <div>
                            <p className="m-0 md:text-[20px] text-[16px] font-semibold text-black">Manage user accounts and permission </p>
                        </div>
                        <div className='flex flex-wrap  justify-center items-center md:justify-between'>
                            <div className='bg-[#fff] md:w-[353px] w-[250px] md:h-[138px] md:p-4  rounded-md md:ps-2  p-5 flex items-center justify-between md:my-5 lg:my-0 my-3'>
                                <div>
                                    <div className='flex md:gap-32 gap-10'>
                                        <div className='flex gap-4 justify-between items-center'>
                                            <div>
                                                <img src={RectangleOne}/>
                                            </div>
                                            <div className='flex'>
                                                <div>
                                                    <p className="m-0 text-[#282828] opacity-[0.4] md:text-[16px] text-[14px]">Failed Transactions</p>
                                                    <p className='lg:text-[30px]   md:text-[25px]'>0</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <img src={Warning}/>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-1 lg:mt-0  mt-1 md:mt-6'>
                                        <div>
                                            <ArrowUp color='#000' size={15}/>
                                        </div>
                                        <div>
                                            <p className="m-0 text-[14px]">
                                                <span className='text-red-500 font-semibold'>+12%</span>
                                                <span className='ps-1'>
                                                    high last week
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                            <div className='bg-[#fff] md:w-[353px] w-[250px] md:h-[138px] md:p-4  rounded-md md:ps-2  p-5 flex items-center justify-between md:my-5 lg:my-0 my-3'>
                                <div>
                                    <div className='flex md:gap-32  gap-10'>
                                        <div className='flex gap-4 justify-between items-center'>
                                            <div>
                                                <img src={RectangleOne}/>
                                            </div>
                                            <div className='flex'>
                                                <div>
                                                    <p className="m-0 text-[#282828] opacity-[0.4] md:text-[16px] text-[14px]">Pending Transactions</p>
                                                    <p className='lg:text-[30px]   md:text-[25px]'>0</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <img src={Error}/>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-1 lg:mt-0  mt-1 md:mt-6'>
                                        <div>
                                            <ArrowUp color='#000' size={15}/>
                                        </div>
                                        <div>
                                            <p className="m-0 text-[14px]">
                                                <span className='text-[#DC8018] font-semibold'>+12%</span>
                                                <span className='ps-1'>
                                                    high last week
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                            <div className='bg-[#fff] md:w-[353px] w-[250px] md:h-[138px] md:p-4  rounded-md md:ps-2  p-5 flex items-center justify-between md:my-5 lg:my-0 my-3'>
                                <div>
                                    <div className='flex md:gap-32  gap-10'>
                                        <div className='flex gap-4 justify-between items-center'>
                                            <div>
                                                <img src={RectangleOne}/>
                                            </div>
                                            <div className='flex'>
                                                <div>
                                                    <p className="m-0 text-[#282828] opacity-[0.4] md:text-[16px] text-[14px]">Resolved Transactions</p>
                                                    <p className='lg:text-[30px]   md:text-[25px]'>0</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <img src={Checkbox}/>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-1 lg:mt-0  mt-1 md:mt-6'>
                                        <div>
                                            <ArrowUp color='#000' size={15}/>
                                        </div>
                                        <div>
                                            <p className="m-0 text-[14px]">
                                                <span className='text-[#1CA700] font-semibold'>+12%</span>
                                                <span className='ps-1'>
                                                    high last week
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>                            
                        </div>
                        <div className='md:p-1 p-2 bg-white rounded-lg'>
                            <div className='md:p-5 md:mb-0 mb-3 flex items-center justify-between'>
                                <div>
                                    <p className="m-0 md:text-[18px] text-[16px] font-medium leading-[18px]">Transaction Log</p>
                                </div>
                                <div className='md:gap-5 gap-2 flex flex-wrap'>
                                    <Button className=" bg-transparent border">
                                        <div>
                                            <Filter color='#000' size={20}/>
                                        </div>
                                        <div>
                                            <p className="m-0 text-black">Filter</p>
                                        </div>
                                    </Button>
                                    <Button className="bg-[#2097CF]">
                                        <div>
                                            <RefreshCcw color='#fff' />
                                        </div>
                                        <div>
                                            <p className="m-0 text-white">Refresh</p>
                                        </div>
                                    </Button>
                                </div>
                            </div>   
                            <Table>
                                <TableCaption>No Data, Just Yet.</TableCaption>
                                <TableHeader>
                                    <TableRow className="bg-[#f3f4f680]">
                                        <TableHead className="">Transaction ID</TableHead>
                                        <TableHead>Status</TableHead>
                                        <TableHead>Date</TableHead>
                                        <TableHead className="text-center">Amounts</TableHead>
                                        <TableHead className="text-center">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {/* {invoices.map((invoice) => (
                                    <TableRow key={invoice.invoice}>
                                        <TableCell className="font-medium">{invoice.invoice}</TableCell>
                                        <TableCell>{invoice.paymentStatus}</TableCell>
                                        <TableCell>{invoice.paymentMethod}</TableCell>
                                        <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                                    </TableRow>
                                    ))} */}
                                </TableBody>
                            </Table>                        
                        </div>
                        <div className='bg-white rounded-lg'>
                            <div className='md:p-4 p-2 border-b-2'>
                                <p className="m-0 font-medium md:text-[18px] text-[17px]">Transaction Settings</p>
                            </div>
                            <div className='md:p-4 p-3'>
                                <div className='flex flex-wrap items-center justify-between'>
                                    <div>
                                        <div>
                                            <p className="m-0 font-semibold">Automatic Resolution</p>
                                        </div>
                                        <div>
                                            <p className="m-0  text-[#282828] opacity-[0.4] md:text-[16px] text-[14px]">Automatically attempt to resolve failed transactions</p>
                                        </div>
                                    </div>
                                    <div>
                                        <Switch />
                                    </div>
                                </div>
                                <div className='flex md:mt-4 mt-2 flex-wrap items-center justify-between'>
                                    <div>   
                                        <div>
                                            <p className="m-0 font-semibold">Email Notifications</p>
                                        </div>   
                                        <div>
                                            <p className="m-0  text-[#282828] opacity-[0.4] md:text-[16px] text-[14px]">Receive email alerts for failed transactions</p>
                                        </div>
                                    </div>
                                    <div>
                                        <Switch className="bg-[#2097CF] peers"  />
                                    </div>
                                </div>
                                <div className='flex md:mt-4 mt-2 flex-wrap items-center justify-between'>
                                    <div>
                                        <div>
                                            <p className="m-0 font-semibold">Retry Attempts</p>
                                        </div>
                                        <div>
                                            <p className="m-0  text-[#282828] opacity-[0.4] md:text-[16px] text-[14px]">Number of automatic retry attempts</p>
                                        </div>
                                    </div>
                                    <div className='md:w-[54px] md:h-[35px] flex items-center justify-center font-semibold w-[40px] h-[40px]  text-black md:text-[15px] text-[14px] rounded-lg bg-[#D1D5DB]'>
                                        {num}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AdminLayout>
                )
            }
            {
                view === 'security' && (
                <AdminLayout  title={"System Settings"}>
                    <div>
                        <p className="m-0 md:text-[20px] text-[16px] font-semibold text-black">System Security</p>
                    </div>
                    <div className='bg-white gap-4 md:p-5 p-4 w-[100%] h-[350px] md:h-[284px] border border-none rounded-3xl'>
                        <div className="p"><p className="m-0 text-[#282828] text-[18px] font-semibold">Platform Security</p></div>
                        <div className='border md:my-0 my-2   rounded-xl md:mt-7'>
                            <div className='md:flex items-center mx-4 gap-3 md:p-4 '>
                                <div className='md:my-0 my-3'>
                                    <img src={Padlock} alt="" />
                                </div>
                                <div>
                                    <p className="m-0 font-medium md:text-[16px] text-[14px]">
                                        Password Reset
                                    </p>
                                    <p className="m-0 md:pb-0 pb-3 text-[13px] text-[#6B7280]">Password reset required for a new password</p>
                                </div>
                            </div>
                        </div>
                        <div className='border  rounded-xl md:mt-4'>
                            <div className="flex sm:items-center items-baseline justify-between  mx-4">
                                <div className='md:flex items-center gap-3 md:p-4 '>
                                    <div className='md:my-0 my-3'>
                                        <img src={Key} alt="key-img" />
                                    </div>
                                    <div>
                                        <p className="m-0 font-medium md:text-[16px] text-[14px]">
                                            Password Policy
                                        </p>
                                        <p className="m-0 md:pb-0 pb-3 text-[13px] text-[#6B7280]">Manage password requirements and expiration</p>
                                    </div>
                                </div>
                                <div>
                                    <Link className='text-[#2563EB] text-[14px] md:text-[16px] '>Configure</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='bg-white gap-4 md:p-5 p-4 mt-3 w-[100%] h-[200px] md:h-[245px] border border-none rounded-3xl'> 
                            <div>
                                <p className="m-0 md:text-[20px] text-[18px] font-semibold">Activity Log</p>                                
                            </div>
                            <Table className="md:mt-5">
                                { Users == [] ? 
                                    <TableCaption className="w-[100%] ">No Registered Users Yet.</TableCaption> :
                                    // <div>
                                        <Table>
                                            <TableHeader>
                                                <TableRow className="bg-[#f3f4f680]">
                                                    <TableHead className="w-[20%] md:text-[14px] text-[12px]">Activity</TableHead>
                                                    <TableHead className="md:text-[14px] text-[12px]">IP Address</TableHead>
                                                    <TableHead className="md:text-[14px] text-[12px]">Location</TableHead>
                                                    <TableHead className="md:text-[14px] text-[12px]">Date</TableHead>
                                                    <TableHead className="md:text-[14px] text-[12px]">Status</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                {loading == false ? (
                                                    <tr>
                                                        <td colSpan="5" className="text-center py-4">
                                                            <svg className="animate-spin h-6 w-6 text-gray-500 mx-auto" viewBox="0 0 24 24">
                                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                                                            </svg>
                                                        </td>
                                                    </tr>
                                                ) : Users.length === 0 ? (
                                                    <tr>
                                                        <td colSpan="5" className="text-center text-gray-500">
                                                            No users created yet.
                                                        </td>
                                                    </tr>
                                                ) : (
                                                    paginatedUsers.map((user, index) => (
                                                        <TableRow key={index} className="my-2">
                                                            {/* <TableCell className="font-medium md:text-[16px] text-[14px] p-4">
                                                                <div className='flex md:gap-3 items-center'>
                                                                    <div>
                                                                        <img src={userImage} alt="" loading='true' className='w-[32px] h-[32px] rounded-full'/>
                                                                    </div>
                                                                    <div>
                                                                        <div>
                                                                            <p className="m-0 md:text-[15px] lg:text-[16px] text-[14px]">{user.username}</p>
                                                                        </div>
                                                                        <div>
                                                                            <p className="text-sm text-gray-400 m-0">{number}</p>
                                                                        </div>
                                                                    </div>
                                                                </div></TableCell>
                                                            <TableCell className="p-4 capitalize">{user.role.toLowerCase()}</TableCell> */}
                                                            {/* <TableCell className={`p-0 capitalize m-7 w-[70px] flex justify-center items-center rounded-lg ${color ? "bg-[#DCFCE7]" : "bg-[#f3c7a8] text-[#E8731F]"}`}>
                                                                {status.toLowerCase()}
                                                            </TableCell>
                                                            <TableCell colSpan="3" className="text-right">
                                                                <div className='flex justify-start gap-2'>
                                                                    <Link onClick={(e) => Edit(e)} className='outline-none'>
                                                                        <img src={Write} alt="editIcon" />
                                                                    </Link>
                                                                    <Link onClick={(e) => DeActiveUser(e)} className='outline-none'>
                                                                        <img src={Delete} alt="deleteIcon" />
                                                                    </Link>
                                                                </div>                                                  
                                                            </TableCell> */}
                                                        </TableRow>
                                                    ))
                                                    
                                                )}                                      
                                            </TableBody>
                                        </Table>
                                    // </div>                           
                                }
                            </Table> 
                        </div>
                    </div>
                    <div className='bg-white gap-4 md:p-5 p-4 w-[100%] h-[400px] md:h-[282px] border border-none rounded-3xl'>
                        <div className='md:flex justify-between mx-3'>
                            <div>
                                <p className="m-0 text-[#282828] font-semibold md:text-[18px] text-[16px]">Blocked Accounts</p>
                            </div>
                            <div>
                                <div className='flex items-center justify-between gap-3'>
                                    <div>
                                        <Link className='text-[#2563EB] font-semibold md:text-[16px] '>See all</Link>

                                    </div>
                                    <div className='border rounded-md flex items-center justify-between gap-2 py-2 px-3'>
                                        <div>
                                            +
                                        </div>
                                        <div>
                                            Add to Blacklist
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='border md:my-0 my-4  rounded-xl md:mt-4'>
                            <div className="flex items-end sm:items-center justify-between  mx-4">
                                <div className='flex items-center gap-3 md:p-4 '>
                                    <div className='md:my-0 my-3'>
                                        <img src={ErrorOne} alt="key-img" />
                                    </div>
                                    <div>
                                        <p className="m-0 font-medium md:text-[16px] text-[14px]">
                                            09165448290
                                        </p>
                                        <p className="m-0 text-[#6B7280]">Blocked on Jan 10, 2025</p>
                                        {/* Fetched Date of Account Disclosed */}
                                    </div>
                                </div>
                                <div>
                                    <Link className='text-[#ff1000] text-[14px] md:text-[16px] '>Unblock</Link>
                                </div>
                            </div>                            
                        </div>
                        <div className='border  rounded-xl md:mt-4'>
                            <div className="flex items-end sm:items-center justify-between  mx-4">
                                <div className='flex items-center gap-3 md:p-4 '>
                                    <div className='md:my-0 my-3'>
                                        <img src={ErrorOne} alt="key-img" />
                                    </div>
                                    <div>
                                        <p className="m-0 font-medium md:text-[16px] text-[14px]">
                                            09165448290
                                        </p>
                                        <p className="m-0 text-[#6B7280]">Blocked on Jan 10, 2025</p>
                                        {/* Fetched Date of Account Disclosed */}
                                    </div>
                                </div>
                                <div>
                                    <Link className='text-[#ff1000] text-[14px] md:text-[16px] '>Unblock</Link>
                                </div>
                            </div>
                        </div>                                               
                    </div>
                </AdminLayout>
            )}
        </div>
    );
}

export default settings;