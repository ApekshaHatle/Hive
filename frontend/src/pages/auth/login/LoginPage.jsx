import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../../assets/logo.png"; 

import { MdOutlineMail } from "react-icons/md";
import { MdPassword } from "react-icons/md";

const LoginPage = () => {
	const [formData, setFormData] = useState({
		username: "",
		password: "",
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
	};

	const handleInputChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const isError = false;

	return (
		<div className="max-w-screen-xl mx-auto flex h-screen">
			<div className="flex-1 hidden lg:flex items-center justify-center">
				<img src={logo} alt="Logo" className="lg:w-2/3" />
			</div>
			<div className="flex-1 flex flex-col justify-center items-center">
				<form className="flex gap-4 flex-col" onSubmit={handleSubmit}>
					<img src={logo} alt="Logo" className="w-24 lg:hidden" />
					<h1 className="text-4xl font-extrabold text-primary">{"Let's"} go.</h1>
					
					<label className="input input-bordered rounded flex items-center gap-2 bg-secondary text-secondary-content">
						<MdOutlineMail />
						<input
							type="text"
							className="grow bg-transparent text-secondary-content"
							placeholder="Username"
							name="username"
							onChange={handleInputChange}
							value={formData.username}
						/>
					</label>

					<label className="input input-bordered rounded flex items-center gap-2 bg-secondary text-secondary-content">
						<MdPassword />
						<input
							type="password"
							className="grow bg-transparent text-secondary-content"
							placeholder="Password"
							name="password"
							onChange={handleInputChange}
							value={formData.password}
						/>
					</label>

					<button className="btn rounded-full btn-primary text-white">Login</button>
					{isError && <p className="text-red-500">Something went wrong</p>}
				</form>
				
				<div className="flex flex-col gap-2 mt-4">
					<p className="text-lg text-primary">{"Don't"} have an account?</p>
					<Link to="/signup">
						<button className="btn rounded-full btn-secondary btn-outline hover:bg-secondary hover:text-white w-full">
							Sign up
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};
export default LoginPage;
