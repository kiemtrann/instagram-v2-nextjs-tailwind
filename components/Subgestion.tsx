/* eslint-disable @next/next/no-img-element */
import * as React from 'react'
import { useState } from 'react'

export interface ISuggesttion {
  key: number
  name: string
  username: string
  avatar: string
  company: string
}

export default function Subgestion(props: ISuggesttion) {
  const [follow, setFlolow] = useState(true)
  return (
    <div className="flex flex-row justify-between">
      <div className="flex items-center flex-row mt-3 space-x-3" key={props.key}>
        <img className="w-10 h-10 rounded-full p-[2px]" src={props.avatar} alt="" />
        <div className="flex-1 ml-4">
          <h2 className="font-semibold text-sm hover:underline cursor-pointer">{props.name}</h2>
          <h3 className="text-xs text-gray-400">Works at {props.company}</h3>
        </div>
      </div>
      <button
        className="text-blue-400 text-sm font-semibold ml-3 pl-10 text-right"
        onClick={() => setFlolow(!follow)}
      >
        {follow ? 'Follow' : 'Unfollow'}
      </button>
    </div>
  )
}
