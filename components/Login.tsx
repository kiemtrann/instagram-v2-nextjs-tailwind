/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'
import bg from '../public/backgroud.png'
import lghead from '../public/instagram.png'

function Login(props: {
  email: string
  setEmail: (value: React.SetStateAction<string>) => void
  password: string
  setPassword: (value: React.SetStateAction<string>) => void
  handleLogin: () => void
  handleSignUp: () => void
  hasAccount: boolean
  setHasAccount: (value: React.SetStateAction<boolean>) => void
  emailError: string
  passwordError: string
}) {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignUp,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = props
  return (
    <div className="flex flex-row justify-center h-screen md:flex-col sm:flex-col lg:flex-row xl:flex-row">
      <Image
        src={bg}
        alt=""
        className="object-cover sm:opacity-0 md:opacity-0 lg:opacity-100 xl:opacity-100"
      />
      <div className="pt-14 pl-16 pr-16 mt-11 mb-14 ml-5 mr-5 border-2 rounded-lg">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/06/%C4%B0nstagram-Profilime-Kim-Bakt%C4%B1-1.png"
          alt=""
          className="h-16 ml-10"
        />
        <section className="bg-white">
          <div className="">
            <input
              type="text"
              required
              value={email}
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-72 focus:border-gray-400 rounded-md mt-5 mb-3"
            />
            <p className="">{emailError}</p>
            <input
              type="password"
              required
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-72 focus:border-gray-400 rounded-md mb-2"
            />
            <p className="">{passwordError}</p>
            {hasAccount ? (
              <>
                <button
                  className="mt-5 w-72 pt-2 pb-2 text-center bg-blue-500 rounded-md text-white font-bold hover:bg-blue-300"
                  onClick={handleLogin}
                >
                  Sign in
                </button>
                <p className="font-normal pt-4">
                  Do not have an account ?
                  <span
                    onClick={() => {
                      setHasAccount(!hasAccount)
                    }}
                    className="text-blue-600 font-medium pl-2 cursor-pointer"
                  >
                    Sign up
                  </span>
                </p>
              </>
            ) : (
              <>
                <button
                  className="mt-5 w-72 pt-2 pb-2 text-center bg-blue-500 rounded-md text-white font-bold hover:bg-blue-300"
                  onClick={handleSignUp}
                >
                  Sign up
                </button>
                <p className="font-normal pt-4">
                  Have an account ?
                  <span
                    onClick={() => {
                      setHasAccount(!hasAccount)
                    }}
                    className="text-blue-600 font-medium pl-2 cursor-pointer"
                  >
                    Sign in
                  </span>
                </p>
              </>
            )}
            <div className="flex flex-row justify-between items-baseline pt-5">
              <div className="h-[1px] w-28 bg-gray-500"></div>
              <span className="text-center font-semibold text-gray-500">OR</span>
              <div className="h-[1px] w-28 bg-gray-500"></div>
            </div>
            <div className="flex flex-row pt-4 pl-8 pr-6 bg-white cursor-pointer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Facebook_logo_36x36.svg/2048px-Facebook_logo_36x36.svg.png"
                alt=""
                className="w-5 h-5 mr-2"
              />
              <p className="font-medium text-blue-800 ml-2">Log in with Facebook</p>
            </div>
            <p className="text-center font-normal text-sm hover:text-blue-500 cursor-pointer pt-4">
              Forgot password ?
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Login
