# footnote.js #

## Introduction ##

__Because manually footing notes sucks.__

The idea behind footnote.js is simple.  When you write a paper and you want to include footnotes, the superscripts in your document should be automatically numbered for you, and the footnotes at the bottom should be ordered according to how the superscripts are arranged in your document.  Manually re-ordering footnotes is a pain, so this library does it for you automatically.

## Usage ##

This plugin has two dependencies.  Make sure you include them.

1. jQuery
2. underscore.js

In the text of your document, use the following convention to declare superscript links to your footnotes:

```html
<p>...some important point that needs citation.<sup data-for="important-point"></sup></p>
```

Note that you don't actually specify a footnote number. This will be created for you.  The `data-for` attribute is how you create a link to the associated footnote.

Create an ordered list at the bottom of the page and add a list item with a `data-footnote` attribute that has the same name as your superscript `data-for` attribute.  This footnote is now linked to the superscript element.

```html
<ol id="footnotes">
  <li data-footnote="important-point">As so-and-so has said, blah blah.</li>
</ol>
```

Finally, drop a custom `<script>` tag into the page and invoke the plugin like this:

```javascript
$('#footnotes').footnotes();
```

At this point, your superscripts will be assigned a number and the footnotes in your ordered list will be sorted according to the order of superscript tags in your document.  You don't have to worry about moving paragraphs or sentences around, or inserting new superscripts wherever you want, because each time you refresh the page, they are all sorted and ordered for you automatically.

Oh, this plugin will also insert hyperlink tags that automatically link your superscripts to their respective footnotes.

The plugin takes an optional object parameter that may contain the following properties:

- `superScript` - The string template that will be used for the content of the superscript tag. By default, this is `[#]` where the hash will be replaced with the footnote number. You can use whatever you want, but it has to have a hash in it where you want the number to be inserted.
- `onOrdered` - An optional callback that is fired when the footnotes have been ordered in the document.  The value of `this` in the callback is the element on which the plugin was invoked.
- `offset` - Offsets footnote numbering by some number. For example, if the offset is 5, footnote numbering will begin at 6. The default is 0. Note that this will also add the HTML5 [start](http://www.w3schools.com/tags/att_ol_start.asp) attribute to the target element. If the target element is an ordered list its numbering scheme will be adjusted accordingly.

See the demo.html document in this repository for an example of how this works.

-----

MIT License

Copyright (c) 2012-2014 Nicholas Cloud

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.