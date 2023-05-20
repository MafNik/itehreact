import React, { useState } from 'react';

function Kontakt() {
    const [ime, setIme] = useState('');
    const [email, setEmail] = useState('');
    const [poruka, setPoruka] = useState('');

    const handlePosalji = () => {
 
        setIme('');
        setEmail('');
        setPoruka('');

 
        alert('Poruka je uspešno poslata:\n\nIme: ' + ime + '\nEmail: ' + email + '\nPoruka: ' + poruka);
    };

    return (
        <div id='kontakt'>
            <div id='container1'>
                <div id='contact-box'>
                    <div id="left">

                    </div>
                    <div id="right">
                        <h2>Contact us</h2>
                        <input
                            type="text"
                            className='field'
                            placeholder='Vase ime'
                            value={ime}
                            onChange={(e) => setIme(e.target.value)}
                        />
                        <input
                            type="email"
                            className='field'
                            placeholder='Vas e-mail'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <textarea
                            className='field area'
                            placeholder='Poruka'
                            value={poruka}
                            onChange={(e) => setPoruka(e.target.value)}
                        ></textarea>
                        <button className='btn' onClick={handlePosalji}>Posalji</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Kontakt;
