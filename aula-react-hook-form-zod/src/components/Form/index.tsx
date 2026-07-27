import './Form.css'
import { z } from 'zod'

const registerUserFormSchema = z.object({
    email: z.email('Preencha o e-mail corretamente!').min(1, 'Campo obrigatório!'),
    password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres!')  ,
    confirmPassword: z.string().min(6, 'Verifique se o campo tem o mínimo de 6 caracteres!')
})

type registerUserFormData = z.infer<typeof registerUserFormSchema>

export const Form = () => {
    return (
        <form className="container">
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" placeholder="Informe seu e-mail"/>

            <label htmlFor="password">Senha</label>
            <input type="password" id="password" placeholder="Informe sua senha"/>

            <label htmlFor="confirmPassword">Confirmar Senha</label>
            <input type="password" id="confirmPassword" placeholder="Informe sua senha novamente"/>
        </form>
    )
}