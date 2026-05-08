import { figma } from '@figma/code-connect'
import { ToggleGroup } from './ToggleGroup'

/**
 * Code Connect mapping for Svenska Spel ToggleGroup component
 *
 * Connected to: https://www.figma.com/design/OQpwpaJZzLCQG8JkGAnbeJ/SvS-UI--nova-?node-id=9276-43301
 */

figma.connect(
  ToggleGroup,
  'https://www.figma.com/design/OQpwpaJZzLCQG8JkGAnbeJ/SvS-UI--nova-?node-id=9276-43301&m=dev',
  {
    props: {
      type: figma.enum('Type', {
        'Single': 'single',
        'Multiple': 'multiple',
      }),
      size: figma.enum('Size', {
        'Small': 'sm',
        'Medium': 'md',
        'Large': 'lg',
      }),
      emphasis: figma.enum('Emphasis', {
        'Base': 'base',
        'Low': 'low',
      }),
    },
    example: props => (
      <ToggleGroup
        type={props.type}
        size={props.size}
        emphasis={props.emphasis}
        options={[
          { value: 'option1', label: 'Option 1' },
          { value: 'option2', label: 'Option 2' },
          { value: 'option3', label: 'Option 3' },
        ]}
      />
    ),
  }
)
