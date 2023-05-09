export const AddTask = (props) => {
    return(
        <div>
          {props.tasks.map((work) => {
            return(
            <div>
            <input type = "checkbox" onChange={() => {
              const modifyedTasks = props.tasks.map((previousWorks) => {
                  if(previousWorks.id === work.id)
                      return {...previousWorks, completed: !work.completed};
                  return previousWorks;
              })
              props.deleteTask(modifyedTasks);
            }}/>
            <span style={{color: work.completed === false ? "red" : "green "}}>{work.task}</span>
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
