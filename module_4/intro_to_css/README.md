### Learning Objectives
* [x] Multi page vs Single Page Application
* [x] HTML, CSS, JavaScript
* [x] Semantic HTML
* [x] CSS Selectors and Specificity
* [x] Box Model
* [x] Web Layout

### Multi Page vs Single Page
#### Multi Page Application
1. TinyApp
2. Page reload on every request/response cycle
3. Server send by HTML web page

#### Single Page Application
1. Tweeter
2. Page load once on initial request
3. Server send a page with instruction on future activity
4. Subsequent request are AJAX request Data only

### Front End Component
* **HTML**: Noun. Describe what to show on the page
* **CSS**: Adjective. To describe HTML element
* **JavaScript**: Verb. To describe any action related to the HTML

```html
<button>BUTTON</button>
```

```css
button {
  background-color: green;
  padding: 50px;
  border-radius: 50%;
}
```

```js
document.querySelector('button')
  .addEventListener('click', function() {
    alert('button click')
  })
```

### Semantic HTML
1. Using descriptive HTML tags
2. Help Search Engine Optimization
3. Help organize codes and data

```html
<!-- Not Semantic -->
<div>
  This is article
  <div>This is title</div>
  <div>This is paragraph </div>
<div>
<!-- Semantic -->
<article>
  This is article
  <header>This is title</header>
  <p>This is paragraph</p>
</article>
```

### CSS
1. use *Selectors* to find an element to apply styles
2. Selectors can be combined
3. *Specificity* determine which rules should be applied in case of conflict
4. use `!important` to overwrite any other rules. use with caution

|Type     |Syntax                     |Specificity |
|---------|---------------------------|------------|
|Universal|`* { } `                   |0           |
|Tag      |`div { }`                  |1           |
|Attribute|`[attr-name] {}`           |1           |
|Class    |`.class-name {}`           |10          |
|ID       |`#id {}`                   |100         |
|Inline   |`<p style="color:red"><p/>`|1000        |
|Combo    |`div.class-name`           |combo (1+10)|

### Box Model
1. Two types of box model: `content box` and `border box`
2. Content box: width and height calculated by the actual content
3. Border box: width and height calculated from border to border

### Web Layout: Floats
1. Place element to the left or right side of its container
2. Allow text to wrap around it
3. CSS syntax `div { float: left }`
4. Only used in some legacy CSS code

![float](./image/web-text-wrap.webp)

### Web Layout: Flexbox

|property       |value                                                                   |description            |
|---------------|------------------------------------------------------------------------|-----------------------|
|display        |flex                                                                    |To use flexbox         |
|flex-direction |row, row-reverse, column, column-reverse                                |x or y as main axis    |
|justify-content|flex-start, flex-end, cneter, space-between, space-around, space-evenly |alignment on main axis |
|align-items    |flex-start, flex-end, center, stretch, baseline                         |alignment on cross axis|