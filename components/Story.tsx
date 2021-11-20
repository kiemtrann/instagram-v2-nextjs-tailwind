/* eslint-disable @next/next/no-img-element */
import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

export interface IStoryProps {
  key: number
  img: string
  username: string
}

export default function Story(props: IStoryProps) {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  setTimeout(() => {
    handleClose()
  }, 4000)
  return (
    <div>
      <div onClick={handleOpen}>
        <img
          className="h-14 w-14 rounded-full p-[1,5px] border-red-400 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out"
          src={props.img}
          alt=""
        />
        <p className="text-xs w-14 truncate text-center">{props.username}</p>
      </div>
      <div onClick={handleClose}>
        <Modal
          open={open}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className="flex flex-col h-screen w-full">
            <div className="flex flex-row justify-center items-center my-8 h-screen">
              <div className="absolute mx-2 rounded-lg">
                <img
                  src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4233a509-1851-4be6-b416-939e158fbe08/dbkwgki-3cffe03c-514f-41a8-a81e-1511fc5144d6.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQyMzNhNTA5LTE4NTEtNGJlNi1iNDE2LTkzOWUxNThmYmUwOFwvZGJrd2draS0zY2ZmZTAzYy01MTRmLTQxYTgtYTgxZS0xNTExZmM1MTQ0ZDYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.qZ6Nx69p3TK5PfJHuYpxim9Im-nEDEMr0OsahQ-pB1E"
                  alt=""
                  className="fixed justify-center items-center object-center w-[350px] h-[580px] transition-transform bg-contain bg-no-repeat rounded-lg"
                />
                <img
                  src={props.img}
                  alt=""
                  className="flex justify-center items-center object-center w-[350px] h-[580px] transition-transform bg-contain bg-no-repeat rounded-lg"
                />
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  )
}
