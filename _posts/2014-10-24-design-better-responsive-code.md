---
title: 'How to design a better responsive code block'
layout: singel
code: true
category: writing
date: 2014-10-24 16:15
updated: 2014-10-28 18:27

---

One of the problems I ran into when starting a new Jekyll project is figuring out the right approach to fix certain typographic defaults in browsers. Code formatting is a particularly challenging issue. Jekyll has code highlighting support built-in, which is a great start. However, especially for responsive projects, certain defaults need to be explicity designed.

I have found dozens of sites that break when resized down to reasonable viewport widths. Plenty of attention is paid to image widths not breaking using `max-width: 100%` rules, but text can break an otherwise responsive layout. Either text runs off the screen and is inacessible, or the page is forced to have overflow on the right, breaking the 100% width layout.

## Prevent breaking words

In this example, I am including styles that are hopefully “bullet-proof” as far as text breaking layout is concerned. `overflow-wrap: break-word` is applied to not just code samples, but to the entire `body`. `white-space: pre-wrap` is applied to all `code` and `pre` elements.

{% highlight css %}
body {
  word-wrap: break-word; /* force long words to break */
  overflow-wrap: break-word; /* newer version of `word-wrap` */
}

code,
pre,
samp {
  white-space: pre-wrap; /* force long lines to break */
}
{% endhighlight %}

## Nicer typography and spacing

Now I am adding additional styles like color, typography and padding.

`.highlight` targets a class that Jekyll applies to `<div>` surrounding a `<pre>` block.

{% highlight css %}
body {
  word-wrap: break-word;
  overflow-wrap: break-word;
}

code,
pre,
samp {
  font: 400 .8125em/1.38461541 Menlo, monospace; /* adjust size to ~13px to match ~16px equivalent */
  white-space: pre-wrap;
}

.highlight,
code,
pre,
samp {
  background-color: gainsboro;
}

code,
samp {
  padding: .153846154em .307692308em; /* 2px 4px – match spacing of non-monospace fonts */
}

.highlight {
  margin: 1em -1em; /* -1em l/r margins for full-bleed code samples (assuming 1em l/r padding parent element) */
  padding: 1em;
}

pre > code {
  font-size: 1em; /* prevents recursive .8125em from applying in common `<pre><code>` markup pattern */
  padding: 0;
}
{% endhighlight %}

## Sample HTML

{% highlight html %}
<pre><code><h1>block code</h1>
<p>in</p>
<p>multiple</p>
<p>lines</p>
<p>This <em>should</em> have HTML code highlighting.</p>
<blockquote>A really long string looks like Curabitur_consectetur_faucibus_nisl_ac_varius.</blockquote></code></pre>
{% endhighlight %}