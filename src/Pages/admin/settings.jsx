import React, { useEffect, useState } from 'react';
import AdminLayout from '../../components/admin/adminLayout';
import { ArrowRight, ArrowUp, Filter, RefreshCcw } from 'lucide-react';
import { data, Link } from 'react-router-dom';
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
import Checkboxs from "../../assets/image/Checkboxes.svg"
import {Switch} from '@/components/ui/switch'
import axios from 'axios';
import Delete from '../../assets/image/delete.svg'
import Write from '../../assets/image/button.svg'
import Padlock from '../../assets/image/padlock.svg'
import Key from '../../assets/image/key.svg'
import ErrorOne from '../../assets/image/error1.svg'
import OTPInput from 'react-otp-input';
import { Checkbox } from "@/components/ui/checkbox"
import NotificationsSystem, { atalhoTheme, notify, setUpNotifications, useNotifications } from 'reapop';

const ITEMS_PER_PAGE = 4; // Number of items per page

function settings() {
     setUpNotifications({
            defaultProps: {
            position: 'top-right',
            dismissible: true
        } 
    })
    const [requirements, setRequirements] = useState({
        uppercase: false,
        lowercase: false,
        minLength: false,
        number: false,
    });
    const [updatedpassword, ResetPasswordval] = useState("")
    const [password, setPassword] = useState("");
    const [reset, setReset] = useState(false)
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
    const [stats, setStats] = useState("")
    const startIndex = currentPage * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const paginatedUsers = Users.slice(startIndex, endIndex);
    const [selectUser, setSelectedUserId]= useState()
    const [setPasswordpage, inputPnumber] = useState(false)
    const [OtpPhoneNumber, setOtpPhoneNumber] = useState()
    const [otpPage, setOtpPage] = useState(false)
    const [timeLeft, setTimeLeft] = useState(31); // Start from 30s
    const [isTimerActive, setIsTimerActive] = useState(false);
    const [otp, setOtp] = useState('');
    const {notifications, dismissNotification} = useNotifications()
    const {notify} = useNotifications()

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
        
const handlePasswordChange = (value) => {
    setPassword(value);
    setRequirements({
    uppercase: /[A-Z]/.test(value),
    lowercase: /[a-z]/.test(value),
    minLength: value.length >= 8,
    number: /\d/.test(value),
    });
};

const setManageForUsers = async (event) => {
event.preventDefault();
    setView("user");
    setLoading(true);

    try {
        // Fetch users
        const response1 = await axios.get(
            "http://ec2-44-205-21-123.compute-1.amazonaws.com:8080/api/v1/admin/users",
            {
                headers: {
                    'Authorization': 'Bearer ' + token,
                }
            }
        );

        const data = response1.data.data || [];
        setUsers(data);

        if (data.length > 0) {
            const firstUser = data[0];

            setStats(firstUser.approvalStatus || "PENDING");
            setUserImage(firstUser.profile?.selfieImage || "");
            setPNumber(firstUser.phoneNumber || "");

            // ✅ Set color based on firstUser.approvalStatus
            if (firstUser.approvalStatus.toLowerCase() === "approved") {
                setColor(true);
            } else if (firstUser.approvalStatus.toLowerCase() === "pending") {
                setColor(false);
            } else {
                setColor(""); // Default case
            }
        }

        setLoading(false);
    } catch (error) {
        console.log(error);
        setUsers([]);
        setLoading(false);
    }
};


const Edit = (e, userids) => {
    e.preventDefault();
    SetUsersSet(true)    
    setSelectedUserId(userids); // Store the clicked user's ID

}


const handleSubmit= async (e, data) =>{
     e.preventDefault();
        setStats(e.target.value)
        // Now update user status
        if (!selectUser) {
    console.error("No user selected for updating status.");
    return;
        }

        // Find the selected user from state
        const selectedUser = Users.find(user => user.userId === selectUser);
        if (!selectedUser) {
            console.error("User not found in the list.");
            return;
        }

        const newStatus = stats; // Store the current status

        try {
    console.log("Updating user:", selectedUser);

    const response2 = await axios.put(
        `http://ec2-44-205-21-123.compute-1.amazonaws.com:8080/api/v1/admin/users/${selectUser}/status?statusType=${newStatus}`,
        {},
        {
    headers: {
        'Authorization': 'Bearer ' + token,
        "Content-Type": "application/json",
    }
        }
    );

    console.log(stats)
    // console.log("Status Update Response:", response2.data.data);
    const updatedUser = response2.data.data;
    console.log(updatedUser)

    // Update state with new user details
    setStatus(updatedUser.approvalStatus);
    setUserImage(updatedUser.profile?.selfieImage || "");
    setPNumber(updatedUser.phoneNumber || "");

    setUsers(prevUsers =>
        prevUsers.map(user =>
            user.userId === selectUser
                ? { ...user, approvalStatus: updatedUser.approvalStatus }
                : user
        )
    );
    // Close the form/modal
    SetUsersSet(false);
        } catch (error) {
    console.log(error);
    SetUsersSet(false)
        }
};
const inputPnumberSet = () => {
    inputPnumber(true)
    setView("")
}

const DeActiveUser = (e) => {
    e.preventDefault();
    SetDelsSet(true)
}

const cancelUser = (e) => {
    e.preventDefault();
    SetDelsSet(false)
}  


useEffect(() => {
    if (!isTimerActive) return; // Don't start if timer is inactive

    if (timeLeft <= 0) {
        setIsTimerActive(false); // Stop timer when it reaches 0
        return;
    }

    const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
}, [timeLeft, isTimerActive]);

const handleOtp =  async (e) => {
e.preventDefault();
setLoading(true)
setIsTimerActive(true);

try {
    const responseOtp = await axios.post(`http://ec2-44-205-21-123.compute-1.amazonaws.com:8080/api/v1/verification-unauthenticated?phoneNumber=${OtpPhoneNumber}`, {},
        { 
            headers:{
                "Content-Type": "application/json",
            }
        }
    )
    
    if (responseOtp.status === 200) { // Axios returns status, not `ok`
        inputPnumber(false)
        console.log(OtpPhoneNumber)
        setOtpPage(true)
        setView("")
        setOtpPhoneNumber(OtpPhoneNumber);
    }
    console.log(responseOtp)
    console.log(OtpPhoneNumber)

} catch (error) {
    // console.log(error) 
    notify("Invalid phone number. Please check and try again")
}
finally {
    setLoading(false); // Ensure loading is turned off after success or error
}
} 
const VerifyOtp = async (e) => {
    e.preventDefault() 
        
        try {
            const resverificationofOtp = await axios.post(`http://ec2-44-205-21-123.compute-1.amazonaws.com:8080/api/v1/verification/otp?phoneNumber=${OtpPhoneNumber}&otp=${otp}`,  
                {
                    headers: {
                        "Content-Type": "application/json",
                        'Authorization': `Bearer ${token}`,
                    }
                }
            )
            console.log(OtpPhoneNumber)
            console.log(otp)

            if (!OtpPhoneNumber || !otp) {
                notify("Phone number and OTP cannot be empty.");
                return;
            }

            const data = resverificationofOtp.data
            console.log(data)
            notify("Verification Successful")
            setOtpPage(false)
            setReset(true)
        } catch (error) {
            console.error("Error response:", error.response?.data || error.message);
            if (error.response?.status === 401) {
                notify("Unauthorized: Check your phone number or OTP.");
                console.log(error)
            } else {
                notify("Something went wrong. Please try again.");
            }
        }
}
const UpdatePassword = async (e) => {
    e.preventDefault()
    try {
        const response = axios.put("http://ec2-44-205-21-123.compute-1.amazonaws.com:8080/api/v1/user-management/secrets/password", {otp, user_id, password}, {
            headers: {
                'Authorization': 'Bearer ' + token,
                "Content-Type": "application/json",
            }   
        })

        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
    return (
        <div>
            <NotificationsSystem
            // 2. Pass the notifications you want Reapop to display.
            notifications={notifications}
            // 3. Pass the function used to dismiss a notification.
            dismissNotification={(id) => dismissNotification(id)}
            // 4. Pass a builtIn theme or a custom theme.
            theme={atalhoTheme}
            />
            {
                view === 'admin' && (
                <AdminLayout  title={"System Admin Settings"}>
                    <div>
                        <p className="m-0 md:text-[20px] text-[16px] font-semibold text-[#282828]">User Management</p>
                    </div>
                    <div className='bg-white gap-4 md:p-5 p-4 md:flex  items-center justify-center w-[100%] h-[350px] md:h-[249px] border border-none rounded-3xl'>
                        <div className="md:w-[500px] md:p-5 p-4 md:h-[171px] border-2 rounded-md">
                            <p className="m-0 md:text-[20px] text-[18px] font-semibold">User Accounts</p>
                            <div>
                                <p className="m-0 'text-[#282828] opacity-[0.7] md:text-[12px] lg:text-[16px] text-[14px]">View, edit and deactivate user accounts </p>
                            </div>
                            <Link onClick={(event)=> setManageForUsers(event)} className='flex md:mt-4 mt-5 items-center gap-2'>
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
                        <p className="m-0 md:text-[20px] text-[16px] font-semibold text-[#282828]">Transaction Management</p>
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
                        <div className="md:w-[500px] md:max-w-[400px] md:mt-0 mt-4 md:p-5 p-4  md:h-[171px] border-2 rounded-md">
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
                        <p className="m-0 md:text-[20px] text-[16px] font-semibold text-[#282828]">Manage user accounts and permission </p>
                    </div>
                    <div className='bg-white gap-4 md:p-5 p-4   w-[100%] h-[450px] md:h-[509px] border border-none rounded-3xl'>
                        <div className='flex gap-3 md:my-2 my-1 justify-between'>
                            <div>
                                <p  className="m-0 md:text-[20px] text-[16px] font-semibold text-[#282828]">User Accounts</p>
                            </div>
                            <div>
                                <div className="border rounded-[10px] gap-3 justify-center hidden lg:flex items-center p-2">
                                    <img className="md:pe-2 md:w-[26px]" src={MagnifyingGlass} />
                                    <input className="outline-none border-none md:ps-2 box-border bg-transparent" placeholder="Search" type="search" />
                                </div>
                            </div>
                        </div>
                        <Table>
                            <TableCaption>
                                {/* {Users.length === 0 ? "No Registered Users Yet." : ""} */}
                            </TableCaption>
                            <TableHeader>
                                <TableRow className="bg-[#f3f4f680]">
                                    <TableHead className="w-[60%] text-[#282828]">User</TableHead>
                                    <TableHead className="text-[#282828]">Role</TableHead>
                                    <TableHead className="text-[#282828]">Status</TableHead>
                                    <TableHead className="text-[#282828]">Actions</TableHead>
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
                                ) : Users.length === 0 ? (
                                    <TableRow>
                                        <TableCell colSpan="4" className="text-center text-[#282828]">
                                            No users created yet.
                                        </TableCell>
                                    </TableRow>
                                ) : (
                                    paginatedUsers.map((user, index) => (
                                        <TableRow  key={index} className="my-2">
                                            <TableCell className="font-medium md:text-[16px] text-[14px] p-4">
                                                <div className='flex md:gap-3 items-center'>
                                                    <img src={userImage} alt="" loading='true' className='w-[32px] h-[32px] rounded-full'/>
                                                    <div>
                                                        <p className="m-0 md:text-[15px] text-[#282828] lg:text-[16px] text-[14px]">{user.username}</p>
                                                        <p className="text-sm text-[#282828] m-0">{number}</p>
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell className="p-4 capitalize text-[#282828]">{user.role.toLowerCase()}</TableCell>
                                            <TableCell  className={`p-0 capitalize m-7 w-[70px] flex justify-center items-center rounded-lg ${user.approvalStatus.toLowerCase() === "approved" ? "bg-[#DCFCE7]" : user.approvalStatus.toLowerCase() === "pending" ? "bg-[#e8732033]  text-[#E8731F]" : user.approvalStatus.toLowerCase() === "suspended" ? "bg-[#d9d9d9] text-[#282828]" : "bg-gray-200"}`}>
                                                {user.approvalStatus.toLowerCase()}
                                            </TableCell>
                                            <TableCell className="text-right">
                                                <div className='flex justify-start gap-2'>
                                                    <Link onClick={(e) => Edit(e, user.userId)} className='outline-none'>   
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

                            <p className="m-0 md:text-[20px] text-[16px] font-semibold text-[#282828]">Assign Sales Officer </p>
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
                    {userset ?<div className="fixed inset-0 flex justify-center items-center bg-black/50 z-50">
                        <div className="bg-white w-[300px] h-[450px] lg:w-[553px] md:px-9 px-5 lg:h-[474px] p-4 rounded-lg shadow-lg relative">
                            <form onSubmit={(e) =>handleSubmit(e)}>
                                <div className='flex items-center justify-between'>
                                    <div>
                                        <p className="m-0 text-[#282828] opacity-[60%] md:text-[22px] text-[18px]">Edit</p>
                                    </div>
                                    <div>
                                        <button type='submit'  className="md:text-[22px] text-[18px] text-blue-500">
                                            Save
                                        </button>
                                    </div>                                    
                                </div>
                                <div className='md:my-5 my-4'>
                                    <label className='text-[#282828] opacity-[60%] ' htmlFor="username">User</label>
                                    <Input required id="username" type='username' className='p-8 md:text-[16px] text-[14px]'/>
                                </div>
                                <div className='md:my-3 my-2'>
                                    <label className='text-[#282828] opacity-[60%] ' htmlFor="role">Role</label>
                                    <select required id="role" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-7 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option selected value="admin">Admin</option>
                                        <option value="agent">Agent</option>
                                        <option value="user">User</option>
                                    </select>
                                </div>
                                <div>
                                    <label className='text-[#282828] opacity-[60%] ' htmlFor="stats">Status</label>
                                    <select required value={stats} onChange={(e) => setStats(e.target.value)} id="status" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-7 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option value="" selected disabled>Select an option</option>
                                        <option value="approved">Approved</option>
                                        <option value="pending">Pending</option>
                                        <option value="suspended">Suspended</option>
                                    </select>
                                </div>
                            </form>                            
                        </div>
                    </div>: ""}
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
                            <p className="m-0 md:text-[20px] text-[16px] font-semibold text-[#282828]">Manage user accounts and permission </p>
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
                                            <img src={Checkboxs}/>
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
                                            <p className="m-0 text-[#282828]">Filter</p>
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
                                    <div className='md:w-[54px] md:h-[35px] flex items-center justify-center font-semibold w-[40px] h-[40px]  text-[#282828] md:text-[15px] text-[14px] rounded-lg bg-[#D1D5DB]'>
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
                        <p className="m-0 md:text-[20px] text-[16px] font-semibold text-[#282828]">System Security</p>
                    </div>
                    <div className='bg-white gap-4 md:p-5 p-4 w-[100%] h-[350px] md:h-[284px] border border-none rounded-3xl'>
                        <div className="p"><p className="m-0 text-[#282828] text-[18px] font-semibold">Platform Security</p></div>
                        <div className='border md:my-0 my-2   rounded-xl md:mt-7'>
                            <Link onClick={() => inputPnumberSet()} className='md:flex items-center mx-4 gap-3 md:p-4 '>
                                <div className='md:my-0 my-3'>
                                    <img src={Padlock} alt="" />
                                </div>
                                <div>
                                    <p className="m-0 font-medium md:text-[16px] text-[14px]">
                                        Password Reset
                                    </p>
                                    <p className="m-0 md:pb-0 pb-3 text-[13px] text-[#6B7280]">Password reset required for a new password</p>
                                </div>
                            </Link>
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
            {
                setPasswordpage && 
                <AdminLayout title={"Reset Password"}>
                    <div className='flex md:my-10 my-5 items-start justify-center'>
                        <div>
                            <div>
                                <p className="m-0 font-medium text-center text-[#282828] lg:text-[32px] md:text-[28px] text-[24px]">Reset Password</p>
                            </div>
                            <form onSubmit={handleOtp}>
                                <div className="bg-white md:py-5 py-3 lg:w-[749px] md:w-[550px] md:h-[350px] w-[500px] h-[300px] lg:h-[391px] rounded-lg">
                                    <div className='flex items-center justify-center'>
                                        <p className="m-0 lg:text-[24px] font-semibold md:text-[22px] text-[20px]">Reset Your Password</p>
                                    </div>
                                    <p className="m-0 md:pb-[60px] pb-[30px] text-center font-semibold text-[#282828] opacity-[60%]">Enter the phone number associated with the account to get<br/> code to reset the password</p>
                                    <div className='flex justify-center'>
                                        <input className="rounded md:w-[500px] border px-5 py-6" value={OtpPhoneNumber} onChange={(e) => setOtpPhoneNumber(e.target.value)} type="text" placeholder='Phone Number'  />
                                    </div>
                                    <div className='flex md:mt-[40px] justify-center'>
                                        <button type='submit' className='md:px-9 rounded-xl md:py-4 bg-[#2097CF] text-[#fff]'>{loading ? "Generating code" : "Get code"}</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </AdminLayout>
            }
            {
            otpPage && 
                <AdminLayout title={"Reset Password"}>
                    <div className='flex md:my-10 my-5 items-start justify-center'>
                        <div>
                            <div>
                                 <p className="m-0 font-medium text-center text-[#282828] lg:text-[32px] md:text-[28px] text-[24px]">Reset Password</p>
                            </div>
                            <form onSubmit={VerifyOtp}>
                                 <div className="bg-white md:py-5 py-3 lg:w-[749px] md:w-[550px] md:h-[350px] w-[500px] h-[300px] lg:h-[391px] rounded-lg">
                                     <div className='flex items-center justify-center'>
                                         <p className="m-0 lg:text-[24px] font-semibold md:text-[22px] text-[20px]">Reset Your Password</p>
                                     </div>
                                     <p className="m-0 md:pb-[60px] pb-[30px] text-center font-semibold text-[#282828] opacity-[60%]">Enter the phone number associated with the account to get<br/> code to reset the password</p>
                                     <div className='flex justify-center'>
                                        {/* <input className="rounded md:w-[500px] border px-5 py-6" value={OtpPhoneNumber} onChange={(e) => setOtpPhoneNumber(e.target.value)} type="text" placeholder=''  /> */}
                                        <OTPInput
                                        
                                            value={otp}
                                            onChange={setOtp}
                                            numInputs={4}
                                            renderSeparator={<span>--</span>}
                                            renderInput={(props) => <input {...props} />}
                                        />                                       
                                     </div>                                    
                                     <div className=' md:mt-[40px]'>
                                        <div className='flex md:mb-3 mb-2 items-start justify-center gap-3'>
                                            <span className='text-[#282828] opacity-[60%]'>{"Didn’t receive code?"}</span>
                                            <span className='text-[#2097CF] font-bold'>Resend code in {`${timeLeft}`}</span>
                                        </div>
                                        <div className='flex justify-center'>
                                            <button type='submit' className='md:px-9 rounded-xl md:py-4 bg-[#909090] text-[#FFFFFF]'>Get code</button>
                                        </div>
                                     </div>
                                 </div>
                            </form>
                         </div>
                    </div>
                 </AdminLayout>
            }
            {
            reset && 
                <AdminLayout title={"Reset Password"}>
                    <div className='flex md:my-10 my-5 items-start justify-center'>
                        <div>
                            <div>
                                 <p className="m-0 font-medium text-center text-[#282828] lg:text-[32px] md:text-[28px] text-[24px]">Reset Password</p>
                            </div>
                            <form onSubmit={UpdatePassword}>
                                 <div className="bg-white md:py-5 py-3 lg:w-[749px] md:w-[550px] md:h-[350px] w-[500px] h-[300px] lg:h-[421px] rounded-lg">
                                     <div className='flex items-center justify-center'>
                                         <p className="m-0 lg:text-[24px] font-semibold md:text-[22px] text-[20px]">Reset Your Password</p>
                                     </div>
                                     <p className="m-0 md:pb-[40px] pb-[30px] text-center font-semibold text-[#282828] opacity-[60%]">Enter the phone number associated with the account to get<br/> code to reset the password</p>
                                     <div className='flex justify-center'>
                                        <input className="rounded outline-none md:w-[500px] border px-5 py-6" value={password}  onChange={(e) => handlePasswordChange(e.target.value)} type="password" placeholder='New Password'  />
                                    </div> 
                                    {/* 09154678898 */}
                                    <div className="flex lg:mt-[20px] md:mt-[14px] mt-[12px] md:ms-[2rem] lg:ms-[8.5rem] justify-start">
                                        <div className='flex justify-start gap-8'>
                                            <div className="flex items-center space-x-2">
                                                <Checkbox className={`rounded-lg ${requirements.uppercase ? "bg-green-500" : "bg-gray-300"}`} checked={requirements.uppercase} id="uppercase" readOnly />
                                                <label
                                                    htmlFor="uppercase"
                                                    className="text-sm font-medium text-[#282828] opacity-[60%] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                    Uppercase character
                                                </label>
                                            </div>  
                                            <div className="flex items-center space-x-2">
                                                <Checkbox className={`rounded-lg ${requirements.lowercase ? "bg-green-500" : "bg-gray-300"}`} checked={requirements.lowercase} id="lowercase"  readOnly/>
                                                <label
                                                    htmlFor="lowercase"
                                                    className="text-sm font-medium leading-none text-[#282828] opacity-[60%] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                    Lowercase character
                                                </label>
                                            </div>    
                                        </div> 
                                    </div> 
                                    <div className="flex md:mt-[20px] md:ms-[2rem] lg:ms-[8.5rem] justify-start">
                                        <div className='flex justify-start gap-[1.31rem]'>
                                            <div className="flex items-center space-x-2">
                                                <Checkbox className={`rounded-lg ${requirements.minLength ? "bg-green-500" : "bg-gray-300"}`}  checked={requirements.minLength} id="minLength" readOnly />
                                                <label
                                                    htmlFor="minLength"
                                                    className="text-sm text-[#282828] opacity-[60%] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                    8 characters minimum
                                                </label>
                                            </div>   
                                            <div className="flex items-center space-x-2">
                                                <Checkbox className={`rounded-lg ${requirements.number ? "bg-green-500" : "bg-gray-300"}`} checked={requirements.number} readOnly id="number" />
                                                <label
                                                    htmlFor="number"
                                                    className="text-sm text-[#282828] opacity-[60%] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                   Number
                                                </label>
                                            </div>    
                                        </div> 
                                    </div>                             
                                     <div className=' md:mt-[40px]'>
                                        <div className='flex justify-center'>
                                            <button type='submit' className='md:px-14 rounded-xl md:py-4 bg-[#2097CF] text-[#FFFFFF]'>Reset</button>
                                        </div>
                                     </div>
                                </div>
                            </form>
                         </div>
                    </div>
                 </AdminLayout>
            }
        </div>
    );
}

export default settings;