import { Box, Dialog, DialogContent, DialogTitle, SxProps, Theme } from "@mui/material"
import { Item } from "../../items";
import ItemButton from "./ItemButton";

interface ItemsDialogProps {
  open: boolean;
  type: string;
  items: Item[];
  handleClose: () => void;
}

const ItemsDialog = ({open, type, items, handleClose}: ItemsDialogProps) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
    >
      <DialogTitle>{type}</DialogTitle>
      <DialogContent 
        sx={contentSx}
        dividers={true}
      >
        {
          items.map(item => (
            <ItemButton
              key={item.name}
              item={item}
            />
          ))
        }
      </DialogContent>
    </Dialog>
  )
}

export default ItemsDialog

const contentSx: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
}