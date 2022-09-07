import { Chip } from '@mui/material'
import React from 'react'

const CurrencyChip = ({label}) => {
  return (
    <div><Chip>{label}</Chip></div>
  )
}

export default CurrencyChip