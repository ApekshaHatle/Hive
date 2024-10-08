import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../../assets/logo.png"; // Updated artistic logo D:\Workspace\Web_Workspace\AadiFoundTraining\Hive\frontend\public\logo.png
import { MdOutlineMail, MdPassword, MdDriveFileRenameOutline } from "react-icons/md";
import { FaUser } from "react-icons/fa";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    fullName: "",
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
    <div className="max-w-screen-xl mx-auto flex h-screen px-10 bg-base-100">
      <div className="flex-1 hidden lg:flex items-center justify-center">
      <img src={logo} alt="Logo" className="lg:w-2/3" />
      </div>
      <div className="flex-1 flex flex-col justify-center items-center">
        <form className="lg:w-2/3 mx-auto md:mx-20 flex gap-4 flex-col" onSubmit={handleSubmit}>
        <img src={logo} alt="Logo" className="w-24 lg:hidden" />
          <h1 className="text-4xl font-extrabold text-primary">Join today.</h1>
          
          <label className="input input-bordered rounded flex items-center gap-2">
            <MdOutlineMail className="text-secondary" />
            <input
              type="email"
              className="grow bg-transparent outline-none text-base-content"
              placeholder="Email"
              name="email"
              onChange={handleInputChange}
              value={formData.email}
            />
          </label>
          
          <div className="flex gap-4 flex-wrap">
            <label className="input input-bordered rounded flex items-center gap-2 flex-1">
              <FaUser className="text-accent" />
              <input
                type="text"
                className="grow bg-transparent outline-none text-base-content"
                placeholder="Username"
                name="username"
                onChange={handleInputChange}
                value={formData.username}
              />
            </label>
            
            <label className="input input-bordered rounded flex items-center gap-2 flex-1">
              <MdDriveFileRenameOutline className="text-secondary" />
              <input
                type="text"
                className="grow bg-transparent outline-none text-base-content"
                placeholder="Full Name"
                name="fullName"
                onChange={handleInputChange}
                value={formData.fullName}
              />
            </label>
          </div>

          <label className="input input-bordered rounded flex items-center gap-2">
            <MdPassword className="text-accent" />
            <input
              type="password"
              className="grow bg-transparent outline-none text-base-content"
              placeholder="Password"
              name="password"
              onChange={handleInputChange}
              value={formData.password}
            />
          </label>
          
          <button className="btn rounded-full btn-accent text-white">Sign up</button>
          
          {isError && <p className="text-error">Something went wrong</p>}
        </form>

        <div className="flex flex-col lg:w-2/3 gap-2 mt-4">
          <p className="text-primary text-lg">Already have an account?</p>
          <Link to="/login">
            <button className="btn rounded-full btn-outline btn-secondary w-full">
              Sign in
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
