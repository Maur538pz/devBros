import './styleComp.css'
export const Cuadro = ({ linkImg, title, text }) => {
    return (
    <div className='cuadro'>
        <div className='cuadro-cont-img-title'>
            <h3 className='cuadro-title'>{title}</h3>
            <img src={linkImg} className='cuadro-img'/>
        </div>
      <span className='cuadro-text'>{text}</span>
    </div>
  );
};
