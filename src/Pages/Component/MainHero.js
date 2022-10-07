import React from 'react';
import background from './../../assets/images/close-view-happy-newlyweds-elegant-dress-suit-looking-smiling-each-other-background-arch-which-created-by-guests-with-sparkles-during-evening-ceremony_8353-12132.webp'

const MainHero = () => {
    return (
        <div className=''>
            <div class="hero min-h-screen" style={{ background: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <div class="hero-overlay bg-opacity-60"></div>
                <div class="hero-content  text-neutral-content">
                    <div class="max-w-md">
                        <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
                        <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        {/* <button class="btn btn-primary">Get Started</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainHero;