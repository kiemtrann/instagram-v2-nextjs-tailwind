/* eslint-disable @next/next/no-img-element */
import * as React from 'react'
import Image from 'next/image'
import logoLg from '../public/instagram.png'
import logoMb from '../public/insta-logo.png'
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/solid'

export interface IHeaderProps {}

export default function Header(props: IHeaderProps) {
  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
        <div className="relative hidden lg:inline-grid w-24 cursor-pointer">
          <Image src={logoLg} alt="" layout="fill" objectFit="contain" />
        </div>
        <div className="relative flex-shrink-0 lg:hidden w-10 cursor-pointer">
          <Image src={logoMb} alt="" layout="fill" objectFit="contain" />
        </div>
        {/*  */}
        <div className="max-w-xs">
          <div className="relative mt-1 p-2 rounded-md">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-500 " />
            </div>
            <input
              className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-200 focus:ring-black focus:border-black rounded-md py-1"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        {/*  */}
        <div className="flex items-center justify-end space-x-5 p-2">
          <HomeIcon className="navBtn" />
          <MenuIcon className="h-6 md:hidden cursor-pointer" />
          <div>
            <PaperAirplaneIcon className="navBtn rotate-45" />
            <div className="absolute top-3 lg:right-48 text-xs w-5 h-5 bg-red-500 rounded-full items-center justify-center text-white cursor-pointer md:right-52 xl:right-[294px] hidden md:inline-flex">
              3
            </div>
          </div>
          <PlusCircleIcon className="navBtn" />
          <UserGroupIcon className="navBtn" />
          <HeartIcon className="navBtn" />
          <img
            src="https://avatars.githubusercontent.com/u/87219641?s=400&u=26e805db6b99e02352ca30efe31ff953c4a9556c&v=4"
            alt=""
            className="h-9 rounded-full cursor-pointer"
          />
        </div>
      </div>
    </div>
  )
}
