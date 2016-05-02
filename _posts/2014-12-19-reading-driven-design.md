---
title: 'Reading-driven design'
layout: singel
category: 'writing'
tags:
  - 'css'
  - 'design'
  - 'reading'
  - 'typography'
  - 'web'
updated: 2016-01-26 23:14
drafted: 2014-12-19 15:59
unique_id: 2014-12-19:reading-driven-design
description: 'On methods and reasons for designing with real content rather than <i>lorem ipsum</i>.'
image_index: /images/2015-02-21-paragraphs.svg
image:
  - src: /images/2015-02-21-paragraphs.svg
    src_png: /images/2015-02-21-paragraphs.png
    alt: ''
    description: 'Vector image of lines on a page – implicitly critical of an ‘ipsum’ approach.'
  - src: /images/2014-11-02-green-arabia-reading-driven-design.jpg
    alt: 'A screenshot of an early version of this website'
    caption: 'This is an example of a development version of this website borrowing from the essay [“Green Arabia”](http://idlewords.com/2014/08/green_arabia.htm) by Maciej Cegłowski to test layout and typography.'
    quality: 70

---

I prefer to design with real content. The purpose of designing for the web with <a href="http://en.wikipedia.org/wiki/Lorem_ipsum"><i lang="la">lorem ipsum</i></a> or similar filler is to keep collaborators (or clients) from reading what is on the page instead of focusing on the design itself. This sort of separation is healthy, but it misses the point: writing on the web is *supposed* to be read. A website is nothing without its content, whether body text and headings, or user interface and documentation. A design will fail if it is not appropriate to the content.

The problem I had when I first starting working on this site was that I only had some of the content written. And some of it was in an incomplete state of editing. Worse still, what I did have written, I had written myself so it had been exhaustively read.

The most common problem in designing written content: what you have written already, you can’t read for the first time ever again.
{:.focus}

Visitors to a website typically have a key difference in experience from those who designed and edited that website. They have not yet read the content on the page. Perhaps they are reading for comprehension or meaning. For someone involved in the design process to approximate that experience, two things are needed:

1. Legible, meaningful work (which rules out <i lang="la">lorem ipsum</i>).
2. Work that hasn’t been read yet.

My solution is to use writing that I want to read anyway. For me, that is my [Instapaper](https://www.instapaper.com) queue. I find an article that I have been intending to read that is roughly in the style of the content that the site will have. This is challenging, but it is usually possible to find something in the same vein as the target content, even if that content hasn’t been written yet. For this site, I tested the design with a mix of narrative essays and some of my own technical notes.

<figure class="screenshot image">
  {% assign image = page.image[1] %}
  {% include block/srcset--grid2.html %}
  {% include block/figcaption--image.html %}
</figure>

Key elements to look for are word length, paragraph length, and the use of key HTML elements such as lists, emphasis, hyperlinks and images. These features can have a strong influence on line length, vertical rhythm, relative proportions, color, and typeface.

After deciding on an appropriate sample, copy the HTML and drop it into a working design. It is important to test at a stage in the design process where basic patterns and styles are initially worked out, but not yet fully established. Working with real content of any kind is helpful while prototyping. It can bring problems into contrast while providing inspiration for styles and form to layout.

So if you are designing a site and don’t have the content completely ready yet, it is still possible to design content-first. Start with your reading backlog.
