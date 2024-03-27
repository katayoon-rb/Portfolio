import CerItem from './CerItem.jsx'
import certificatesArr from '../data/certificates.js'

function Certificates() {
    return (
        <div id="certificates" className='py-20'>
            <h3 className="font-Truculenta text-dark mb-10
                    text-5xl md:text-6xl text-center">
                Certificates
            </h3>
            <div className='flex justify-center gap-5
                    items-center md:items-stretch flex-col md:flex-row'>
                {certificatesArr.map(cer => (
                    <CerItem
                        key={cer.name}
                        name={cer.name}
                        image={cer.image}
                    />
                ))}
            </div>
        </div>
    )
}

export default Certificates
