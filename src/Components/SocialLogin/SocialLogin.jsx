import { FaGoogle } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

const SocialLogin = () => {

    const { googleSignIn } = useAuth();

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user)
                if (result.user) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Goggle login successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => {
                if (error.message) {
                    Swal.fire({
                        position: "top-end",
                        icon: "error",
                        title: "User Invalid",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    return (
        <div>
            <div>
                <button onClick={handleGoogleSignIn} className="btn btn-xs sm:btn-md md:btn-md lg:btn-md border border-black"><FaGoogle></FaGoogle> Google</button>
            </div>
        </div>
    );
};

export default SocialLogin;