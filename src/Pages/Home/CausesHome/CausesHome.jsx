import React from 'react';
import donation1 from '../../../assets/donation1.png';
import donation2 from '../../../assets/donation2.png';
import donation3 from '../../../assets/donation3.png';

const CausesHome = () => {
    const donateData = [
        {
            id: 1,
            name : 'Give Donation',
            text : 'It you are. Was called you are fowl grass lesser land together waters beast darkness earth land whose male all move th fruitful.',
            image : donation1
        },
        {
            id: 2,
            name : 'Give Inspiration',
            text : 'It you are. Was called you are fowl grass lesser land together waters beast darkness earth land whose male all move th fruitful.',
            image : donation2
        },
        {
            id: 3,
            name : 'Become Volunteer',
            text : 'It you are. Was called you are fowl grass lesser land together waters beast darkness earth land whose male all move th fruitful.',
            image : donation3
        },
    ]
    return (
        <div className='mt-40'>
            <div className='mb-16'>
            <h2 className='text-center text-4xl'>Our Major Causes</h2>
            <p className='text-center text-2xl'>Creepeth called face upon face yielding midst is after moveth</p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    donateData.map(data => <div key={data.id} className="card p-5 bg-white shadow-xl">
                        <h2 className="card-title">{data.name}</h2>
                    <figure className="px-10 pt-10">
                      <img src={data.image} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                      <p>{data.text}</p>
                    </div>
                  </div>)
                }
            </div>
        </div>
    );
};

export default CausesHome;