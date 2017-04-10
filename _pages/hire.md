---
title: 'Hire me'
layout: micro
date: 2016-07-18 12:34
updated: 2017-04-07 19:06
unique_id: hire
permalink: /hire/
custom_style: custom-hire.css
description: 'I’m a designer who makes responsive, forward-thinking websites – here is why you should work with me.'
services:
  - title: Web design and development
    description: |+
      My skills span the gap between design (how a site works for visitors) and development (how a site is technically put together – the code and implementation). These are sometimes considered separate disciplines, but I believe it is important to understand how they meet, especially for small projects.
  - title: Web strategy and consulting
    description: |+
      Do you really need to redesign your website? What sort of goals should you realistically have for your project? Do you have a gap in technical expertise in your organization but aren’t sure what it is? I can help you figure this out.
  - title: Writing, photography, and editing
    description: |+
      I can help you translate your product, service or idea into web content that is concise, clear, and attractive to the people you want to reach.

---

# Services offered

I’m [Oliver Pattison](/about/), a designer who makes responsive, forward-thinking websites.
{:.focus}

Commodified design sites sell ready-made templates and patterns, but they can’t help you stand out from the crowd. People should tell their stories. Design should be bold and memorable. Your story is unique, and the people you want to connect with value your personal touch – why should your web presence be any different?

As an independent designer and developer, I can work with you to craft designs uniquely suited to your project’s needs. I can lead a project from start to finish, from planning and conceptualization to coding and implementation. And because I work alone or with a lean team, I can still keep costs low.

## What I can do

{% assign services = page.services %}

<section class="services">
  {% for service in services %}
    {% if forloop.first %}
      <div class="services-item--featured">
        <h3>{{ service.title }}</h3>
        {{ service.description | markdownify }}
      </div>
    {% else %}
      <div class="services-item">
        <h3>{{ service.title }}</h3>
        {{ service.description | markdownify }}
      </div>
    {% endif %}
  {% endfor %}
</section>

## Find out more

{% include block/outreach.html %}
