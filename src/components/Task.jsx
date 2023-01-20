export default function Task(props) {
    return (
        <>
            <input type={"checkbox"} checked={props.t.done} onChange={()=>props.cdone(props.t.id)}/>
            <span> Task :  {props.t.task}   {props.t.done ? <span style={{"color":"green"}}>Done</span> : <span style={{"color":"red"}}>Not Done</span>}</span>
            <input type={"button"} onClick={()=>props.supp(props.t.id)} value="supprimer"/>
        </>
    )

}
