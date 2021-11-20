/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import * as React from 'react'
import { useState, useEffect } from 'react'
import faker from 'faker'
import Subgestion from '../components/Subgestion'
import Link from 'next/link'

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
    <div className="mt-4 ml-10 flex flex-col">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
        <Link href="/users">
          <button className="text-gray-600 font-semibold">See All</button>
        </Link>
      </div>
      {suggesttions.map((profile) => (
        <Subgestion
          key={profile.id}
          name={profile.name}
          username={profile.username}
          avatar={profile.avatar}
          company={profile.company}
        />
      ))}
      <div className="flex flex-col text-gray-400">
        <div className="flex flex-row space-x-1 text-xs mt-3 pt-3">
          <p>About</p>
          <p>Help</p>
          <p>Press</p>
          <p>API</p>
          <p>Jobs</p>
          <p>Privacy</p>
          <p>Terms</p>
          <p>Locations</p>
        </div>
        <div className="flex flex-row space-x-1 text-xs">
          <p>Top </p>
          <p>Accounts</p>
          <p>Hashtags</p>
          <p>Language English</p>
        </div>
        <p className="text-xs mt-3 pt-3">© 2021 INSTAGRAM FROM META</p>
      </div>
    </div>
  )
}
