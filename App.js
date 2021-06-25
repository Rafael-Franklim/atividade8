import './App.css'

import React from 'react'

import ContadorCompleto from './ContadorCompleto'
import Card from './Card'

export default () => (
    <div ClassName= "App" >
        <h1>Contador</h1>

        <div className="Cards">

            <Card titulo="Contador componentizado" color="#0d3024">
                <ContadorCompleto numeroInicial ={10} />
            </Card>
        </div>
    </div>
);