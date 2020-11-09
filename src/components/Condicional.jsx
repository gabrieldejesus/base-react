import React from 'react'

export default props => {
    return (
        <div>
            <h2>O número é { props.number } </h2>

            {/* % = : modulo | == : e se for igual a  0*/}
            { props.number % 2 == 0 ?
                <span>Par</span> // se for verdadeiro
                : <span>Ímpar</span> // caso contrario
            }
        </div>
    )
}