import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { Resources, Tab } from './data.d'
import { ITEMS } from './items';

interface AppState {
  resources: Resources;
  base: Resources;
  factors: Resources;
  gametime: number;
  createTime: number;
  itemsStatus: {
    [k: string]: {
      curProgress: number,
      totalProgress: number,
    }
  },
  tab: Tab;
}

interface AppContextProps extends AppState {
  itemValidities: {[k:string]: boolean};
  toggleItem: (name: string) => void;
  resetGame: () => void;
  setTab: (tab: Tab) => void;
}

const AppContext = React.createContext<AppContextProps>({} as AppContextProps);

export const AppContextProvider = ({children}: {children: React.ReactNode}) => {
  const [state, setState] = useState<AppState>(
    JSON.parse(localStorage.getItem('idle-hk') ?? "null") ?? DEFAULT_STATE
  );

  const setTab = useCallback( (tab: Tab) => {
    setState(prev => ({
      ...prev,
      tab
    }))
  }, [setState] )

  useEffect(() => {
    localStorage.setItem('idle-hk', JSON.stringify(state))
  }, [state])

  useEffect(() => {
    const timer = setInterval(() => {
      setState(prev => {
        const resources = JSON.parse(JSON.stringify(prev.resources))
        for ( const prop in prev.resources ) {
          resources[prop] += prev.base[prop] * prev.factors[prop]
        }
        const itemsStatus = JSON.parse(JSON.stringify(prev.itemsStatus))
        for ( const i in itemsStatus ) {
          if ( itemsStatus[i].curProgress >= 0 && itemsStatus[i].curProgress < itemsStatus[i].totalProgress ) {
            itemsStatus[i].curProgress = Math.min( itemsStatus[i].curProgress + 500, itemsStatus[i].totalProgress )
          }
        }
        return ({
          ...prev,
          resources,
          itemsStatus,
          gametime: prev.gametime + 500
        })
      })
    }, 500);

    return () => {
      if ( timer ) {
        clearInterval(timer)
      }
    }
  }, [])

  const itemValidities = useMemo<{[k: string]: boolean}>(() => {
    return Object.entries(ITEMS).reduce((acc, [name, item]) => ({
      ...acc,
      [name]: item.dependencies.reduce((acc, cur) => (
            acc && state.itemsStatus[cur].curProgress === state.itemsStatus[cur].totalProgress
        ), true)
    }), {})
  }, [state.itemsStatus, state.gametime])

  const toggleItem = (name: string) => {
    if ( !itemValidities[name] ) return;
    if ( state.itemsStatus[name]?.curProgress !== -1 ) return;

    setState(prev => {
      const base: Resources = {}
      const factors: Resources = {}
      for ( const prop in state.base ) {        
        base[prop] = state.base[prop] + ( ITEMS[name].val[prop] ?? 0 )
        factors[prop] = state.base[prop] * ( ITEMS[name].factor[prop] ?? 1 )
      }

      const itemsStatus = { 
        ...prev.itemsStatus,
        [name]: {
          ...prev.itemsStatus[name],
          curProgress: 0,
        }
      }

      return {
        ...prev,
        base,
        factors,
        itemsStatus,
      }
    })
  }

  const resetGame = () => {
    localStorage.clear()
    window.location.reload();
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        itemValidities,
        toggleItem,
        resetGame,
        setTab,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const DEFAULT_STATE: AppState = {
  resources: {
    money: 0,
    population: 100,
  },
  base: {
    money: 1,
    population: 1,
  },
  factors: {
    money: 1,
    population: 1,
  },
  gametime: 0,
  createTime: Date.now(),
  itemsStatus: Object.values(ITEMS).reduce((acc, {name, seconds}) => ({
    ...acc,
    [name]: {
      curProgress: -1,
      totalProgress: seconds * 1000
    }
  }), {}),
  tab: null,
}

export default AppContext