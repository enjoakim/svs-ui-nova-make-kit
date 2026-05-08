import { figma } from '@figma/code-connect'
import { Callout } from './Callout'

/**
 * Code Connect mapping for Svenska Spel Callout component
 *
 * Connected to: https://www.figma.com/design/OQpwpaJZzLCQG8JkGAnbeJ/SvS-UI--nova-?node-id=18944-1948
 */

figma.connect(
  Callout,
  'https://www.figma.com/design/OQpwpaJZzLCQG8JkGAnbeJ/SvS-UI--nova-?node-id=18944-1948&m=dev',
  {
    props: {
      variant: figma.enum('Variant', {
        'Default': 'default',
        'Info': 'info',
        'Success': 'success',
        'Warning': 'warning',
        'Error': 'error',
      }),
      title: figma.string('Title'),
      icon: figma.instance('Icon'),
      children: figma.children('Content'),
    },
    example: props => (
      <Callout
        variant={props.variant}
        title={props.title}
        icon={props.icon}
      >
        {props.children}
      </Callout>
    ),
  }
)
