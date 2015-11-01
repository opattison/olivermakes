---
title: 'Reading-driven design'
layout: singel
option:
  - index-image
category: 'writing'
tags:
  - 'css'
  - 'design'
  - 'reading'
  - 'typography'
  - 'web'
date: 2014-12-19 23:14
updated: 2014-12-20 11:31
drafted: 2014-12-19 15:59
unique_id: 2014-12-19:reading-driven-design
description: 'On methods and reasons for designing with real content rather than <i>lorem ipsum</i>.'
image:
  - src: 2015-02-21-paragraphs.svg
    alt: ''
    description: 'Vector image of lines on a page – implicitly critical of an ‘ipsum’ approach.'
  - src: 2014-11-02-green-arabia-reading-driven-design.jpg
    alt: 'A screenshot of an early version of this website'
    caption: 'This is an example of a development version of this website borrowing from the essay [“Green Arabia”](http://idlewords.com/2014/08/green_arabia.htm) by Maciej Cegłowski to test layout and typography.'

---

I prefer to design with real content. The purpose of designing for the web with <a href="http://en.wikipedia.org/wiki/Lorem_ipsum"><i lang="la">lorem ipsum</i></a> or similar filler is to keep collaborators (or clients) from reading what is on the page instead of focusing on the design itself. This sort of separation is healthy, but it misses the point: writing on the web is *supposed* to be read. A website is nothing without its content, whether body text and headings, or user interface and documentation. A design will fail if it is not appropriate to the content.

The problem I had when I first starting working on this site was that I only had some of the content written. And some of it was in an incomplete state of editing. Worse still, what I did have written, I had written myself and thoroughly read.

The most common problem in designing written content: what you have written already, you can’t read for the first time ever again.
{:.focus}

Visitors to a website typically have a key difference in experience from those who designed and edited that website. They have not yet read the content on the page. To mimic that experience as someone involved in the design process, two things are needed:

1. Legible, meaningful work (which rules out <i lang="la">lorem ipsum</i>).
2. Work that hasn’t been read yet.

My solution is to use writing that I want to read anyway. For me, that is my [Instapaper](https://www.instapaper.com) queue. I find an article that I have been meaning to read, and is roughly in the style of the content that the site will have. This is tricky, but it is usually possible to find something in the same vein as the intended content, even if it hasn’t been written yet. For this site, I tested the design with a mix of narrative essays and some of my own technical notes.

<figure class="screenshot image">
  <img
    src="{{ site.image_url }}/{{ page.image[1].src }}" 
    sizes="{{ site.wide-sizes }}"
    srcset="{% for srcset1080 in site.srcset1080 %}{{ site.image_url }}/{{ site.srcset1080[forloop.index0] }}/{{ page.image[1].src }} {{ site.srcset1080[forloop.index0] }}w{% if forloop.last == false %}, {% endif %}{% endfor %}"
    alt="{{ page.image[1].alt }}"
  >
  <figcaption>{{ page.image[1].caption | markdownify }}</figcaption>
</figure>

Key elements to look for are word length, paragraph length, and the use of notable HTML elements such as lists, emphasis, hyperlinks and images. These features can have a strong influence on line length, vertical rhythm, relative proportions, color, and choice of typography.

After deciding on a sample that is appropriate, copy the HTML and drop it into a working design. It is important to test at a stage in the design process where basic patterns and styles are initially worked out, but not yet set in stone. Working with real content of any kind can be helpful as inspiration while prototyping, and it makes mistakes obvious early in the process.

So if you are designing a site and don’t have the content completely ready yet, it is still possible to design content-first. Dive into that list of things you have been meaning to read!