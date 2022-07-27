import * as React from 'react';
import style from '../Style/Style.module.css'

const ContentVisaCard = ({ icon, message, date, status, currency, ...props }) => {

    const arrowUp = (
        <svg fill='red' width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M374.6 246.6C368.4 252.9 360.2 256 352 256s-16.38-3.125-22.62-9.375L224 141.3V448c0 17.69-14.33 31.1-31.1 31.1S160 465.7 160 448V141.3L54.63 246.6c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160C387.1 213.9 387.1 234.1 374.6 246.6z" /></svg>
    )

    const arrowDown = (
        <svg fill='green' width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z" /></svg>
    )

    return (
        <div id={style.contentPaper} className={style.myPaper}>
            <div className='inline-flex justify-center items-center'>

                <div className='mr-[10px]'>
                    {icon}
                </div>

                <div>
                    <div className='font-bold'>
                        {message}
                    </div>
                    <div className='text-secondary'>
                        {date}
                    </div>
                </div>

            </div>

            <div className="pt-[10px]">

                <div className="inline-flex mb-2">
                    <div className={status === 'upper' ? "text-green-600 font-bold" : status === 'lower' ? 'text-red-600 font-bold' : ''}>
                        ${currency}
                    </div>
                    {status === 'upper' ? arrowDown : status === 'lower' ? arrowUp : ''}
                </div>
            </div>
        </div>
    );
}

export default ContentVisaCard