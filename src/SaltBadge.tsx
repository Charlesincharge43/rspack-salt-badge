import { Badge, SaltProvider } from '@salt-ds/core'

const SaltBadge = () => (
    <div>
        <SaltProvider>
            <Badge value="Salt Badge Here!" />
        </SaltProvider> 
    </div>
)

export default SaltBadge
