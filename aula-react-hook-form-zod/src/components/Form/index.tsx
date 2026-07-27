import './Form.css'
import { z } from 'zod'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const registerUserFormSchema = z.object({
    email: z.email('Preencha o e-mail corretamente!').min(1, 'Campo obrigatório!'),
    password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres!')  ,
    confirmPassword: z.string().min(6, 'Verifique se o campo tem o mínimo de 6 caracteres!')
})

type registerUserFormData = z.infer<typeof registerUserFormSchema>

export const Form = () => {

    const { handleSubmit, register, formState: { errors, isSubmitting }, } 
    = useForm<registerUserFormData>(
        {
            mode: 'onBlur',
            criteriaMode: 'all',
            resolver: zodResolver(registerUserFormSchema)
        }
    );

    const onSubmit: SubmitHandler<registerUserFormData> = async (data: registerUserFormData) => {

        await fetch('https://localhost:3333/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
    };

    return (
        <form className="container" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="email">E-mail</label>
            <input 
            type="email" 
            id="email" 
            placeholder="Informe seu e-mail" 
            {...register('email') }/>

            {errors?.email && <p> {errors?.email?.message} </p>}

            <label htmlFor="password">Senha</label>
            <input 
            type="password" 
            id="password" 
            placeholder="Informe sua senha" 
            {...register('password')}/>

            {errors?.password && <p> {errors?.password?.message} </p>}

            <label htmlFor="confirmPassword">Confirmar Senha</label>
            <input 
            type="password" 
            id="confirmPassword" 
            placeholder="Informe sua senha novamente" 
            {...register('confirmPassword')}/>

            {errors?.confirmPassword && <p> {errors?.confirmPassword?.message} </p>}

            <button type="submit" disabled={isSubmitting}>Cadastre-se</button>
        </form>
    )
}