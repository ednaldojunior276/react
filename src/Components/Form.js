import {useState} from 'react'
function Form(){
    function Cadastrar(e){
        //PARA O COMPORTAMENTO DO HTML
        e.preventDefault()
        //RESGATA O VALOR
        console.log(name)
        console.log(password)
        alert("Usuario cadastrado")
    }

    const [name,  setName] = useState()
    const [password, setPassword] = useState()
    return(
        <div>
             <h1> Cadastro</h1>
            <form onSubmit = {Cadastrar}>
                <div>
                    <label htmlFor = "name">NOME: </label>
                    <p>
                    <input 
                        type = "text" 
                        name = "name" 
                        id = "name" 
                        placeholder = "DIGITE O SEU NOME" 
                     
                        //ATRIBUI O VALOR E SETA O VALOR ADICIONADO
                        onChange = {(e) => setName(e.target.value)}
                    />
                    </p>
                    
                </div>
                <div>
                    <label htmlFor = "Password">SENHA: </label>
                    <p><input type = "password" name = "password" id = "password" placeholder = "DIGITE A SUA SENHA" 
                    onChange = {(e) => setPassword(e.target.value)}/></p>
                    
                </div>
                <div>
                    <input type = "submit" value = "CADASTRAR" />
                </div>    
             </form>      
        </div>
    )
}

export default Form