import React, { useMemo, useState } from 'react';
import './App.css';
import { Badge, Box, Button, Container, Grid, SxProps, Theme } from '@mui/material';
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import AppContext from './AppContext';
import { ITEMS } from './items';
import type { Item } from './items';
import ItemsDialog from './components/main/ItemsDialog';
import DialogTrigger from './components/main/DialogTrigger';

const App = () =>  {
  const [typeDialog, setTypeDialog] = useState<string | null>(null)
  const itemsByType = useMemo(() => (
    Object.values(ITEMS).reduce<{[type: string]: Item[]}>((acc, item) => {
      if ( acc[item.type] === undefined ) {
        acc[item.type] = []
      }
      acc[item.type].push(item)
      return acc
    }, {})
  ), [])

  return (
    <Container maxWidth="xs" sx={rootContainerSx}>
      <Header />
      <Box sx={mainSx}>
        {
          Object.entries(itemsByType).map(([type, items]) => (
            <DialogTrigger 
              key={`${type}-dialog`}
              type={type}
              items={items}
            />
          ))
        }
      </Box>
      <Footer />
    </Container>
  )
};

export default App;

const rootContainerSx: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100vh',
}

const mainSx: SxProps<Theme> = {
  flex: 1
}