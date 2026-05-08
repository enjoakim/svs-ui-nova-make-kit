import { figma } from '@figma/code-connect'
import { Slider } from './Slider'

/**
 * Code Connect mapping for Svenska Spel Slider component
 *
 * TODO: Update with actual Figma component node-id
 * Connected to: https://www.figma.com/design/OQpwpaJZzLCQG8JkGAnbeJ/SvS-UI--nova-?node-id=4840:22355
 */

figma.connect(
  Slider,
  'https://www.figma.com/design/OQpwpaJZzLCQG8JkGAnbeJ/SvS-UI--nova-?node-id=4840:22355&m=dev',
  {
    props: {
      label: figma.string('Label'),
      min: figma.string('Min'),
      max: figma.string('Max'),
      step: figma.string('Step'),
      showMinMax: figma.boolean('Show Min Max', {
        true: true,
        false: false,
      }),
      showValue: figma.boolean('Show Value', {
        true: true,
        false: false,
      }),
      orientation: figma.enum('Orientation', {
        'Horizontal': 'horizontal',
        'Vertical': 'vertical',
      }),
      disabled: figma.boolean('Disabled', {
        true: true,
        false: false,
      }),
    },
    example: props => (
      <Slider
        label={props.label}
        min={props.min ? Number(props.min) : undefined}
        max={props.max ? Number(props.max) : undefined}
        step={props.step ? Number(props.step) : undefined}
        showMinMax={props.showMinMax}
        showValue={props.showValue}
        orientation={props.orientation}
        disabled={props.disabled}
      />
    ),
  }
)
