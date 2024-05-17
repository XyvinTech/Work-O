import { Radio } from '@mui/material'
import React from 'react'

const StyledRadioButton = () => {
  return (
    <Radio

    sx={{
      color: "primary",
      '&.Mui-checked': {
        color: "primary",
      },
    }}
  />

  )
}

export default StyledRadioButton
