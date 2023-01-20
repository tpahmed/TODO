

export default function Ajouter(props) {
    return (
        <>
            <input type={"text"} placeholder="entrez la tâche" onChange={(e)=>props.settask(e.target.value)} value={props.task} />
            <input type={"button"} value="Ajouter" onClick={props.ajt}/>
        </>
    )
}