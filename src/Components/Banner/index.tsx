import Image from 'next/image'
import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'
import * as S from './styles'

export const Banner = () => {
  return (
    <S.BannerContainer>
      <S.BannerContent>
        <S.LeftSection>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <S.AttractivesGrid>
            <S.Attractive color="yellowDark">
              <div>
                <ShoppingCart weight="fill" size={16} />
              </div>
              Compra simples e segura
            </S.Attractive>
            <S.Attractive color="gray">
              <div>
                <Package weight="fill" size={16} />
              </div>
              Embalagem mantem o café intacto
            </S.Attractive>
            <S.Attractive color="yellow">
              <div>
                <Timer weight="fill" size={16} />
              </div>
              Entrega rápida e rastreada
            </S.Attractive>
            <S.Attractive color="purple">
              <div>
                <Coffee weight="fill" size={16} />
              </div>
              O café chega fresquinho até você
            </S.Attractive>
          </S.AttractivesGrid>
        </S.LeftSection>
        <Image
          src="/Hero.png"
          height={360}
          width={476}
          alt="Café do Coffee Delivery"
        />
      </S.BannerContent>
    </S.BannerContainer>
  )
}
