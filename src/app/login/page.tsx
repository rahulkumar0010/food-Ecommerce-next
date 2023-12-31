import Image from "next/image";

function Login() {
  // <ImageCom image="https://i.imgur.com/UYiroysl.png" title="" />
  return (
    <div className="lg:flex max-h-full">
      <div className="lg:w-1/2 xl:max-w-screen-sm bg-slate-800 h-full text-black  pb-40">
        <div className="py-12  flex justify-center lg:justify-start lg:px-12">
          <div className="cursor-pointer flex items-center">
            <div>
              <Image alt="" src="/img/logo.png" width={55} height={50} />
            </div>
            <div className="text-2xl text-indigo-800 tracking-wide ml-2 font-semibold">
              RCafe
            </div>
          </div>
        </div>
        <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
          <h2
            className="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl
            xl:text-bold"
          >
            Log in
          </h2>
          <div className="mt-12">
            <form>
              <div>
                <div className="text-sm font-bold text-gray-600 tracking-wide">
                  Email Address
                </div>
                <input
                  className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500 rounded pl-2"
                  type=""
                  placeholder="mike@gmail.com"
                />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <div className="text-sm font-bold text-gray-600 tracking-wide">
                    Password
                  </div>
                  <div>
                    <a
                      className="text-xs font-display font-semibold text-indigo-600 hover:text-indigo-800
                                cursor-pointer"
                    >
                      Forgot Password?
                    </a>
                  </div>
                </div>
                <input
                  className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500 rounded pl-2"
                  type=""
                  placeholder="Enter your password"
                />
              </div>
              <div className="mt-10">
                <button
                  className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                        font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                        shadow-lg"
                >
                  Log In
                </button>
              </div>
            </form>
            <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Don't have an account ?{" "}
              <a className="cursor-pointer text-indigo-600 hover:text-indigo-800">
                Sign up
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Right Part */}
      <div className="hidden lg:flex items-center justify-center bg-indigo-100 flex-1 h-screen lg:w-1/2">
        <div className=" transform duration-200 hover:scale-110 cursor-pointer w-full max-w-full">
          <Image
            alt=""
            src="/img/pizza.jpg"
            width={0}
            height={0}
            sizes="100vw"
            className="inset-0 h-full w-full object-cover"
            unoptimized
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
