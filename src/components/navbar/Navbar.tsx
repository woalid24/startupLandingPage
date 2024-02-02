import Image from 'next/image';
import React from 'react';
import NavigationBar from './navigation-bar';
import ActionButtons from './action-buttons';

const Navbar = () => {
    return (
        <div className='bg-gray-200 flex justify-between items-center px-10 border-b '>
            <div>
            {/* <Image src={ }/> */}
            <Image src="/images/logo/logo-1.svg" width={50} height={50} alt=''/>
            </div>
            <NavigationBar/>
            <ActionButtons/>
        </div>
    );
};

export default Navbar;