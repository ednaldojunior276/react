function Pessoa(props){
    return(
        <div>
            <p>ID: {props.id} </p>
            <p>NOME : {props.nome}</p>
            <p>IDADE: {props.idade}</p>
            <p>PROFISSÃO: {props.profissao}</p>
        </div>
    )
}

export default Pessoa