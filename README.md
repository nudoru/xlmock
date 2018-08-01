# Experience Layer CSS + HTML Playground

Styles and HTML for Experience Layer styles.
Design work by AtlanticBT for Red Hat.

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
