import { figma } from '@figma/code-connect'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './Card'

/**
 * Code Connect mapping for Svenska Spel Card component
 *
 * TODO: Update with actual Figma component node-id
 * Connected to: https://www.figma.com/design/OQpwpaJZzLCQG8JkGAnbeJ/SvS-UI--nova-?node-id=4840:22454
 */

figma.connect(
  Card,
  'https://www.figma.com/design/OQpwpaJZzLCQG8JkGAnbeJ/SvS-UI--nova-?node-id=4840:22454&m=dev',
  {
    props: {
      title: figma.string('Title'),
      description: figma.string('Description'),
      content: figma.children('Content'),
    },
    example: props => (
      <Card>
        <CardHeader>
          {props.title && <CardTitle>{props.title}</CardTitle>}
          {props.description && <CardDescription>{props.description}</CardDescription>}
        </CardHeader>
        <CardContent>
          {props.content}
        </CardContent>
      </Card>
    ),
  }
)
