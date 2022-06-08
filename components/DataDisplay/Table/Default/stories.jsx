import {
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Tfoot,
  Tbody,
  Thead
} from 'components'

import Table from '.'

export default {
  component: Table,
  title: 'DataDisplay/Table/Default'
}

export const Default = (args) => (
  <TableContainer>
    <Table {...args} variant="simple">
      <TableCaption>Imperial to metric conversion factors</TableCaption>
      <Thead>
        <Tr>
          <Th scope="col">To convert</Th>
          <Th scope="col">into</Th>
          <Th scope="col" isNumeric>
            multiply by
          </Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>inches</Td>
          <Td>millimetres (mm)</Td>
          <Td isNumeric>25.4</Td>
        </Tr>
        <Tr>
          <Td>feet</Td>
          <Td>centimetres (cm)</Td>
          <Td isNumeric>30.48</Td>
        </Tr>
        <Tr>
          <Td>yards</Td>
          <Td>metres (m)</Td>
          <Td isNumeric>0.91444</Td>
        </Tr>
      </Tbody>
      <Tfoot>
        <Tr>
          <Td>To convert</Td>
          <Td>into</Td>
          <Td isNumeric>multiply by</Td>
        </Tr>
      </Tfoot>
    </Table>
  </TableContainer>
)
