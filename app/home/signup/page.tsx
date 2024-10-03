import styles from "@/app/signup/styles.module.css";
import { poppins } from "@/public/font";
import SignIn from "../components/SignIn";
import Link from "next/link";

export default function Signup() {
    return (
        <div className={`flex flex-col md:flex-row min-h-screen ${poppins.className}`}>
            {/* Left side for larger screens */}
            <div className={`${styles.signup} flex justify-center items-center md:w-1/2 w-full text-white`}>
                <h1 className="text-2xl text-center md:text-left">Learn, discover, and automate in one place.</h1>
            </div>

            {/* Right side form */}
            <div className="flex flex-col justify-center items-center md:w-1/2 w-full p-4">
                <h2 className="text-2xl text-center"><b>Sign up with a free trial</b></h2>
                <p className="text-center">Empower your experience with a free account today.</p>
                <form className="py-6 space-y-2 w-full max-w-md">
                    <div className="flex flex-col">
                        <label htmlFor="email">Email Address</label>
                        <input id="email" className="border p-2" type="email" placeholder="Enter email"></input>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="password">Password</label>
                        <input id="password" className="border p-2" type="password" placeholder="Enter password"></input>
                    </div>
                    <div className="flex items-start">
                        <input type="checkbox" required></input>
                        <label className="text-xs ml-2" htmlFor="terms">
                            By registering for an account, you are consenting to our Terms of Service and confirming that you have reviewed and accepted the Global Privacy Statement.
                        </label>
                    </div>
                    <button className="flex items-center justify-center bg-cornflowerblue rounded-full text-white w-full py-4 text-xs" type="button">
                        Signup
                    </button>
                </form>
                <p>
                    Already have an account? 
                    <Link className="hover:text-cornflowerblue ml-1" href="/login">Login</Link>
                </p>
                <SignIn />
            </div>
        </div>
    );
}
