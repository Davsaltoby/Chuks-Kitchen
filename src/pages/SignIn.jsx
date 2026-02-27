import React from "react";
import Footer from "../components/footer";
import Logo from "../components/logo";
import Button from "../components/Button";
import HeroImg from "../components/heroImg";
import GoogleIcon from "../assets/icons/Social-media-login (1).png";
import AppleIcon from "../assets/icons/Facebook.png";
import IntroImg from "../assets/images/Onboarding/Rectangle 1.png";
import MailIcon from "../assets/icons/mail.svg";
import VisibilityIcon from "../assets/icons/visibility_off.svg";
import lockIcon from "../assets/icons/lock.svg";
import { Link, useNavigate } from "react-router-dom";
import InputComponent from "../components/FormComponents/inputComponent";

const SignIn = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/home");
  };
  return (
    <main className="w-[90vw] mx-auto lg:w-full lg:bg-[#F3F4F6]">
      <div className="grid lg:grid-cols-2">
        <div className="h-full hidden lg:block">
          <HeroImg
            className=""
            image={IntroImg}
            title="Chuks Kitchen"
            description="Your journey to delicious, authentic Nigerian meals starts here. Sign up or login to order your favorites today!"
          />
        </div>
        <div className="flex justify-center items-center lg:h-[950px]">
          <div className="w-full mt-[25px] lg:mt-0 md:w-md lg:p-[10px]">
            <div className="text-center">
              <Logo className="text-[40.81px]" />
              <h2 className="text-[24px] font-semibold mb-4">
                Login your Account
              </h2>
            </div>

            {/* Form */}

            <form className="">
              {/* Email */}

              <InputComponent
                label="Email or phone number"
                icon={MailIcon}
                type="email"
                placeholder="name@gmail.com"
              />

              {/* PASSWORD */}

              <InputComponent
                label="Password"
                icon={lockIcon}
                icon2={VisibilityIcon}
                type="password"
                placeholder="******"
              ></InputComponent>

              {/* Forgot password */}

              <div className="text-[12px] text-[#1E88E5] text-end my-[10px]">
                <a className="hover:text-[#1E55E5]" href="">
                  forgot password?
                </a>
              </div>

              {/* Button */}
              <Button
                type="submit"
                variant="secondary"
                className="w-full text-[16px] py-[18px]"
                onClick={handleSubmit}
              >
                Continue
              </Button>
            </form>

            <p className="text-[12px] text-center mt-2 mb-6">
              Or continue with
            </p>
            <Button
              icon={GoogleIcon}
              variant="tertiary"
              className="w-full text-[14px] border-[1px]"
            >
              Continue with Google
            </Button>
            <Button
              icon={AppleIcon}
              variant="tertiary"
              className="w-full text-[14px] border-[1px] mt-4"
            >
              Continue with Facebook
            </Button>
            <p className="text-[12px] text-center mt-4">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-[#1E88E5] hover:text-[#1E55E5]"
              >
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <Footer />
      </div>
    </main>
  );
};

export default SignIn;
