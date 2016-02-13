---
title: 'Old Jekyll home page with modern CSS'
layout: edgeless
theme: dark
option:
  - code
  - minor
  - no-imgix-source
category: 'projects'
tags:
  - 'css'
  - 'design'
  - 'jekyll'
date: 2015-10-26 20:00
updated: 2016-01-21 18:10
drafted: 2016-01-21 18:10
unique_id: 2015-10-26:jekyll-mix-blend-mode
description: 'Tribute to the minimalist 2009-2013 Jekyll site, but using flexbox and blend modes.'
project:
  source: http://codepen.io/opattison/pen/WQzZRG/
image_index: /images/index/2016-01-21-jekyll-transform.png
image:
  - src: /images/2016-01-21-jekyll-transform.png
    alt: 'The old Jekyll home page design, reimplemented. The design features a black/white contrast split with typography that reverses the shade of each side of the background color.'
    date: 2016-01-21

---

I loved [the original home page for Jekyll](http://web.archive.org/web/20120505063819/http://jekyllrb.com/) as it existed from 2009-2013. The stark, contrastive split layout and the blunt text “transform your text into a monster” had a mystique that only hinted at what the tool actually does: make websites. [^1]

Over eight years and three major versions later, [the Jekyll project has matured](http://jekyllrb.com) and dropped the old design. I decided to revive the design with a [CodePen demo](http://codepen.io/opattison/pen/WQzZRG/?editors=1100) with new web standards that didn’t exist back then. The initial implementation relied on a lot of hacks to achieve its uncommon split layout. I used CSS flexbox for layout, `vh` (viewport height) units, a two-tone `linear-gradient` background, and `mix-blend-mode` to create the text contrast. The blend mode bit is the most forward-looking (and least well-supported) part of this demo, but it _is_ usable on production websites with proper care.

## CodePen demo

<p data-height="320" data-theme-id="0" data-slug-hash="WQzZRG" data-default-tab="result" data-user="opattison" class='codepen'>See the Pen <a href='http://codepen.io/opattison/pen/WQzZRG/'>transform your text into a monster</a> by Oliver Pattison (<a href='http://codepen.io/opattison'>@opattison</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

## HTML and CSS used

```html
<h1>jekyll</h1>
<h2>transform your text into a monster</h2>
```

```css

/* Tested in latest Chrome and Safari only */
body {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: 100vh;

  background-image: linear-gradient(90deg, #ddd 50%, #000 50%);
}

h1,
h2 {
  color: #ddd;
  font-weight: 400;
  margin: 0;
  mix-blend-mode: difference;
  text-align: center;
  width: 100%;
}

h1 {
  font-family: georgia, serif;
  font-size: 10em;
  transform: translateX(-19.5px)
}

h2 {
  font-family: verdana, sans-serif;
  font-size: 1em;
  margin-top: 2em;
  transform: translateX(-20px)
}
```

[^1]: Jekyll is the technology behind this website – it is a static site generator that helps build and publish very fast websites, and I have used it for much of my recent work on the web. [I have written quite a bit about it](/labels/jekyll/) as well.
