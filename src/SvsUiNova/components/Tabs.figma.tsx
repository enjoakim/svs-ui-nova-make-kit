import { figma } from '@figma/code-connect'
import { Tabs } from './Tabs'

/**
 * Code Connect mapping for Svenska Spel Tabs component
 *
 * Connected to: https://www.figma.com/design/OQpwpaJZzLCQG8JkGAnbeJ/SvS-UI--nova-?node-id=2764-25047
 */

figma.connect(
  Tabs,
  'https://www.figma.com/design/OQpwpaJZzLCQG8JkGAnbeJ/SvS-UI--nova-?node-id=2764-25047&m=dev',
  {
    props: {
      emphasis: figma.enum('Emphasis', {
        'Low': 'low',
        'High': 'high',
      }),
      containerBg: figma.enum('Container Background', {
        'White': 'white',
        'Warm Grey': 'warm-grey',
      }),
      items: figma.children('Tab Items'),
    },
    example: props => (
      <Tabs
        emphasis={props.emphasis}
        containerBg={props.containerBg}
        items={[
          { label: 'Tab 1', content: props.items },
          { label: 'Tab 2', content: null },
        ]}
      />
    ),
  }
)
