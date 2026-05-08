import { figma } from '@figma/code-connect'
import { Accordion } from './Accordion'

/**
 * Code Connect mapping for Svenska Spel Accordion component
 * Connected to: https://www.figma.com/design/OQpwpaJZzLCQG8JkGAnbeJ/SvS-UI--nova-?node-id=7375-34626
 */

figma.connect(
  Accordion,
  'https://www.figma.com/design/OQpwpaJZzLCQG8JkGAnbeJ/SvS-UI--nova-?node-id=7375-34626&m=dev',
  {
    props: {
      variant: figma.enum('Variant', {
        'Default': 'default',
        'Low Emphasis': 'low-emphasis',
        'Mid Emphasis': 'mid-emphasis',
      }),
      label: figma.string('Label'),
      allowMultiple: figma.boolean('Allow Multiple'),
      items: figma.children('Items'),
    },
    example: props => (
      <Accordion
        variant={props.variant}
        label={props.label}
        allowMultiple={props.allowMultiple}
        items={props.items}
      />
    ),
  }
)

/**
 * Code Connect mapping for Svenska Spel Accordion Item
 * Connected to: https://www.figma.com/design/OQpwpaJZzLCQG8JkGAnbeJ/SvS-UI--nova-?node-id=24907-320623
 */

figma.connect(
  Accordion,
  'https://www.figma.com/design/OQpwpaJZzLCQG8JkGAnbeJ/SvS-UI--nova-?node-id=24907-320623&m=dev',
  {
    props: {
      items: figma.children([
        {
          title: figma.string('Title'),
          content: figma.string('Content'),
          defaultOpen: figma.boolean('Default Open'),
        }
      ]),
    },
    example: props => (
      <Accordion items={props.items} />
    ),
  }
)
