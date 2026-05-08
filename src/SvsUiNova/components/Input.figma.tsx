import { figma } from '@figma/code-connect'
import { Input } from './Input'

/**
 * Code Connect mapping for Svenska Spel Input component
 *
 * Connected to: https://www.figma.com/design/OQpwpaJZzLCQG8JkGAnbeJ/SvS-UI--nova-?node-id=2732-15509
 */

figma.connect(
  Input,
  'https://www.figma.com/design/OQpwpaJZzLCQG8JkGAnbeJ/SvS-UI--nova-?node-id=2732-15509&m=dev',
  {
    props: {
      variant: figma.enum('Variant', {
        'Solid': 'solid',
        'Outline': 'outline',
      }),
      surface: figma.enum('Context', {
        'Base': 'base',
        'Surface': 'surface',
      }),
      label: figma.string('↳ Label'),
      placeholder: figma.string('↳ Placeholder'),
      helperText: figma.string('↳ Help text'),
      errorText: figma.string('Error text'),
    },
    example: props => (
      <Input
        variant={props.variant}
        surface={props.surface}
        label={props.label}
        placeholder={props.placeholder}
        helperText={props.helperText}
        errorText={props.errorText}
      />
    ),
  }
)
