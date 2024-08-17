import { BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import loginImg from "../../assets/login.svg";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { signOut } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import Swal from "sweetalert2";
const Register = () => {
  const { userCreate, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate("");

  const handleRegister = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const userPhoto = form.photo.value;

    userCreate(email, password)
      .then((result) => {
        if (result.user) {
          updateUserProfile(name, userPhoto).then(async () => {
            signOut(auth);
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Created Successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/");
          });
        }
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="container mx-auto mt-12 md:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center">
        {/* image */}
        <div className="relative w-full h-[60vh]">
          <img src={loginImg} alt="Login Image" />
        </div>
        {/* signup form */}
        <div className="border-2 p-12 w-full">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Create an Account
          </h2>
          <form onSubmit={handleRegister} className="space-y-3">
            <div>
              <label htmlFor="name" className="font-semibold">
                Full Name{" "}
              </label>{" "}
              <br />
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Full Name"
                className="border outline-0 py-2 px-4 rounded-lg w-full mt-3"
              />
            </div>
            <div>
              <label htmlFor="photo" className="font-semibold">
                Photo Link{" "}
              </label>{" "}
              <br />
              <input
                type="text"
                name="photo"
                id="photo"
                placeholder="Your photo link"
                className="border outline-0 py-2 px-4 rounded-lg w-full mt-3"
              />
            </div>
            <div>
              <label htmlFor="email" className="font-semibold">
                Email{" "}
              </label>{" "}
              <br />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                className="border outline-0 py-2 px-4 rounded-lg w-full mt-3"
              />
            </div>
            <div>
              <label htmlFor="password" className="font-semibold">
                Confirm Password{" "}
              </label>{" "}
              <br />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter Password"
                className="border outline-0 py-2 px-4 rounded-lg w-full mt-3"
              />
            </div>
            <div>
              <input
                type="submit"
                value="Sign Up"
                className="btn btn-primary w-full mt-3"
              />
            </div>
          </form>

          {error && <p className="text-red-500 text-center">{error}</p>}

          <p className="text-center mt-5">
            <small>
              Already have an account?{" "}
              <span className="font-semibold text-base text-primary">
                <Link to={"/login"}>Login </Link>
              </span>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
