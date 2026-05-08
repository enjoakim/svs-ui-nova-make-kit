import { figma } from '@figma/code-connect'
import { FloatingActionBar } from './FloatingActionBar'

/**
 * Code Connect mapping for Svenska Spel FloatingActionBar component
 *
 * Connected to: https://www.figma.com/design/OQpwpaJZzLCQG8JkGAnbeJ/SvS-UI--nova-?node-id=11337-41778
 */

figma.connect(
  FloatingActionBar,
  'https://www.figma.com/design/OQpwpaJZzLCQG8JkGAnbeJ/SvS-UI--nova-?node-id=11337-41778&m=dev',
  {
    props: {
      position: figma.enum('Position', {
        'Bottom': 'bottom',
        'Top': 'top',
      }),
      alignment: figma.enum('Alignment', {
        'Left': 'left',
        'Center': 'center',
        'Right': 'right',
      }),
      showProgress: figma.boolean('Show Progress', {
        true: true,
        false: false,
      }),
      progressValue: figma.string('Progress Value'),
      progressSum: figma.string('Progress Sum'),
      badgeCount: figma.string('Badge Count'),
      supportiveAction: figma.children('Supportive Action'),
      contentSlot: figma.children('Content Slot'),
      primaryAction: figma.children('Primary Action'),
    },
    example: props => (
      <FloatingActionBar
        position={props.position}
        alignment={props.alignment}
        showProgress={props.showProgress}
        progressValue={props.progressValue ? Number(props.progressValue) : undefined}
        progressSum={props.progressSum}
        badgeCount={props.badgeCount ? Number(props.badgeCount) : undefined}
        supportiveAction={props.supportiveAction}
        contentSlot={props.contentSlot}
        primaryAction={props.primaryAction}
      />
    ),
  }
)
