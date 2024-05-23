import React, { useState } from 'react'
import { Box, Button, Stack, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { IQuiz } from '../../../../types/IQuiz'
import DialogBackground from './DialogBackground'
import * as style from './Dialog.style'
import { useToastStore } from '../../../../states/useToastStore'

// display가 -1이면 첫 페이지, 0이면 퀴즈, 1이면 정답/오답 보여주기

const QuizBox = ({ quiz, setQuiz }: { quiz: IQuiz[]; setQuiz: React.Dispatch<React.SetStateAction<IQuiz[]>> }) => {
  const [images, setImages] = useState<[string, string]>([
    '/images/background/quizStart.svg',
    '/images/background/blackboard.png'
  ])
  const [display, setDisplay] = useState<number>(-1)
  const [userSelection, setUserSelection] = useState(-1)
  const { openToast } = useToastStore()

  const onQuizBoxClick = () => {
    if (quiz.length === 1) {
      if (quiz[0].answer !== userSelection) {
        setDisplay(0)
        return
      }
      openToast('모든 퀴즈를 풀었어요.', 'info')
      return
    }
    if (images[0] === '/images/background/quizStart.svg') {
      setImages(['/images/background/blackboard.png', ''])
      setDisplay(0)
    } else if (display === 1) {
      setDisplay(0)
      setQuiz((prev) => {
        if (prev[0].answer === userSelection) {
          return prev.slice(1)
        }
        const quiz = prev[0]
        return [...prev.slice(1), quiz]
      })
    }
  }

  const onAnswerClick = (index: number) => {
    return (e: React.MouseEvent) => {
      if (display % 2 === 0) {
        e.stopPropagation()
        setUserSelection(index)
        setDisplay(1)
      }
    }
  }

  return (
    <Box onClick={onQuizBoxClick} sx={style.dialogBoxStyle}>
      <DialogBackground images={images} />
      {display !== -1 && (
        <Box
          sx={{
            zIndex: 300,
            width: '100%',
            height: '100%'
          }}
        >
          {display === 0 && (
            <Stack
              direction={'column'}
              justifyContent={'space-between'}
              alignItems={'center'}
              sx={{
                width: '100%',
                height: '100%',
                p: ['1rem', '2rem'],
                pb: ['2rem', '4rem'],
                boxSizing: 'border-box'
              }}
            >
              <Typography
                variant={'Title2Emphasis'}
                sx={{
                  zIndex: 350,
                  height: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexGrow: 1
                }}
                align={'center'}
                fontFamily={'SOYOMapleBoldTTF'}
              >
                {quiz[0].question}
              </Typography>
              <Grid
                container
                spacing={2}
                sx={{
                  zIndex: 350
                }}
              >
                {quiz[0].options.map((option, index) => (
                  <Grid>
                    <Button
                      key={option}
                      onClick={onAnswerClick(index)}
                      variant={'contained'}
                      sx={{
                        height: '2.5rem',
                        borderRadius: '0.5rem'
                      }}
                    >
                      <Typography variant={'Body2'} fontFamily={'SOYOMapleBoldTTF'}>
                        {option}
                      </Typography>
                    </Button>
                  </Grid>
                ))}
              </Grid>
            </Stack>
          )}
          {display === 1 && (
            <Stack justifyContent={'center'} alignItems={'center'} width={1} height={1}>
              <Typography
                variant={'Title2Emphasis'}
                sx={{
                  zIndex: 350
                }}
                fontFamily={'SOYOMapleBoldTTF'}
              >
                {userSelection === quiz[0].answer ? '정답입니다!' : '오답입니다!'}
              </Typography>
            </Stack>
          )}
        </Box>
      )}
    </Box>
  )
}

export default QuizBox
