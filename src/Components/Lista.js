function Lista({ itens }){
    //LISTAS EM REACT
    return(
        <>
            <h3> Lista de coisas boas</h3>     
            {
                itens.length > 0 ?(
               itens.map((item, index) => (
                  <p key = {index}> {item}</p> 
               ))) : (
                   <p> NÃO TEM ITENS NA LISTA</p>
               )
            }

        </>
    )
}
export default Lista