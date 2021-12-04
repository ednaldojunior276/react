import {useState} from 'react'
//CONDICIONAL EM REACT
function Condicional (){
    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

//PEGA O EVENTO DO ONCLICK FAZER UM FUNÇÃO IGUAL AO DO ONCLICK
    function enviarEmail(e){
        e.preventDefault()
        setUserEmail(email)
    }
        function Limpar(e){
            e.preventDefault()
            setUserEmail('')
        
    }
    
    return(
        <div>
            <h2>Cadastre o seu email:  </h2>
            <form>
                <input 
                       type = "email"
                       placeholder = "Digite o seu email" 
                       onChange = {(e) => setEmail(e.target.value)}  />
                <button type = "submit" onClick = {enviarEmail}> Email </button>
                {userEmail &&(
                    <div>
                        <p>P e-mail foi enviado: {userEmail}</p>
                        <button onClick = {Limpar}> Limpar </button>
                    </div>
                )}
            </form>
        </div>
    )
}
export default Condicional