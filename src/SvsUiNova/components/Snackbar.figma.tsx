import { figma } from '@figma/code-connect'
import { Snackbar } from './Snackbar'

/**
 * Code Connect mapping for Svenska Spel Snackbar component
 *
 * TODO: Update with actual Figma component node-id
 * Connected to: https://www.figma.com/design/OQpwpaJZzLCQG8JkGAnbeJ/SvS-UI--nova-?node-id=2785:11351
 */

figma.connect(
  Snackbar,
  'https://www.figma.com/design/OQpwpaJZzLCQG8JkGAnbeJ/SvS-UI--nova-?node-id=2785:11351&m=dev',
  {
    props: {
      variant: figma.enum('Variant', {
        'Default': 'default',
        'Success': 'success',
        'Warning': 'warning',
        'Error': 'error',
      }),
      open: figma.boolean('Open', {
        true: true,
        false: false,
      }),
      message: figma.string('Message'),
      action: figma.children('Action'),
    },
    example: props => (
      <Snackbar
        variant={props.variant}
        open={props.open}
        message={props.message}
        action={props.action}
        onClose={() => {}}
      />
    ),
  }
)
