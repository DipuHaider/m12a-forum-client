const Banner = () => {

    return (

        <div className="hero min-h-[600px] shadow-theme-primary shadow-inner bg-slate-50" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    {/* <input type="text" placeholder="Type here" className="input input-bordered input-error w-full max-w-xs bg-black" />   */}
                    <div className="pt-2 relative mx-auto text-gray-600">
                        <input className="border-2 border-red-500 bg-slate-800 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                        type="search" name="search" placeholder="Search"></input>
                        <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
                            <svg fill="#FF0000" className="h-4 w-4" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488.4 488.4" xmlSpace="preserve">
                                <g>
                                    <g>
                                        <path d="M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6
                                            s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2
                                            S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7
                                            S381.9,104.65,381.9,203.25z"/>
                                    </g>
                                </g>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;

