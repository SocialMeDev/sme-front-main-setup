import { useForm } from 'react-hook-form'

import {
  Box,
  Flex,
  Button,
  Text,
  Heading,
  DrawerBody,
  DrawerFooter,
  DrawerHeader
} from 'components'
import {
  NameQuestion,
  CPFQuestion,
  CNPJQuestion,
  CNSQuestion,
  RGQuestion,
  BirthDateQuestion,
  MotherNameQuestion,
  FatherNameQuestion
} from './Questions'
import { removeEverythingThatIsNotNumber } from 'utils/transforms/string'

export default function Search({
  closeDrawer,
  defaultFilters,
  overlayType,
  questions,
  searchRoute,
  setUsers,
  setView,
  subtitles,
  title
}) {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting }
  } = useForm()

  async function onSubmitSearch(values) {
    const filters = {
      ...defaultFilters,
      name: values.name,
      cpf_number: removeEverythingThatIsNotNumber(values.cpf_number),
      cnpj_number: removeEverythingThatIsNotNumber(values.cnpj_number),
      cns_number: removeEverythingThatIsNotNumber(values.cns_number),
      rg_number: removeEverythingThatIsNotNumber(values.rg_number),
      birth_date: removeEverythingThatIsNotNumber(values.birth_date),
      mother_name: removeEverythingThatIsNotNumber(values.mother_name),
      father_name: removeEverythingThatIsNotNumber(values.father_name)
    }
    const response = await searchRoute(filters)
    if (response?.header?.success) {
      await setUsers(response.body.person.elements)
      setView('select')
    }
  }

  return (
    <Flex
      as="form"
      onSubmit={handleSubmit(onSubmitSearch)}
      flexDir="column"
      justify="space-between"
      h={overlayType === 'drawer' ? '100vh' : 'auto'}
    >
      <DrawerHeader className="drawer-header">
        <Box>
          {subtitles?.search && <Text>{subtitles?.search}</Text>}
          <Heading color="primary">{title}</Heading>
        </Box>
      </DrawerHeader>
      <DrawerBody>
        <Flex flexDir="column" gap={2}>
          {questions?.name && (
            <NameQuestion register={register} errors={errors} />
          )}
          {questions?.cpf_number && (
            <CPFQuestion register={register} errors={errors} />
          )}
          {questions?.cnpj_number && (
            <CNPJQuestion register={register} errors={errors} />
          )}
          {questions?.cns_number && (
            <CNSQuestion register={register} errors={errors} />
          )}
          {questions?.rg_number && (
            <RGQuestion register={register} errors={errors} />
          )}
          {questions?.birth_date && (
            <BirthDateQuestion register={register} errors={errors} />
          )}
          {questions?.mother_name && (
            <MotherNameQuestion register={register} errors={errors} />
          )}
          {questions?.father_name && (
            <FatherNameQuestion register={register} errors={errors} />
          )}
        </Flex>
      </DrawerBody>
      <DrawerFooter className="drawer-footer">
        <Button variant="ghost" onClick={closeDrawer}>
          Cancelar
        </Button>
        <Button
          variant="solid"
          type="submit"
          isLoading={isSubmitting}
          onClick={() => handleSubmit()}
        >
          Pesquisar
        </Button>
      </DrawerFooter>
    </Flex>
  )
}
