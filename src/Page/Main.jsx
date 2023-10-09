import "./style.css";
import image2 from '../assets/oceanComplete.jpg'
import { Cuadro } from '../Components/Cuadro.jsx'
import { info1, texto1, texto2, texto3 } from './info.js'
import { Texto } from '../Components/Texto.jsx'
import infografia from '../assets/infografia.jfif'

export const Main = () =>{
    return (
        <section className="seccion2">
            <img src={image2} className="image2" />
            <span className="text2">Los océanos desempeñan un papel fundamental en la vida en la Tierra y proporcionan una amplia variedad de servicios esenciales para la humanidad y el medio ambiente. Algunos de los servicios importantes proporcionados por los océanos incluyen</span>
            <div className="Cont-cuadros">
                {
                    info1.map(({url, title, text})=><Cuadro 
                    key={title} 
                    title={title}
                    text={text}
                    linkImg={url}/>)
                }
                <div className="cont-text-2">
                {
                    texto1.map(({id,texto})=><Texto 
                    key={id}
                    text={texto}
                    />)
                }
                <img src={infografia}/>
                </div>
                <h2 className="sub-title">El fitoplancton y su inportancia</h2>
                <div className="cont-text-2">
                    {
                        texto2.map(({id,texto})=><Texto 
                        key={id}
                        text={texto}
                        />)
                    }
                    <img src="https://cdnb.20m.es/sites/113/2023/01/Labidocera_-620x468.jpg"/>
                </div>
                <div className=" cont-text-2">
                    {
                        texto3.map(({id, texto})=><Texto 
                            key={id}
                            text={texto}
                            />)
                    }
                </div>
            </div>

      </section>
    )
}