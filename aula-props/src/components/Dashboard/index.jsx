//RENDERIZAÇÃO CONDICIONAL
import './Dashboard.css'

const Dashboard = ({username}) => {

    console.log(username)
    return (
        <div>
        {username ? ( /* se o usuário tiver o nome, mostrar "bem vindo {nome}" */
            <h1>bem vindo {username}!</h1>

        ) : ( /* se não, mostra a mensagem abaixo */
            <h2 className="not-logged">
            Você precisa fazer login</h2>
        )}
        </div>
    )
}

export default Dashboard;