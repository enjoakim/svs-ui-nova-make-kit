import { figma } from '@figma/code-connect'
import { Tooltip } from './Tooltip'

/**
 * Code Connect mapping for Svenska Spel Tooltip component
 *
 * Connected to: https://www.figma.com/design/OQpwpaJZzLCQG8JkGAnbeJ/SvS-UI--nova-?node-id=12536-11361
 */

figma.connect(
  Tooltip,
  'https://www.figma.com/design/OQpwpaJZzLCQG8JkGAnbeJ/SvS-UI--nova-?node-id=12536-11361&m=dev',
  {
    props: {
      position: figma.enum('Position', {
        'Top': 'top',
        'Bottom': 'bottom',
        'Left': 'left',
        'Right': 'right',
      }),
      content: figma.string('Content'),
      children: figma.children('Trigger'),
    },
    example: props => (
      <Tooltip
        position={props.position}
        content={props.content}
      >
        {props.children}
      </Tooltip>
    ),
  }
)
