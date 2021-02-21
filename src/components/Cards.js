import React from 'react'
import CardItem from './CardItem';
import './Cards.css';
    
function Cards() {
    return (
        <div className='cards'>
            <h1>Check out my projects</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                        src="/images/img-9.jpg"
                        text="This is a project I created with React."
                        label="Project1"
                        path="/services"
                        />
                         <CardItem
                        src="/images/img-7.jpg"
                        text="This is a project I created with Python."
                        label="Project2"
                        path="/services"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                        src="/images/img-9.jpg"
                        text="This is a project I created with React and Python Django."
                        label="Project1"
                        path="/services"
                        />
                         <CardItem
                        src="/images/img-7.jpg"
                        text="This is a project I created with Python and Python Flask."
                        label="Project2"
                        path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
