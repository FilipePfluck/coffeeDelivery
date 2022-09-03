import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { CheckoutSummary } from '../../Components/CheckoutSummary'
import { DeliveryForm } from '../../Components/DeliveryForm'
import { Header } from '../../Components/Header'
import { PaymentMethods } from '../../Components/PaymentMethods'

import { styled } from '../../../stitches.config'

const Content = styled('main', {
  width: '100%',
  maxWidth: 1100,
  margin: '0 auto',
  padding: 16,
  display: 'flex',
  gap: 24,

  '@bp2': {
    flexDirection: 'column',
  },
})

const SectionContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  '>strong': {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: '"Baloo 2", cursive',
    marginBottom: 16,
    color: '$subtitle',
  },
})

const FormSectionContainer = styled(SectionContainer, {
  flex: 1,
  '>div': {
    marginBottom: 16,
  },
})

const deliveryFormValidationSchema = zod.object({
  cep: zod.string().min(8, 'Informe o CEP'),
  street: zod.string().min(1, 'Informe a rua'),
  number: zod.string().min(1, 'Informe o número'),
  complement: zod.string().optional(),
  neighbourhood: zod.string().min(1, 'Informe o bairro'),
  city: zod.string().min(1, 'Informe a cidade'),
  uf: zod.string().min(2, 'Informe a UF'),
})

export type deliveryFormData = zod.infer<typeof deliveryFormValidationSchema>

const Checkout = () => {
  const deliveryForm = useForm<deliveryFormData>({
    resolver: zodResolver(deliveryFormValidationSchema),
    defaultValues: {
      cep: '',
      city: '',
      complement: '',
      neighbourhood: '',
      number: '',
      street: '',
      uf: '',
    },
  })

  return (
    <FormProvider {...deliveryForm}>
      <Header />
      <Content>
        <FormSectionContainer>
          <strong>Complete seu pedido</strong>
          <DeliveryForm />
          <PaymentMethods />
        </FormSectionContainer>
        <SectionContainer>
          <strong>Cafés selecionados</strong>
          <CheckoutSummary />
        </SectionContainer>
      </Content>
    </FormProvider>
  )
}

export default Checkout
