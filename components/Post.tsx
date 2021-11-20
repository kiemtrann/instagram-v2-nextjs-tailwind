/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react'
import * as React from 'react'
import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/outline'
import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid'
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from 'firebase/firestore'
import { auth, db } from '../firebase'
import Moment from 'react-moment'

export interface IPostProps {
  key: number
  username: string
  userImg: string
  img: string
  caption: string
}

export default function Post(props: IPostProps) {
  const [comment, setComment] = useState('')
  const [comments, setComments] = useState([])
  const [likes, setLikes] = useState(true)
  const [like, setLike] = useState(1120)
  const id = ' '
  useEffect(
    () =>
      onSnapshot(
        query(collection(db, 'posts', id, 'comments'), orderBy('timestamp', 'desc')),
        (snapshot: any) => {
          setComments(snapshot.docs)
        }
      ),
    [db]
  )
  const sendComment = async (e: any) => {
    e.preventDefault()
    const commentToSend = comment
    setComment('')
    await addDoc(collection(db, 'posts', id, 'comments'), {
      comment: commentToSend,
      username: auth.currentUser?.displayName ? auth.currentUser.displayName : '',
      userImage: auth.currentUser?.photoURL ? auth.currentUser?.photoURL : '',
      timestamp: serverTimestamp(),
    })
  }
  return (
    <div className="bg-white my-7 border-2 rounded-sm">
      <div className="flex items-center p-5">
        <img
          className="rounded-full h-12 w-12 object-contain boder p-1 mr-3"
          src={props.userImg}
          alt=""
        />
        <p className="flex-1 font-bold">{props.username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>
      <img
        className="object-cover w-full"
        src={props.img}
        alt=""
        onClick={() => {
          if (likes) {
            setLikes(!likes)
            setLike(like + 1)
          } else {
            setLikes(!likes)
            setLike(like - 1)
          }
        }}
      />
      <div className="flex justify-between">
        <div className="flex space-x-4">
          {likes ? (
            <HeartIcon
              className="btn"
              onClick={() => {
                setLikes(!likes)
                setLike(like + 1)
              }}
            />
          ) : (
            <HeartIconFilled
              className="btn"
              onClick={() => {
                setLikes(!likes)
                setLike(like - 1)
              }}
            />
          )}
          <ChatIcon className="btn" />
          <PaperAirplaneIcon className="btn" />
        </div>
        <BookmarkIcon className="btn" />
      </div>
      <p className="flex flex-row space-x-1 text-base pt-3 pl-3">
        <span>Likesd by</span>
        <span className="font-bold"> __vankiem__ </span>
        <span>and</span>
        <span className="font-bold">{like}</span>
        <span className="font-bold">others</span>
      </p>
      <p className="p-5 truncate">
        <span className="font-bold mr-1">{props.username}</span> {props.caption}
      </p>

      {comments.length > 0 && (
        <div className="ml-10 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin">
          {comments.map((comment: any) => (
            <div key={comment.data().id} className="flex items-center space-x-2">
              <img src={comment.data().userImage} alt="" className="h-7 rounded-full" />
              <p className="text-sm flex-1">
                <span className="font-bold mr-3">{comment.data().username}</span>
                {comment.data().comment}
              </p>
              <Moment fromNow className="pr-5 text-xs">
                {comment.data().timestamp?.toDate()}
              </Moment>
            </div>
          ))}
        </div>
      )}

      <form className="flex items-center p-4 border-t">
        <EmojiHappyIcon className="h-7" />
        <input
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="border-none flex-1 focus:ring-0 outline-none"
          type="text"
          placeholder="Add a comment..."
        />
        <button
          type="submit"
          disabled={!comment.trim()}
          onClick={sendComment}
          className="font-semibold text-blue-400"
        >
          Post
        </button>
      </form>
    </div>
  )
}
