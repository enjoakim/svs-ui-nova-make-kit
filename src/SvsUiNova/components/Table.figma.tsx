import { figma } from '@figma/code-connect'
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from './Table'

/**
 * Code Connect mapping for Svenska Spel Table component
 *
 * Connected to: https://www.figma.com/design/OQpwpaJZzLCQG8JkGAnbeJ/SvS-UI--nova-?node-id=4840:22553
 */

figma.connect(
  Table,
  'https://www.figma.com/design/OQpwpaJZzLCQG8JkGAnbeJ/SvS-UI--nova-?node-id=4840:22553&m=dev',
  {
    props: {
      variant: figma.enum('Variant', {
        'Default': 'default',
        'Striped': 'striped',
      }),
      children: figma.children('Table Content'),
    },
    example: props => (
      <Table variant={props.variant}>
        <TableHeader>
          <TableRow>
            <TableHead>Header 1</TableHead>
            <TableHead>Header 2</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {props.children}
        </TableBody>
      </Table>
    ),
  }
)
