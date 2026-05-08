import { figma } from '@figma/code-connect'
import { Switch } from './Switch'

/**
 * Code Connect mapping for Svenska Spel Switch component
 *
 * Connected to: https://www.figma.com/design/OQpwpaJZzLCQG8JkGAnbeJ/SvS-UI--nova-?node-id=2769-29914
 */

figma.connect(
  Switch,
  'https://www.figma.com/design/OQpwpaJZzLCQG8JkGAnbeJ/SvS-UI--nova-?node-id=2769-29914&m=dev',
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
      <Switch
        checked={props.checked}
        disabled={props.disabled}
        label={props.label}
      />
    ),
  }
)
