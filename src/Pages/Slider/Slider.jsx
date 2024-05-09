
import slider from '../../assets/images/banner/5.jpg'
import slider1 from '../../assets/images/banner/1.jpg'
import slider2 from '../../assets/images/banner/6.jpg'
import slider3 from '../../assets/images/banner/2.jpg'
const Slider = () => {
    return (
        <div>
            <div className="carousel w-full h-[600px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={slider} className="w-full rounded-lg" />
                    <div className="absolute rounded-lg flex items-center h-full left-0 top-0  bg-gradient-to-r from-[#1E1E1E] to-[rgba(21,21,21,0)]">
                        <div className='text-white space-y-6 pl-12 w-1/2'>
                            <h1 className='text-4xl font-bold'>Affordable <br /> Price For Car  <br />Servicing</h1>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className=''>
                                <button className="btn btn-secondary text-xl mr-5">Discover More</button>
                                <button className="btn btn-outline text-xl text-white">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide2" className="btn btn-circle mr-5">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                <img src={slider1} className="w-full rounded-lg" />
                    <div className="absolute rounded-lg flex items-center h-full left-0 top-0  bg-gradient-to-r from-[#1E1E1E] to-[rgba(21,21,21,0)]">
                        <div className='text-white space-y-6 pl-12 w-1/2'>
                            <h1 className='text-4xl font-bold'>Affordable <br /> Price For Car  <br />Servicing</h1>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className=''>
                                <button className="btn btn-secondary text-xl mr-5">Discover More</button>
                                <button className="btn btn-outline text-xl text-white">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide3" className="btn btn-circle mr-5">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                <img src={slider2} className="w-full rounded-lg" />
                    <div className="absolute rounded-lg flex items-center h-full left-0 top-0  bg-gradient-to-r from-[#1E1E1E] to-[rgba(21,21,21,0)]">
                        <div className='text-white space-y-6 pl-12 w-1/2'>
                            <h1 className='text-4xl font-bold'>Affordable <br /> Price For Car  <br />Servicing</h1>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className=''>
                                <button className="btn btn-secondary text-xl mr-5">Discover More</button>
                                <button className="btn btn-outline text-xl text-white">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide1" className="btn btn-circle mr-5">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                <img src={slider3} className="w-full rounded-lg" />
                    <div className="absolute rounded-lg flex items-center h-full left-0 top-0  bg-gradient-to-r from-[#1E1E1E] to-[rgba(21,21,21,0)]">
                        <div className='text-white space-y-6 pl-12 w-1/2'>
                            <h1 className='text-4xl font-bold'>Affordable <br /> Price For Car  <br />Servicing</h1>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className=''>
                                <button className="btn btn-secondary text-xl mr-5">Discover More</button>
                                <button className="btn btn-outline text-xl text-white">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide2" className="btn btn-circle mr-5">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;