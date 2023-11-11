import React from 'react'
import d04 from '../assets/icons/04d.png'
import { BsCloudsFill, BsCloudSunFill } from 'react-icons/bs'

export default function Card3() {
    return (
        <div className='p-2'>
            <h5 className=''>5 Days forecast</h5>
            <hr />
            <div className='d-flex flex-column mt-4 gap-2'>

                {
                    [1, 1, 1, 1, 1].map(() => (
                        <div className='d-flex justify-content-between align-items-center '>
                            <div className='d-flex align-items-center gap-2'><img src={d04} alt="" width={30} />
                                <h6 className='m-0'>-41°c</h6>
                            </div>
                            <h6 className='m-0'>2 Mar</h6>
                            <h6 className='m-0'>Friday</h6>
                        </div>
                    ))

                }

            </div>

        </div>
    )
}
