import React, { useMemo } from 'react'
import { Button, CircularProgress, Grid, SxProps, Theme, Tooltip, Typography } from "@mui/material"
import { Circle as CircleIcon } from "@mui/icons-material"
import { Item } from "../../items"
import { useContext } from "react"
import AppContext from "../../AppContext"
import { green, lime } from '@mui/material/colors'
import CircularProgressWithLabel from './ItemButtonIcon'

interface ItemButtonProps {
  item: Item;
}

const ItemButton = ({item}: ItemButtonProps) => {
  const { name } = item
  const { itemsStatus, itemValidities, toggleItem } = useContext(AppContext)

  const ret = useMemo(() => (
    <Button
      disableRipple
      size="large"
      startIcon={<CircularProgressWithLabel value={itemsStatus[name].curProgress / itemsStatus[name].totalProgress * 100} />}
      sx={{...buttonSx, color: itemsStatus[name].curProgress !== itemsStatus[name].totalProgress ? lime[400] : green[300]}}
      onClick={() => toggleItem(name)}
      disabled={!itemValidities[name]}
    >
      <Typography variant="h6">{name}</Typography>
    </Button>
  ), [name, itemsStatus[name], itemValidities[name], toggleItem])

  return ret
}

export default ItemButton

const buttonSx: SxProps<Theme> = {
  // flexDirection: 'column' 
}

const iconSx: SxProps<Theme> = {
  fontSize: "52px !important"
}