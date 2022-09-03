import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { CoffeContext } from '../../contexts/CoffeeContext'

import * as S from './styles'

export const Header = () => {
  const { coffees } = useContext(CoffeContext)

  const amountOfCoffeesInCart = coffees.filter(
    (coffee) => coffee.amount > 0,
  ).length

  return (
    <S.HeaderContainer>
      <Link href="/">
        <Image
          src="/Logo.svg"
          height={40}
          width={85}
          alt=""
          style={{ cursor: 'pointer' }}
        />
      </Link>
      <S.RightContent>
        <Link href="/checkout">
          <S.Cart>
            <ShoppingCart size={24} weight="fill" />
            {!!amountOfCoffeesInCart && (
              <S.Badge>{amountOfCoffeesInCart}</S.Badge>
            )}
          </S.Cart>
        </Link>
      </S.RightContent>
    </S.HeaderContainer>
  )
}
