import { useState } from 'react'
import './FormEmail.css'

const FormEmail = () =>{

    return(
        <>
            <div id='container-footer'>
            <div id='footer-contato'>
              <h2 className='mb-4'>Contato</h2>
              <p>Garanto alta qualidade, prazos cumpridos e atendimento personalizado para o seu projeto web. Se procura um profissional confiável e competente, preencha o formulário e aguarde meu rápido retorno.</p>
            </div>

            <form action="https://formsubmit.co/wendel.isaac12@gmail.com" method='POST' id='footer-form'>
              <div className='d-flex flex-column'>
                <input type="text" name="Nome" id="" placeholder='NOME' className='mb-3'/>
                <input type="email" name="Email" id="" placeholder='EMAIL' className='mb-3'/>
                <textarea name="mensagem" id="" cols="30" rows="10" placeholder='MENSAGEM'></textarea>
              </div>
              <div className='d-flex flex-row-reverse mt-4'>
                <button type='submit' id='enviar-form'>ENVIAR MENSAGEM</button>
              </div>

              <input type="hidden" name='_subject' value="Alguem entrou em contato!!" />
              <input type="hidden" name='honey' value="display:none" />
              <input type="hidden" name='captcha' value="false" />
            </form>
          </div>
        </>
    )
}

export default FormEmail