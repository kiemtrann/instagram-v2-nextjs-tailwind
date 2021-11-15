import * as React from 'react'
import { useEffect, useState } from 'react'
import faker from 'faker'
import Story from './Story'

interface ISuggesttion {
  id: number
  name: string
  username: string
  avatar: string
}
export interface IStoriesProps {}

export default function Stories(props: IStoriesProps) {
  const contextualCar = () => {
    var name = faker.name.firstName(),
      userName = faker.internet.userName(name)
    return {
      name: name,
      username: userName,
      avatar: faker.internet.avatar(),
    }
  }
  const [suggesttions, setSuggestions] = useState<ISuggesttion[]>([])
  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...contextualCar(),
      id: i,
    }))
    setSuggestions(suggestions)
  }, [])
  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 boder rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
      {suggesttions.map((profile) => (
        <Story key={profile.id} img={profile.avatar} username={profile.username} />
      ))}
    </div>
  )
}
