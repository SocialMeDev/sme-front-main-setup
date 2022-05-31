import { useDisclosure } from '@chakra-ui/react'
import { useState } from 'react'

import {
  Box,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Modal,
  ModalContent,
  ModalOverlay,
  ModalCloseButton
} from 'components'
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
  trigger,
  overlayType = 'drawer'
}) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [view, setView] = useState('search')
  const [users, setUsers] = useState([])
  const [selectDefaultValue, setSelectDefaultValue] = useState()
  const [selectedUsers, setSelectedUsers] = useState([])
  const [selectedUser, setSelectedUser] = useState([])

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
        if (item.id == value) {
          return item
        }
      })
      setSelectedUser(userInformation)
    }
    setView('action')
  }

  function closeDrawer() {
    onClose()
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
            overlayType={overlayType}
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
            overlayType={overlayType}
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
            defaultFilters={defaultFilters}
            overlayType={overlayType}
            questions={questions}
            searchRoute={searchRoute}
            setUsers={setUsers}
            setView={setView}
            subtitles={subtitles}
            title={title}
          />
        )
    }
  }

  return (
    <>
      <Box onClick={onOpen}>{trigger}</Box>

      {overlayType === 'drawer' && (
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <RenderContent />
          </DrawerContent>
        </Drawer>
      )}

      {overlayType === 'modal' && (
        <Modal
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          scrollBehavior={'outside'}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <RenderContent />
          </ModalContent>
        </Modal>
      )}
    </>
  )
}
