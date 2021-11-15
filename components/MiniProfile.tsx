/* eslint-disable @next/next/no-img-element */
import * as React from 'react'

export interface IMiniProfileProps {
  handleLogout: () => void
}

export default function MiniProfile(props: IMiniProfileProps) {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        className="rounded-full w-16 h-16 boder p-[2px]"
        src="https://avatars.githubusercontent.com/u/87219641?s=400&u=26e805db6b99e02352ca30efe31ff953c4a9556c&v=4"
        alt=""
      />
      <div className="flex-1 mx-4">
        <h2 className="font-bold">__vankiem__</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>
      <button className="text-blue-400 text-sm font-semibold" onClick={props.handleLogout}>
        Sign Out
      </button>
    </div>
  )
}
