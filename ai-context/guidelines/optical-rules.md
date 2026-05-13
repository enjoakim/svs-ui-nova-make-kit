# Optical Rules

Literal math is not always visually correct. Use optical judgment when strict
centering or strict padding makes the UI feel off.

## When Optical Correction Wins

- icon and text baselines do not feel aligned
- control labels look too low next to checkboxes or radios
- cards feel top-heavy or bottom-heavy even though spacing is equal
- border radius looks wrong because density or surface size changed

## Optical Top Padding

- Headings often need slightly more space above them than below them.
- Dense cards usually look better with a touch more top padding in the header
  than in a compact footer action row.
- For label-plus-control stacks, preserve the `8` structural gap but allow a
  small optical nudge when the font metrics make the label feel detached.

## Text And Icon Alignment

Repo examples already use optical alignment hacks such as:

- `mt-0.5` on checkbox boxes
- `flex-shrink-0` icon wrappers
- explicit icon containers in dialogs and buttons

Use:

- fixed icon containers for repeatable alignment
- `items-center` for same-height control rows
- small optical offsets only when the baseline looks wrong

Do not:

- compensate by adding random padding on one side only
- distort the surrounding spacing scale just to fix one icon

## Radius And Perceived Balance

- Small controls look sharper than large surfaces at the same literal radius.
- Large surfaces often need a larger radius to feel equally rounded.
- When a card contains smaller controls, the outer radius should read broader
  than the inner control radius.

## Card Content Density

- Do not overpack every card with equal-weight blocks.
- Pull the title and description visually together.
- Give actions a clear separation from body content.
- Use tighter stacks for metadata and looser stacks for explanatory content.

## Preserve Rhythm vs Break Rhythm

Preserve rhythm when:

- the screen has repeated cards or rows
- the content type repeats in a dashboard or table
- the layout depends on scanning speed

Break rhythm intentionally when:

- a title needs extra breathing room
- a destructive or primary action needs stronger separation
- a hero, summary block, or empty state needs to read as a new layer

## Practical Recommendation

If strict token math and visual balance disagree, keep the token system as the
default and apply the smallest possible optical correction near the local
problem. Do not rewrite the whole spacing system around a single misalignment.
