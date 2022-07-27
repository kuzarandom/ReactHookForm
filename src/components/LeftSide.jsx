import { Box, Stack, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'

export default function LeftSide() {

    return (
        <Stack
            justifyContent='center'
            alignItem='center'
            sx={{
                border: '1px solid red',
                display: 'flex',
                bgcolor: 'lightcyan',
                width: 500,
                height: 500,
                margin: 'auto',
                mt:'60px'
            }}
        >
            <Stack>
                <Typography>
                    Permpol Business Platform
                    จะยกระดับมาตรฐานในการซื้อ - ขายผลผลิตของเกษตรกร ให้มีแหล่งซื้อขายผลผลิตที่มีคุณภาพให้กับความต้องการของโรงงานและเกษตรกร โดยสามารถวิเคราะห์และดูข้อมูลระหว่างการเพาะปลูกผลผลิตได้อย่างชัดเจน
                </Typography>
            </Stack>
        </Stack>
    )
}