export function LoginForm() {

    return (
        <form className="flex justify-center items-center flex-col gap-4 text-white text-2xl">
            <h1>Entrar</h1>

            <span>Nome de usuário ou e-mail</span>
            <input placeholder="e-mail@email.com" className="bg-[#130234] border-2 border-[#6528D3] rounded-md text-[#d5d0e6] py-4 px-3 w-full" />

            <span>Senha</span>
            <input placeholder="******" className="bg-[#130234] border-2 border-[#6528D3] rounded-md text-[#d5d0e6] py-4 px-3 w-full" />

            <input type="checkbox" /> <span>Manter conectado</span>

            <a className="text-[#4c229e]">Recupere sua senha</a>

            <button className="bg-[#6528D3]">Entrar</button>

        </form>
    )
}