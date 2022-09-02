import Image from 'next/image'
import { ShoppingCart } from 'phosphor-react'
import { Coffee } from '../../contexts/CoffeeContext'
import { QuantityButton } from '../QuantityButton'
import * as S from './styles'

interface CoffeCardProps {
  coffee: Coffee
}

export const CoffeCard = ({ coffee }: CoffeCardProps) => {
  return (
    <S.CardContainer>
      <S.ImageContainer>
        <Image
          src={coffee.imageSrc}
          height={120}
          width={120}
          alt={coffee.name}
        />
      </S.ImageContainer>
      <S.TagList>
        {coffee.tags.map((tag, index) => (
          <S.Tag key={index}>{tag}</S.Tag>
        ))}
      </S.TagList>
      <strong>{coffee.name}</strong>
      <p>{coffee.description}</p>
      <S.PriceAndCartContainer>
        <div>
          <span>R$</span> <p>{coffee.price}</p>
        </div>
        <div>
          <QuantityButton id={coffee.id} amount={coffee.amount} />
          <S.CartButton>
            <ShoppingCart weight="fill" size={20} />
          </S.CartButton>
        </div>
      </S.PriceAndCartContainer>
    </S.CardContainer>
  )
}
