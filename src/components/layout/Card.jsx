import React from 'react'
import './Card.css';

export default props =>
    <div className="Card">

        <div className="Conteudo">
            {props.children}
        </div>

        <div className="Footer">
            {props.title}
        </div>

    </div>
