import React from 'react';
import {useForm} from "react-hook-form";
import useAuth from '../../Hooks/UseAuth';
import './Admission.css';
const Admission = () => {
    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const {user} = useAuth();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <h2 className="text-center">Please give your details</h2>
            <form className="admission-form" onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={user.displayName} {...register("example")} />
                <input defaultValue={user.email} {...register("exampleRequired", {required: true})} />
                {errors.exampleRequired && <span>This field is required</span>}
                <input placeholder="address" {...register("address")} />
                <input placeholder="phone" {...register("phone")} />

                <input type="submit" />
            </form>
        </div>
    );
};

export default Admission;