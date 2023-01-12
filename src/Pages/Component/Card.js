import React from 'react';
import pic from './../../assets/images/antique-gold-flower-light-candle_1232-4150.jpg'
import pic1 from './../../assets/images/two-glasses-wine-table-background-wedding-bouquet-evening-end-event_72389-1385.webp'
import pic2 from './../../assets/images/antique-gold-flower-light-candle_1232-4150.jpg'
const Card = () => {
    return (
        <div className='m-4'>
            <div className='grid grid-cols-1 lg:grid-cols-3 g-4 mx-auto'>
                <div class="card card-compact w-96 shadow-xl bg-white text-base-100  mx-auto ">
                    <figure><img src={pic} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Candle Light!</h2>
                        <p>If you want to enjoy it,Please Welcome here!</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-accent">Visit Now</button>
                        </div>
                    </div>
                </div>
                <div class="card card-compact w-96 bg-white text-base-100 shadow-xl  mx-auto">
                    <figure><img src={pic1} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Candle Light!</h2>
                        <p>If you want to enjoy it,Please Welcome here!</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-accent">Visit Now</button>
                        </div>
                    </div>
                </div>
                <div class="card card-compact w-96 bg-white text-base-100 shadow-xl  mx-auto">
                    <figure><img src={pic2} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Candle Light!</h2>
                        <p>If you want to enjoy it,Please Welcome here!</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-accent">Visit Now</button>
                        </div>
                    </div>
                </div>
                {/* <div class="card card-compact w-96 bg-white text-base-100 shadow-xl ">
                <figure><img src={pic1} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-accent">Buy Now</button>
                    </div>
                </div>
            </div> */}
                <br /><br />
            </div>
        </div>
    );
};

export default Card;