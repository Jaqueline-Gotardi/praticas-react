export function LoginForm() {

    return (
        <form className="flex justify-center flex-col gap-4 text-white bg-[#050404]">
            <h1>Entrar</h1>

            <span>Nome de usuário ou e-mail</span>
            <input placeholder="e-mail@email.com" className="bg-[#130234] border-2 border-[#6528D3] rounded-md text-[#d5d0e6] py-4 px-3 w-full text-xs" />

            <span>Senha</span>
            <input placeholder="******" className="bg-[#130234] border-2 border-[#6528D3] rounded-md text-[#d5d0e6] py-4 px-3 w-full text-xs" />

            <div className="flex gap-2 items-center">
            <input type="checkbox" className="w-4 h-4 border-2 border-[#6528D3] rounded-sm cursor-pointer" /> <span className="">Manter conectado</span>
            </div>

            <a className="text-[#6528D3] cursor-pointer">Recupere sua senha</a>

            <button className="bg-[#6528D3] py-4 px-30 rounded-sm cursor-pointer">Entrar</button>

        </form>
    )
}