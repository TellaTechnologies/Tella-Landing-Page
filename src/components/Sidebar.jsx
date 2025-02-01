import React from 'react';
import Frame from '../assets/Frame.svg'

const Sidebar = () => {
    return (
        <div className='bg-[#2097CF]'>
            <div className="group peer hidden text-sidebar-foreground md:block">
                <div className='class="relative h-svh w-[--sidebar-width] bg-transparent transition-[width] duration-200 ease-linear group-data-[collapsible=offcanvas]:w-0 group-data-[side=right]:rotate-180 group-data-[collapsible=icon]:w-[--sidebar-width-icon]"'>
                <div className='flex  items-center justify-center md:py-5 py-4'>
                    <img src={Frame} alt="" />
                </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;