import { figma } from '@figma/code-connect'
import { Button } from './Button'

/**
 * Code Connect mapping for Svenska Spel Button component
 * Connected to: https://www.figma.com/design/OQpwpaJZzLCQG8JkGAnbeJ/SvS-UI--nova-?node-id=2718-8237
 */

figma.connect(
  Button,
  'https://www.figma.com/design/OQpwpaJZzLCQG8JkGAnbeJ/SvS-UI--nova-?node-id=2718-8237&m=dev',
  {
    props: {
      variant: figma.enum('Variant', {
        'Primary': 'primary',
        'Secondary': 'secondary',
        'Neutral': 'neutral',
        'Outline': 'outline',
        'Ghost': 'ghost',
        'Link': 'link',
        'Destructive': 'destructive',
      }),
      size: figma.enum('Size', {
        'Small': 'small',
        'Medium': 'medium',
        'Large': 'large',
        'XLarge': 'xlarge',
      }),
      disabled: figma.boolean('State', {
        true: true,
        false: false,
      }),
      fullWidth: figma.boolean('Full Width'),
      children: figma.string('Label'),
      icon: figma.instance('Leading Icon'),
      iconPosition: figma.enum('Icon Position', {
        'Leading': 'left',
        'Trailing': 'right',
        'None': undefined,
      }),
    },
    example: props => (
      <Button
        variant={props.variant}
        size={props.size}
        disabled={props.disabled}
        fullWidth={props.fullWidth}
        icon={props.icon}
        iconPosition={props.iconPosition}
      >
        {props.children}
      </Button>
    ),
  }
)
