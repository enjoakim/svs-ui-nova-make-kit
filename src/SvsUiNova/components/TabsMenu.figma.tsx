import { figma } from '@figma/code-connect'
import { TabsMenu } from './TabsMenu'

/**
 * Code Connect mapping for Svenska Spel TabsMenu component
 *
 * Connected to: https://www.figma.com/design/OQpwpaJZzLCQG8JkGAnbeJ/SvS-UI--nova-?node-id=4840:22295
 */

figma.connect(
  TabsMenu,
  'https://www.figma.com/design/OQpwpaJZzLCQG8JkGAnbeJ/SvS-UI--nova-?node-id=4840:22295&m=dev',
  {
    props: {
      items: figma.children('Tab Items'),
      icon: figma.instance('Icon'),
    },
    example: props => (
      <TabsMenu
        items={[
          { label: 'Tab 1', content: props.items, icon: props.icon },
          { label: 'Tab 2', content: null },
        ]}
      />
    ),
  }
)
