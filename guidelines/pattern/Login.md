# Login

Login patterns and authentication flows that enable users to securely access their accounts and personalized features. Focused on simplicity, security, and usability to provide a seamless authentication experience.

---

## Usage

### Principles

Simplicity, security, and usability are important design principles for the login pattern. They give us a seamless user experience, ensure ease of use, protect your information, and provide convenience.

#### Simplicity

Keep the login process straightforward and easy to understand, minimizing complexity and steps required from the user.

**Guidelines:**
- Minimize number of steps
- Clear, simple interface
- Obvious next actions
- No unnecessary fields or options
- Streamlined flow from start to finish

**Benefits:**
- Faster login process
- Reduced user frustration
- Lower abandonment rates
- Better user experience
- Easier for all users, including those with limited tech experience

#### Security

Implement robust security measures to protect user credentials and sensitive information, such as password encryption and secure communication protocols.

**Guidelines:**
- Use secure authentication methods (Bank-ID preferred)
- Encrypt sensitive data in transit and at rest
- Implement secure session management
- Follow security best practices
- Protect against common attacks (brute force, phishing, etc.)
- Comply with regulatory requirements

**Benefits:**
- Protected user data
- Reduced risk of account compromise
- User trust and confidence
- Regulatory compliance
- Brand reputation protection

#### Usability

Design the login interface with a focus on user experience, making it intuitive and easy for users to enter their credentials and navigate the login process.

**Guidelines:**
- Intuitive interface design
- Clear labels and instructions
- Helpful error messages
- Support for different user needs
- Accessible to all users
- Multiple login options when appropriate

**Benefits:**
- Higher login success rates
- Reduced support requests
- Better accessibility
- Improved user satisfaction
- Supports diverse user needs

---

## Authentication Methods

### Login Options

Provide login options for a versatile and user-friendly login experience, ensuring users are not limited to a single choice.

**Available Methods:**
- Bank-ID (primary method)
- QR code authentication
- Username and password (fallback)
- Saved credentials (convenience)

**Benefits:**
- Accommodates different user preferences
- Provides fallback options
- Improves accessibility
- Enhances user experience
- Reduces friction for different scenarios

**Guidelines:**
- Present options clearly
- Make primary method most prominent
- Provide clear descriptions of each method
- Support smooth switching between methods
- Ensure all methods are secure

### Saved Credentials

Streamline login with saved credentials for a seamless user experience.

**Characteristics:**
- Browser/device remembers login information
- Quick access with minimal input
- Secure credential storage
- Optional feature (user choice)

**Implementation:**
- Support browser autofill
- Allow users to opt-in to remember credentials
- Provide option to forget/clear saved credentials
- Maintain security while improving convenience
- Clear communication about what's being saved

**Benefits:**
- Faster login for returning users
- Reduced friction
- Better user experience
- Fewer password entry errors

**Considerations:**
- Security on shared devices
- User privacy preferences
- Clear opt-in/opt-out controls
- Secure storage mechanisms

### Bank-ID

Secure and convenient identification for easy authentication and transactions.

**Characteristics:**
- Strong authentication method
- Widely used in Sweden
- Two-factor authentication built-in
- Trusted by users
- Compliant with regulations

**Implementation:**
- Primary login method
- Clear instructions for activation
- Support for same device and other device flows
- Error handling for Bank-ID issues
- Fallback options if Bank-ID unavailable

**User Flow:**
1. User initiates Bank-ID login
2. Choose same device or other device
3. Open Bank-ID app
4. Authenticate with PIN/biometrics
5. Return to application (logged in)

**Benefits:**
- High security level
- Familiar to Swedish users
- Reduces password management burden
- Strong identity verification
- Regulatory compliance

### QR Code

QR codes for a quick and easy way to access your account.

**Characteristics:**
- Scan QR code with mobile device
- Cross-device authentication
- Quick and convenient
- No typing required

**Use Cases:**
- Desktop login using mobile device
- Public kiosks or shared computers
- Quick authentication
- Passwordless login option

**User Flow:**
1. QR code displayed on screen
2. User scans with mobile device
3. Authenticate on mobile device
4. Desktop/web session logged in

**Benefits:**
- Convenient cross-device login
- Reduces typing errors
- Quick authentication
- Modern, familiar pattern
- Secure authentication flow

---

## User Experience

### User Feedback

Provide visual feedback to indicate successful login or any relevant information to the user.

**Types of Feedback:**
- Loading indicators during authentication
- Success confirmation
- Error messages
- Progress indicators for multi-step flows
- Status updates (e.g., "Waiting for Bank-ID")

**Example:**
The loader is an example of feedback that prompts you to start your Bank-ID to continue the login process, preferably with supporting text.

**Guidelines:**
- Always provide immediate feedback
- Use clear, descriptive messages
- Show progress for longer operations
- Indicate next steps clearly
- Use appropriate visual indicators (loaders, checkmarks, error icons)

**Best Practices:**
- Don't leave users wondering what's happening
- Provide context with text, not just icons
- Use consistent feedback patterns
- Make feedback accessible (screen readers)
- Ensure feedback is noticeable but not disruptive

### User Identification

Our main login is Bank-ID, but if that is not the case, include fields for users to enter their credentials, such as username or email and password.

**Credential Fields:**
- Username or email input
- Password input with show/hide toggle
- Clear field labels
- Appropriate input types and validation
- Support for autofill

**Implementation:**
- Use semantic HTML (input type="email", type="password")
- Provide clear labels
- Show/hide password toggle
- Validate input appropriately
- Support browser autofill
- Accessible form structure

**Best Practices:**
- Keep form simple and focused
- Don't ask for unnecessary information
- Provide clear error messages
- Support paste for passwords
- Don't prevent password managers

### Password Recovery

If the user forgets their login credentials, we offer a solution to help them recover access and continue seamlessly.

**Recovery Flow:**
1. User clicks "Forgot password" link
2. Enter email or username
3. Receive recovery email/SMS
4. Follow link to reset password
5. Create new password
6. Return to login

**Guidelines:**
- Make recovery option easy to find
- Clear instructions throughout flow
- Secure recovery process
- Timely delivery of recovery messages
- Support multiple recovery methods (email, SMS)

**Best Practices:**
- Don't reveal whether email exists (security)
- Use secure, time-limited recovery tokens
- Require email verification
- Log password reset events
- Notify user of password changes

---

## Error Handling

Errors can occur in the login process due to various reasons. It's important to communicate to the user so that they can correct it.

### Incorrect Password

**Error State:**
- Clear indication that password is incorrect
- Helpful error message
- Opportunity to retry
- Link to password recovery

**Error Message Example:**
"Incorrect password. Please try again or reset your password."

**Guidelines:**
- Don't reveal whether username exists
- Provide helpful guidance
- Limit retry attempts (prevent brute force)
- Offer password recovery option
- Track failed attempts for security

### Incorrect SSN (Social Security Number)

**Error State:**
- Indication that SSN format is invalid
- Helpful guidance on correct format
- Opportunity to correct

**Error Message Example:**
"Invalid personal number format. Please enter your 12-digit personal number (YYYYMMDDXXXX)."

**Guidelines:**
- Validate format client-side
- Provide format guidance
- Clear error indication
- Accessible error messages
- Don't expose sensitive details in errors

### Error Dialogs

If an error occurs during login, a dialog will provide specific information and guidance to resolve the issue.

**Failed Login Dialog:**
- Clear error title
- Specific error description
- Actionable next steps
- Options to retry or recover
- Support contact information (if needed)

**Dialog Structure:**
- Error icon and title
- Clear explanation of what went wrong
- What the user should do next
- Action buttons (Retry, Cancel, Get Help)
- Link to support if needed

**Examples:**
- "Login failed - Bank-ID cancelled"
- "Login failed - Network error"
- "Login failed - Account locked"
- "Login failed - Service unavailable"

**Best Practices:**
- Be specific about what went wrong
- Provide actionable guidance
- Don't use technical jargon
- Offer clear next steps
- Make it easy to get help if needed

---

## Content and Placement

### Login Visibility

**Do:**
- Ensure easy access and visibility by showcasing the login functionality early in your view, ideally in the top header.

**Don't:**
- Don't bury the login feature deep within your website or application. It should be visible and accessible for the users.

**Best Practices:**
- Place login in consistent location (typically top-right)
- Make it prominent but not overwhelming
- Use clear labeling ("Log in" or "Sign in")
- Ensure it's visible on all pages
- Mobile: Consider prominent placement in menu

### Entry Points

#### Two Entry Points

**A - Direct Login Button**
This takes you directly to the login view.

**B - User Icon Menu**
User icon, when clicked a user menu opens.

**Implementation:**
- Provide multiple entry points for convenience
- Direct button for quick access
- User menu for context and options
- Both paths lead to same login flow
- Consistent experience regardless of entry point

#### Entry Point – User Menu

When clicked on the user icon (A), a user menu opens, and the primary action within this menu is the login call to action to provide a clear and easy pathway.

**User Menu Structure:**
- Primary action: "Log in" button
- Other options: Help, About, etc.
- Clear visual hierarchy
- Login as most prominent action

**Benefits:**
- Contextual login option
- Supports exploration before committing to login
- Familiar pattern for users
- Provides additional options alongside login

---

## Formatting

### Anatomy of the Login View

The login anatomy aims to provide a user-friendly and secure experience, ensuring users can easily authenticate their identities and access the desired services or features.

**Structure:**

**A - Login Options**
- Available authentication methods
- Clear selection interface
- Method descriptions

**B - Title (Svenska Spel Tone of Voice)**
- Welcoming headline
- Brand-appropriate messaging
- Sets context for login

**C - Call to Action Options**
- Bank-ID on this unit
- Bank-ID on another unit
- Alternative methods

**D - Cancel**
- Option to exit login flow
- Clear escape path
- Returns to previous view

**E - Option to Become a Customer**
- Sign-up link for non-customers
- Clear call-to-action
- Transitions to registration flow

**F - Information About Bank-ID**
- Help text explaining Bank-ID
- Links to more information
- Reduces confusion and barriers

**G - Legal Information**
- Secure login messaging
- Fraud prevention information
- Regulatory compliance text

**H - Svenska Spel Logotype (Sender)**
- Brand identity
- Trust indicator
- Sender verification

**I - Legal Text**
- Terms, privacy, compliance
- Regulatory requirements
- User protection information

**J - Scrim**
- The purpose of a scrim is to improve legibility and focus on the foreground content by reducing the visual prominence of the background
- Creates visual hierarchy
- Draws attention to login dialog

**Best Practices:**
- Clear visual hierarchy
- Logical information flow
- Accessible structure
- Mobile-responsive layout
- Maintains security while being user-friendly

### Grouping

Group information correctly to maintain a seamless user experience. By organizing related content together, users can easily find what they need and navigate effortlessly. This enhances clarity, reduces cognitive load, and improves overall usability. Proper grouping ensures intuitive exploration and prevents confusion.

**Group A - Primary Interaction Elements**
These are the information/elements we want the user to interact with:
- Login method selection
- Input fields (if applicable)
- Primary action buttons
- Main authentication flow

**Group B - Secondary Information**
This group contains secondary important information:
- Help text and guidance
- Legal information
- Alternative options
- Support links

**Benefits:**
- Reduced cognitive load
- Easier scanning and comprehension
- Clear hierarchy of importance
- Better task completion
- Improved accessibility

**Guidelines:**
- Group related elements together
- Use spacing to indicate relationships
- Visual hierarchy for importance
- Consistent grouping patterns
- Logical reading order

---

## Accessibility

**Requirements:**
- Keyboard navigable throughout login flow
- Screen reader support for all elements
- Clear focus indicators
- Sufficient color contrast (WCAG AA)
- Accessible error messages
- Form labels and field associations
- Alternative text for images and icons

**Form Accessibility:**
- Use proper label elements
- Associate labels with inputs
- Provide clear instructions
- Announce errors to screen readers
- Support browser autofill
- Don't rely on color alone for errors

**Keyboard Navigation:**
- Tab through form fields in logical order
- Enter to submit
- Escape to cancel/close dialogs
- All interactive elements keyboard accessible
- Clear focus indicators

**Screen Reader Support:**
- Announce form fields and labels
- Announce validation errors
- Announce loading states and progress
- Describe authentication methods
- Provide context for actions

**Error Accessibility:**
- Associate errors with fields (aria-describedby)
- Announce errors when they occur
- Make error messages clear and actionable
- Provide error summary at top of form
- Use role="alert" for critical errors

**Best Practices:**
- Test with keyboard only
- Test with screen readers
- Ensure sufficient contrast
- Provide clear, descriptive labels
- Make all functionality keyboard accessible
- Support browser autofill and password managers

---

## Security Best Practices

**Authentication Security:**
- Use secure protocols (HTTPS)
- Implement strong password requirements (if using passwords)
- Encrypt credentials in transit and at rest
- Use secure session management
- Implement CSRF protection
- Rate limit login attempts

**Brute Force Protection:**
- Limit login attempts
- Implement exponential backoff
- Lock accounts after repeated failures
- Notify users of suspicious activity
- Log failed login attempts

**Privacy Considerations:**
- Don't reveal whether username/email exists
- Protect sensitive error information
- Secure password reset flows
- Clear session data on logout
- Comply with privacy regulations

**Best Practices:**
- Follow OWASP guidelines
- Regular security audits
- Keep authentication libraries updated
- Monitor for suspicious activity
- Educate users about security

---

## Mobile Considerations

**Responsive Design:**
- Mobile-optimized login screens
- Touch-friendly targets (44x44px minimum)
- Appropriate input types for mobile keyboards
- Streamlined flow for small screens
- Native app integration where applicable

**Mobile-Specific:**
- Support biometric authentication (when available)
- Native Bank-ID app integration
- QR code scanning for cross-device auth
- Optimized for one-handed use
- Reduced complexity for mobile context

---

## Related Components

Login flows utilize various components from the design system:

- **[Input](../components/Input.md)** - Text entry for credentials
- **[Button](../components/Button.md)** - Login actions and CTAs
- **[Dialog](../components/Dialog.md)** - Error dialogs and confirmations
- **[Snackbar](../components/Snackbar.md)** - Success feedback after login
- **[Checkbox](../components/Checkbox.md)** - "Remember me" option

---

## Reference Implementation

Imported Figma frame available at: `src/imports/Login/Login.tsx`
