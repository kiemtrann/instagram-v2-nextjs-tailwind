/* eslint-disable @next/next/no-img-element */
import * as React from 'react'

export interface IStoryProps {
  key: number
  img: string
  username: string
}

export default function Story(props: IStoryProps) {
  return (
    <div>
      <img
        className="h-14 w-14 rounded-full p-[1,5px] border-red-400 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out"
        src={props.img}
        alt=""
      />
      <p className="text-xs w-14 truncate text-center">{props.username}</p>
    </div>
  )
}
