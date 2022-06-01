import { AccordionButton, AccordionItem, AccordionPanel } from 'components'

import Accordion from '.'

export default {
  component: Accordion,
  title: 'DataDisplay/Accordion/Default',
  args: {
    spacing: 4,
    allowMultiple: true,
    allowToggle: true
  },
  argTypes: {
    spacing: {
      name: 'spacing',
      table: {
        type: {
          summary: 'number'
        }
      }
    },
    allowMultiple: {
      name: 'allowMultiple',
      table: {
        type: {
          summary: 'boolean'
        }
      }
    },
    allowToggle: {
      name: 'allowToggle',
      table: {
        type: {
          summary: 'boolean'
        }
      }
    },
    children: {
      name: 'children',
      table: {
        type: {
          summary: 'ReactElement'
        }
      }
    }
  }
}

export const Default = (args) => (
  <Accordion {...args} allowMultiple>
    <AccordionItem>
      {({ isExpanded }) => (
        <>
          <AccordionButton isExpanded={isExpanded} title="Primeira seção" />

          <AccordionPanel>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </>
      )}
    </AccordionItem>

    <AccordionItem>
      {({ isExpanded }) => (
        <>
          <AccordionButton isExpanded={isExpanded} title="Segunda seção" />

          <AccordionPanel>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  </Accordion>
)
