/* eslint-disable @next/next/no-img-element */
import * as React from 'react'
import { addDoc, collection, serverTimestamp } from '@firebase/firestore'
import { db, storage } from '../firebase'
import { ref, getDownloadURL, uploadString, getStorage } from '@firebase/storage'
import { useRef, useState } from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { CameraIcon } from '@heroicons/react/outline'

interface ImageFile {
  name: string
}
export default function FormDialog(props: {
  setAvata: (value: React.SetStateAction<string>) => void
}) {
  const { setAvata: setAvatar } = props
  const [open, setOpen] = React.useState(false)
  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  const filePickerRef = useRef<HTMLInputElement>(null)
  const [selectedFile, setSelectedFile] = useState('')
  const [imageAsFile, setImageAsFile] = useState<ImageFile>({ name: '' })
  const uploadImage = async () => {
    const docRef = await addDoc(collection(db, 'images'), {
      timestamp: serverTimestamp(),
    })
    const imageRef = ref(storage, `images/${imageAsFile.name}`)
    await uploadString(imageRef, selectedFile, 'data_url').then(async () => {
      const URL = await getDownloadURL(imageRef)
      await setAvatar(URL)
    })
    setSelectedFile('')
  }
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Select Avatar
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <p className="text-xl font-semibold items-center text-center">Select Avatar</p>
        <DialogContent>
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
              <DialogTitle className="text-lg leading-6 font-medium text-gray-900">
                Upload a photo
              </DialogTitle>
              <input
                type="file"
                hidden
                ref={filePickerRef}
                onChange={(e: any) => {
                  const image = e.target.files[0]
                  const reader = new FileReader()
                  setImageAsFile((imageFile) => image)
                  if (e.target.files[0]) {
                    reader.readAsDataURL(e.target.files[0])
                  }
                  reader.onload = (readerEvent: any) => {
                    setSelectedFile(readerEvent.target?.result)
                  }
                }}
              />
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={() => {
              uploadImage()
              setAvatar(selectedFile)
              handleClose()
            }}
          >
            Select Avatar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
