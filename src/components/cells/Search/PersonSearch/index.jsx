import {
  Box,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure
} from '@chakra-ui/react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { removeEverythingThatIsNotNumber } from 'utils/transforms/string'
import Search from './views/Search'
import Select from './views/Select'
import MultipleSelect from './views/MultipleSelect'

export default function MultipleSelection({
  actionView,
  defaultFilters,
  informations,
  multiple = false,
  questions,
  searchRoute,
  subtitles,
  title = 'Pesquisa de usuário',
  trigger
}) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [view, setView] = useState('search')
  const [users, setUsers] = useState([])
  const [selectDefaultValue, setSelectDefaultValue] = useState()
  const [selectedUsers, setSelectedUsers] = useState([])
  const [selectedUser, setSelectedUser] = useState([])
  const {
    handleSubmit,
    register,
    reset,
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
    await setUsers(response.body.person.elements)
    setView('select')
  }

  async function onSubmitSelect(value) {
    setSelectDefaultValue(value)
    if (multiple) {
      const array = []
      for (let i = 0; i < value.length; i++) {
        const userInformation = users.find(function (item) {
          if (item.id == value[i]) return item
        })
        array.push(userInformation)
      }
      setSelectedUsers(array)
    } else {
      const userInformation = users.find(function (item) {
        if (item.id == value) return item
      })
      setSelectedUser(userInformation)
    }
    setView('action')
  }

  function closeDrawer() {
    onClose()
    reset()
    setView('search')
    setUsers([])
    setSelectDefaultValue()
    setSelectedUsers([])
    setSelectedUser([])
  }

  function RenderContent() {
    const ActionView = actionView
    switch (view) {
      case 'action':
        return (
          <ActionView
            closeDrawer={closeDrawer}
            selectedUser={selectedUser}
            selectedUsers={selectedUsers}
            setView={setView}
            subtitles={subtitles}
            title={title}
          />
        )
      case 'select':
        return multiple ? (
          <MultipleSelect
            closeDrawer={closeDrawer}
            informations={informations}
            onSubmitSelect={onSubmitSelect}
            selectDefaultValue={selectDefaultValue}
            setView={setView}
            subtitles={subtitles}
            title={title}
            users={users}
          />
        ) : (
          <Select
            closeDrawer={closeDrawer}
            informations={informations}
            onSubmitSelect={onSubmitSelect}
            selectDefaultValue={selectDefaultValue}
            setView={setView}
            subtitles={subtitles}
            title={title}
            users={users}
          />
        )
      default:
        return (
          <Search
            closeDrawer={closeDrawer}
            errors={errors}
            isSubmitting={isSubmitting}
            handleSubmit={handleSubmit(onSubmitSearch)}
            questions={questions}
            register={register}
            subtitles={subtitles}
            title={title}
          />
        )
    }
  }

  return (
    <>
      <Box onClick={onOpen}>{trigger}</Box>
      <Box as="form" onSubmit={handleSubmit(onSubmitSearch)}>
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <RenderContent />
          </DrawerContent>
        </Drawer>
      </Box>
    </>
  )
}
