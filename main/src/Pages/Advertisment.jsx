import React from 'react'
import ad1 from '../Images for ads/ad1.png'
function Advertisment() {
    return (
        <>
            <div className='flex justify-center mt-4 mb-3'>
                <h1 className='text-xl font-bold pl-12'>Ads:</h1>
                <a href='https://play.google.com/store/search?q=google+ads&c=apps&hl=en&gl=US'>
                    <img className='cursor-pointer' src={ad1} />
                </a>
            </div>
        </>
    )
}

export default Advertisment
