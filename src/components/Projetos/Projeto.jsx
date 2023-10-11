import './Projeto.css'
import { motion } from 'framer-motion';

const Projeto = ({ thumbnail, titulo, tecnologias, linkProjeto, linkCodigo, thumbnailCelular }) => {
    return (
        <motion.div id="main-projeto"
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}>
            <div id="image-projeto">
                <div id='image-site' style={{ backgroundImage: `url(${thumbnail})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'top' }}>
                    <div id='image-celular' style={{ backgroundImage: `url(${thumbnailCelular})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
                </div>
            </div>

            <div id='title-description'>
                <h4>{titulo}</h4>
                <h6>{tecnologias}</h6>
            </div>

            <div id='botoes-projeto'>
                <a href={linkProjeto}>Ver projeto</a>
                <a href={linkCodigo}>Ver código</a>
            </div>
        </motion.div>
    );
}

export default Projeto;