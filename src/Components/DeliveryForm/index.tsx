import { MapPinLine } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'

import * as S from './styles'

export const DeliveryForm = () => {
  const { register } = useFormContext()

  return (
    <S.FormContainer>
      <S.FormHeader>
        <MapPinLine size={24} />
        <div>
          <p>Endereço de entrega</p>
          <span>Informe o endereço onde deseja receber seu pedido</span>
        </div>
      </S.FormHeader>
      <S.Form>
        <S.Input size="small" placeholder="CEP" {...register('cep')} />
        <S.Input size="auto" placeholder="Rua" {...register('street')} />
        <S.InputRow>
          <S.Input size="small" placeholder="Número" {...register('number')} />
          <S.Input
            size="auto"
            placeholder="Complemento"
            {...register('complement')}
          />
        </S.InputRow>
        <S.InputRow>
          <S.Input
            size="small"
            placeholder="Bairro"
            {...register('neighbourhood')}
          />
          <S.Input size="auto" placeholder="Cidade" {...register('city')} />
          <S.Input size="extraSmall" placeholder="UF" {...register('uf')} />
        </S.InputRow>
      </S.Form>
    </S.FormContainer>
  )
}
