import { motion } from 'framer-motion';
import './App.css';
import Navegation from './components/Navegation/Navegation';
import Projeto from './components/Projetos/Projeto';

function App() {
  return (
    <div>
      <div className="container" >
        <motion.main id='main'
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1,
            ease: "easeOut",
            delay: 0.3,
          }}
        >
          <Navegation />
          <div id='lateral-container' className='d-flex justify-content-center align-items-center'>
            <motion.div id='lateral' className='d-flex flex-column justify-content-evenly'
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.3 }}>
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
                <a href="#sobre">Sobre mim</a>
              </div>
            </motion.div>
          </div>
        </motion.main>

        <div id='line'></div>

        <motion.section id='skills' className='mt-5'
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}>
          <h1 className='mb-5 text-center'>Habilidades</h1>
          <div className='row d-flex'>
            <div className='skill-box text-center col-lg-3 col-md-6 col-sm-12'>
              <img src="./html.svg" alt="" />
              <h2>HTML</h2>
            </div>

            <div className='skill-box text-center col-lg-3 col-md-6 col-sm-12'>
              <img src="./css.svg" alt="" />
              <h2>CSS</h2>
            </div>

            <div className='skill-box text-center col-lg-3 col-md-6 col-sm-12'>
              <img src="./javascript.svg" alt="" />
              <h2>Javascript</h2>
            </div>

            <div className='skill-box text-center col-lg-3 col-md-6 col-sm-12'>
              <img src="./typescript.svg" alt="" />
              <h2>Typescript</h2>
            </div>

            <div className='skill-box text-center col-lg-3 col-md-6 col-sm-12'>
              <img src="./jquery-icon.svg" alt="" />
              <h2>Jquery</h2>
            </div>

            <div className='skill-box text-center col-lg-3 col-md-6 col-sm-12'>
              <img src="./bootstrap.svg" alt="" />
              <h2>Bootstrap</h2>
            </div>

            <div className='skill-box text-center col-lg-3 col-md-6 col-sm-12'>
              <img src="./atrevimento.svg" alt="" />
              <h2>Sass</h2>
            </div>

            <div className='skill-box text-center col-lg-3 col-md-6 col-sm-12'>
              <img src="./gulp.svg" alt="" />
              <h2>Gulp</h2>
            </div>

            <div className='skill-box text-center col-lg-3 col-md-6 col-sm-12'>
              <img src="./reagir.svg" alt="" />
              <h2>React</h2>
            </div>

            <div className='skill-box text-center col-lg-3 col-md-6 col-sm-12'>
              <img src="./angular.svg" alt="" />
              <h2>Angular</h2>
            </div>
            <div className='skill-box text-center col-lg-3 col-md-6 col-sm-12'>
              <img src="./node.svg" alt="" />
              <h2>Node</h2>
            </div>

          </div>

          <div id='line' className='mt-5'></div>
        </motion.section>

        <section className='my-5'>
          <h1 className='mb-5 text-center'>Projetos</h1>
          <div className='row'>
            <div className='col-lg-6 col-md-12 col-sm-12 d-flex align-items-center justify-content-center mb-5'>
              <Projeto titulo='projeto MaoNaObra' thumbnail={"./maonaobra.png"} tecnologias={["React ·", " Node ·", " Sequelize ·", " Docker"]} linkProjeto={"https://www.linkedin.com/feed/update/urn:li:activity:7095221186854363136/"} linkCodigo={"https://github.com/MaoNaObraa/MaoNaObra"} thumbnailCelular={"./mockup-pomodoro.png"} />
            </div>
            <div className='col-lg-6 col-md-12 col-sm-12 d-flex align-items-center justify-content-center mb-5'>
              <Projeto titulo='Sequência Rápida' thumbnail={"./sequencia.png"} tecnologias={["React ·", " Node ·", " Postgres ·",]} linkProjeto={"https://sequenciarapida.vercel.app/"} linkCodigo={"https://github.com/wendelisc12/sequencia-rapida"} thumbnailCelular={"./mockup-pomodoro.png"} />
            </div>
            <div className='col-lg-6 col-md-12 col-sm-12 d-flex align-items-center justify-content-center mb-5'>
            <Projeto titulo='Calculadora com temas' thumbnail={"./calculadora.png"} tecnologias={["React · ", " Styled-components"]} linkProjeto={"https://calculadora-com-temas.vercel.app/"} linkCodigo={"https://github.com/wendelisc12/calculadora-com-temas"} thumbnailCelular={""} />
            </div>
            <div className='col-lg-6 col-md-12 col-sm-12 d-flex align-items-center justify-content-center mb-5'>
              <Projeto titulo='Formulário multi-step' thumbnail={"https://github.com/wendelisc12/multi-step-form/raw/main/multi-step-form-main.png"} tecnologias={["React"]} linkProjeto={"https://multi-step-form-seven-lyart.vercel.app/"} linkCodigo={"https://github.com/wendelisc12/multi-step-form"} thumbnailCelular={"./mockup-pomodoro.png"} />
            </div>
            <div className='col-lg-6 col-md-12 col-sm-12 d-flex align-items-center justify-content-center mb-5'>
              <Projeto titulo='ROCK PAPER SCISSORS' thumbnail={"./pedrapapel.png"} tecnologias={["HTML · ", " SASS ·", " Javascript ·", " Jquery ·", " Gulp"]} linkProjeto={"https://pedra-papel-e-tesoura-pi.vercel.app/"} linkCodigo={"https://github.com/wendelisc12/Pedra--papel-e-tesoura"} thumbnailCelular={""} />
            </div>
            <div className='col-lg-6 col-md-12 col-sm-12 d-flex align-items-center justify-content-center mb-5'>
            <Projeto titulo='IP Adress tracker' thumbnail={"./ip.png"} tecnologias={["HTML · ", " LESS ·", " Javascript ·", " Jquery ·", " API"]} linkProjeto={"https://ipadresstracker-app.vercel.app/"} linkCodigo={"https://github.com/wendelisc12/ipadresstracker-app"} thumbnailCelular={""} />
            </div>
            <div className='col-lg-6 col-md-12 col-sm-12 d-flex align-items-center justify-content-center mb-5'>
              <Projeto titulo='Advice Generator' thumbnail={"./advice.png"} tecnologias={["HTML · ", " SASS ·"," Javascript ·", " Jquery ·", " API"]} linkProjeto={"https://advicegenerator-opal.vercel.app/"} linkCodigo={"https://github.com/wendelisc12/Advice-Generator"} thumbnailCelular={""} />
            </div>

            <div className='col-lg-6 col-md-12 col-sm-12 d-flex align-items-center justify-content-center mb-5'>
            <Projeto titulo='Cordatta' thumbnail={"./cordata.png"} tecnologias={["HTML · ", " CSS ·", " Bootstrap ·", " Jquery ·", " Javascript"]} linkProjeto={"https://cordatta-landing-page.vercel.app/"} linkCodigo={"https://github.com/wendelisc12/Cordatta-Landing-Page"} thumbnailCelular={""} />
            </div>
          </div>
        </section>

      </div>

      <footer>
        <div className='container'>
          <section id='sobre'>
            <h1 className='text-center mb-4'>Sobre mim</h1>
            <p>
            Iniciei minha jornada como desenvolvedor front-end aos 16 anos, criando páginas web e aprimorando minhas habilidades em HTML e CSS. Durante meu curso no IFPE, me especializei em Javascript, Typescript, e frameworks como React, Angular e Node, além de aprender sobre metodologias ágeis, incluindo Scrum. Minha experiência inclui um estágio na agência KIFE, onde trabalhei com desenvolvimento e manutenção de sites, e um período de imersão no programa START da Accenture, onde me dediquei ao React e ao desenvolvimento backend. Meu conhecimento foi posto à prova em um hackathon da Accenture, onde liderei minha equipe até a vitória, criando uma aplicação fullstack. Atualmente, estou fazendo o curso da EBAC Profissão: engenheiro de front-end, onde estou aprimorando meus conhecimentos.
            </p>
          </section>
          <div id='final-footer'>
            <Navegation />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
