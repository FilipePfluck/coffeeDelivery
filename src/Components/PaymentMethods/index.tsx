import { CurrencyDollar, CreditCard, Bank, Money } from 'phosphor-react'
import { Button } from '../Button'

import * as S from './styles'

export const PaymentMethods = () => {
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
        <Button>
          <CreditCard size={18} />
          CARTÃO DE CRÉDITO
        </Button>
        <Button>
          <Bank size={18} />
          CARTÃO DE DÉBITO
        </Button>
        <Button>
          <Money size={18} />
          DINHEIRO
        </Button>
      </S.ButtonsContainer>
    </S.PaymentMethodsContainer>
  )
}
