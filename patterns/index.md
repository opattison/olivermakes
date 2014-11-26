---
title: 'patterns'
layout: singel
code: true
date: 2014-10-31 18:25
description: A collection of self-documenting patterns and styles for my website.
image:
  - src: 'image.gif'
    caption: 'This is a caption pulled from the yaml front matter. It describes the image in the same `figure` element. By <cite>Oliver Pattison</cite>.'
    alt: 'A placeholder image'

---

<h1>Level one heading</h1>

<h2>Level two heading</h2>

<h3>Level three heading</h3>

<h4>Level four heading</h4>

<h5>Level five heading</h5>

<p>Some paragraph text may require <em>stress</em> emphasis and some it may be important enough to require something <strong>stronger</strong>. <q>Just as the plume of smoke rose and died so too will the glow of gold. Elevated status moves us now through the darkened halls of the quick.</q> This is <mark>highlighted text</mark> that uses the <code>&lt;mark&gt;</code> element. <dfn>H<sub>2</sub>O</dfn> is the chemical formula for a water molecule, indicating that it contains one oxygen and two hydrogen atoms. Oxygen is the 8<sup>th</sup> element on the <a href="https://en.wikipedia.org/wiki/Periodic_table">periodic table of elements</a>.</p>

<blockquote><p>This text is quoted. A <code>blockquote</code> is particularly useful to emphasize and give space to a quotation from an attributed piece of writing. Make sure to include a footer with a citation to an author, where applicable.</p><footer>– said <cite>someone</cite> <time datetime="2014-11-24 15:07">today</time></footer></blockquote>

<kbd><kbd>⌘ cmd</kbd> <b class="kbd-plus">+</b> <kbd>C</kbd></kbd>

<ol>
<li>First list item</li>
<li>Second item in a list of ordered items</li>
<li>Third item in the list</li>
</ol>

<ul>
<li>A list item</li>
<li>Another item in a list</li>
<li>Yet another item in this list of items</li>
</ul>

### HTML

{% highlight html %}
<header class="site-header" id="top" role="banner">
  <a class="title" href="/">
    <h1>Page title</h1>
  </a>
  <nav class="top-menu">
    <a href="#navigation">Menu ⇂</a>
  </nav>
</header>

<p>Some paragraph text may require <em>stress</em> emphasis and some it may be important enough to require something <strong>stronger</strong>. <q>Just as the plume of smoke rose and died so too will the glow of gold. Elevated status moves us now through the darkened halls of the quick.</q> This is <mark>highlighted text</mark> that uses the <code>&lt;mark&gt;</code> element. <dfn>H<sub>2</sub>O</dfn> is the chemical formula for a water molecule, indicating that it contains one oxygen and two hydrogen atoms. Oxygen is the 8<sup>th</sup> element on the <a href="https://en.wikipedia.org/wiki/Periodic_table">periodic table of elements</a>.</p>

<!-- comment -->
{% endhighlight %}

### CSS

<figure class="code">
{% highlight css %}
article strong a,
article strong a:visited {
  color: hsla(205, 10%, 98%, 1);
  background-color: hsla(5, 85%, 40%, 1);
  padding: .0625em .1875em;
  border-bottom: none;
  border-radius: .125em;
}

a svg circle {
  transition: all 160ms cubic-bezier(0,1,1,1);
}

.title:hover .logo .core,
.title:active .logo .core {
  -webkit-animation-delay: 1600ms;
          animation-delay: 1600ms;
}

kbd > kbd + b {
  font-family: 'ratio', 'Helvetica Neue', 'Roboto', Arial, sans-serif;
  margin: 0 -.375em;
}

/* comment */
{% endhighlight %}
<figcaption><p>This is a figcaption for a figure of code block.</p></figcaption>
</figure>

<div class="feature"><p>This is “feature” text, used for emphasis and attention in storytelling.</p></div>

<figure class="wide">
  <img
    src="{{ site.image-url }}/{{ page.image[0].src }}" 
    sizes="{{ site.photo-sizes }}"  
    srcset="{% for srcset in site.srcset %}{{ site.image-url }}/{{ site.srcset[forloop.index0] }}/{{ page.image[0].src }} {{ site.srcset[forloop.index0] }}w{% if forloop.last == false %}, {% endif %}{% endfor %}"
    alt="{{ page.image[0].alt }}"
  >
  <figcaption>{{ page.image[0].caption | markdownify }}</figcaption>
</figure>

<figure class="narrow">
  <img
    src="{{ site.image-url }}/{{ page.image[0].src }}" 
    alt="{{ page.image[0].alt }}"
  >
</figure>

### Shades

<ul class="swatches">
{% for name in site.shade %}
<li><figure style="background-color: {{ site.shade[forloop.index0].hsl }}"><figcaption>{{ site.shade[forloop.index0].name }}<br>{{ site.shade[forloop.index0].hsl }}</figcaption></figure></li>
{% endfor %}
</ul>

### Colors

<ul class="swatches">
{% for name in site.color %}
<li><figure style="background-color: {{ site.color[forloop.index0].hsl }}"><figcaption>{{ site.color[forloop.index0].name }}<br>{{ site.color[forloop.index0].hsl }}</figcaption></figure></li>
{% endfor %}
</ul>


- - -
