export function LoginForm() {

    return (
        <form>
            <h1>Entrar</h1>

            <span>Nome de usuário ou e-mail</span>
            <input placeholder="e-mail@email.com"></input>

            <span>Senha</span>
            <input placeholder="******"></input>

            <input type="checkbox"></input>

            <link>Recupere sua senha</link>

            <button>Entrar</button>

        </form>
    )
}