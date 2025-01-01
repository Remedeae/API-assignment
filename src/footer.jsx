import branchL from './assets/Branch-long.png';
import branchS from './assets/Branch-short.png'
import waveB from './assets/wave-bold.png';
import waveT from './assets/wave-thin.png';

function Footer() {
    return (
        <div className='footer'>
            <div className='branch'>
                <img src={branchS} alt="Branch" />
                <img src={branchL} alt="Branch" />
            </div>
            <img src={waveB} alt="Bold Wave" className='waveB' />
            <img src={waveT} alt="Wave" className='waveT'/>
        </div>
    )
}

export default Footer;