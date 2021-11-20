/* eslint-disable react-hooks/exhaustive-deps */
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import * as React from 'react'
import { useEffect, useState } from 'react'
import { db } from '../firebase'
import Post from './Post'

export interface IPostsProps {}

export default function Posts(props: IPostsProps) {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    return onSnapshot(
      query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
      (snapshot: any) => {
        setPosts(snapshot.docs)
      }
    )
  }, [db])
  return (
    <div>
      {posts.map((post: any) => (
        <Post
          key={post.id}
          username={post.data().username}
          userImg={post.data().profileImg}
          img={post.data().image}
          caption={post.data().caption}
        />
      ))}
    </div>
  )
}
