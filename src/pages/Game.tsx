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

const Game = ({ auth, database }: { auth: Auth; database: Database }) => {
  const { week, level: currLevel } = useParams()
  const [subLevel, setSubLevel] = useState<IDialog[]>(dialogList[Number(week) - 1][Number(currLevel) - 1].slice(1))

  const { profile, setProfile } = useProfileStore()
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState(false)
  const [progress, setProgress] = useState<IProgress | null>(null)

  useEffect(() => {
    if (!profile) {
      auth.onAuthChange((user) => {
        if (user) {
          setProfile({
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL
          })
          setIsLoading(true)
          const fetchData = async () => {
            await database.getProgress(user.displayName).then((data) => setProgress(data))
            setIsLoading(false)
          }
          if (!isLoading) fetchData()
        } else {
          navigate('/')
        }
      })
    }
  }, [])

  if (!profile || !progress || isLoading) {
    return (
      <Backdrop open>
        <CircularProgress />
      </Backdrop>
    )
  }

  if (!progress) return null

  return (
    <Stack spacing={4}>
      <Subtitle week={Number(week)} currLevel={Number(currLevel)} />
      <DialogBox week={Number(week)} level={Number(currLevel)} currLevel={subLevel} setCurrLevel={setSubLevel} />
      <NavButtons week={Number(week)} level={Number(currLevel)} setCurrLevel={setSubLevel} />
      <Typography variant={'Title3Emphasis'}>목록</Typography>
      <Stack spacing={4}>
        {levelList.map((level, index) => (
          <Level key={level.title} level={level} progress={progress[index]} />
        ))}
      </Stack>
    </Stack>
  )
}

export default Game
