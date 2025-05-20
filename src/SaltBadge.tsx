import { Badge, SaltProvider } from '@salt-ds/core'

const SaltBadge = () => (
    <div>
        <SaltProvider>
            <Badge value="Salt Badge Here!" />
        </SaltProvider> 
    </div>
)

export default SaltBadge

/*
So far:

direct import and using the modules fail

import '@salt-ds/core'   fails

dynamic import  (import('...')) succeeds

if module federation removes.. the succeeds

(or salt-ds/core is removed from shared)


*/