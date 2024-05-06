import { SxProps } from '@mui/system'

export const dialogBoxSizeStyle: SxProps = {
  width: '100%',
  maxWidth: '53.25rem',
  height: 'calc((100vw - 3rem) / 9 * 4)',
  maxHeight: '23rem',
  borderRadius: '0.75rem'
}

export const dialogBoxStyle: SxProps = {
  ...dialogBoxSizeStyle,
  backgroundColor: 'lightgray'
}

export const dialogStyle: SxProps = {
  backgroundColor: 'white',
  width: '100%',
  height: ['3.5rem', 'calc((100vw - 3rem) / 9)'],
  maxHeight: '23rem',
  position: 'absolute',
  bottom: 0,
  border: '1px solid lightgrey',
  borderRadius: '0.75rem',
  zIndex: 100,
  p: '1rem',
  boxSizing: 'border-box'
}

export const arrowStyle: SxProps = {
  position: 'absolute',
  color: 'lightgrey',
  right: '1rem',
  bottom: '1rem'
}

export const dialogTextStyle: SxProps = {
  mx: '2rem',
  my: '1rem'
}
