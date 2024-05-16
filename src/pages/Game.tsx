import React, { useEffect, useState } from 'react'
import { Backdrop, CircularProgress, Stack, Typography } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import DialogBox from '../components/game-page/game/dialog/DialogBox'
import Subtitle from '../components/game-page/game/Subtitle'
import NavButtons from '../components/game-page/game/NavButtons'
import Level from '../components/game-page/lists/Level'
import { levelList } from '../const/LevelList'
import useProfileStore from '../states/useProfileStore'
import Auth from '../service/auth'
import Database from '../service/database'
import { IProgress } from '../types/IProgress'
import { IDialog } from '../types/IDialogs'
import { dialogList } from '../const/DialogList'
import { useToastStore } from '../states/useToastStore'

const Game = ({ auth, database }: { auth: Auth; database: Database }) => {
  const { week, level: currLevel } = useParams()
  const [subLevel, setSubLevel] = useState<IDialog[]>(dialogList[Number(week) - 1][Number(currLevel) - 1].slice(1))
  const [images, setImages] = useState<[string, string]>(['', ''])

  const { profile, setProfile } = useProfileStore()
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState(false)
  const [progress, setProgress] = useState<IProgress | null>(null)

  const { openToast } = useToastStore()

  useEffect(() => {
    const fetchData = async (displayName: string) => {
      await database.getProgress(displayName).then((data) => setProgress(data))
      setIsLoading(false)
    }

    if (!profile) {
      auth.onAuthChange((user) => {
        if (user) {
          setProfile({
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL
          })
          setIsLoading(true)
          if (!isLoading) fetchData(user.displayName)
        } else {
          openToast('로그인이 필요해요.', 'error')
          navigate('/')
        }
      })
    } else if (!isLoading) {
      setIsLoading(true)
      fetchData(profile.displayName)
    }
  }, [])

  useEffect(() => {
    setSubLevel(() => {
      const currDialog = dialogList[Number(week) - 1][Number(currLevel) - 1]
      const currImage = dialogList[Number(week) - 1][Number(currLevel) - 1][0]
      const nextImage = dialogList[Number(week) - 1][Number(currLevel) - 1].find(
        (dialog) => dialog.type === 'CHANGE_IMAGE' && dialog.content !== currImage?.content
      )
      setImages(() => [currImage ? currImage.content : '', nextImage ? nextImage.content : ''])
      return currDialog.slice(1)
    })
  }, [week, currLevel])

  if (!profile) {
    return (
      <Backdrop open>
        <CircularProgress />
      </Backdrop>
    )
  }

  if (!progress) return null

  const updateProgress = (level: number, updateProgress: number) => {
    const newProgress = progress
    newProgress[Number(week) - 1][Number(level) - 1] = updateProgress
    setProgress(newProgress)
    database.setProgress(profile.displayName, newProgress)
  }

  return (
    <Stack spacing={4}>
      <Subtitle week={Number(week)} currLevel={Number(currLevel)} />
      <DialogBox
        level={Number(currLevel)}
        currLevel={subLevel}
        setCurrLevel={setSubLevel}
        updateProgress={updateProgress}
        images={images}
        setImages={setImages}
      />
      <NavButtons week={Number(week)} level={Number(currLevel)} setCurrLevel={setSubLevel} />
      <Typography variant={'Title3Emphasis'}>목록</Typography>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Stack spacing={4}>
          {levelList.map((level, index) => (
            <Level key={level.title} level={level} progress={progress[index]} />
          ))}
        </Stack>
      )}
    </Stack>
  )
}

export default Game
