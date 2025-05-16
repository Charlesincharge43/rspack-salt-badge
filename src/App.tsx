import SaltBadge from './SaltBadge'
import { Suspense, useState } from 'react'
// import { Spinner } from '@salt-ds/core/dist-es/spinner/Spinner'
// import { SaltProvider } from '@salt-ds/core/dist-es/salt-provider/SaltProvider'

const AsyncLoadedSaltBadge = () => (
    <Suspense fallback={'Loading salt badge...'}>
        <SaltBadge />
    </Suspense>
)

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
            // <div/>
            <AsyncLoadedSaltBadge />
            //  <SaltBadge />
        )}
        <button style={style} onClick={toggleShowSaltContent}>
            {showSaltContent ? 'Hide Salt Content' : 'Show Salt Content'}
        </button>
    </div>
)}

export default App