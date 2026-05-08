import { figma } from '@figma/code-connect'
import { Badge } from './Badge'

/**
 * Code Connect mapping for Svenska Spel Badge component
 *
 * Connected to: https://www.figma.com/design/OQpwpaJZzLCQG8JkGAnbeJ/SvS-UI--nova-?node-id=136-1178
 */

figma.connect(
  Badge,
  'https://www.figma.com/design/OQpwpaJZzLCQG8JkGAnbeJ/SvS-UI--nova-?node-id=136-1178&m=dev',
  {
    props: {
      variant: figma.enum('variant', {
        'Default': 'default',
        'Success': 'success',
        'Warning': 'warning',
        'Error': 'error',
      }),
      size: figma.enum('size', {
        'Small': 'sm',
        'Medium': 'md',
        'Large': 'lg',
      }),
      children: figma.string('text'),
    },
    example: props => (
      <Badge variant={props.variant} size={props.size}>
        {props.children}
      </Badge>
    ),
  }
)
