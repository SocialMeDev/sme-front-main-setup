import {
  Box,
  Flex,
  Button,
  Text,
  Heading,
  DrawerBody,
  DrawerFooter,
  DrawerHeader
} from '@chakra-ui/react'

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

export default function Search({
  closeDrawer,
  errors,
  isSubmitting,
  handleSubmit,
  questions,
  register,
  subtitles,
  title
}) {
  return (
    <>
      <DrawerHeader className="drawer-header">
        <Box>
          {subtitles?.search && <Text>{subtitles?.search}</Text>}
          <Heading>{title}</Heading>
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
    </>
  )
}
