# metal-quartz-dropdown

Metal Quartz Dropdown

## Setup

1. Install NodeJS >= v0.12.0 and NPM >= v3.0.0, if you don't have it yet. You
can find it [here](https://nodejs.org).

2. Install local dependencies:

  ```
  npm install
  ```

3. Build the code:

  ```
  npm run build
  ```

4. Open the demo at demos/index.html on your browser.

## Doc

### Attributes
- position
`Missing documentation`


###### dropdownOpenClass: String

A class that will added to the container of the component. It can be used to replace
the default open class. In this case you have to implement the 

###### dropdownItems: Array<object>

Configure each item of the menu. It will be rendered following the sequence that 
it was defined.

**Example:**
```javascript
  dropdownItems: [
    {
      component: 'header',
      label: 'Dropdown Header'
    },
    {
      elementClasses: 'active',
      href: '#1',
      label: 'Item 1'
    },
    {
      component: 'divider',
    },
    {
      elementClasses: 'disabled',
      href: '#1',
      label: 'Item 2'
    }
  ],
```

* component: string
  `header or divider`
  Represents the type of the layout.
  **show print here**

* label: string
  This options is not available for divider layout. A string that will be rendered inside the item.

* elementClasses: string
  Available for all items, it adds the string you pass through to the `class` attribute of the element.


###### dropdownToggle: Object

The configuration object for the dropdown-toggle element.

* elementClasses: string

* href: string
If this attribute is defined it will render a `<a />` element. Otherwise, a `<button />` will be used instead.

* icon: object
See `metal-clay-icon` documentation.

* label: string

###### expanded: Boolean

Tells the component to expand the menu or not.

## Contribute

We'd love to get contributions from you! Please, check our [Contributing Guidelines](CONTRIBUTING.md) to see how you can help us improve.
