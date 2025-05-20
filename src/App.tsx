import SaltBadge from './SaltBadge'
import LazyLoadedSaltbadge from './LazyLoadedSaltBadge'
import { useState } from 'react'

const style = {
    background: '#800',
    color: '#fff',
    padding: 12,
};

const App = () => {
    const [showSaltContent, setShowSaltContent] = useState(false)
    const toggleShowSaltContent = () => {
        setShowSaltContent(!showSaltContent)
      }

    return (
    <div style={{ padding: 100, justifyContent: 'center' }}>
        <h2>Salt Badge Below!</h2>
        <p/>
        {showSaltContent && (
            <SaltBadge />
            // <LazyLoadedSaltbadge />
        )}
        <button style={style} onClick={toggleShowSaltContent}>
            {showSaltContent ? 'Hide Salt Content' : 'Show Salt Content'}
        </button>
    </div>
)}

export default App