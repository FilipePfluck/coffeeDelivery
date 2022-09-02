import { useContext } from 'react'
import { CoffeContext } from '../../contexts/CoffeeContext'
import * as S from './styles'

interface QuantittButtonProps {
  id: number
  amount: number
}

export const QuantityButton = ({ id, amount }: QuantittButtonProps) => {
  const { decreaseAmountOfCoffee, increaseAmountOfCoffee } =
    useContext(CoffeContext)

  return (
    <S.Quantity>
      <button onClick={() => decreaseAmountOfCoffee(id)}>-</button>
      {amount}
      <button onClick={() => increaseAmountOfCoffee(id)}>+</button>
    </S.Quantity>
  )
}
