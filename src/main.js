import React from 'react';
import Photo from './profils/ProfilPhoto.js';
import Adresse from './profils/Address.js';
import Name from './profils/FullName.js';
function main() {
    return (
        <div>
            <h1 className='bienvenue'>BIENVENUE</h1>
            <Photo />
            <Name/>
            <Adresse/>
            </div>
    )
}
export default main;
