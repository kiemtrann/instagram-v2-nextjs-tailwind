/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react'
import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { db } from '../../firebase'
import Link from 'next/link'
import Header from '../../components/Header'

export interface IUsersProps {}

export default function Users(props: IUsersProps) {
  const [users, setUsers] = useState([])
  const [follow, setFlolow] = useState(true)
  useEffect(() => {
    return onSnapshot(query(collection(db, 'users')), (snapshot: any) => {
      setUsers(snapshot.docs)
    })
  }, [db])
  return (
    <div>
      <Header username={''} avatar={''} />
      <h1 className="px-1 block text-lg font-semibold text-center pt-4">Suggested</h1>
      <div className="flex flex-col absolute left-[50%] top-24 translate-x-[-50%]">
        {users.map((user: any) => (
          <Link href={'/users/' + user.data().id} key={user.data().id}>
            <a className="px-1 py-1 bg-white mb-3 flex flex-row">
              <img
                className="h-14 w-14 mr-3 rounded-full p-[1,5px] border-red-400 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out"
                src={user.data().avatar}
                alt=""
              />
              <div className="flex flex-col mr-10 pr-10 w-64">
                <h6 className="font-mono text-base">{user.data().username}</h6>
                <h4 className="text-sm text-gray-500">{user.data().name}</h4>
                <h6 className="text-xs text-gray-500">{user.data().company}</h6>
              </div>
              <button
                className="text-white bg-blue-500 text-xs font-semibold text-center w-14 h-6 rounded mt-4"
                onClick={() => setFlolow(!follow)}
              >
                {follow ? 'Follow' : 'Unfollow'}
              </button>
            </a>
          </Link>
        ))}
      </div>
    </div>
  )
}
