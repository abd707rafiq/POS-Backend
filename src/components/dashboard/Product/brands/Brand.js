import React from 'react'
import BrandsTbl from '../../Tables/BrandsTbl'



const Brand = () => {
 

    return (
        <div className='flex flex-col w-full '>
            <div className='mx-5 mt-5 flex'>
            <h1 className='text-2xl font-bold text-start '>Brands</h1> 
                <h2 className='text-gray-400 mt-3 mx-1 text-start text-sm'>Manage your brands</h2>
 
            </div>
            <div className=' w-[96%]  mx-[2%]  shadow-md my-5 shadow-gray-400 min-h-[300px] border-t-[2px] border-blue-600 rounded-xl'>
                
               
            <BrandsTbl />
            </div>
        </div>
    )
}

export default Brand