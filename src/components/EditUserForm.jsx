import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

const EditUserForm  = (props) => {

    //console.log(props.currentUser)

    const {register, setValue, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: props.currentUser        
    });

    /*setValue('name', props.currentUser.name , { shouldValidate: true });
    setValue('username', props.currentUser.username , { shouldValidate: true });*/

    useEffect(() => {
        reset(props.currentUser)
    }, [ props.currentUser ])

    const onSubmit = (data, e) => {
        console.log(data)
        data.id = props.currentUser.id

        props.updateUser(props.currentUser.id, data)

   
        // limpiar campos
        e.target.reset();
    }

    return ( 
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input type="text" name="name" 
       {...register("name", {
        required: {value: true, message: 'Campo Requerido'}
    })}/>
    <div>
        {errors?.name?.message}
    </div>
      <label>Username</label>
      <input type="text" name="username"
      {...register("username", {
        required: {value: true, message: 'Campo Requerido'}
    })}/>
    <div>
        {errors?.username?.message}
    </div>
      <button>Edit user</button>
    </form>
     );
}
 
export default EditUserForm;