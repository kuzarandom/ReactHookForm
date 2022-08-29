import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { onchangeValue } from './features/counter/counterSlice'
import { useForm, Controller } from "react-hook-form";

export default function ReduxNext() {
  const count = useSelector((state) => state.value.Account)
  const dispatch = useDispatch()
  const { register, control, handleSubmit,
    getValues, getFieldState } = useForm({
      criteriaMode: "all",
      mode: "onChange",
    });

  return (
    <div>
      <div class="flex flex-col ml-10 mt-10 border ">
        <div>{count.username ? count.username : 'Don`t have username'}</div>
        <div>{count.password ? count.password : 'Don`t have password'}</div>
        <div>{count.name ? count.name : 'Don`t have name'}</div>
        <div>{count.tel ? count.tel : 'Don`t have tel'}</div>
      </div>
    </div>
  )
}