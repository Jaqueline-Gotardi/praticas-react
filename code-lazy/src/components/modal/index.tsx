const Modal = () => {
   return (
       <div style={modalStyles}>
           <div style={contentStyles}>
               <h2>Modal Carregado!</h2>
               <p>Esse é um exemplo de Modal carregado sob demanda.</p>
           </div>
       </div>
   )
}

const modalStyles: React.CSSProperties = {
   position: 'fixed',
   top: 0,
   left: 0,
   width: '100%',
   height: '100%',
   backgroundColor: 'rgba(0, 0, 0, 0.5)',
   color: 'black',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
};

const contentStyles: React.CSSProperties = {
   backgroundColor: 'white',
   padding: '20px',
   borderRadius: '5px',
   maxWidth: '400px',
   width: '100%',
   color: 'black'
}

export default Modal