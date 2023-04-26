import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {

    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
        .catch(error => console.error)
    },[]);

    return (
        <div className='mt-4'>
            <h4>All Categories</h4>
            <div className='ms-4'>
                <h4 className='text-center mt-5 text-bold bg-light p-3'>National News</h4>
                {
                    categories.map(category => <p
                      key={category.id}
                    >
                     <Link to={`/category/${category.id}`} className='text-decoration-none text-muted font-weight-bold'>{category.name}</Link>
                    </p> )
                }
            </div>
        </div>
    );
};

export default LeftNav;