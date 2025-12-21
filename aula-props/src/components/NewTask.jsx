//COM TYPESCRIPT (tsx)
/*
type TaskProps = {
    description: string;
}; 
//para avisar que o componente só aceita texto na description

/* const NewTask = ({description} : TaskProps) => {
    return <p>Tarefa: { description}</p>
};

export default NewTask; */
 
//-----------------------------------------------------


//SEM TYPESCRIPT (jsx)
/* const NewTask = ({description}) => {
    return <p>Tarefa: { description}</p>
};
export default NewTask; */


//EXEMPLO COM PROPS DEFAULT
const NewTask = ({ description = "Nenhuma tarefa cadastrada"}) => {
    return (
    <p>Tarefa: {description}</p>
    )
};
export default NewTask;