import React from 'react';
import logoNav from '../assets/img/nav.png';

const cardPets = [
    {
        img: 'imagen1',
        title: 'nombre1',
        description: 'descripcion del producto corta',
        price: 200
    },
    {
        img: 'imagen2',
        title: 'nombre2',
        description: 'descripcion del producto corta',
        price: 200
    },
    {
        img: 'imagen3',
        title: 'nombre3',
        description: 'descripcion del producto corta',
        price: 200
    },
    {
        img: 'imagen1',
        title: 'nombre1',
        description: 'descripcion del producto corta',
        price: 200
    },
    {
        img: 'imagen2',
        title: 'nombre2',
        description: 'descripcion del producto corta',
        price: 200
    },
    {
        img: 'imagen3',
        title: 'nombre3',
        description: 'descripcion del producto corta',
        price: 200
    }
];

const MainPage = () => {
    return (
        <>
            <h1 className='text-center mt-5 mb-5'>Omega Pet Shop</h1>
            <div className='row row-cols-1 row-cols-md-4 g-4 container'>

                {cardPets.map((item, idx) => (
                    <div className='col'>
                        <div key={idx} className='card'>
                            <img src={logoNav} className='img-nav' />
                            <div className='card-body'>
                                <h5 className='card-title'>{item.title}</h5>
                                <p className='card-text'>{item.description}</p>
                                <p className='card-text'>$ {item.price}</p>
                                <p className='btn btn-primary'>Comprar</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default MainPage;
