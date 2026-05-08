import { figma } from '@figma/code-connect'
import { DatePicker } from './DatePicker'

/**
 * Code Connect mapping for Svenska Spel DatePicker component
 *
 * TODO: Update with actual Figma component node-id
 * Connected to: https://www.figma.com/design/OQpwpaJZzLCQG8JkGAnbeJ/SvS-UI--nova-?node-id=4840-22287
 */

figma.connect(
  DatePicker,
  'https://www.figma.com/design/OQpwpaJZzLCQG8JkGAnbeJ/SvS-UI--nova-?node-id=4840-22287&m=dev',
  {
    props: {
      variant: figma.enum('Variant', {
        'Solid': 'solid',
        'Outline': 'outline',
      }),
      surface: figma.enum('Surface', {
        'Base': 'base',
        'Surface': 'surface',
      }),
      mode: figma.enum('Mode', {
        'Single': 'single',
        'Range': 'range',
      }),
      label: figma.string('Label'),
      helperText: figma.string('Helper Text'),
      errorText: figma.string('Error Text'),
      error: figma.boolean('Error', {
        true: true,
        false: false,
      }),
      disabled: figma.boolean('Disabled', {
        true: true,
        false: false,
      }),
    },
    example: props => (
      <DatePicker
        variant={props.variant}
        surface={props.surface}
        mode={props.mode}
        label={props.label}
        helperText={props.helperText}
        errorText={props.errorText}
        error={props.error}
        disabled={props.disabled}
      />
    ),
  }
)
