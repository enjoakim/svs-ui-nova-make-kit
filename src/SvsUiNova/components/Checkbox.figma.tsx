import { figma } from '@figma/code-connect'
import { Checkbox } from './Checkbox'

/**
 * Code Connect mapping for Svenska Spel Checkbox component
 *
 * TODO: Update with actual Figma component node-id
 * Connected to: https://www.figma.com/design/OQpwpaJZzLCQG8JkGAnbeJ/SvS-UI--nova-?node-id=2887:5157
 */

figma.connect(
  Checkbox,
  'https://www.figma.com/design/OQpwpaJZzLCQG8JkGAnbeJ/SvS-UI--nova-?node-id=2887:5157&m=dev',
  {
    props: {
      checked: figma.boolean('Checked'),
      disabled: figma.boolean('State', {
        true: true,
        false: false,
      }),
      label: figma.string('Label'),
    },
    example: props => (
      <Checkbox
        checked={props.checked}
        disabled={props.disabled}
        label={props.label}
      />
    ),
  }
)
