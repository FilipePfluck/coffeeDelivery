import { MapPinLine } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import { Input } from '../Input'

import * as S from './styles'

export const DeliveryForm = () => {
  const {
    register,
    formState: { errors, isValid },
  } = useFormContext()

  console.log(errors, isValid)

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
        <S.Input
          size="small"
          placeholder="CEP"
          // error={errors.cep?.message}
          {...register('cep')}
        />
        <S.Input
          size="auto"
          placeholder="Rua"
          {...register('street')}
          // error={errors.street?.message}
        />
        <S.InputRow>
          <S.Input
            size="small"
            placeholder="Número"
            // error={errors.number?.message}
            {...register('number')}
          />
          <S.Input
            size="auto"
            placeholder="Complemento"
            // error={errors.complement?.message}
            {...register('complement')}
          />
        </S.InputRow>
        <S.InputRow>
          <S.Input
            size="small"
            placeholder="Bairro"
            // error={errors.neighbourhood?.message}
            {...register('neighbourhood')}
          />
          <S.Input
            size="auto"
            placeholder="Cidade"
            {...register('city')}
            // error={errors.city?.message}
          />
          <S.Input
            size="extraSmall"
            placeholder="UF"
            {...register('uf')}
            // error={errors.uf?.message}
          />
        </S.InputRow>
      </S.Form>
    </S.FormContainer>
  )
}
