import { figma } from '@figma/code-connect'
import { RadioGroup } from './RadioGroup'

/**
 * Code Connect mapping for Svenska Spel RadioGroup component
 *
 * TODO: Update with actual Figma component node-id
 * Connected to: https://www.figma.com/design/OQpwpaJZzLCQG8JkGAnbeJ/SvS-UI--nova-?node-id=2753-7734
 */

figma.connect(
  RadioGroup,
  'https://www.figma.com/design/OQpwpaJZzLCQG8JkGAnbeJ/SvS-UI--nova-?node-id=2753-7734&m=dev',
  {
    props: {
      orientation: figma.enum('Orientation', {
        'Horizontal': 'horizontal',
        'Vertical': 'vertical',
      }),
      alignment: figma.enum('Alignment', {
        'Left': 'left',
        'Right': 'right',
      }),
      label: figma.string('Label'),
      name: figma.string('Name'),
    },
    example: props => (
      <RadioGroup
        orientation={props.orientation}
        alignment={props.alignment}
        label={props.label}
        name={props.name || 'radio-group'}
        options={[
          { value: 'option1', label: 'Option 1' },
          { value: 'option2', label: 'Option 2' },
        ]}
      />
    ),
  }
)
