import { figma } from '@figma/code-connect'
import { Avatar } from './Avatar'

/**
 * Code Connect mapping for Svenska Spel Avatar component
 *
 * TODO: Update with actual Figma component node-id
 * Connected to: https://www.figma.com/design/OQpwpaJZzLCQG8JkGAnbeJ/SvS-UI--nova-?node-id=4840-22273
 */

figma.connect(
  Avatar,
  'https://www.figma.com/design/OQpwpaJZzLCQG8JkGAnbeJ/SvS-UI--nova-?node-id=4840-22273&m=dev',
  {
    props: {
      size: figma.enum('Size', {
        'XXS': 'xxs',
        'XS': 'xs',
        'S': 's',
        'M': 'm',
        'L': 'L',
        'XL': 'XL',
        'XXL': 'XXL',
      }),
      type: figma.enum('Type', {
        'Text': 'text',
        'Image': 'image',
        'Signed Out': 'signedOut',
      }),
      userName: figma.string('User Name'),
      imageSrc: figma.string('Image Source'),
    },
    example: props => (
      <Avatar
        size={props.size}
        type={props.type}
        userName={props.userName}
        imageSrc={props.imageSrc}
      />
    ),
  }
)
