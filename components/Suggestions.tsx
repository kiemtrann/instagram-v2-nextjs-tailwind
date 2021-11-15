/* eslint-disable @next/next/no-img-element */
import * as React from 'react'
import { useState, useEffect } from 'react'
import faker from 'faker'

interface ISuggesttion {
  id: number
  name: string
  username: string
  avatar: string
  company: string
}
export interface ISuggestionsProps {}

export default function Suggestions(props: ISuggestionsProps) {
  const contextualCar = () => {
    var name = faker.name.firstName(),
      userName = faker.internet.userName(name)
    return {
      name: name,
      username: userName,
      avatar: faker.internet.avatar(),
      company: faker.company.companyName(),
    }
  }
  const [suggesttions, setSuggestions] = useState<ISuggesttion[]>([])
  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => ({
      ...contextualCar(),
      id: i,
    }))
    setSuggestions(suggestions)
  }, [])
  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
        <button className="text-gray-600 font-semibold">See All</button>
      </div>
      {suggesttions.map((profile) => (
        <div className="flex items-center justify-between mt-3" key={profile.id}>
          <img className="w-10 h-10 rounded-full p-[2px]" src={profile.avatar} alt="" />
          <div className="flex-1 ml-4">
            <h2 className="font-semibold text-sm">{profile.name}</h2>
            <h3 className="text-xs text-gray-400">Works at {profile.company}</h3>
          </div>
          <button className="text-blue-400 text-sm font-semibold">Follow</button>
        </div>
      ))}
    </div>
  )
}
