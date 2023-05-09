export const AddTask = (props) => {
    return(
        <div>
          {props.tasks.map((work) => {
            return(
            <div>
            <input type = "checkbox" />
            <span>{work.task}</span>
            <button onClick={()=> {
              let modifyedTasks = props.tasks.filter((previousWorks) => previousWorks.id !== work.id)
              props.deleteTask(modifyedTasks);
            }}>Delete</button>
            </div>
            );
          })}
        </div>
    );
}
