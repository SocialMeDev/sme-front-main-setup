import { Fragment } from 'react'
import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuGroup,
  MenuItem,
  MenuDivider
} from '@chakra-ui/react'

import { useFormsManager } from '../../../contexts/FormsManager/Provider'
import {
  Arrow,
  AlarmClockTime3,
  CloudUpload2,
  Input1,
  CalendarSchedule1_1
} from 'components/atoms/Icons/Interface'
import {
  ListParagraphCheckmark,
  ListParagraphCheckmark1,
  ListParagraphDotsCheckmark,
  Paragraph1
} from 'components/atoms/Icons/TypeParagraphCharacter'
import { getAppColors } from 'utils/helpers/sirVariables'

export default function KindSelection({ question }) {
  const { updateFormField } = useFormsManager()
  const activeKind = question.kind

  const kindOptions = [
    {
      label: 'Textos',
      options: [
        {
          value: 'SHORT_TEXT',
          label: 'Resposta curta',
          icon: <Input1 />
        },
        {
          value: 'LONG_TEXT',
          label: 'Parágrafo',
          icon: <Paragraph1 />
        }
      ]
    },
    {
      label: 'Seleção',
      options: [
        {
          value: 'SINGLE_SELECTION_BOX',
          label: 'Múltipla escolha',
          icon: <ListParagraphCheckmark1 />
        },
        {
          value: 'MULTIPLE_SELECTION_BOX',
          label: 'Caixas de seleção',
          icon: <ListParagraphCheckmark />
        },
        {
          value: 'SINGLE_SELECTION_LIST',
          label: 'Lista suspensa',
          icon: <ListParagraphDotsCheckmark />
        }
      ]
    },
    {
      label: 'Arquivo',
      options: [
        {
          value: 'SINGLE_FILE_UPLOAD',
          label: 'Upload de arquivo',
          icon: <CloudUpload2 />
        }
      ]
    },
    {
      label: 'Tempo',
      options: [
        {
          value: 'DATE',
          label: 'Data',
          icon: <CalendarSchedule1_1 />
        },
        {
          value: 'TIME',
          label: 'Horário',
          icon: <AlarmClockTime3 />
        }
      ]
    }
  ]

  function GetIcon() {
    for (let i = 0; i < kindOptions.length; i++) {
      for (let j = 0; j < kindOptions[i].options.length; j++) {
        if (kindOptions[i].options[j].value === activeKind) {
          return kindOptions[i].options[j].icon
        }
      }
    }
    return <Input1 />
  }

  function GetName() {
    for (let i = 0; i < kindOptions.length; i++) {
      for (let j = 0; j < kindOptions[i].options.length; j++) {
        if (kindOptions[i].options[j].value === activeKind) {
          return kindOptions[i].options[j].label
        }
      }
    }
    return 'Resposta curta'
  }

  return (
    <Menu>
      <MenuButton
        as={Button}
        variant="outline"
        leftIcon={GetIcon() || undefined}
        rightIcon={<Arrow />}
      >
        {GetName() || 'undefined'}
      </MenuButton>
      <MenuList>
        {kindOptions.map((kind, kindKey) => (
          <Fragment key={kindKey}>
            <MenuGroup title={kind.label}>
              {kind.options.map((option) => (
                <MenuItem
                  bg={
                    option.value === activeKind
                      ? getAppColors('primary.100')
                      : 'none'
                  }
                  key={option.value}
                  onClick={() =>
                    updateFormField(question.id, {
                      ...question,
                      kind: option.value
                    })
                  }
                  icon={option.icon || undefined}
                  _hover={{ bg: getAppColors('primary.200') }}
                >
                  {option.label}
                </MenuItem>
              ))}
            </MenuGroup>
            {kindKey + 1 !== kindOptions.length && <MenuDivider />}
          </Fragment>
        ))}
      </MenuList>
    </Menu>
  )
}
