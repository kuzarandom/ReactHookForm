import react, { useContext, useState } from 'react'
import Grid from '@mui/material/Grid'
import { TextField, Button } from '@mui/material'
import { set, useForm } from 'react-hook-form';
import { ContextRegisterForm } from '../App'

export default function AccoutForm() {
    const { register, handleSubmit } = useForm();
    const [valueForm, setValueForm] = useState({
        username: '',
        password: ''
    }
    )
    const { oneAccoutForm, setOneAccoutForm } = useContext(ContextRegisterForm)

    async function onSubmit(data) {
        console.log(data)
        setOneAccoutForm({ username: data.username, password: data.password })
        // await setOneAccoutForm(valueForm)

    }



    return (
        <div>
            <form>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        ชื่อผู้ใช้ <input label="Username" {...register("username", { required: 'error message', maxLength: 20, value: oneAccoutForm ? oneAccoutForm.username : ''})}></input>
                    </Grid>
                    <Grid item xs={12}>
                        รหัสผ่าน <input  label="Password" {...register("password", {
                            required: 'error message',
                            value: oneAccoutForm ? oneAccoutForm.password: ''
                        })}></input>
                    </Grid>
                    <Grid item xs={12}>
                        {/* <input type="submit" /> */}

                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={1}>
                        <Button sx={{ border: '1px solid red' }} onClick={handleSubmit(onSubmit)}>Next</Button>\
                        <Button sx={{ border: '1px solid red' }} onClick={() => console.log(oneAccoutForm)}>Console</Button>
                </Grid>
            </Grid>
        </form>
        </div >
    )
}

