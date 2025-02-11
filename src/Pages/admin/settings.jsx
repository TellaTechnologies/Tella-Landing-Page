import React, { useState } from 'react';
import AdminLayout from '../../components/admin/adminLayout';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import MagnifyingGlass from '../../assets/image/magnifyinglass2.svg'

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


function settings(props) {
    const [user, checkUser] = useState(true)

    const invoices= []
    return (
        <div>
            {
                user ?
                <AdminLayout title={"System Admin Settings"}>
                    <div>
                        <p className="m-0 md:text-[20px] text-[16px] font-semibold text-black">User Management</p>
                    </div>
                    <div className='bg-white gap-4 md:p-5 p-4 md:flex  items-center justify-center w-[100%] h-[350px] md:h-[249px] border border-none rounded-3xl'>
                        <div className="md:w-[500px] md:p-5 p-4 md:h-[171px] border-2 rounded-md">
                            <p className="m-0 md:text-[20px] text-[18px] font-semibold">User Accounts</p>
                            <div>
                                <p className="m-0 'text-[#282828] opacity-[0.7] md:text-[12px] lg:text-[16px] text-[14px]">View, edit and deactivate user accounts </p>
                            </div>
                            <Link onClick={()=> checkUser(false)} className='flex md:mt-4 mt-5 items-center gap-2'>
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
                                <Link className='flex md:mt-4 mt-5 items-center gap-2'>
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
                            <Link className='flex md:mt-4 mt-5 items-center gap-2'>
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
                </AdminLayout> :
                <AdminLayout title={"User Management"}>
                    <div>
                        <p className="m-0 md:text-[20px] text-[16px] font-semibold text-black">Manage user accounts and permission </p>
                    </div>
                    <div className='bg-white gap-4 md:p-5 p-4   w-[100%] h-[350px] md:h-[509px] border border-none rounded-3xl'>
                        <div className='flex gap-3 justify-between'>
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
                            <TableCaption>No Registered Users Yet.</TableCaption>
                            <TableHeader>
                                <TableRow className="bg-[#f3f4f680]">
                                    <TableHead className="w-[60%]">User</TableHead>
                                    <TableHead>Role</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead className="">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {invoices.map((invoice) => (
                                <TableRow key={invoice.invoice}>
                                    <TableCell className="font-medium">{invoice.invoice}</TableCell>
                                    <TableCell>{invoice.paymentStatus}</TableCell>
                                    <TableCell>{invoice.paymentMethod}</TableCell>
                                    <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                                </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                    <div className='bg-white gap-4 md:p-5 p-4 w-[100%] h-[350px] md:h-[249px] border border-none rounded-3xl'>
                        <div>
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
                </AdminLayout>
            }
        </div>
    );
}

export default settings;