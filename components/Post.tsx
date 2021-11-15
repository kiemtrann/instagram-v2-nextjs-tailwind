/* eslint-disable @next/next/no-img-element */
import * as React from 'react'
import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/outline'
import { HomeIcon as HeartIconFilled } from '@heroicons/react/solid'

export interface IPostProps {
  key: number
  username: string
  userImg: string
  img: string
  caption: string
}

export default function Post(props: IPostProps) {
  return (
    <div className="bg-white my-7 boder rounded-sm">
      <div className="flex items-center p-5">
        <img
          className="rounded-full h-12 w-12 object-contain boder p-1 mr-3"
          src={props.userImg}
          alt=""
        />
        <p className="flex-1 font-bold">{props.username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>
      <img className="object-cover w-full" src={props.img} alt="" />
      <div className="flex justify-between">
        <div className="flex space-x-4">
          <HeartIcon className="btn" />
          <ChatIcon className="btn" />
          <PaperAirplaneIcon className="btn" />
        </div>
        <BookmarkIcon className="btn" />
      </div>
      <p className="p-5 truncate">
        <span className="font-bold mr-1">{props.username}</span> {props.caption}
      </p>

      {/* comment */}

      {/* input box */}
      <form className="flex items-center p-4">
        <EmojiHappyIcon className="h-7" />
        <input
          className="border-none flex-1 focus:ring-0 outline-none"
          type="text"
          placeholder="Add a comment..."
        />
        <button className="font-semibold text-blue-400">Post</button>
      </form>
    </div>
  )
}
