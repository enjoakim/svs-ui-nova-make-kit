import { figma } from '@figma/code-connect'
import { Popover } from './Popover'

/**
 * Code Connect mapping for Svenska Spel Popover component
 *
 * TODO: Update with actual Figma component node-id
 * Connected to: https://www.figma.com/design/OQpwpaJZzLCQG8JkGAnbeJ/SvS-UI--nova-?node-id=13:888
 */

figma.connect(
  Popover,
  'https://www.figma.com/design/OQpwpaJZzLCQG8JkGAnbeJ/SvS-UI--nova-?node-id=13:888&m=dev',
  {
    props: {
      position: figma.enum('Position', {
        'Top': 'top',
        'Bottom': 'bottom',
        'Left': 'left',
        'Right': 'right',
      }),
      trigger: figma.children('Trigger'),
      content: figma.children('Content'),
    },
    example: props => (
      <Popover
        position={props.position}
        trigger={props.trigger}
        content={props.content}
      />
    ),
  }
)
