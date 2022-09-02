import Image from 'next/image'
import Link from 'next/link'
import { Trash } from 'phosphor-react'
import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { CoffeContext } from '../../contexts/CoffeeContext'
import { deliveryFormData } from '../../pages/checkout'
import { Button } from '../Button'
import { QuantityButton } from '../QuantityButton'
import * as S from './styles'

interface CoffeeItemProps {
  id: number
  amount: number
  name: string
  price: string
  src: string
}

const CoffeItem = ({ id, amount, name, price, src }: CoffeeItemProps) => {
  const { removeCoffeeFromCart } = useContext(CoffeContext)

  return (
    <S.CoffeeItem>
      <Image src={src} height={64} width={64} alt="Expresso Tradicional" />
      <div>
        <p>{name}</p>
        <S.ActionsContainer>
          <QuantityButton id={id} amount={amount} />
          <Button onClick={() => removeCoffeeFromCart(id)}>
            <Trash size={16} />
            REMOVER
          </Button>
        </S.ActionsContainer>
      </div>
      <span>{price}</span>
    </S.CoffeeItem>
  )
}

export const CheckoutSummary = () => {
  const { handleSubmit } = useFormContext()

  const { coffees } = useContext(CoffeContext)

  const selectedCoffees = coffees.filter((coffee) => coffee.amount > 0)

  const totalCoffeePrice = selectedCoffees.reduce((acc, curr) => {
    return acc + curr.amount * curr.price
  }, 0)

  const shippingPrice = 4.6

  const totalPrice = totalCoffeePrice + shippingPrice

  const priceFormat = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  })

  const confirmOrder = (data: deliveryFormData) => {
    console.log(data)
  }

  return (
    <S.CheckoutSummaryContainer>
      {selectedCoffees.length ? (
        selectedCoffees.map((coffee) => (
          <CoffeItem
            key={coffee.id}
            id={coffee.id}
            amount={coffee.amount}
            name={coffee.name}
            price={priceFormat.format(coffee.price)}
            src={coffee.imageSrc}
          />
        ))
      ) : (
        <S.EmptyState>
          <strong>
            Parece que você ainda não adicionou nada no seu carrinho
          </strong>
          <Link href="/">Clique aqui para continuar comprando</Link>
        </S.EmptyState>
      )}

      <S.Subtotal>
        <div>
          <p>Total de itens</p>
          <p>{priceFormat.format(totalCoffeePrice)}</p>
        </div>
        <div>
          <p>Entrega</p>
          <p>{priceFormat.format(shippingPrice)}</p>
        </div>
        <div>
          <strong>Total</strong>
          <strong>{priceFormat.format(totalPrice)}</strong>
        </div>
      </S.Subtotal>
      <S.ConfirmButton onClick={handleSubmit(confirmOrder)}>
        CONFIRMAR PEDIDO
      </S.ConfirmButton>
    </S.CheckoutSummaryContainer>
  )
}
