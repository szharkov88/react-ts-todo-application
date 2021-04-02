import React from 'react'
import {useHistory} from 'react-router-dom'

export const AboutPage: React.FC = () => {
    const history = useHistory()
    console.log(history)
    return (
        <>
            <h1>Страница информации</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aperiam architecto dolores,
                eligendi nihil odio perspiciatis quam quasi quisquam repudiandae rerum.
            </p>
            <button className="btn" onClick={() => history.push('/')}>
                Обратно к списку дел
            </button>
        </>
    )

}
