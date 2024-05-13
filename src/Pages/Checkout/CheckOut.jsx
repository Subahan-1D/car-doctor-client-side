import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
    const service = useLoaderData();
    const { price, _id, title } = service;
    return (
        <div className="w-4/5 mx-auto mt-5 mb-5" >
            <h2> Book Service : {title}</h2>
            <div className="bg-gray-100 p-10 rounded-lg">
                <div className='grid md:grid-cols-1 lg:grid-cols-2 gap-4'>
                    <div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"></span>
                            </label>
                            <input type="text" name='name' placeholder="First Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"></span>
                            </label>
                            <input type="text" name='number' placeholder="Your Phone Number" className="input input-bordered" required />
                        </div>
                    </div>
                    <div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"></span>
                            </label>
                            <input type="text" name='lastName' placeholder="Last Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"></span>
                            </label>
                            <input type="email" name='email' placeholder="Your Email" className="input input-bordered" required />
                        </div>
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text"></span>
                    </label>
                    <textarea id="message" className="input-bordered" name="message" placeholder="Type your message here..."></textarea>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text"></span>
                    </label>
                    <input type="submit" value="Order Confirm" className="btn btn-primary btn-block" required />
                </div>
            </div>
        </div>
    );
};

export default CheckOut;