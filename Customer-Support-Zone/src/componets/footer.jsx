import React from 'react';

const footer = () => {
    return (
        <div>
            {/* footer section */}
    <section className='md:h-[432px] bg-black md:pt-15'>
    <div className='md:flex items-center mx-20 gap-9'>
      <div className=''>
        <h1 className='text-white font-bold text-[24px]'>CS — Ticket System</h1>
        <p className='text-[#A1A1AA]'>Customer support ticket system is a medium <br /> where users can easily submit their problems or queries. <br /> Each ticket is assigned a unique number, <br /> so the support team can quickly find and resolve the issue.</p>
      </div>
      <div className=' md:mx-6 space-y-2'>
        <h1 className='text-white font-bold '>Company</h1>
        <p className='text-[#A1A1AA]'>About Us</p>
        <p className='text-[#A1A1AA]'>Our Mission</p>
        <p className='text-[#A1A1AA]'>Contact Sales</p>
      </div>
      <div className=' md:mx-5 space-y-2'>
        <h1 className='text-white font-bold'>Services</h1>
        <p className='text-[#A1A1AA]'>Products & Services</p>
        <p className='text-[#A1A1AA]'>Customer Stories</p>
        <p className='text-[#A1A1AA]'>Download Apps</p>
      </div>
      <div className=' md:mx-5 space-y-2'>
        <h1 className='text-white font-bold'>Information</h1>
        <p className='text-[#A1A1AA]'>Privacy Policy</p>
        <p className='text-[#A1A1AA]'>Terms & Conditions</p>
        <p className='text-[#A1A1AA]'>Join Us</p>
      </div>
      <div className=' md:mx-5 space-y-2'>
        <h1 className='text-white font-bold'>Social Links</h1>
        <p className='text-[#A1A1AA]'>@CS — Ticket System</p>
        <p className='text-[#A1A1AA]'>@CS — Ticket System</p>
        <p className='text-[#A1A1AA]'>@CS — Ticket System</p>
        <p className='text-[#A1A1AA]'>support@cst.com</p>
      </div>
    </div>
    <h1 className='md:text-center md:md:pt-30 text-white'>© 2025 CS — Ticket System. All rights reserved.</h1>
    </section>
        </div>
    );
};

export default footer;