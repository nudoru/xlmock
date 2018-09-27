# Experience Layer CSS + HTML Playground

Styles and HTML for Experience Layer styles.
Design work by AtlanticBT for Red Hat.

# TODO Mockups

- refactor drop down so that optionally, the button label goes to one loc and the dropdown toggles
- First time user flow
- Differentiate Home "All about me" vs Header "About everyone
- card design for ...
    - lynda
    - kaltura
    - allego
- Add search filters for Location / Class time

- Chip group
- Create new $spacing-2 w/ 5px values and replace all current instances of small px spaces
- add pencil, icon to user profile persona
    - round icon
    - icons in the 4 diagonal corners of the photo
!- help / wiki page
    - CSS styles for page formatting elements and general structure
- team / dashboard screen
    - team, user select profile fly out
- profile layout
- profile screens
- <dialog> ? modal pop up / feedback
- search bar should be input
- responsive - card grid filters
- responsive - big tabs, tabs
    - buttons on left / right
    - drag scroll or buttons to scroll?
- responsive - message banner

# TODO Animations

- ExpandingMenu open/close
- DropDown open/close
- MessageBannerGroup add/remove
- ChipGroup add/remove

# TODO Functionality

- DropDown and ExpandingMenu rename title to label?
- Rename ExpandingMenu?
- hero message dismissible
    - remove from message banner group?
- fix hero grid rows so content and outercontet work in any order and number w/ background image
- make Lorem util a React component w/ subcomponents Loren.Title, etc.
- Fix card overflow w/ CSS props
- more semantic html
- call setState as function
- Check box onChange callback
- ExpandingMenu
    - animate open / close
    - map over children to handle onChange
    - provide onChange callback

# Later

- Babel 7

# Style guide

Use BEMIT
https://csswizardry.com/2015/08/bemit-taking-the-bem-naming-convention-a-step-further/
- _ (single underline) for a hack
- l for layout
- c for controls
- u for utilities
- js for js targeted only, no styles
- is and has for states
- SASS parent selectors
- Nest no more than 3 levels down, the inception rule
- Block is the primary component block, such as .cn-c-card or .cn-c-btn
- Element is a child of the primary block, such as .cn-c-card__title
- Modifier is a variation of a component style, such as .cn-c-alert--error
- Keeping the design system’s CSS flatness principle in mind, we wanted to limit nesting to the following use cases:
  - Modifiers of a style block
  - Media queries
  - Parent selectors
  - States
