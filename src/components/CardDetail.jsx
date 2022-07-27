import * as React from 'react';
import style from '../Style/Style.module.css'

const CardDetail = () => {


    return (
        <div className={style.craditCard}>

            <div className="flex justify-around items-center">

                <div className='font-bold text-white text-2xl my-[10px] mr-14'>
                    VISA
                </div>

                <div className='font-medium text-[#90EE90] text-[10px] mt-3'>
                    Avalible balance
                </div>

            </div>

            <div className="flex justify-between items-center">

                <div className='h-7 w-10 bg-yellow-500 rounded ml-7'>
                </div>

                <div className='justify-center items-center flex mr-6 text-3xl text-white'>
                    7,500.00
                </div>

            </div>

            <div className="flex flex-col mt-3">

                <div className='flex justify-evenly'>
                    <div className={style.craditNumber}>
                        42012
                    </div>
                    <div className={style.craditNumber}>
                        3049
                    </div>
                    <div className={style.craditNumber}>
                        2800
                    </div>
                    <div className={style.craditNumber}>
                        9815
                    </div>
                </div>

                <div className='flex justify-around'>
                    <div className='flex text-white text-sm pb-5 pt-[10px]'>
                        EXPIRE • 2/26
                    </div>
                    <div className='flex text-white text-sm pb-5 pt-[10px]'>
                        EXPIRE • 2/26
                    </div>
                </div>

            </div>
        </div>
    );
}

export default CardDetail