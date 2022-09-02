import { createContext, ReactNode, useState } from 'react'
import { produce } from 'immer'

import { startingCoffees } from '../utils/coffees'

export interface Coffee {
  id: number
  name: string
  description: string
  price: number
  imageSrc: string
  tags: string[]
  amount: number
}

interface CoffeeContextData {
  coffees: Coffee[]
  increaseAmountOfCoffee: (id: number) => void
  decreaseAmountOfCoffee: (id: number) => void
  removeCoffeeFromCart: (id: number) => void
}

interface ProviderProps {
  children: ReactNode
}

export const CoffeContext = createContext({} as CoffeeContextData)

export const CoffeContextProvider = ({ children }: ProviderProps) => {
  const [coffees, setCoffees] = useState(startingCoffees)

  const increaseAmountOfCoffee = (id: number) => {
    setCoffees(
      produce(coffees, (draft) => {
        const index = draft.findIndex((coffee) => coffee.id === id)
        draft[index].amount++
      }),
    )
  }

  const decreaseAmountOfCoffee = (id: number) => {
    setCoffees(
      produce(coffees, (draft) => {
        const index = draft.findIndex((coffee) => coffee.id === id)
        draft[index].amount > 0
          ? draft[index].amount--
          : (draft[index].amount = 0)
      }),
    )
  }

  const removeCoffeeFromCart = (id: number) => {
    setCoffees(
      produce(coffees, (draft) => {
        const index = draft.findIndex((coffee) => coffee.id === id)
        draft[index].amount = 0
      }),
    )
  }

  return (
    <CoffeContext.Provider
      value={{
        coffees,
        decreaseAmountOfCoffee,
        increaseAmountOfCoffee,
        removeCoffeeFromCart,
      }}
    >
      {children}
    </CoffeContext.Provider>
  )
}
