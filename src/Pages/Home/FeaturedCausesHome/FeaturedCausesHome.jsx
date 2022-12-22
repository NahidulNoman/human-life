import React from 'react';
import featured1 from '../../../assets/featured1.png';
import featured2 from '../../../assets/featured2.png';
import featured3 from '../../../assets/featured3.png';

const FeaturedCausesHome = () => {
    const featuredData = [
        {
            id : 1,
            name : 'Education for every child',
            text : 'Be tree their face wont appear day waters moved fourth in they are divide do not a you were man face god.',
            raised : '$1533',
            goal : '$2500',
            donors : 90,
            image : featured1,
        },
        {
            id : 2,
            name : 'Feeding the hungry people',
            text : 'Be tree their face wont appear day waters moved fourth in they are divide do not a you were man face god.',
            raised : '$1533',
            goal : '$2500',
            donors : 90,
            image : featured2,
        },
        {
            id : 3,
            name : 'Providing cloth people',
            text : 'Be tree their face wont appear day waters moved fourth in they are divide do not a you were man face god.',
            raised : '$1533',
            goal : '$2500',
            donors : 90,
            image : featured3,
        },
    ]
    return (
        <div className='mt-24 mb-20 mx-2'>
        <div className='mb-16'>
        <h2 className='text-center text-4xl font-bold'>Featured Causes</h2>
        <p className='text-center text-2xl opacity-70'>Creepeth called face upon face yielding midst is after moveth</p>
        </div>
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                featuredData.map(data => <div key={data.id} className="card bg-white shadow-xl">
                <figure className="px-10 pt-10">
                  <img src={data.image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{data.name}</h2>
                  <p>{data.text}</p>
                    <p>Donors: {data.donors}</p>
                  <div className='flex justify-between'>
                  <p>Raised: {data.raised}</p>
                  <p>Goal: {data.goal}</p>
                  </div>
                  <div className="card-actions">
                    <button className="btn btn-outline btn-success">donate</button>
                  </div>
                </div>
              </div>)
            }
        </div>
    </div>
    );
};

export default FeaturedCausesHome;