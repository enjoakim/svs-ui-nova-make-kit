import { figma } from '@figma/code-connect'
import { Separator } from './Separator'

/**
 * Code Connect mapping for Svenska Spel Separator component
 *
 * Connected to: https://www.figma.com/design/OQpwpaJZzLCQG8JkGAnbeJ/SvS-UI--nova-?node-id=2753-10017
 */

figma.connect(
  Separator,
  'https://www.figma.com/design/OQpwpaJZzLCQG8JkGAnbeJ/SvS-UI--nova-?node-id=2753-10017&m=dev',
  {
    props: {
      orientation: figma.enum('Orientation', {
        'Horizontal': 'horizontal',
        'Vertical': 'vertical',
      }),
      decorative: figma.boolean('Decorative', {
        true: true,
        false: false,
      }),
    },
    example: props => (
      <Separator
        orientation={props.orientation}
        decorative={props.decorative}
      />
    ),
  }
)
