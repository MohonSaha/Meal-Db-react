import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';
import './Home.css'

const Home = () => {

    const [foods, setFoods] = useState([]);
    const [text, setText] = useState('Search your food here...');
    const [button, setButton] = useState(false);


    const handleSearchClick = () => {
        console.log(text);
        // setText('')
        setButton(!button);
    }

    const handleOnChnage = (event) => {
        setText(event.target.value)
    }

    const searchClear = () => {
        setText('')
    }


 

    useEffect(() => {
        const url = (`https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`);
        fetch(url)
        .then(res => res.json())
        .then(data => setFoods(data.meals))
    }, [button])


    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=fish')
            .then(res => res.json())
            .then(data => setFoods(data.meals))
            .catch(err=> console.log(err))
    }, [])


    return (
        <div>

            <div className='search-bar mt-4 flex items-center justify-center '>
                <div className="form-control">
                    <div className="input-group">
                        <input value={text} onFocus={searchClear} onChange={handleOnChnage} placeholder="Search your food here..." type="text" className="py-2 px-3 rounded-md md:w-[600px] w-[300px] search-btn" />
                        <button onClick={handleSearchClick} className="btn btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
            </div>



            <div className='home-container'>
                <div className='food-container'>
                    {
                        foods?.map(food => <Food 
                            key={food.idMeal}
                            food={food}></Food>)
                    }
                </div>
                <div className='cart-container'>

                </div>
            </div>



        </div>
    );
};

export default Home;