---
title: 'Text Patterns'
layout: edgeless
option:
  - code
  - patterns
category: patterns
date: 2014-10-31 18:25
updated: 2015-10-15 23:43
permalink: '/patterns/text/'
description: 'A collection of text patterns for this website.'
source: https://github.com/opattison/olivermakes
---

## Use of typography

### Ratio font family (300, 400, 500)

{% include block/pattern--type.html class='font-sans weight-light' %}

{% include block/pattern--type.html class='font-sans weight-light font-italic' %}

{% include block/pattern--type.html class='font-sans weight-regular' %}

{% include block/pattern--type.html class='font-sans weight-regular font-italic' %}

{% include block/pattern--type.html class='font-sans weight-medium' %}

{% include block/pattern--type.html class='font-sans weight-medium font-italic' %}

```
$ratio: 'ratio', 'Helvetica Neue', 'Roboto', Arial, sans-serif;
```

### Source Code Pro font family (500)

{% include block/pattern--type.html class='font-monospace weight-medium' %}

```
$source-code-pro: 'source-code-pro', Menlo, Consolas, monospace;
```

---

{% include block/pattern_loop--text.html %}
