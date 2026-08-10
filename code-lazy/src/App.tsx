
// Suspense = forma oficial do React de lidar com carregamento assíncrono de componentes
import { useState, lazy, Suspense } from 'react' 
import './App.css'

const Modal = lazy(() => import('./components/Modal'))

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(prev => !prev);

  }

  return (
      <div>
        <h1>Exemplo de lazy loading com Modal</h1>

        <button onClick={() => toggleModal}>Abrir modal</button>

        <Suspense fallback={<p>Carregando modal...</p>}>
        {isModalOpen && <Modal />}
        </Suspense>
        </div>
  )
}

export default App
