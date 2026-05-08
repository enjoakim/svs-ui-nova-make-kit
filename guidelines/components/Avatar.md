# Avatar

The Avatar component visually represents a user or entity, typically using an image, initials, or a placeholder. Indicators, such as badges or status icons, are placed with an outline to create contrast and ensure clear distinction between the Avatar and the associated information.

---

## Usage

**When to use:**

The Avatar is used to visually represent users or entities in a compact and recognizable way. It is commonly applied in scenarios such as:

- **User Profiles**: Displaying a user's photo, initials, or a placeholder when no image is available
- **Collaboration Tools**: Identifying team members, contributors, or participants in a group setting
- **Status Indicators**: Highlighting real-time information, such as online/offline status

**Commonly used with:**
- Navigation headers - for user account access
- Comment sections - to identify authors
- Team member lists - to show participants
- Messaging interfaces - to identify senders
- User cards - for profile information

---

## Semantic Purpose

### Avatar Types

The Avatar component is available in three distinct variations, each serving a unique purpose:

#### 1. **Text Avatar**
- **Purpose**: Default representation using user initials
- **When to use**: When an Avatar is assigned to a user but no custom image is provided
- **Behavior**: Displays the first letter of the user's name as the primary visual element
- **Components**:
  - Container
  - Text (first letter of name)

#### 2. **Image Avatar**
- **Purpose**: Personalized visual representation
- **When to use**: When a user has uploaded a custom profile image
- **Behavior**: The image takes precedence and replaces the default first-letter representation
- **Components**:
  - Container
  - Image (user photo)

#### 3. **Signed Out Avatar**
- **Purpose**: Placeholder for unauthenticated state
- **When to use**: When no user is logged in
- **Behavior**: Displays a generic user icon to indicate absence of an active user
- **Components**:
  - Container
  - Icon (generic user silhouette)

---

## Examples

### ✅ Correct Usage

**Do:**
- Use the text or Image Avatar to represent a signed-in user
- Use the signed-out avatar to indicate a sign-in call to action
- Use '9+' notation when badge numbers exceed single digits (e.g., 9+, 10+, 99+)
- Keep badge text short and descriptive (1-2 words)
- Use appropriate badge colors for their semantic meaning:
  - **Important (Red)**: Critical or urgent information requiring immediate attention
  - **Attention (Yellow/Orange)**: Warnings or situations needing acknowledgment
  - **Success (Green)**: Positive or confirmed statuses (online, completed)
  - **Neutral**: Less important status or add-on information

**Good Examples:**
- Signed-in user with text initial: "J" for "John"
- Signed-in user with profile photo
- Signed-out avatar with "Sign In" call to action
- Badge showing "9+" for 10 or more notifications

### ❌ Incorrect Usage

**Don't:**
- Don't use the signed-out avatar to represent signed-in users
- Don't use both icon and text in a badge—it adds clutter and disrupts its shape
- Don't display full multi-digit numbers in badges; use '9+' for clarity
- Don't use unclear or lengthy badge text (more than 2 words)

**Common Mistakes:**
- Using signed-out avatar for authenticated users
- Showing "12" instead of "9+" in notification badges
- Combining icons and text within a single badge
- Using wrong badge colors for semantic meaning
- Making badge text too long or verbose

---

## API

### Anatomy

The Avatar component consists of a circular container with content that varies based on the avatar type.

**Base Structure:**
- **Container**: Circular frame that holds the avatar content
- **Content**: Text, Image, or Icon depending on avatar type

**Text Avatar:**
```
A. Container
B. Text (first letter)
```

**Image Avatar:**
```
A. Container
B. Image
```

**Signed Out Avatar:**
```
A. Container
B. Icon
```

### Properties

#### Size
- **Type**: Enum (xxs, xs, s, m, L, XL, XXL)
- **Required**: Yes
- **Default**: m (40px)
- **Available Sizes**:
  - `xxs`: 16px
  - `xs`: 24px
  - `s`: 32px
  - `m`: 40px
  - `L`: 48px
  - `XL`: 56px
  - `XXL`: 64px
- **Description**: The Avatar component is designed to be versatile and adaptable, supporting a range of sizes to suit various contexts and layouts

#### Type
- **Type**: Enum (text, image, signedOut)
- **Required**: Yes
- **Options**:
  - `text`: Displays first letter of user's name
  - `image`: Displays custom user image
  - `signedOut`: Displays generic user icon
- **Description**: Determines the visual representation of the avatar

#### UserName (for Text Avatar)
- **Type**: String
- **Required**: When type is "text"
- **Description**: User's name - the first letter will be extracted and displayed

#### ImageSrc (for Image Avatar)
- **Type**: URL/Path
- **Required**: When type is "image"
- **Description**: Source path for the user's profile image

#### Badge (optional)
- **Type**: Object
- **Required**: No
- **Properties**:
  - `variant`: "important" | "attention" | "success" | "neutral"
  - `content`: String (1-2 words max) or Number
  - `position`: "bottom-right" (default)
- **Description**: Optional indicator overlaid on the avatar in the bottom right corner

### Behavior

**Dynamic Adaptation:**
The Avatar component dynamically adapts its appearance based on the user's state and the provided data:

1. **Signed Out → Signed In (Text)**:
   - User logs in without custom image
   - Avatar displays first letter of username

2. **Text → Image**:
   - User uploads custom profile image
   - Image replaces text representation

3. **Image → Text**:
   - User removes custom image
   - Falls back to first-letter representation

**Badge Display:**
- Badges are displayed in the bottom-right corner
- Badge colors convey semantic meaning (important, attention, success, neutral)
- Numbers exceeding 9 should display as "9+"
- Short descriptive text (1-2 words) for status indicators

### Placement

The Avatar component is designed to be versatile and adaptable, ensuring it can be effectively integrated into various layouts and contexts:

- **Headers/Navigation**: User account access points
- **Lists**: Team members, comments, messages
- **Cards**: User profile information
- **Inline**: Within text or content flows
- **Groups**: Multiple avatars representing team or collaboration

### Customization

**Badge Content:**
- Keep text short and descriptive (1-2 words maximum)
- Use appropriate color variants for semantic meaning
- Use "9+" notation for multi-digit numbers
- Never combine icon and text in a single badge

**Theme Variants:**
- Standard circular design with outline for contrast
- Consistent sizing across all avatar types
- Proper spacing for badge indicators

---

## Reference Implementation

Imported Figma frame available at: `src/imports/Avatar/Avatar.tsx`
