

const banner = () => {
    return (
        <div>
            <section className='banner  md:h-[1176px] md:w-auto md:mx-[80px] md:mt-[80px]'>
                <div className='md:flex justify-between md:gap-4 '>
                    <div className='md:h-[250px] md:w-[708px] bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-center pt-15 rounded-[10px]'>
                        <p className='text-[24px] text-white'>In-Progress</p>
                        <p className='font-semibold text-[60px] text-white'>0</p>
                    </div>
                    <div className='md:h-[250px] md:w-[708px]   bg-linear-to-r from-[#54CF68] to-[#00827A] text-center pt-15 rounded-[10px]'>
                        <p className='text-[24px] text-white'>Resolved</p>
                        <p className='font-semibold text-[60px] text-white'>0</p>
                    </div>
                </div>
                <div className='h-[846px] md:grid grid-cols-5 md:pt-[80px] '>
                    <div className='col-span-4 border-2 '>
                        <h1 className='text-[24px] font-semibold'>Customer Tickets</h1>
                        <div className="grid grid-cols-2 gap-3">
                            <div className='card border-2 h-[148px] md:w-[520px]'>
                                <div>
                                    <h1>Login Issues - Can't Access Account</h1>
                                    <p>Customer is unable to log in to their account. They've tried resetting their password multiple times but still...</p>
                                </div>
                                <div className='flex justify-between'>
                                    <p>#1003</p>
                                    <p>MEDIUM PRIORITY</p>
                                    <p>Michael Brown</p>
                                    <p>1/17/2024</p>
                                </div>
                            </div>


                        </div>


                    </div>

                    <div className='col-span-1 md:p-5'>
                        <h1 className='text-[24px] font-semibold'>Task Status</h1>
                        <p>Select a ticket to add to Task Status</p>

                        <h1 className='text-[24px] font-semibold md:pt-3'>Resolved Task</h1>
                        <p>No resolved tasks yet.</p>

                    </div>
                </div>

            </section>
        </div>
    );
};

export default banner;