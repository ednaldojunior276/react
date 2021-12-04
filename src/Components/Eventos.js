import EventosProps from "./EventosProps"
function Eventos({idade,  nome }){
    function meuEvento()
    {
        alert(`idade ${idade} nome: ${nome}`)
    
    }
    return(
        <>
        <p>Clique para disparar um evento: </p> 
        <button onClick = {meuEvento}> Clicar </button>
    
        <EventosProps event = {meuEvento} text = "PRIMEIRO EVENTO" />
        </>
    )
}
export default Eventos