import { figma } from '@figma/code-connect'
import { BottomSheet } from './BottomSheet'

/**
 * Code Connect mapping for Svenska Spel BottomSheet component
 *
 * TODO: Update with actual Figma component node-id
 * Connected to: https://www.figma.com/design/OQpwpaJZzLCQG8JkGAnbeJ/SvS-UI--nova-?node-id=11517-36903
 */

figma.connect(
  BottomSheet,
  'https://www.figma.com/design/OQpwpaJZzLCQG8JkGAnbeJ/SvS-UI--nova-?node-id=11517-36903&m=dev',
  {
    props: {
      open: figma.boolean('Open', {
        true: true,
        false: false,
      }),
      type: figma.enum('Type', {
        'Modal': 'modal',
        'Non-Modal': 'non-modal',
      }),
      height: figma.enum('Height', {
        'Auto': 'auto',
        'Half': 'half',
        'Full': 'full',
      }),
      title: figma.string('Title'),
      description: figma.string('Description'),
      hasFooter: figma.boolean('Has Footer', {
        true: true,
        false: false,
      }),
      hasCloseAction: figma.boolean('Has Close Action', {
        true: true,
        false: false,
      }),
      children: figma.children('Content'),
      footer: figma.children('Footer'),
    },
    example: props => (
      <BottomSheet
        open={props.open}
        type={props.type}
        height={props.height}
        title={props.title}
        description={props.description}
        hasFooter={props.hasFooter}
        hasCloseAction={props.hasCloseAction}
        footer={props.footer}
        onClose={() => {}}
      >
        {props.children}
      </BottomSheet>
    ),
  }
)
