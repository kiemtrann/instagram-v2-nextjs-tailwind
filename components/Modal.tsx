/* eslint-disable @next/next/no-img-element */
import * as React from 'react'
import { useRef, useState } from 'react'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/moduleAtom'
import { Dialog, Transition } from '@headlessui/react'
import { CameraIcon } from '@heroicons/react/outline'
import { addDoc, collection, serverTimestamp, updateDoc, doc } from '@firebase/firestore'
import { auth, db, storage } from '../firebase'
import { ref, getDownloadURL, uploadString } from '@firebase/storage'

export interface IModalProps {}

export default function Modal(props: IModalProps) {
  const [open, setOpen] = useRecoilState(modalState)
  const filePickerRef = useRef<HTMLInputElement>(null)
  const [selectedFile, setSelectedFile] = useState('')
  const [loading, setLoading] = useState(false)
  const captioRef = useRef<HTMLInputElement>(null)
  const uploadPost = async () => {
    if (loading) return setLoading(true)

    const docRef = await addDoc(collection(db, 'posts'), {
      username: auth.currentUser?.displayName ? auth.currentUser.displayName : '',
      caption: captioRef.current?.value,
      profileImg: auth.currentUser?.photoURL ? auth.currentUser?.photoURL : '',
      timestamp: serverTimestamp(),
    })

    const imageRef = ref(storage, `posts/${docRef.id}/image`)

    await uploadString(imageRef, selectedFile, 'data_url').then(async (anapshot) => {
      const dowloadURL = await getDownloadURL(imageRef)
      await updateDoc(doc(db, 'posts', docRef.id), {
        image: dowloadURL,
      })
    })
    setOpen(false)
    setLoading(false)
    setSelectedFile('')
  }
  const addImageToPost = (e: any) => {
    const reader = new FileReader()

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0])
    }
    reader.onload = (readerEvent: any) => {
      setSelectedFile(readerEvent.target?.result)
    }
  }
  return (
    <Transition.Root show={open} as={React.Fragment}>
      <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={setOpen}>
        <div className="flex items-center justify-center min-h-[800px] sm:min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity " />
          </Transition.Child>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203
          </span>
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
              <div>
                {selectedFile ? (
                  <img
                    className="w-full object-contain cursor-pointer"
                    src={selectedFile}
                    alt=""
                    onClick={() => setSelectedFile('')}
                  />
                ) : (
                  <div
                    className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 cursor-pointer"
                    onClick={() => filePickerRef.current?.click()}
                  >
                    <CameraIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                  </div>
                )}
                <div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                      Upload a photo
                    </Dialog.Title>
                    <input type="file" hidden ref={filePickerRef} onChange={addImageToPost} />
                  </div>
                  <div className="mt-2">
                    <input
                      type="text"
                      className="border-none focus:ring-0 w-full text-center"
                      ref={captioRef}
                      placeholder="Please enter a caption..."
                    />
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-6">
                <button
                  type="button"
                  disabled={!selectedFile}
                  className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-500 text-base font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400 sm:text-sm disabled:bg-gray-300 disabled:cursor-not-allowed"
                  onClick={uploadPost}
                >
                  {loading ? 'Uploading...' : 'Upload Post'}
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
