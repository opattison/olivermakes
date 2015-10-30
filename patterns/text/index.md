---
title: 'Text Patterns'
layout: edgeless
option:
  - code
  - code-block
  - srcset
  - patterns
category: meta
date: 2014-10-31 18:25
updated: 2015-10-15 23:43
description: 'A collection of text patterns for this website.'
---

## Use of typography

### Ratio font family (300, 400, 500)

{% include block/pattern--type.html class='sans w300' %}

{% include block/pattern--type.html class='sans w300 italic' %}

{% include block/pattern--type.html class='sans w400' %}

{% include block/pattern--type.html class='sans w400 italic' %}

{% include block/pattern--type.html class='sans w500' %}

{% include block/pattern--type.html class='sans w500 italic' %}

```
$ratio: 'ratio', 'Helvetica Neue', 'Roboto', Arial, sans-serif;
```

### Source Code Pro font family (400)

{% include block/pattern--type.html class='monospace' %}

```
$source-code-pro: 'source-code-pro', Menlo, Consolas, monospace;
```

---

{% include block/pattern_loop--text.html %}
