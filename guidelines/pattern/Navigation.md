# Navigation

Navigation guides users through different parts of the customer journey in our digital environment. It provides structure, hierarchy, and pathways that enable users to discover content and accomplish tasks efficiently.

---

## Usage

Navigation guides our users through different parts of the customer journey in our digital environment.

Arrange your layout based on the content and tasks you want users to access. Highlight important destinations using tabs or side navigation, and reduce the prominence of less important content by placing it in less noticeable areas.

**Key Purposes:**

- **Wayfinding**: Help users understand where they are and where they can go
- **Structure**: Organize content into meaningful hierarchies
- **Access**: Enable quick access to important features and content
- **Guidance**: Lead users through desired pathways and flows
- **Context**: Communicate current location and relationships
- **Discovery**: Help users find new content and features

---

## Principles

Ensure your navigation is easy to follow and predictable. Both new and returning users should effortlessly navigate your digital product.

### Group Content

Organize content into meaningful groups that highlight relationships.

**Guidelines:**
- Create logical groupings based on user mental models
- Highlight relationships between related content
- Use clear labels that communicate purpose
- Keep groups focused and cohesive
- Avoid mixing unrelated content in same group

**Benefits:**
- Easier to scan and understand
- Reduces cognitive load
- Helps users build mental map of product
- Makes content more discoverable

### Guide Actions

Lead users through paths between scenes, encouraging specific actions or free exploration.

**Guidelines:**
- Design clear pathways to important tasks
- Support both directed and exploratory navigation
- Provide context at each step
- Make primary actions prominent
- Support common user journeys

**Benefits:**
- Users accomplish tasks more efficiently
- Supports various interaction styles
- Reduces confusion and errors
- Improves task completion rates

### Direct Attention

Design your navigation to spotlight important content and tasks.

**Guidelines:**
- Prioritize high-value destinations
- Use visual hierarchy to emphasize importance
- Place critical items in prominent positions
- Reduce visual weight of less important items
- Adapt as user needs shift

**Benefits:**
- Users find important features quickly
- Aligns with business priorities
- Improves engagement with key features
- Reduces time to value

---

## Design Your Navigation

Navigation makes it easy to reach essential parts of your digital service. It covers important sections, settings, and guiding actions.

To choose the right navigation approach, understand your users, their common pathways, and desired interactions.

For example, in a digital service, users might seek account management, game options, or support resources. Aligning with user priorities will ensure your navigation effectively serves their needs.

### Prioritize

Rank common user tasks as high, medium, or low priority. Make high-priority tasks stand out in the UI and adjust as user needs shift.

**Priority Levels:**

**High Priority:**
- Most frequently used features
- Critical user tasks
- Primary business objectives
- Time-sensitive actions

**Medium Priority:**
- Regularly used features
- Supporting tasks
- Secondary workflows
- Configuration options

**Low Priority:**
- Rarely used features
- Advanced settings
- Edge case scenarios
- Administrative tasks

**Implementation:**
- High priority: Primary navigation, prominent placement
- Medium priority: Secondary navigation, accessible but less prominent
- Low priority: Nested menus, settings panels, or hidden behind "More"

### Sequence and Pathways

When a user wants to discover a favorite game or access a new one, both paths lead to viewing game details. Ensure that frequently used paths to these destinations (such as search or favorites) are easily accessible.

**Considerations:**
- Map common user journeys
- Identify multiple paths to same destination
- Ensure frequently used paths are accessible
- Reduce friction in critical flows
- Support different user preferences

**Example Pathways:**
- Browse → Category → Game → Details
- Search → Results → Game → Details
- Favorites → Game → Details
- Recent → Game → Details

---

## Optimize Navigation

### Identify Paths

Analyze user journeys, understand common routes and adjust the navigation to user needs.

**Methods:**
- User research and interviews
- Analytics data on user flows
- Task analysis and user testing
- Journey mapping
- Behavioral data analysis

**Actions:**
- Document common pathways
- Identify pain points and friction
- Discover unexpected routes
- Understand drop-off points
- Validate navigation assumptions

### Prioritize Destinations

List and prioritize order for commonly used places in your navigation.

**Approach:**
- Rank destinations by usage frequency
- Consider business objectives
- Balance user needs with business goals
- Group related destinations
- Order by importance and usage

**Placement:**
- Most important: Top-level navigation
- Moderately important: Secondary navigation
- Less important: Nested or contextual navigation

### Group Tasks

Group similar tasks together in navigation.

**Grouping Strategies:**
- By user goal (Account, Games, Support)
- By content type (News, Results, Statistics)
- By frequency of use (Common, Occasional, Rare)
- By user role (Player, Administrator, Support)
- By workflow stage (Browse, Play, Review)

**Benefits:**
- Easier to scan and find
- Reduces cognitive load
- Creates predictable structure
- Supports mental model development

---

## Break It Down

Split complex tasks into smaller actions. These smaller steps are often used, easier to understand, and better match user needs.

For instance, dividing search into actions like searching by name, location, or popularity might suggest adding these to navigation.

**Approach:**
- Identify complex, multi-step tasks
- Break into discrete actions
- Evaluate which actions warrant navigation presence
- Create dedicated entry points for common actions
- Maintain overall flow and coherence

**Benefits:**
- Reduces perceived complexity
- Makes individual actions more discoverable
- Enables shortcuts to specific steps
- Improves task efficiency
- Better matches user intent

**Example:**
Instead of generic "Search," provide:
- Search by Name
- Search by Location
- Search by Popularity
- Browse Categories

---

## Hierarchy

Navigation organizes content by placing it within a hierarchy. Key scenes are at the top, leading users to scenes lower in the hierarchy in a structured flow. This guides users smoothly through your digital products.

### Home Scene

This is the entry point, introducing navigation. It can display personalized content based on users' previous interaction.

**Characteristics:**
- Top of navigation hierarchy
- Entry point to digital service
- May show personalized content
- Links to main sections
- Often displays overview or dashboard

**Best Practices:**
- Make navigation options immediately clear
- Highlight most important destinations
- Support both new and returning users
- Personalize based on user history (when appropriate)
- Provide quick access to common tasks

### Parent-Child Hierarchy

In a hierarchical structure, the upper level is the "parent," containing the lower levels referred to as "children." For example, the home screen functions as a parent to other screens.

**Structure:**
```
Parent (Home)
├── Child (Section A)
│   ├── Grandchild (Item 1)
│   └── Grandchild (Item 2)
├── Child (Section B)
└── Child (Section C)
```

**Characteristics:**
- Clear hierarchical relationships
- Parent contains or organizes children
- Each level adds specificity
- Maintains logical structure

**Benefits:**
- Easy to understand and navigate
- Scalable for complex content
- Supports mental model development
- Enables breadcrumb navigation

### Navigation Flow

**Moving In: Descending from Parent to Child**
- Navigate deeper into hierarchy
- Increase specificity
- Focus narrows to particular content
- Moving from general to specific

**Going Back: Ascending from Child to Parent**
- Navigate up hierarchy
- Decrease specificity
- Broaden context
- Moving from specific to general

**Best Practices:**
- Make hierarchy clear through visual design
- Provide clear navigation controls (back, up)
- Maintain context at each level
- Use breadcrumbs for deep hierarchies
- Ensure users always know where they are

---

## Navigation Patterns

### Siblings

Views that start from the same place are called siblings. Digital environments with various tasks, all equally important, often have many sibling scenes. Navigating between these scenes is known as lateral navigation.

**Characteristics:**
- Same hierarchical level
- Share common parent
- Equal importance
- Horizontal movement between siblings

**Examples:**
- Multiple tabs in a section
- Peer sections in main navigation
- Items in a category at same level

**Implementation:**
- Tabs for limited siblings (2-6)
- Navigation menu for more siblings
- Equal visual weight
- Clear indication of current location

### Collections

Collections are groups of related elements, such as three cards in a view. Each card may represent different items like products, articles, or images, but they're grouped based on a shared parent or category.

**Characteristics:**
- Related items grouped together
- Share common attributes or parent
- Often displayed in grid or list
- Individual items at same hierarchy level

**Examples:**
- Product cards in a category
- Article previews in a section
- Game tiles in a collection

**Implementation:**
- Grid or list layouts
- Consistent item presentation
- Clear collection title/context
- Navigation to individual items

### Links

**Crosslinks (Internal)**
Links allow users to move quickly between scenes that are not right next to each other in the structure. Crosslinks are links that take users anywhere within your product.

**Characteristics:**
- Shortcuts between non-adjacent screens
- Break traditional hierarchical flow
- Enable efficient navigation
- Support common pathways

**Use Cases:**
- Related content references
- Shortcuts to common destinations
- Contextual navigation
- Recommended content

**External Links**
External links lead users to a different website, providing access to external content. They're valuable for referencing authoritative sources, citing research, or offering extra resources beyond the current page.

**Best Practices:**
- Clearly indicate external links
- Open in new tab/window
- Provide context before navigating away
- Use sparingly to maintain focus
- Ensure trusted sources

---

## Reverse Navigation

Reverse navigation involves moving users backward between screens. This movement can take users through their recent screen history in chronological order or lead them upward through a specific hierarchy.

**Types:**

**Chronological Back:**
- Navigate through browsing history
- Returns to previously viewed screen
- May cross hierarchical boundaries
- Browser-native on web

**Hierarchical Up:**
- Navigate to parent in hierarchy
- Maintains hierarchical structure
- More predictable than chronological
- Useful for deep hierarchies

**Web-Specific:**
On the web, browsers have an embedded "go back" button, eliminating the need for additional back buttons.

**Best Practices:**
- Web: Rely on browser back button
- Mobile: Provide back navigation in UI
- Make navigation direction clear
- Don't trap users in flows
- Preserve user state when going back

---

## Menus, Logic, and Hierarchy

For cases where information needs to be positioned deeper within the content hierarchy, the following approach illustrates how to work with various menus and levels.

Navigation organizes content by placing it within a hierarchy. Key scenes are at the top, leading users to scenes lower in the hierarchy in a structured flow. This guides users smoothly through your digital products.

**Menu Levels:**

**Primary Navigation (Level 1):**
- Main sections and destinations
- Always visible or easily accessible
- Highest priority content
- Example: Home, Games, Account, Support

**Secondary Navigation (Level 2):**
- Subsections within primary areas
- Context-specific navigation
- Visible when in relevant section
- Example: Within Games → Casino, Sports, Lottery

**Tertiary Navigation (Level 3):**
- Detailed navigation within subsections
- Often contextual or on-page
- Specific features or content
- Example: Within Casino → Slots, Table Games, Live Casino

**Deep Navigation (Level 4+):**
- Highly specific content
- Often inline or contextual
- Consider if this depth is necessary
- May indicate need for restructuring

**Best Practices:**
- Limit depth where possible (3-4 levels max)
- Use different visual treatments for each level
- Maintain consistent patterns across levels
- Provide wayfinding at each level
- Consider breadcrumbs for deep hierarchies

**Example: Navigation Hierarchy in "Ombudsportalen"**
```
Level 1: Main Menu (Always visible)
├── Home
├── Games
├── Account
└── Support

Level 2: Games Submenu
├── Casino
├── Sports Betting
└── Lottery

Level 3: Casino Categories
├── Slots
├── Table Games
└── Live Casino

Level 4: Individual Games
```

---

## Variation of Navigation Structure

The navigation structure can vary based on the product and layout.

Different products may require different navigation approaches based on:
- User needs and behaviors
- Content volume and complexity
- Device and screen size
- Business objectives
- Product type and purpose

### Example: Lotto Digital Environment (Svenska Spel Tur)

**Structure:**
- Simplified navigation for focused experience
- Emphasis on game selection
- Quick access to account and results
- Streamlined for specific user tasks

**Characteristics:**
- Limited top-level options
- Focus on core user journeys
- Minimalist approach
- Clear calls-to-action

### Example: Stryktipset Digital Environment (Sport & Casino)

**Structure:**
- Broader navigation for diverse content
- Multiple product categories
- Rich content and features
- Complex user pathways

**Characteristics:**
- More top-level navigation items
- Deeper hierarchy
- Multiple navigation patterns
- Richer feature set

**Key Insight:**
Different products require different navigation structures. Design navigation based on user needs and product requirements, not on rigid templates.

---

## Navigation Options Based on User Status

We offer two distinct navigation options. One is accessible at all times, even when not logged in. The other becomes personalized and available when logged in.

This approach to navigation ensures that both logged-in and non-logged-in users can easily access relevant features. It optimizes the user experience by offering different navigation options based on the user's status.

### Navigation for Everyone (Non-Authenticated)

**Always positioned on the left side**

**Characteristics:**
- Available to all users
- Public content and features
- Browse and discovery features
- Marketing and information
- Sign-up and login options

**Content Examples:**
- Games overview
- Public results
- Information pages
- Help and support
- Sign up / Log in

### Personalized Navigation (Authenticated)

**Available when logged in**

**Characteristics:**
- Personal account features
- User-specific content
- Transaction history
- Personalized recommendations
- Account management

**Content Examples:**
- My Account
- My Games
- Transaction History
- Favorites
- Personal Settings
- Logout

**Benefits:**
- Clear separation of public and private features
- Simplified navigation for non-logged-in users
- Rich personalized experience for logged-in users
- Encourages registration and login
- Optimized for user status

**Implementation Guidelines:**
- Left side: Always accessible (public)
- Right side: User-specific (authenticated)
- Clear visual distinction
- Consistent positioning
- Smooth transition when logging in

---

## Best Practices

### Consistency

**Across Product:**
- Use consistent navigation patterns
- Maintain predictable positioning
- Use familiar interaction patterns
- Keep labels and terminology consistent

**Within Navigation:**
- Consistent visual treatment
- Predictable behavior
- Clear active states
- Uniform interaction patterns

### Clarity

**Clear Labels:**
- Use descriptive, specific labels
- Avoid jargon and ambiguity
- Keep labels concise
- Use parallel structure

**Clear Structure:**
- Logical organization
- Obvious relationships
- Clear hierarchy
- Predictable grouping

### Accessibility

**Requirements:**
- Keyboard navigable
- Screen reader support
- Clear focus indicators
- Sufficient color contrast
- Touch-friendly targets (44x44px minimum)

**Best Practices:**
- Use semantic HTML (nav, ul, li, a)
- Provide skip navigation links
- Indicate current location
- Support keyboard shortcuts (when appropriate)
- Test with assistive technologies

### Performance

**Optimization:**
- Fast navigation response
- Immediate feedback
- Progressive enhancement
- Optimize for mobile networks
- Minimize navigation-blocking resources

### Mobile Considerations

**Responsive Patterns:**
- Hamburger menu for complex navigation
- Bottom navigation for key destinations
- Collapsible sections for hierarchies
- Touch-friendly targets
- Simplified for small screens

**Mobile-Specific:**
- Prioritize even more aggressively
- Reduce navigation depth
- Consider thumb-friendly placement
- Optimize for one-handed use

### Testing and Validation

**Methods:**
- User testing with navigation tasks
- Analytics on navigation usage
- A/B testing navigation structures
- Card sorting for organization
- Tree testing for findability

**Metrics:**
- Task completion rates
- Time to destination
- Navigation usage patterns
- Drop-off points
- User satisfaction

---

## Related Components

Navigation is implemented using various components from the design system:

- **[TabsMenu](../components/TabsMenu.md)** - Primary navigation between pages
- **[Tabs](../components/Tabs.md)** - Content switching within a section
- **[Button](../components/Button.md)** - Navigation actions and CTAs
- **[Badge](../components/Badge.md)** - Notifications and alerts in navigation
- **[Separator](../components/Separator.md)** - Dividing navigation sections

---

## Reference Implementation

Imported Figma frame available at: `src/imports/Navigation/Navigation.tsx`
