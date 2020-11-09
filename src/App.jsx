import './App.css'
import React from 'react'
import Primeiro from './components/Primeiro'
import ComParamentro from './components/ComParamentro'
import ComFilhos from './components/ComFilhos';
import Card from './components/layout/Card';
import Repeticao from './components/Repeticao';
import Condicional from './components/Condicional';
import CondicionalComIf from './components/CondicionalComIf';

export default (props) => (
    <div className="App">

        <Card title="#06 - Condicional v2">
            <Condicional number={5}></Condicional>
        </Card>

        <Card title="#05 - Condicional v1">
            <CondicionalComIf number={6}></CondicionalComIf>
        </Card>

        <Card title="#04 - Repetição">
            <Repeticao></Repeticao>
        </Card>

        <Card title="#03 - Componente  Com Paramentro">
            <ComParamentro titulo="Esse é o titulo" subtitulo="Esse é o subtitulo 2" />
            <ComParamentro titulo="Esse é o bacana" subtitulo="Esse é o bacana" />
        </Card>
        
        <Card title="#02 - Componente Com Filhos">
            <ComFilhos>
                <ul>
                    <li>Gabriel</li>
                    <li>Maria</li>
                    <li>Bobe</li>
                </ul>
            </ComFilhos>
        </Card>

        <Card title="#01 - Primeiro Componente">
            <Primeiro/>
        </Card>

    </div>
);