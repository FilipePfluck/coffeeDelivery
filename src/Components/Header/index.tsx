import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCart, MapPin } from 'phosphor-react'

import * as S from './styles'

export const Header = () => {
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
        <S.Location>
          <MapPin size={20} weight="fill" />
          Porto Alegre, RS
        </S.Location>
        <Link href="/checkout">
          <S.Cart>
            <ShoppingCart size={20} weight="fill" />
          </S.Cart>
        </Link>
      </S.RightContent>
    </S.HeaderContainer>
  )
}
