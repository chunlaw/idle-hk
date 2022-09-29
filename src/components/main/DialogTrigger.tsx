import { Box, Badge, Button } from "@mui/material"
import { useContext, useMemo, useState } from "react"
import AppContext from "../../AppContext";
import { Item } from "../../items";
import ItemsDialog from "./ItemsDialog";

interface DialogTriggerProps {
  type: string;
  items: Item[];
}


const DialogTrigger = ({type, items}: DialogTriggerProps) => {
  const [open, setOpen] = useState<boolean>(false)
  const { itemsStatus, itemValidities } = useContext(AppContext)

  const count = useMemo(() => {
    return items.filter(({name}) => itemValidities[name] && itemsStatus[name].curProgress === -1 ).length
  }, [items, itemsStatus, itemValidities])

  return (
    <Box sx={{my: 2}}>
      <Badge badgeContent={count} color="error">
        <Button
          onClick={() => setOpen(true)}
          variant="contained"
        >
          {type}
        </Button>
      </Badge>
      <ItemsDialog
        type={type}
        items={items}
        open={open}
        handleClose={() => setOpen(false)}
      />
    </Box>
  )
}

export default DialogTrigger