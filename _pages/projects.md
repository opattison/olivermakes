---
title: Projects
layout: category
category: index
unique_id: projects
description: 'An index of projects that Oliver Pattison has designed or contributed to. These projects include design output, documentation, and reflections on work and process.'
permalink: /projects/

---

## Portfolio

{% assign index = 1 %}
{% for post in site.categories.projects %}
{% unless index > 6 %}
{% unless post.option contains 'minor' %}
{% include block/item.html %}
{% assign index = index | plus: 1 %}
{% endunless %}
{% endunless %}
{% endfor %}

{% include block/outreach--projects.html %}

## Minor projects

{% assign index = 1 %}
{% for post in site.categories.projects %}
{% unless index > 10 %}
{% if post.option contains 'minor' %}
{% include block/item--minor.html %}
{% assign index = index | plus: 1 %}
{% endif %}
{% endunless %}
{% endfor %}
{% include block/index-nav.html %}
