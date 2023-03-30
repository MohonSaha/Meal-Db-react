import React from 'react';

const Food = (props) => {

    const { strMeal, strMealThumb, strCategory, strInstructions, idMeal, strArea } = props.food;
    const details = strInstructions.slice(0, 100);


    return (
        <div>
            <div className="card w-80 bg-base-100 shadow-xl h-[580px] relative">
                <figure><img className='h-[300px] w-full' src={strMealThumb} alt="Shoes" /></figure>
                <div className="card-body  pt-10 pb-0 px-5">
                    <h2 className="card-title text-white">{strMeal}</h2>
                    <div>
                        <p>{details}</p>
                    </div>
                    <div className='flex p-0 m-0'>
                        <p>Catagory: {strCategory}</p>
                        <p>Region: {strArea}</p>
                    </div>

                    <div className="card-actions justify-end absolute bottom-0 left-0">
                        <button className="btn btn-[##270351] h-4 w-[320px] text-white">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Food;