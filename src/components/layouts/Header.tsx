import { useContext } from "react"
import { Box, IconButton, SxProps, Typography } from "@mui/material"

import AppContext from "../../AppContext"
import { Refresh as RefreshIcon } from "@mui/icons-material"

const Header = () => {
  const { resources, resetGame } = useContext(AppContext)

  return (
    <Box sx={rootSx}>
      {
        Object.entries(resources).map(([k, v]) => (
          <Box key={k}>
            <Typography>{k}</Typography>
            <Typography>{showDigit(v)}</Typography>
          </Box>
        ))
      }
      <IconButton onClick={resetGame}>
        <RefreshIcon />
      </IconButton> 
    </Box>
  ) 
}

export default Header

const rootSx: SxProps = {
  display: 'flex',
  justifyContent: 'space-between'
}

const showDigit = (num: number): string => {
  if (num >= 1000000000) {
      return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
  }
  if (num >= 1000000) {
      return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
  }
  if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
  }
  return `${num}`;
}