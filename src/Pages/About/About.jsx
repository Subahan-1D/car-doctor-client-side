
import person from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'
const About = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='lg:w-1/2 relative'>
                        <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                        <img src={parts} className="w-1/2  right-5 top-1/2 border-8 border-gray-400 absolute rounded-lg shadow-2xl" />
                    </div>
                    <div className='lg:w-1/2'>
                        <p className="text-2xl font-bold text-red-500 mb-2">About Us</p>
                        <h1 className='font-bold text-4xl '>We are qualified <br /> & of experience <br /> in this field</h1>
                        <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. .</p>
                        <p>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                        <button className="btn btn-warning mt-3">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;