import styles from "../style";

const Signup = () => (
    <div className="flex justify-center items-center mt-10">
        <div className="relative"> 
            <div className="absolute top-4 left-3">
                <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"/>
            </div>
            <input type="text" className="h-14 w-96 pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none" placeholder="Sign up for our newsletter"/>
            <div className="absolute top-2 right-2">
                <button className={`py-2 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>Submit</button>
            </div>
        </div>
    </div>
);

export default Signup;