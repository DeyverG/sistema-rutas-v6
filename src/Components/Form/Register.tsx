import { useState } from 'react';
// Prime React
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

//React Form Hooks
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

// utils and interfaces
import { regexPassword } from '../../Utils/regex';
import { RegisterProps } from '../../Interfaces/Form/Register';

const schema = yup.object({
    name: yup.string().required("Este Campo es Requerido").max(6, "El Nombre es muy largo"),
    password: yup.string().required("Este Campo es Requerido").matches(regexPassword.value, regexPassword.message),
    passwordConfirm: yup.string().required("Este Campo es Requerido").oneOf([yup.ref('password'), null], "Las contraseñas no coinciden"),
    email: yup.string().required("Este Campo es Requerido").email("El Email no es valido"),
}).required();

export const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<RegisterProps>({
        resolver: yupResolver(schema)
    });
    const onSubmit: SubmitHandler<RegisterProps> = (data) => {
        console.log(data);
    }

    // Imprime los errores en el formulario
    console.log(errors)

    //state para el Password
    const [showPassword, setShowPassword] = useState(false);

    // Funcion para mostrar el password
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    }

    // Funcion que retorna el icono de la contraseña
    const IconPassword = () => {
        return !showPassword
            ?
            <i className="pi pi-eye-slash" onClick={handleClickShowPassword} />
            :
            <i className="pi pi-eye" onClick={handleClickShowPassword} />
    }

    return (
        <>
            <br />
            <div className='text-weight-700'>React Hook Form</div>
            <br />
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='mb-tiny' style={{ width: "300px" }}>
                    <InputText {...register("name")} style={{ width: "100%" }} placeholder="Nombres" />
                    {errors.name && <p className='text-error-base text-xsmall mt-none' style={{ textAlign: "start" }}>{errors.name.message}</p>}
                </div>

                <div className='mb-tiny' style={{ width: "300px" }}>
                    < InputText {...register("email")} style={{ width: "100%" }} placeholder="Email" />
                    {errors.email && <p className='text-error-base text-xsmall mt-none' style={{ textAlign: "start" }}>{errors.email.message}</p>}
                </div>

                <div className='mb-tiny' style={{ width: "300px" }}>
                    <span className="p-input-icon-right" style={{ width: "100%" }}>
                        {IconPassword()}
                        < InputText  {...register("password")} type={!showPassword ? "password" : "text"} style={{ width: "100%" }} placeholder="Contraseña" />
                    </span>
                    {errors.password && <p className='text-error-base text-xsmall mt-none' style={{ textAlign: "start" }}>{errors.password.message}</p>}
                </div>

                <div style={{ width: "300px" }}>
                    <span className="p-input-icon-right" style={{ width: "100%" }}>
                        {IconPassword()}
                        < InputText  {...register("passwordConfirm")} type={!showPassword ? "password" : "text"} style={{ width: "100%" }} placeholder="Confirmar contraseña" />
                    </span>
                    {errors.passwordConfirm && <p className='text-error-base text-xsmall mt-none' style={{ textAlign: "start" }}>{errors.passwordConfirm.message}</p>}
                </div>
                <br />
                <Button label="Enviar" icon="pi pi-check" iconPos="right" type='submit' />
            </form>
        </>
    )
}