import { useState } from 'react';
import './App.css';
import Navegation from './components/Navegation/Navegation';
import Projeto from './components/Projetos/Projeto';
import FormEmail from './components/FormEmail/FormEmail';

function App() {

  function contrateMe(){
    window.scrollTo({
      top: 2145,
      left: 0,
      behavior: 'smooth'
    });
  }

  return (
    <div>
      <div className="container" >
        <main id='main'>
          <Navegation />
          <div id='lateral-container' className='d-flex justify-content-center align-items-center'>
            <div id='lateral' className='d-flex flex-column justify-content-evenly'>
              <div id='titulo-principal' className='mb-4'>
                <h1>Olá, tudo bem?</h1>
                <h1>Meu nome é <span id='nome'>Wendel.</span></h1>
              </div>

              <div id='descricao-principal' className='mb-4'>
                <p className='text-light'>
                  Sou um Desenvolvedor Front-end React, e um amante do desenvolvimento web e de design de interfaces.
                </p>
              </div>

              <div id='link-contrate'>
                <a href="#" onClick={contrateMe}>Me contrate</a>
              </div>
            </div>
          </div>
        </main>

        <div id='line'></div>

        <section id='skills' className='mt-5'>
          <div className='d-flex justify-content-between mb-3'>
            <div className='skill-box'>
              <h1>HTML</h1>
              <p>3 anos de experiência</p>
            </div>

            <div className='skill-box'>
              <h1>CSS</h1>
              <p>3 anos de experiência</p>
            </div>

            <div className='skill-box'>
              <h1>Javascript</h1>
              <p>2 anos de experiência</p>
            </div>

            <div className='skill-box'>
              <h1>Typescript</h1>
              <p>6 meses de experiência</p>
            </div>
          </div>

          <div className='d-flex justify-content-between'>
            <div className='skill-box'>
              <h1>Bootstrap</h1>
              <p>2 anos de experiência</p>
            </div>

            <div className='skill-box'>
              <h1>React</h1>
              <p>3 meses de experiência</p>
            </div>

            <div className='skill-box'>
              <h1>Java</h1>
              <p>1 ano de experiência</p>
            </div>
            <div className='skill-box'>
              <h1>Docker</h1>
              <p>3 meses de experiência</p>
            </div>
          </div>
        </section>

        <div id='line' className='hide-responsive'></div>

        <section className='my-5'>
          <h1 className='mb-4'>Projetos</h1>
          <div className='d-flex justify-content-between mb-5 projetos-row'>
            <Projeto titulo='Formulário multi-step' thumbnail={"https://github.com/wendelisc12/multi-step-form/raw/main/multi-step-form-main.png"} tecnologias={["React"]} linkProjeto={"https://multi-step-form-seven-lyart.vercel.app/"} linkCodigo={"https://github.com/wendelisc12/multi-step-form"} thumbnailCelular={"./mockup-pomodoro.png"} />
            <Projeto titulo='Movies Lib' thumbnail={"https://user-images.githubusercontent.com/58012282/195509291-3f25da7c-e599-4b40-bd58-6a5925536a83.png"} tecnologias={["react ", " api"]} linkProjeto={"youtube.com"} linkCodigo={"https://github.com/wendelisc12/MovieLib"} thumbnailCelular={""} />

          </div>
          <div className='d-flex justify-content-between mb-5 projetos-row'>
            <Projeto titulo='Pomodoro Timer' thumbnail={"https://github.com/wendelisc12/Pomodoro-Timer/raw/main/Screenshot_tela.png"} tecnologias={["Javascript"]} linkProjeto={"https://wendelisc12.github.io/Pomodoro-Timer/"} linkCodigo={"https://github.com/wendelisc12/Pomodoro-Timer"} thumbnailCelular={""} />
            <Projeto titulo='Fine Olives' thumbnail={"https://github.com/wendelisc12/FineOlive/raw/main/Screenshot_tela.png"} tecnologias={["html"]} linkProjeto={"https://wendelisc12.github.io/FineOlive/"} linkCodigo={"google.com"} thumbnailCelular={""} />

          </div>
          <div className='d-flex justify-content-between mb-5 projetos-row'>
            <Projeto titulo='movies lib' thumbnail={"https://github.com/wendelisc12/Pomodoro-Timer/raw/main/Screenshot_tela.png"} tecnologias={["Javascript"]} linkProjeto={"youtube.com"} linkCodigo={"google.com"} thumbnailCelular={""} />
            <Projeto titulo='movies lib' thumbnail={"https://github.com/wendelisc12/FineOlive/raw/main/Screenshot_tela.png"} tecnologias={["Javascript"]} linkProjeto={"youtube.com"} linkCodigo={"google.com"} thumbnailCelular={""} />

          </div>
        </section>

        {/* <section id='sobre-mim'>
          <h2>Sobre mim</h2>
          <p>Sou um estudante de Análise e Desenvolvimento de sistemas, atualmente estou realizando pesquisas para o meu TCC que será sobre a área de design de interação. Desde sempre fui muito apaixonado em interfaces web, tanto que ja desenvolvi várias landing pages e criei muitas interfaces usando figma, com tantas LPs acabei criando uma grande experiência com HTML, CSS e Javascript, que é algo que eu me considero especialista. Com isso em mãos fui atrás de mais conhecimento no react.js e no Angular que estou estudando atualmente.</p>
        </section> */}
      </div>

      <footer>
        <div className='container'>
          <FormEmail />
          

          <div id='final-footer'>
            <Navegation />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
