export const Form = () => {
    return (
        <form>
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" placeholder="Informe seu e-mail"/>

            <label htmlFor="password">Senha</label>
            <input type="password" id="password" placeholder="Informe sua senha"/>

            <label htmlFor="confirmPassword">Confirmar Senha</label>
            <input type="password" id="confirmPassword" placeholder="Informe sua senha novamente"/>
        </form>
    )
}