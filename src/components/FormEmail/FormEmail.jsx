import { useState } from 'react'
import './FormEmail.css'

const FormEmail = () =>{

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [mensagem, setMensagem] = useState("")

    function enviarMensagem(){
        console.log(nome, email, mensagem)
    }

    return(
        <>
            <div id='container-footer'>
            <div id='footer-contato'>
              <h2 className='mb-4'>Contato</h2>
              <p>Garanto alta qualidade, prazos cumpridos e atendimento personalizado para o seu projeto web. Se procura um profissional confiável e competente, preencha o formulário e aguarde meu rápido retorno.</p>
            </div>

            <form action="" id='footer-form'>
              <div className='d-flex flex-column'>
                <input type="text" name="" id="" placeholder='NOME' className='mb-3' onChange={e => setNome(e.target.value)} value={nome} />
                <input type="email" name="" id="" placeholder='EMAIL' className='mb-3' onChange={e => setEmail(e.target.value)} value={email} />
                <textarea name="" id="" cols="30" rows="10" placeholder='MENSAGEM' onChange={e => setMensagem(e.target.value)} value={mensagem}></textarea>
              </div>
              <div className='d-flex flex-row-reverse mt-4'>
                <button type='submit' id='enviar-form' onClick={enviarMensagem}>ENVIAR MENSAGEM</button>
              </div>
            </form>
          </div>
        </>
    )
}

export default FormEmail