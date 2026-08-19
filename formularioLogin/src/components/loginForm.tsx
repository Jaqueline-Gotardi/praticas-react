export function LoginForm() {

    return (
        <form className="flex justify-center items-center flex-col gap-4">
            <h1 className="text-white">Entrar</h1>

            <span className="text-white">Nome de usuário ou e-mail</span>
            <input placeholder="e-mail@email.com" className="bg-[#130234] border-2 border-[#6528D3] rounded-md text-zinc-600" />

            <span className="text-white">Senha</span>
            <input placeholder="******" className="bg-[#130234] border-2 border-[#6528D3] rounded-md" />

            <input type="checkbox" /> <span className="text-white">Manter conectado</span>

            <a>Recupere sua senha</a>

            <button className="text-white bg-[#6528D3]">Entrar</button>

        </form>
    )
}