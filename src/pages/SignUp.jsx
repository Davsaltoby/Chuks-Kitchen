import React from "react";
import Footer from "../components/footer";
import Logo from "../components/logo";
import Button from "../components/Button";
import HeroImg from "../components/heroImg";
import GoogleIcon from "../assets/icons/Social-media-login (1).png";
import AppleIcon from "../assets/icons/Facebook.png";
import IntroImg from "../assets/images/Onboarding/Rectangle 1.png";
import MailIcon from "../assets/icons/mail.svg";
import VisibilityClosed from "../assets/icons/visibility_off.svg";
import VisibilityOpen from "../assets/icons/visibility_open.png";
import lockIcon from "../assets/icons/lock.svg";
import InputComponent from "../components/FormComponents/inputComponent";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/signin");
  };
  return (
    <div className="lg:w-full w-[90vw] mx-auto pt-6 pb-10 lg:py-0 lg:bg-[#F3F4F6]">
      <div className="grid lg:grid-cols-2">
        <div className="h-full hidden lg:block">
          <HeroImg
            image={IntroImg}
            title="Chuks Kitchen"
            description="Your journey to delicious, authentic Nigerian meals starts here. Sign up or login to order your favorites today!"
          />
        </div>
        <div className="flex justify-center lg:py-14">
          <div className="w-full md:w-md lg:p-[10px]">
            <div className="text-center">
              <Logo className="text-[40.81px]" />
              <h2 className="text-[24px] font-semibold mb-4">
                Create your Account
              </h2>
            </div>

            {/* Form */}

            <form className="">
              {/* Email */}

              <InputComponent
                label="Email"
                icon={MailIcon}
                type="email"
                placeholder="name@gmail.com"
              />

              {/* Phone Number */}

              <InputComponent
                type="tel"
                label="Phone number"
                placeholder="8123340690"
              />

              {/* PASSWORD */}

              <InputComponent
                label="Password"
                icon={lockIcon}
                icon2={VisibilityClosed}
                type="password"
                placeholder="QWE123#"
              ></InputComponent>

              {/* Confirm Password */}

              <InputComponent
                type="password"
                icon={lockIcon}
                icon2={VisibilityClosed}
                placeholder="QWE123#"
                label="Confirm Password"
              />

              {/* Agree to terms and condition */}

              <div className="text-[14px] mb-[20px] flex gap-3">
                <input className="accent-[#1E88E5]" type="checkbox" />
                <p className="text-[#616161]">
                  I agree to the{" "}
                  <a className="text-[#1E88E5] hover:text-[#1E55E5]" href="">
                    Terms & Conditions
                  </a>{" "}
                  and{" "}
                  <a className="text-[#1E88E5] hover:text-[#1E55E5]" href="">
                    Privacy Policy
                  </a>
                </p>
              </div>

              {/* Button */}
              <Button
                onClick={handleSubmit}
                type="submit"
                variant="secondary"
                className="w-full text-[16px] py-[18px]"
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
              Already have an account?{" "}
              <Link
                to="/signin"
                className="text-[#1E88E5] hover:text-[#1E55E5]"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <Footer />
      </div>
    </div>
  );
};

export default SignUp;
