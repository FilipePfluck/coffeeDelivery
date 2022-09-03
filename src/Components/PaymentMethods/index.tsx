import { CurrencyDollar, CreditCard, Bank, Money } from 'phosphor-react'
import { useState } from 'react'
import { Button } from '../Button'

import * as S from './styles'

export const PaymentMethods = () => {
  const [paymentOptionId, setPaymentOptionId] = useState(1)

  return (
    <S.PaymentMethodsContainer>
      <S.PaymentHeader>
        <CurrencyDollar size={24} />
        <div>
          <p>Pagamento</p>
          <span>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </span>
        </div>
      </S.PaymentHeader>
      <S.ButtonsContainer>
        <Button
          isSelected={paymentOptionId === 1}
          onClick={() => {
            setPaymentOptionId(1)
          }}
        >
          <CreditCard size={18} />
          CARTÃO DE CRÉDITO
        </Button>
        <Button
          isSelected={paymentOptionId === 2}
          onClick={() => {
            setPaymentOptionId(2)
          }}
        >
          <Bank size={18} />
          CARTÃO DE DÉBITO
        </Button>
        <Button
          isSelected={paymentOptionId === 3}
          onClick={() => {
            setPaymentOptionId(3)
          }}
        >
          <Money size={18} />
          DINHEIRO
        </Button>
      </S.ButtonsContainer>
    </S.PaymentMethodsContainer>
  )
}
