import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  //FormHelperText,
  Input
} from '@chakra-ui/react'

import { MaskInput } from 'components/atoms/MaskInput/Basic'
import {
  cnpjMask,
  cpfMask,
  brazilianDateMask,
  cnsMask,
  rgMask
} from 'utils/masks'

const size = 'sm'
const rounded = 'md'

export function NameQuestion({ register, errors }) {
  return (
    <FormControl px={1} my={1} isInvalid={errors.name}>
      <FormLabel fontSize={size} htmlFor="name">
        Nome da pessoa
      </FormLabel>
      <Input size={size} rounded={rounded} {...register('name')} />
      <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
    </FormControl>
  )
}

export function CPFQuestion({ register, errors }) {
  return (
    <FormControl px={1} my={1} isInvalid={errors.cpf_number}>
      <FormLabel fontSize={size} htmlFor="cpf_number">
        Número do CPF
      </FormLabel>
      <MaskInput
        inputMode="numeric"
        size={size}
        mask={cpfMask}
        rounded={rounded}
        {...register('cpf_number')}
      />
      <FormErrorMessage>
        {errors.cpf_number && errors.cpf_number.message}
      </FormErrorMessage>
    </FormControl>
  )
}

export function CNPJQuestion({ register, errors }) {
  return (
    <FormControl px={1} my={1} isInvalid={errors.cnpj_number}>
      <FormLabel fontSize={size} htmlFor="cnpj_number">
        Número do CNPJ
      </FormLabel>
      <MaskInput
        inputMode="numeric"
        size={size}
        mask={cnpjMask}
        rounded={rounded}
        {...register('cnpj_number')}
      />
      <FormErrorMessage>
        {errors.cnpj_number && errors.cnpj_number.message}
      </FormErrorMessage>
    </FormControl>
  )
}

export function CNSQuestion({ register, errors }) {
  return (
    <FormControl px={1} my={1} isInvalid={errors.cns_number}>
      <FormLabel fontSize={size} htmlFor="cns_number">
        Número do cns
      </FormLabel>
      <MaskInput
        inputMode="numeric"
        size={size}
        mask={cnsMask}
        rounded={rounded}
        {...register('cns_number')}
      />
      <FormErrorMessage>
        {errors.cns_number && errors.cns_number.message}
      </FormErrorMessage>
    </FormControl>
  )
}

export function RGQuestion({ register, errors }) {
  return (
    <FormControl px={1} my={1} isInvalid={errors.rg_number}>
      <FormLabel fontSize={size} htmlFor="rg_number">
        Número do RG
      </FormLabel>
      <MaskInput
        inputMode="numeric"
        size={size}
        mask={rgMask}
        rounded={rounded}
        {...register('rg_number')}
      />
      <FormErrorMessage>
        {errors.rg_number && errors.rg_number.message}
      </FormErrorMessage>
    </FormControl>
  )
}

export function BirthDateQuestion({ register, errors }) {
  return (
    <FormControl px={1} my={1} isInvalid={errors.birth_date}>
      <FormLabel fontSize={size} htmlFor="birth_date">
        Data de nascimento
      </FormLabel>
      <MaskInput
        size={size}
        rounded={rounded}
        inputMode="numeric"
        mask={brazilianDateMask}
        {...register('birth_date')}
      />

      <FormErrorMessage>
        {errors.birth_date && errors.birth_date.message}
      </FormErrorMessage>
    </FormControl>
  )
}

export function MotherNameQuestion({ register, errors }) {
  return (
    <FormControl px={1} my={1} isInvalid={errors.mother_name}>
      <FormLabel fontSize={size} htmlFor="mother_name">
        Nome da mãe
      </FormLabel>
      <Input size={size} rounded={rounded} {...register('mother_name')} />
      <FormErrorMessage>
        {errors.mother_name && errors.mother_name.message}
      </FormErrorMessage>
    </FormControl>
  )
}

export function FatherNameQuestion({ register, errors }) {
  return (
    <FormControl px={1} my={1} isInvalid={errors.father_name}>
      <FormLabel fontSize={size} htmlFor="father_name">
        Nome do pai
      </FormLabel>
      <Input size={size} rounded={rounded} {...register('father_name')} />
      <FormErrorMessage>
        {errors.father_name && errors.father_name.message}
      </FormErrorMessage>
    </FormControl>
  )
}
