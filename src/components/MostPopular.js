import React from 'react';
function MostPopular() {
    return (
      <div className='mt-12'>
        <div className='flex flex-col lg:flex-row justify-center items-center '>
            <div className=''>
                <img src="/assets/images/smallyacht.webp" alt="smallyacht"></img>
            </div>
            <div className='ml-2'>
                <img src="/assets/images/yacht.webp" alt="yacht" className='max-h-[416px]'></img>
            </div>
        </div>
        <div className='flex justify-center mt-6'>
        <h2 className='text-4xl'>Our Most Popular Moreton Bay Sailing Cruises</h2>
        </div>

      </div>
    );
  }

 export default MostPopular; 