---
title: 'Membership design for Casey Trees'
layout: dubbel
option:
  - code
  - patterns
  - no-imgix-source
category: 'projects'
tags:
  - 'css'
  - 'design'
  - 'html'
  - 'process'
  - 'responsive'
  - 'web'
date: 2013-09-26 15:52
updated: 2014-12-17 15:52
drafted: 2014-12-17 12:00
unique_id: 2014-12-17:casey-trees-membership
period: 2013-07 to 2013-10
description: 'The design and implementation of a non-profit’s new membership campaign page and donation form.'
project:
  url: http://caseytrees.org/donate/membership/
color:
  - name: indigo (Friend)
    hex: '#6b86ae'
  - name: bronze (Ally)
    hex: '#af936a'
  - name: green (Steward)
    hex: '#69966a'
  - name: blue (Protector)
    hex: '#52a1ad'
  - name: red (Visionary)
    hex: '#b45e4b'
  - name: brown (Boss Shep)
    hex: '#7d7268'
  - name: beige (page)
    hex: '#f2efe5'
  - name: beige (card)
    hex: '#e5dfcc'
  - name: action orange
    hex: '#e37c1c'
  - name: border brown
    hex: '#6a5f56'
image_index: /images/index/2014-12-17-casey-trees-membership-logo.png
image:
  - src: /images/2014-12-17-casey-trees-membership-feature.png
    alt: 'A screenshot of the Casey Trees membership page'
    date: 2014-12-17
  - src: /images/2013-09-18-donation-form-mobile.png
    alt: 'Screenshot: membership form on an iPhone screen September 2013'
    caption: '<span class="text-before">Before:</span> “Mobile-only” donation form, 2012'
  - src: /images/2014-10-02-membership-form-responsive.png
    alt: 'Screenshot: responsive membership form on an iPhone screen October 2014'
    caption: '<span class="text-after">After:</span> Responsive donation levels, 2013'
  - src: /images/2014-10-02-membership-form-responsive-2.png
    alt: 'Screenshot: responsive membership inputs on an iPhone screen October 2014'
    caption: '<span class="text-after">After:</span> Responsive donation inputs, 2013'
  - src: /images/2014-12-17-membership-page-large-screen.png
    alt: 'Screenshot: membership page on a MacBook Pro December 2014'
  - src: /images/2014-12-17-membership-page-medium-screen.png
    alt: 'Screenshot: membership page on Nexus 7 December 2014'

---

[Casey Trees](http://caseytrees.org/) is an urban forestry non-profit dedicated to protecting the tree canopy of Washington, DC. I worked there from 2010 to 2014, managing a web redesign project, maintaining the website, administering the CRM, and contributed to other communications and fundraising efforts. I had a part in anything in the organization that involved the web, data collection, or communications. What follows is one sample of work that I had a central role in designing and implementing.

## A new membership program

In the summer of 2013, my department (a creative team of five including me) planned to overhaul the membership program, launching by the end of September 2013. My fundraising colleagues structured the program and wrote the content for the website and print material. I would help with designing and implementing the donation forms and informational web pages. [Pittny Creative](http://www.pittnycreative.com), a local design firm, helped design icons, and created other campaign-specific graphic design.

## A revisited, *responsive* donation form

When we initially redesigned the website in 2012, it was a *mostly* responsive design. An exception was the donation form design. The donation form framework provided by Convio Luminate Online did not yet have strong support for responsive layout. It was designed for a *desktop-only* web, archaically using HTML `<table>`s for layout and small-screen-unfriendly CSS. The solution was to use a mobile-specific donation form (determined by device detection), so that visitors using mobile devices would conditionally be served a touch-friendly, small-scale version of the form.

One year after the redesign, it was becoming clear that this device detection solution method would not work so well long-term. [^1] Additionally, I wanted to revisit the interface design of the form to make it better fit the rest of the fundraising pages. A responsive donation form would be more flexible and more future-friendly. Convio had since released a new “responsive” donation form template to test, so I worked on a prototype that would suit the site design.

<div class="grid--wide">
  <figure class="grid-figure--33 grid-figure screenshot">
    <img
      src="{{ page.image[1].src | imgix_url }}"
      alt="{{ page.image[1].alt }}">
    <figcaption>{{ page.image[1].caption | markdownify }}</figcaption>
  </figure>
  <figure class="grid-figure--33 grid-figure screenshot">
    <img
      src="{{ page.image[2].src | imgix_url }}"
      alt="{{ page.image[2].alt }}">
    <figcaption>{{ page.image[2].caption | markdownify }}</figcaption>
  </figure>
  <figure class="grid-figure--33 screenshot">
    <img
      src="{{ page.image[3].src | imgix_url }}"
      alt="{{ page.image[3].alt }}">
    <figcaption>{{ page.image[3].caption | markdownify }}</figcaption>
  </figure>
</div>

Designing this form was fairly challenging because it was not a “clean slate” design: the form had fixed HTML with very few options for configuration, and it relied on two layers of “base” CSS styles from the vendor. To customize it, my only option was to write another layer of CSS on top of the base styles, so I had plenty work to do with overriding specificity and ensuring that what I was writing would be reusable for other donation forms besides the membership-specific form.

Working with the fundraising team, I iterated on the visual design until we had something that matched the style and feel of the rest of the campaign.

## A modular design pattern

For the main page that would explain the membership program and encourage visitors to donate, my goal was to create repeatable and reusable content blocks (which we loosely referred to as “cards”) that could be used on the membership pages as well as other sections of the website. My method to deal with this complexity was to excerpt this audience-specific content and distill it into high-contrast, discrete blocks, with strong call-to-action links.

<div class="grid--wide">
<figure class="grid-figure--66 grid-figure screenshot">
  <img
    src="{{ page.image[4].src | imgix_url }}"
    alt="{{ page.image[4].alt }}">
</figure>
<figure class="grid-figure--33 grid-figure screenshot">
  <img
    src="{{ page.image[5].src | imgix_url }}"
    alt="{{ page.image[5].alt }}">
</figure>
</div>

### Buttons and edges

We already used “button”-like hyperlinks with rounded corners, right- or left-aligned, with white text on a colorful background, usually positioned after summary content for event registration and other actions. For consistency I repurposed this style for the content blocks. I also wanted to make sure that the content blocks had discrete edges to separate them from other blocks, and from the page itself. I used a medium-contrast background, a thick and dark bottom border, and a subtle and warm box shadow (so fine you might miss it).

### Use of color

Since we already had strong colors and icons for each membership level, it made sense to “theme” the content blocks, by adding level-specific colors to the titles and call-to-action links. These would be new colors for the site to give a unique identity to the campaign, but they would still fit in well with the existing palette. I echoed the colors and icons on the [membership donation form](https://secure3.convio.net/ct/site/Donation2?df_id=1625&amp;1625.donation=form1).

<ul class="grid grid--swatches no-bullets">
{% for color in page.color %}
  <li class="pattern--swatch"><figure style="background-color: {{ page.color[forloop.index0].hex }}"><figcaption>{{ page.color[forloop.index0].name }}<br>{{ page.color[forloop.index0].hex }}</p></figcaption></figure></li>
{% endfor %}
</ul>

Of the colors above, the first six were newly chosen for the membership campaign, while the last four were already in use on the site.

### Progressively disclosing content

We had so many membership benefits to list that the excerpts explaining the benefits would be long: at least 100 to over 300 words, with a lot of repetition from one level to the next. I decided to use the HTML5 `<details>` and `<summary>` elements to manage this density. This is a JavaScript-free[^2] method for [progressively disclosing](http://en.wikipedia.org/wiki/Progressive_disclosure) content. We would include only the brief summary of each benefit, such as “**Invitation for you and a guest to our annual fall event**” (the `<summary>`) with more information available in the `<details>` element activated by a click or a tap.

## Turning custom styles into reusable patterns

The markup looks something like the following, with each `<div class="card">` element being a repeatable unit:

```html
<section class="membership">
  <div id="level1" class="card level1">
    <div class="amount">$50</div>
    <h1><a href="http://example.com/donate-link">Level 1</a></h1>
    <details>
      <summary>Benefit</summary>
      <p>A description of the benefits provided.</p>
    </details>
    <details>
      <summary>Another benefit</summary>
      <p>A description of the benefits provided.</p>
    </details>
    <div class="link"><a href="http://example.com/donate-link">Become a Level 1</a></div>
  </div>
</section>
```

The parent `<section>` sets specific topic-specific styles for content within. For example, Membership gets a different theme from Advocacy, though they share the same structure and layout. By only changing the parent element, the standard HTML blocks can be reused from one section of the site to another, only changing one class (and then adding a new set of selectors and declarations in CSS for any new classes required).

### Reusing the pattern

This design pattern would prove useful for other informational pages on the website. Most programs at Casey Trees have multiple parts, and many have elements aimed at different audiences. The [tree planting programs](http://caseytrees.org/programs/planting/) are aimed at individuals, schools, and community groups. There are many different [ways to volunteer](http://caseytrees.org/get-involved/volunteer/). The Membership program has six different levels. Both informational and transactional pages tend to have segmented content for those different constituencies – lots of options to handle for a visitor to the site! So we wanted a design that could handle that complexity better.

Earlier designs of the Casey Trees site (dating back to 2002) focused on directing visitors to individual pages for each constituent interest for each activity, meaning that there would be dozens of pages of targeted content. The problem this created was that it meant there would be difficult and busy indexes, paired with a dense information architecture and lots of navigation options to dig through. The resulting index pages had long paragraphs, weak calls-to-action, and it was often quite difficult to understand differences between programs and sub-programs offered by the organization. Before I implemented this pattern, pages had few other designed patterns (besides headings and horizontal rules) to separate similar but contrasted information.

The method used on the Membership page would prove quite useful on other pages, with more legible indexes and better methods of distinguishing similar information and actions on the site. For example, the [advocacy page](http://caseytrees.org/get-involved/action/), which I designed concurrently with the Membership page, would benefit from the same layout. An iteration of the pattern was also used for the [volunteer pages](http://caseytrees.org/get-involved/volunteer/), designed a year later.

The work on the membership-specific responsive donation form also paid off elsewhere in the site: at the same time that we launched the Membership pages and form, we also launched the re-worked standard donation forms. Other forms on the site could borrow from all of the same design work that went into the membership-specific forms. Now that the design work was done, new forms would only require a few minutes to configure, and importantly, they would now work exactly the same on all screen sizes.

[^1]: Android tablets were being served a donation form that assumed “iPhone”. This is yet another example of how device detection is not usually a robust solution and can become outdated very quickly. In early 2012 when the site was designed, Android tablet users made up approximately 0% of visitors to the site, but by 2013 the market had shifted and they had become quite popular. It would have been possible back in 2012 to design a more future-friendly method of device detection that would better account for in-between sizes, but that is precisely when responsive design makes even more sense.
[^2]: Although the `<details>` element is JavaScript-free in theory, in practice it needs to be polyfilled for some browsers. I made sure to include a [polyfill by Remy Sharp](https://gist.github.com/remy/370590) to ensure compatibility with browsers that had not yet adopted the standard (Firefox and Internet Explorer).
