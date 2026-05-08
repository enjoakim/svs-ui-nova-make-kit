import { figma } from '@figma/code-connect'
import { IconButton } from './IconButton'

/**
 * Code Connect mapping for Svenska Spel IconButton component
 * Connected to: https://www.figma.com/design/OQpwpaJZzLCQG8JkGAnbeJ/SvS-UI--nova-?node-id=7091-29009
 */

figma.connect(
  IconButton,
  'https://www.figma.com/design/OQpwpaJZzLCQG8JkGAnbeJ/SvS-UI--nova-?node-id=7091-29009&m=dev',
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
      icon: figma.instance('Icon'),
      'aria-label': figma.string('Aria Label'),
    },
    example: props => (
      <IconButton
        variant={props.variant}
        size={props.size}
        disabled={props.disabled}
        icon={props.icon}
        aria-label={props['aria-label']}
      />
    ),
  }
)
