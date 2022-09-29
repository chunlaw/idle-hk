import { useContext } from "react"
import { 
  EmojiEvents as EmojiEventsIcon,
  Assignment as AssignmentIcon,
  AccountTree as AccountTreeIcon,
} from '@mui/icons-material'
import { BottomNavigation, BottomNavigationAction, SxProps, Theme } from "@mui/material"

import AppContext from "../../AppContext"

const Footer = () => {
  const { tab, setTab } = useContext(AppContext)
  return (
    <BottomNavigation
      sx={rootSx}
      value={tab}
    >
      <BottomNavigationAction
        label={"任務"}
        value="quests"
        icon={<AssignmentIcon />}
        onClick={() => setTab("quests")}
        disableRipple
      />
      <BottomNavigationAction
        label={'成就'}
        value="achievements"
        icon={<EmojiEventsIcon />}
        onClick={() => setTab("achievements")}
        disableRipple
      />
    </BottomNavigation>
  )
}

export default Footer

const rootSx: SxProps<Theme> = {
  background: 'transparent'
}