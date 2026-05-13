import { figma } from '@figma/code-connect'
import { Select } from './Select'

/**
 * Code Connect mapping for Svenska Spel Select component
 * Connected to: https://www.figma.com/design/OQpwpaJZzLCQG8JkGAnbeJ/SvS-UI--nova-?node-id=2764:26178
 */

figma.connect(
  Select,
  'https://www.figma.com/design/OQpwpaJZzLCQG8JkGAnbeJ/SvS-UI--nova-?node-id=2764:26178&m=dev',
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
      label: figma.string('Label'),
      helperText: figma.string('Helper Text'),
      errorText: figma.string('Error Text'),
      error: figma.boolean('State', {
        'Error': true,
        'Default': false,
      }),
      disabled: figma.boolean('State', {
        'Disabled': true,
        'Default': false,
      }),
      showFlag: figma.boolean('Show Flag'),
      options: figma.children('Options'),
    },
    example: props => (
      <Select
        variant={props.variant}
        surface={props.surface}
        label={props.label}
        helperText={props.helperText}
        errorText={props.errorText}
        error={props.error}
        disabled={props.disabled}
        showFlag={props.showFlag}
        options={props.options || [
          { value: 'option1', label: 'Option 1' },
          { value: 'option2', label: 'Option 2' },
        ]}
      />
    ),
  }
)
