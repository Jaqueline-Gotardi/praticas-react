import NewTasks from "./NewTask"

const Tasks = () => {
    return (
        <div>
            <h2>Lista de tarefas</h2>
            <NewTasks description="Estudar React no fim de semana"></NewTasks>  
            <NewTasks description="Fazer bolo de chocolate"></NewTasks>          
        </div>
    )
}

export default Tasks;