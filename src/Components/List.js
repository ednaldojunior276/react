import Item from "./Item"
function List(){
    return(
        <>
            <h1>Lista</h1>

            <ul>
                <Item marca = "ferrari" ano = {1587} />
                <Item marca = "pálio"  ano = {1998} />
                <Item marca = "onix" ano = {1887} />
              
               
            </ul>
        </>
    )
}

export default List