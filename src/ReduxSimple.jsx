import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { onchangeValue } from './features/counter/counterSlice'
import { useForm, Controller } from "react-hook-form";
import FieldInput from './components/FieldInput';

export default function ReduxSimple() {
  const count = useSelector((state) => state.counter.value)
  const count2 = useSelector((state) => state)
  const dispatch = useDispatch()
  const { register, control, handleSubmit,
    getValues, getFieldState } = useForm({
      criteriaMode: "all",
      mode: "onChange",
    });


  const onSubmit = (data) => {
    // console.log(data)
    dispatch(onchangeValue(data))
  }

  const [value, setValue] = React.useState('')
  return (
    <div>
      <div class="flex">
        <form>
          <Controller
            name="username"
            control={control}
            render={({ field }) => {
              return <input
                className='m-5 p-5 border-[3px] rounded-md text-3xl'
                onChange={(e) => (field.onChange(e))}
                value={field.value}
              />

            }}
          />
          <Controller
            name="password"
            control={control}
            render={({ field }) => {
              return <input
                className='m-5 p-5 border-[3px] rounded-md text-3xl'
                onChange={(e) => (field.onChange(e))}
                value={field.value}
              />

            }}
          />
          <button type='submit' onClick={handleSubmit(onSubmit)}>submit</button>
        </form>
        <form>
          <Controller
            name="tel"
            control={control}
            render={({ field }) => {
              return <input
                className='m-5 p-5 border-[3px] rounded-md text-3xl'
                onChange={(e) => (field.onChange(e))}
                value={field.value}
              />

            }}
          />
          <Controller
            name="name"
            control={control}
            render={({ field }) => {
              return <input
                className='m-5 p-5 border-[3px] rounded-md text-3xl'
                onChange={(e) => (field.onChange(e))}
                value={field.value}
              />

            }}
          />
          <button type='submit' onClick={handleSubmit(onSubmit)}>submit</button>
        </form>

      </div>
    </div>
  )
}