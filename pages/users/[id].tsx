/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react'
import { collection, onSnapshot, query, where } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { db } from '../../firebase'
import { useRouter } from 'next/router'
import Header from '../../components/Header'

interface User {
  address: string
  avatar: string
  company: string
  email: string
  id: number
  name: string
  phone: string
  username: string
}

export interface IParamsProps {
  id: string
}

function Detail(props: IParamsProps) {
  const router = useRouter()
  const [user, setUser] = useState<User>({
    address: '',
    avatar: '',
    company: '',
    email: '',
    id: 0,
    name: '',
    phone: '',
    username: '',
  })
  const [isFollowed, setIsFollowed] = useState(true)
  useEffect(() => {
    return onSnapshot(
      query(collection(db, 'users'), where('id', '==', Number(router.query.id))),
      (snapshot: any) => {
        setUser(snapshot.docs[0].data())
      }
    )
  }, [db])
  return (
    <div>
      <div key={user.id}>
        <Header username={user.username} avatar={user.avatar} />
        <div>
          <div className="flex flex-col sm:flex-row absolute left-[50%] top-24 translate-x-[-50%]">
            <img
              className="h-40 w-40 rounded-full p-[1,5px] border-red-400 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out mr-24 mt-5"
              src={user.avatar}
              alt=""
            />
            <div className="flex flex-col">
              <div className="flex flex-row">
                <h1 className="font-medium text-2xl text-gray-500 pr-6 mr-8">{user.username}</h1>
                <button
                  className="text-white bg-blue-400 text-sm font-semibold text-center w-[90px] h-[32px] rounded mt-2 mr-2"
                  onClick={() => setIsFollowed(!isFollowed)}
                >
                  {isFollowed ? 'Follow' : 'Unfollow'}
                </button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white bg-blue-400 text-sm font-normal text-center w-8 h-8 rounded mt-2 p-[6px]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mt-3 ml-3 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                  />
                </svg>
              </div>
              <div className="flex flex-row space-x-8 py-4">
                <div className="flex flex-row space-x-1">
                  <span className="font-semibold">0</span>
                  <p>post</p>
                </div>
                <div className="flex flex-row space-x-1">
                  <span className="font-semibold">{user.id}</span>
                  <p>follower</p>
                </div>
                <div className="flex flex-row space-x-1">
                  <span className="font-semibold">156</span>
                  <p>following</p>
                </div>
              </div>
              <div className="flex flex-col space-y-1">
                <p className="text-xl font-medium text-gray-700">{user.name}</p>
                <p className="text-blue-500 cursor-pointer">{user.phone}</p>
                <p>{user.address}</p>
                <p>{user.company}</p>
                <p className="text-blue-500 cursor-pointer">{user.email}</p>
                <div className="flex flex-row space-x-2">
                  <p>Followed by</p>
                  <span className="font-semibold">__vankiem__</span>
                </div>
              </div>
              <div className="h-[0.5px] w-[400px] left-14 bg-gray-600 mt-10"></div>
              <div className="flex flex-row space-x-12 cursor-pointer">
                <div className="flex flex-row ml-28 p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                  <p className="text-base font-semibold text-gray-700">POST</p>
                </div>
                <div className="flex flex-row p-2 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="text-base font-semibold text-gray-700">TAGGED</p>
                </div>
              </div>
              <div className="h-20 w-20 rounded-full border-gray-400 border-2 ml-44 m-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-gray-600 mt-3 ml-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h1 className="text-2xl text-gray-700 ml-40">No Photos</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail
