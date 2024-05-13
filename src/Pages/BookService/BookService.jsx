import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import { or } from "firebase/firestore";


const BookService = () => {
    const bookService = useLoaderData()
    const { title, _id, price, } = bookService;
    const { user } = useContext(AuthContext);

    const handleBookService = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const order ={
           customerName :name,
           date,
           email,
           service:_id,
           price:price

        }
        console.log(order);

    }
    return (
        <div className="w-4/5 mx-auto mt-5 mb-5" >
            <h2 className="text-center text-3xl"> Book Service : {title}</h2>
            <form onSubmit={handleBookService}>
                <div className="bg-gray-100 p-10 rounded-lg">
                    <div className='grid md:grid-cols-1 lg:grid-cols-2 gap-4'>
                        <div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' defaultValue={user.displayName} placeholder="First Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' defaultValue={user.email}  placeholder="Your Email" className="input input-bordered" required />
                            </div>

                        </div>
                        <div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Date</span>
                                </label>
                                <input type="date" name='date' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Deu Amount</span>
                                </label>
                                <input type="text" defaultValue={"$" + price} placeholder="Your Phone Number" className="input input-bordered" required />
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
            </form>
        </div>
    );
};

export default BookService;