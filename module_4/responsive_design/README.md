### Learning Objectives
- [x] Responsive Design
- [x] Relative CSS Unit
- [x] Concept of Viewport
- [x] Media Query
- [x] Preprocessor and SASS

### Responsive Design
1. Aims to make *Web page* render well in all different screen size
2. Use one set of rules for all different device
3. Used to be "Nice to Have", but not it is pretty standard

### Relative Unit
Fixed units like `px` are great at defining dimension on a fixed screen size. However, as now one page can be render on different device, `px` some times to work best. Instead we have **relative unit**

|Unit |Description                                    |
|-----|-----------------------------------------------|
|%    |Relative to the demension of **parent**        |
|em   |Relative to the parent's **font-size**         |
|rem  |Relative to **root font size** (em of `<html>`)|
|vh/vw|1% of the viewport height/width                |

### Viewport
1. A viewport represent the area in computer graphics being currently viewed
2. In web browser, viewport is generally the same as the browser window
3. In mobile browser, viewport is usally wider than the screen
4. Add meta viewport tag to ensure proper mobile render

```html
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
```

### Media Query
1. To conditionally apply styles on device's type and nature
2. Like `IF` statement for CSS
3. Media query do not affect specificity

```css
@media screen only and (min-width: 500px) and (orientation: landscape) {
  div {
    background-color: #FFF
  }
}
```

|                 |Syntax                                |Description             |
|-----------------|--------------------------------------|------------------------|
|Symbol           |@media                                |Signaling media query   |
|Media Types      |all, screen, print                    |Category of device      |
|Media Features   |orientation, min-width, max-width, etc|Output characteristic   |
|Logical Operators|and, not, only                        |Copose complex condition|


### CSS Preprocessor and SASS
1. CSS Preprocessor is a program that generate CSS from unique syntax
2. SASS is one of the CSS preprocessor that contains feature beyond CSS, including
    1. variables -> a reusable value
    2. nested rules
    3. mixins -> a resuable sets of css rules declaration, property:value
    4. function -> a calculation that translate into a single, dynmaically generated value

#### Variables
```scss
$primary-color: #333;
body {
  color: $primary-color
}
```

#### Nesting
```scss
body {
  div {
    color: #6E231F
  }
}
```

#### Mixin
```scss
@mixin theme {
  background: DarkGray;
  color: #FFF
}

.info {
  @include theme
}
```

#### Install SASS
1. In project folder run `npm i sass`
2. public SCSS `sass <path for .scss> <path for output .css>`
3. Add a watch command to listen to change `sass --watch <path for .scss> <path for output .css>`