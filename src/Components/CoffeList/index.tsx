import { useContext } from 'react'
import { CoffeContext } from '../../contexts/CoffeeContext'
import { CoffeCard } from '../CoffeeCard'
import * as S from './styles'

export const CoffeList = () => {
  const { coffees } = useContext(CoffeContext)

  return (
    <S.CoffeeListContainer>
      <strong>Nossos Cafés</strong>
      <S.Grid>
        {coffees?.map((coffee) => (
          <CoffeCard key={coffee.id} coffee={coffee} />
        ))}
      </S.Grid>
    </S.CoffeeListContainer>
  )
}
