import { memo, Fragment, useState, useCallback } from 'react'

import {
  Flex,
  Text,
  Heading,
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton,
  DrawerFooter,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter
} from 'components'
import { useDisclosure } from 'hooks'

import FooterButtons from './components/FooterButtons'
import OpenAndResetFilterButtons from './components/OpenAndResetFilterButtons'
import FilterForm from './components/Form'

function Filters({
  buttonProps,
  title,
  subTitle,
  onSubmit,
  fields = [],
  initialFilters = {},
  filters = {},
  overlayType = 'Drawer',
  submitButtonText = 'Filtrar'
}) {
  const [showResetFilterButton, setShowResetFilterButton] = useState(false)
  const [loadingButton, setLoadingButton] = useState(false)
  const [values, setValues] = useState(filters)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const onFilter = (event, filters) => {
    setLoadingButton(true)
    setShowResetFilterButton(true)

    event.preventDefault()

    onSubmit(filters)
    setLoadingButton(false)
  }

  const resetFilters = useCallback(() => {
    onClose()
    setValues(initialFilters)
    onSubmit(initialFilters)
    setShowResetFilterButton(false)
  }, [])

  return (
    <>
      <OpenAndResetFilterButtons
        buttonProps={buttonProps}
        onOpen={onOpen}
        showResetFilterButton={showResetFilterButton}
        resetFilters={resetFilters}
      />

      {overlayType === 'Drawer' ? (
        <Drawer isOpen={isOpen} onClose={onClose}>
          <Flex as="form" onSubmit={(event) => onFilter(event, values)}>
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>
                <Text>{subTitle}</Text>
                <Heading color="primary">{title}</Heading>
              </DrawerHeader>

              <DrawerBody>
                <FilterForm
                  fields={fields}
                  values={values}
                  setValues={setValues}
                />
              </DrawerBody>

              <DrawerFooter>
                <FooterButtons
                  isLoading={loadingButton}
                  onClose={onClose}
                  resetFilters={resetFilters}
                  showResetFilterButton={showResetFilterButton}
                  submitButtonText={submitButtonText}
                />
              </DrawerFooter>
            </DrawerContent>
          </Flex>
        </Drawer>
      ) : (
        <Modal isOpen={isOpen} onClose={onClose}>
          <Flex as="form" onSubmit={(event) => onFilter(event, values)}>
            <ModalContent>
              <ModalCloseButton />
              <ModalHeader>
                <Text>{subTitle}</Text>
                <Heading color="primary">{title}</Heading>
              </ModalHeader>

              <ModalBody>
                <FilterForm
                  fields={fields}
                  values={values}
                  setValues={setValues}
                />
              </ModalBody>

              <ModalFooter>
                <FooterButtons
                  isLoading={loadingButton}
                  onClose={onClose}
                  resetFilters={resetFilters}
                  showResetFilterButton={showResetFilterButton}
                  submitButtonText={submitButtonText}
                />
              </ModalFooter>
            </ModalContent>
          </Flex>
        </Modal>
      )}
    </>
  )
}

export default memo(Filters)
