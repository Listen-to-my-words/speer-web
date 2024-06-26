import { SxProps } from '@mui/system'

export const dialogBoxSizeStyle: SxProps = {
  width: '100%',
  maxWidth: '53.25rem',
  height: ['23rem', 'calc((100vw - 3rem) / 5 * 4)'],
  maxHeight: ['23rem', '42.6rem'],
  borderRadius: '0.75rem'
}

export const dialogBoxStyle: SxProps = {
  ...dialogBoxSizeStyle,
  backgroundColor: 'lightgray',
  position: 'relative',
  boxShadow: '0px 4px 4px 0px #B0B0B040',
  overflow: 'hidden'
}

export const dialogBackgroundStyle: SxProps = {
  ...dialogBoxSizeStyle,
  objectFit: 'cover',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  width: '100%',
  height: '100%'
}

export const dialogStyle: SxProps = {
  backgroundColor: 'white',
  width: '100%',
  height: ['5rem', 'calc((100vw - 3rem) / 9)'],
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
  bottom: ['0', '1rem']
}

export const dialogTextStyle: SxProps = {
  mx: [0, '2rem'],
  my: [0, 0, '1rem'],
  fontSize: ['0.75rem', '0.75rem', '1rem'],
  transition: 'all 0.3s'
}
