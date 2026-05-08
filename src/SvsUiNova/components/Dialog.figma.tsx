import { figma } from '@figma/code-connect'
import { Dialog, DialogFooter } from './Dialog'

/**
 * Code Connect mapping for Svenska Spel Dialog component
 *
 * TODO: Update with actual Figma component node-id
 * Connected to: https://www.figma.com/design/OQpwpaJZzLCQG8JkGAnbeJ/SvS-UI--nova-?node-id=12178-47537
 */

figma.connect(
  Dialog,
  'https://www.figma.com/design/OQpwpaJZzLCQG8JkGAnbeJ/SvS-UI--nova-?node-id=12178-47537&m=dev',
  {
    props: {
      open: figma.boolean('Open', {
        true: true,
        false: false,
      }),
      mobile: figma.boolean('Mobile', {
        true: true,
        false: false,
      }),
      scrollable: figma.boolean('Scrollable', {
        true: true,
        false: false,
      }),
      title: figma.string('Title'),
      description: figma.string('Description'),
      icon: figma.instance('Icon'),
      children: figma.children('Actions'),
    },
    example: props => (
      <Dialog
        open={props.open}
        mobile={props.mobile}
        scrollable={props.scrollable}
        title={props.title}
        description={props.description}
        icon={props.icon}
        onClose={() => {}}
      >
        {props.children}
      </Dialog>
    ),
  }
)
