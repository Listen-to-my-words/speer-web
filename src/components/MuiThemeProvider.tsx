import React from 'react'
import { ThemeProvider } from '@mui/material'
import colorTheme from '../const/ColorTheme'

declare module '@mui/material/styles' {
  // typography variant 추가
  interface TypographyVariants {
    Title1Emphasis: React.CSSProperties
    Title1: React.CSSProperties
    Title2Emphasis: React.CSSProperties
    Title2: React.CSSProperties
    Title3Emphasis: React.CSSProperties
    Title3: React.CSSProperties
    Subtitle1Emphasis: React.CSSProperties
    Subtitle1: React.CSSProperties
    Subtitle2Emphasis: React.CSSProperties
    Subtitle2: React.CSSProperties
    Body1Emphasis: React.CSSProperties
    Body1: React.CSSProperties
    Body2Emphasis: React.CSSProperties
    Body2: React.CSSProperties
    CaptionEmphasis: React.CSSProperties
    Caption: React.CSSProperties
  }

  // typography 추가된 variant 커스텀 할 수 있도록 설정
  interface TypographyVariantsOptions {
    Title1Emphasis?: React.CSSProperties
    Title1?: React.CSSProperties
    Title2Emphasis?: React.CSSProperties
    Title2?: React.CSSProperties
    Title3Emphasis?: React.CSSProperties
    Title3?: React.CSSProperties
    Subtitle1Emphasis?: React.CSSProperties
    Subtitle1?: React.CSSProperties
    Subtitle2Emphasis?: React.CSSProperties
    Subtitle2?: React.CSSProperties
    Body1Emphasis?: React.CSSProperties
    Body1?: React.CSSProperties
    Body2Emphasis?: React.CSSProperties
    Body2?: React.CSSProperties
    CaptionEmphasis?: React.CSSProperties
    Caption?: React.CSSProperties
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    Title1Emphasis: true
    Title1: true
    Title2Emphasis: true
    Title2: true
    Title3Emphasis: true
    Title3: true
    Subtitle1Emphasis: true
    Subtitle1: true
    Subtitle2Emphasis: true
    Subtitle2: true
    Body1Emphasis: true
    Body1: true
    Body2Emphasis: true
    Body2: true
    CaptionEmphasis: true
    Caption: true
  }
}

const MuiThemeProvider = ({ children }: { children: React.ReactNode }) => {
  if (colorTheme.components) {
    colorTheme.components.MuiTypography = {
      defaultProps: {
        variantMapping: {
          Title1Emphasis: 'h1',
          Title1: 'h1',
          Title2Emphasis: 'h2',
          Title2: 'h2',
          Title3Emphasis: 'h3',
          Title3: 'h3',
          Subtitle1Emphasis: 'h4',
          Subtitle1: 'h4',
          Subtitle2Emphasis: 'h5',
          Subtitle2: 'h5',
          Body1Emphasis: 'p',
          Body1: 'p',
          Body2Emphasis: 'p',
          Body2: 'p',
          CaptionEmphasis: 'span',
          Caption: 'span'
        }
      }
    }
  }

  if (colorTheme.typography) {
    // colorTheme.typography.fontFamily = 'var(--main-font), Pretendard Variable'

    colorTheme.typography.Title1Emphasis = {
      fontWeight: 700,
      // fontSize: '2.5rem',
      fontSize: 40,
      // color: colorTheme.palette.text.primary,
      lineHeight: 1.5,
      [colorTheme.breakpoints.down('sm')]: {
        // fontSize: '2.25rem'
        fontSize: 36
      }
    }

    colorTheme.typography.Title1 = {
      fontWeight: 400,
      // fontSize: '2.5rem',
      fontSize: 40,
      lineHeight: 1.5,
      // color: colorTheme.palette.text.primary,
      [colorTheme.breakpoints.down('sm')]: {
        // fontSize: '2.25rem'
        fontSize: 36
      }
    }

    colorTheme.typography.Title2Emphasis = {
      fontWeight: 700,
      // fontSize: '2.25rem',
      fontSize: 36,
      lineHeight: 1.5,
      // color: colorTheme.palette.text.primary,
      [colorTheme.breakpoints.down('sm')]: {
        // fontSize: '2rem'
        fontSize: 18
      }
    }

    colorTheme.typography.Title2 = {
      fontWeight: 400,
      // fontSize: '2.25rem',
      fontSize: 36,
      lineHeight: 1.5,
      // color: colorTheme.palette.text.primary,
      [colorTheme.breakpoints.down('sm')]: {
        // fontSize: '2rem'
        fontSize: 18
      }
    }

    colorTheme.typography.Title3Emphasis = {
      fontWeight: 700,
      // fontSize: '2rem',
      fontSize: 32,
      lineHeight: 1.5,
      // color: colorTheme.palette.text.primary,
      [colorTheme.breakpoints.down('sm')]: {
        // fontSize: '1.75rem'
        fontSize: 16
      }
    }

    colorTheme.typography.Title3 = {
      fontWeight: 400,
      // fontSize: '2rem',
      fontSize: 32,
      lineHeight: 1.5,
      // color: colorTheme.palette.text.primary,
      [colorTheme.breakpoints.down('sm')]: {
        // fontSize: '1.75rem'
        fontSize: 16
      }
    }

    colorTheme.typography.Subtitle1Emphasis = {
      fontWeight: 600,
      // fontSize: '1.5rem',
      fontSize: 20,
      lineHeight: 1.5,
      // color: colorTheme.palette.text.primary,
      [colorTheme.breakpoints.down('sm')]: {
        // fontSize: '1.25rem'
        fontSize: 14
      }
    }

    colorTheme.typography.Subtitle1 = {
      fontWeight: 400,
      // fontSize: '1.5rem',
      fontSize: 20,
      lineHeight: 1.5,
      // color: colorTheme.palette.text.primary,
      [colorTheme.breakpoints.down('sm')]: {
        // fontSize: '1.25rem'
        fontSize: 14
      }
    }

    colorTheme.typography.Subtitle2Emphasis = {
      fontWeight: 600,
      // fontSize: '1.25rem',
      fontSize: 18,
      lineHeight: 1.5,
      // color: colorTheme.palette.text.primary,
      [colorTheme.breakpoints.down('sm')]: {
        // fontSize: '1rem'
        fontSize: 12
      }
    }

    colorTheme.typography.Subtitle2 = {
      fontWeight: 400,
      // fontSize: '1.25rem',
      fontSize: 18,
      lineHeight: 1.5,
      // color: colorTheme.palette.text.primary,
      [colorTheme.breakpoints.down('sm')]: {
        // fontSize: '1rem'
        fontSize: 12
      }
    }

    colorTheme.typography.Body1Emphasis = {
      fontWeight: 500,
      // fontSize: '1rem',
      fontSize: 16,
      lineHeight: 1.5,
      // color: colorTheme.palette.text.primary,
      [colorTheme.breakpoints.down('sm')]: {
        // fontSize: '0.875rem'
        fontSize: 12
      }
    }

    colorTheme.typography.Body1 = {
      fontWeight: 400,
      // fontSize: '1rem',
      fontSize: 16,
      lineHeight: 1.5,
      // color: colorTheme.palette.text.primary,
      [colorTheme.breakpoints.down('sm')]: {
        // fontSize: '0.875rem'
        fontSize: 12
      }
    }

    colorTheme.typography.Body2Emphasis = {
      fontWeight: 500,
      // fontSize: '0.875rem',
      fontSize: 14,
      lineHeight: 1.5,
      // color: colorTheme.palette.text.primary,
      [colorTheme.breakpoints.down('sm')]: {
        // fontSize: '0.75rem'
        fontSize: 12
      }
    }

    colorTheme.typography.Body2 = {
      fontWeight: 400,
      // fontSize: '0.875rem',
      fontSize: 14,
      lineHeight: 1.5,
      // color: colorTheme.palette.text.primary,
      [colorTheme.breakpoints.down('sm')]: {
        // fontSize: '0.75rem'
        fontSize: 12
      }
    }

    colorTheme.typography.CaptionEmphasis = {
      fontWeight: 500,
      // fontSize: '0.75rem',
      fontSize: 12,
      lineHeight: 1.5,
      // color: colorTheme.palette.text.primary,
      [colorTheme.breakpoints.down('sm')]: {
        // fontSize: '0.625rem'
        fontSize: 10
      }
    }

    colorTheme.typography.Caption = {
      fontWeight: 400,
      // fontSize: '0.75rem',
      fontSize: 12,
      lineHeight: 1.5,
      // color: colorTheme.palette.text.primary,
      [colorTheme.breakpoints.down('sm')]: {
        // fontSize: '0.625rem'
        fontSize: 10
      }
    }
  }

  return <ThemeProvider theme={colorTheme}>{children}</ThemeProvider>
}

export default MuiThemeProvider
