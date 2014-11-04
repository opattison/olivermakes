---
title: 'patterns'
layout: singel
date: 2014-10-31 18:25
image:
  - src: 'image.png'
    caption: 'This is a caption pulled from the yaml front matter. It describes the image in the same `figure` element.'
    alt: 'A placeholder image'

---

<h1>Level one heading</h1>

<h2>Level two heading</h2>

<h3>Level three heading</h3>

<h4>Level four heading</h4>

<h5>Level five heading</h5>

<p>Some paragraph text may require <em>stress</em> emphasis and some it may be important enough to require something <strong>stronger</strong>. <q>Just as the plume of smoke rose and died so too will the glow of gold. Elevated status moves us now through the darkened halls of the quick.</q> This is <mark>highlighted text</mark> that uses the <code>&lt;mark&gt;</code> element. <dfn>H<sub>2</sub>O</dfn> is the chemical formula for a water molecule, indicating that it contains one oxygen and two hydrogen atoms. Oxygen is the 8<sup>th</sup> element on the <a href="https://en.wikipedia.org/wiki/Periodic_table">periodic table of elements</a>.</p>

<blockquote><p>This text is quoted. A block of quoted text like this is particularly useful when presented as a pull-quote within an article of text.</p></blockquote>

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

{% highlight html %}
<p>Some paragraph text may require <em>stress</em> emphasis and some it may be important enough to require something <strong>stronger</strong>. <q>Just as the plume of smoke rose and died so too will the glow of gold. Elevated status moves us now through the darkened halls of the quick.</q> This is <mark>highlighted text</mark> that uses the <code>&lt;mark&gt;</code> element. <dfn>H<sub>2</sub>O</dfn> is the chemical formula for a water molecule, indicating that it contains one oxygen and two hydrogen atoms. Oxygen is the 8<sup>th</sup> element on the <a href="https://en.wikipedia.org/wiki/Periodic_table">periodic table of elements</a>.</p>
{% endhighlight %}

<div class="feature"><p>This is “feature” text, used for emphasis and attention in storytelling.</p></div>

<figure class="full"> 
  <img
    src="{{ site.image_url }}/{{ page.image[0].src }}" 
    sizes="{{ site.photo_sizes }}"  
    srcset="{% for srcset in site.srcset %}{{ site.image_url }}/{{ site.srcset[forloop.index0] }}/{{ page.image[0].src }} {{ site.srcset[forloop.index0] }}w{% if forloop.last == false %}, {% endif %}{% endfor %}"
    alt="{{ page.image[0].alt }}"
  >
  <figcaption>{{ page.image[0].caption | markdownify }}</figcaption>
</figure>

<img
  src="{{ site.image_url }}/{{ page.image[0].src }}" 
  alt="{{ page.image[0].alt }}"
>