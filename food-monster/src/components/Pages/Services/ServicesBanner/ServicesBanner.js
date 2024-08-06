import React from 'react';
import BgImage from '../../../../assets/images/u594-hero.jpg';

const ServicesBanner = () => {
    return (
        <div className="hero" style={{ backgroundImage: `url("${BgImage}")` }}>
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="my-12">
                    <h1 className="mb-5 text-5xl font-bold">Search Your Favorite Food</h1>
                    <p className="mb-5">Find restaurants for free</p>
                    <div className="form-control flex flex-row">
                        <div className='mr-1 w-9/12'>
                            <input type="search" placeholder="Search…" className="input w-full text-black" />
                        </div>
                        <button className="btn w-3/12">
                        Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesBanner;