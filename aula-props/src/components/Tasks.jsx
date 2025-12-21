import NewTask from "./NewTask"

const Tasks = () => {
    return (
        <div>
            <h2>Lista de tarefas</h2>
            <NewTask description="Estudar React no fim de semana"></NewTask>  
            <NewTask description="Fazer bolo de chocolate"></NewTask>          
        </div>
    )
}

export default Tasks;