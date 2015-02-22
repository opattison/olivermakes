---
title: 'How to design a better responsive code&nbsp;block'
layout: singel
option:
  - hero
  - code
  - code-block
  - index-image
category: 'writing'
tags:
  - 'css'
  - 'design'
  - 'responsive'
  - 'typography'
date: 2014-10-24 16:15
updated: 2014-11-28 00:05
drafted: 2014-10-24 16:15
unique-id: 2014-10-24:better-responsive-code
description: 'A CSS walkthrough of an approach to code blocks for responsive websites and technical documentation.'
image:
  - src: 2014-11-26-hero-design-better-css-desat.png
    alt: ''
  - src: 2014-11-27-without-word-wrap.png
    alt: 'A sample of layout-breaking code without word-wrap'
  - src: 2014-11-27-without-break-word.png
    alt: 'A sample of layout-breaking code without break-word'

---

Typography can be difficult to get right in a responsive design. Formatting code for readability with multiple types of content in uncertain contexts is not easy, and the defaults are not on our side. Default user agent styles in browsers are nearly useless for code blocks, so it is important to optimize these styles when code blocks are needed for a project, such as for documentation, style guides or technical blogs. When designing responsive sites for a technical audience, we have to allow that some readers want to read code even on a small screen. Depending on the type of code samples you have, screens of all sizes can benefit from a bit of typographic consideration.

Even if a CMS or site builder has syntax highlighting built in (like [Jekyll](http://jekyllrb.com) with [Pygments](http://pygments.org/)), much more beyond that needs to be explicitly designed. Images are a big deal in responsive design implementation. The `max-width: 100%` declaration does a lot of heavy lifting in a fluid layout. But many site layouts break when resized down to reasonable viewport widths, because of text. *Text*, and especially code, can easily break an otherwise adaptive layout. In some cases, text flows outside of the viewport and is rendered inaccessible, or the page is forced to overflow on the right, adding a scrollbar to the viewport and breaking the 100% width layout. And it is not only code blocks – even a long URL can break the layout of a page.

So how do we fix this?

## Prevent breaking words and lines

In this example for “front-end” web code blocks, I am including styles that are hopefully “bullet-proof” as far as breaking layout is concerned.[^1] 

`overflow-wrap: break-word` is applied universally, rather than solely to code samples. It is useful to make sure that very long words (or URLs – a common case) break to the next line instead of flowing beyond the 100% bounds of the page.

`white-space: pre-wrap` is applied to all `<code>` and `<pre>` elements. The default value `white-space: normal` definitely will not work. `pre-wrap` is far preferable to `line-wrap` since [the latter does not maintain sequences of white space](https://developer.mozilla.org/en-US/docs/Web/CSS/white-space), which is crucial for most code.

### The defaults


```css
body {
  max-width: 100%;
  word-wrap: break-word; /* force long words to break */
  overflow-wrap: break-word; /* newer syntax standard that replaces word-wrap */
}

code,
pre,
samp {
  white-space: pre-wrap; /* force long lines to break */
}
```

### Visual examples without `pre-wrap` and `break-word`

So how bad is it when code or any other long content breaks a layout? Here is what a sample from this page without `white-space: pre-wrap`:

<figure class="narrow screenshot">
  <img
    src="{{ site.image-url }}/{{ page.image[1].src }}" 
    alt="{{ page.image[1].alt }}"
  >
</figure>

Here is what a sample from this page without `overflow-wrap: break-word`:

<figure class="narrow screenshot">
  <img
    src="{{ site.image-url }}/{{ page.image[2].src }}" 
    alt="{{ page.image[2].alt }}"
  >
</figure>

I think these samples speak for themselves to explain why these declarations are needed for a responsive code block. With both of them not implemented, nearly every code block on this page runs off the page, breaking the layout on small and large screens alike.

## Nicer typography and proportions

There is more to a well-designed responsive code block than line wrapping. One should also consider typography, color and proportion.

My current favorite monospace font for the web is [Adobe Source Code Pro](http://adobe-fonts.github.io/source-code-pro). It is beautiful, and [it is free to use](http://www.google.com/fonts/specimen/Source+Code+Pro). To make sure that code blocks look their best, I set the monospace typeface to be proportional to the rest of the typography on my site – around .8125em for a site based on a 1em scale. This proportion works slightly differently depending on the typeface and weight chosen.

I have many more styles used to make the code blocks work on this site [^2] but the following example highlights some fundamentals.

### Expanding on the defaults

{% capture c1 %}
```css
body {
  word-wrap: break-word;
  overflow-wrap: break-word;
}

code,
pre,
samp {
  font: 400 .8125em/1.4375 'source-code-pro', Menlo, Consolas, monospace; /* Source Code Pro with fallbacks. */
  white-space: pre-wrap;
}

p > code,
li > code,
samp {
  border: solid 1px hsla(204, 10%, 80%, 1);
  border-radius: .25em;
  margin: 0 -.03125em;
  padding: .0625em .25em 0; /* breathing room for inline code that has a different background or an outline */
}

.highlight {
  margin: 1em -1em; /* -1em left/right margins for full-bleed code samples (assuming 1em left/right padding parent element) */
  padding: 1em;
}

pre > code {
  font-size: 1em; /* prevents recursive .8125em from applying in common <pre><code> markup pattern */
  padding: 0;
}
```
{% endcapture %}

<figure class="code">
{{ c1 | markdownify }}
<figcaption><p><a href="https://github.com/opattison/olivermakes/blob/cc471fa92a270e4bc44423fd796ead2609005a40/site.css#L346">View the source CSS (as of {{ page.updated | date: '%B %d, %Y' }})</a> for a more detailed view of how code formatting is handled on this page.</p></figcaption>
</figure>

Notice how the long comments above wrap around the page. I have intentionally included long comments with no line breaks to show how they look in a code block. (The `.highlight` selector targets a class that Jekyll applies to `<div>` surrounding a `<pre>` block.)

### Why does HTML especially need this?

The following HTML block sample has a long paragraph that illustrates the line-length issue. HTML commonly has long line-lengths where wrapping is essential for readability.

```html
<p>My monospace font is <a href="http://adobe-fonts.github.io/source-code-pro">Adobe Source Code Pro</a>. It is beautiful, and <a href="http://www.google.com/fonts/specimen/Source+Code+Pro">it is free to use</a>. To make sure that code blocks look their best, I set the monospace typeface to be proportional to the rest of the typography on my site – around .8125em for a site based on a 1em scale. This proportion works slightly differently depending on the typeface and weight chosen.</p>

<hr>

<p>An example of <a href="http://example.com/areallylongurlthatwouldotherwisebreakwithoutbreakword">a really long string</a>.</p>
```

## Is there any other way to handle code blocks responsively?

The other way to handle this responsive dilemma is to use `overflow: scroll` for code blocks. This declaration makes long code blocks scroll instead of wrap around to new lines.

```css
code,
pre,
samp {
  overflow: scroll;
}
```

A few notes about this method:

1. Line numbers are respected. The line will not break unless a break is added in code.
2. It is not compatible with `overflow-wrap: break-word` methods, as the name might suggest.
3. On really small screens, the method can lead to a lot of scrolling and discontinuity from one line to another.
4. It does not prevent problems for large screens, given long enough lines.

The following shows the scroll method using the HTML sample from earlier.

### It’s not too beautiful

<div class="highlighter-rouge" style="background-color: hsla(4, 30%, 80%, .2); padding-left: 0; padding-right: 2.5em; padding-bottom: 2.5em; position: relative;"><pre class="highlight" style="background-color: transparent; overflow: scroll; padding-left: 2.5em;"><code class="language-html" data-lang="html" style="word-wrap: normal; overflow-wrap: normal; white-space: pre"><span class="nt">&lt;p&gt;</span>My monospace font is <span class="nt">&lt;a</span> <span class="na">href=</span><span class="s">&quot;http://adobe-fonts.github.io/source-code-pro&quot;</span><span class="nt">&gt;</span>Adobe Source Code Pro<span class="nt">&lt;/a&gt;</span>. It is beautiful, and <span class="nt">&lt;a</span> <span class="na">href=</span><span class="s">&quot;http://www.google.com/fonts/specimen/Source+Code+Pro&quot;</span><span class="nt">&gt;</span>it is free to use<span class="nt">&lt;/a&gt;</span>. To make sure that code blocks look their best, I set the monospace typeface to be proportional to the rest of the typography on my site – around .8125em for a site based on a 1em scale. This proportion works slightly differently depending on the typeface and weight chosen.<span class="nt">&lt;/p&gt;</span>

<span class="nt">&lt;hr&gt;</span>

<span class="nt">&lt;p&gt;</span>An example of <span class="nt">&lt;a</span> <span class="na">href=</span><span class="s">&quot;http://example.com/areallylongurlthatwouldotherwisebreakwithoutbreakword&quot;</span><span class="nt">&gt;</span>a really long string<span class="nt">&lt;/a&gt;</span>.<span class="nt">&lt;/p&gt;</span></code></pre><div style="color: hsla(204, 10%, 56%, 1); font-size: .75em; padding: .5em; position: absolute; bottom: 0; right: 0;">Scroll ⇀</div></div>

I believe this method is particularly poorly suited for HTML or any other code with comments in it. It is responsive, but not as adaptive to different screens as the `break-word` method.[^3]

But fortunately we do not have to rely on the `scroll` method. For HTML and CSS blocks, `break-word` and `pre-wrap` solve a lot of inherit problems with responsive code block design.

[^1]: I am focusing here on web front-end markup, since that is what I care most about. I have not covered exceptions and use cases from other programming languages. The same principles should apply to some other contexts, but I have not tested them out thoroughly. I know that some programming languages have peculiarities with white space and line numbers, so this might have limited use for those cases. I know that editing HTML in a text editor requires word wrapping; Python does not. This technique prioritizes readability on small screens *for the web* ahead of any other concerns so that readers do not have to suffer scrolling or tiny font sizes.
[^2]: To get code highlighting to match my site’s design, I designed a [custom base16 color pattern]({{ site.fragments-url }}/base16-olivermakes.html), which is generated into a [Pygments](http://pygments.org/) theme with [base16-builder](https://github.com/chriskempson/base16-builder). Take a look at [this site’s source](https://github.com/opattison/olivermakes/blob/cc471fa92a270e4bc44423fd796ead2609005a40/site.css#L346) for more examples of code formatting.
[^3]: In this example, I provided the code block less padding for larger screens widths to make better use of the viewport, and it was still unreadable. There is also the usability issue in OS X and iOS of `overflow` scrollbars being hidden by default until scrolling begins, which makes the problem even worse.