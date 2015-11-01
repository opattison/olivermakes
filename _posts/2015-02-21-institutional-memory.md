---
title: 'Institutional memory'
layout: singel
category: 'writing'
tags:
  - 'archiving'
  - 'process'
  - 'web'
date: 2015-02-21 20:52
updated: 2015-02-21 20:52
drafted: 2015-02-14 12:34
unique_id: 2015-02-21:institutional-memory
description: 'Organizational knowledge can be fragile. This is a story about creating an archive at a non-profit.'

---

Organizational knowledge can be fragile. Particularly for small organizations without the budget to hire more than a few technical staff members, even one person leaving creates a gap that is difficult to fill.

## The need for documentation

After four years working on a wide range of projects at the non-profit [Casey Trees](http://caseytrees.org), I realized that a good deal of information about the organization and its technical interests was locked in my head. Documenting my work – making my efforts and knowledge last beyond my time at the organization – was not initially part of my job description. But it was my responsibility. In 2014, two new technical staff members were joining the team (hired and trained by me), so I took the initiative to [thoroughly document]({% post_url 2014-10-01-casey-trees-docs %}) a significant subset of my work.

When I started at the organization in 2010, Casey Trees was still a relatively small organization. In my first week, I was handed two folders, both labeled **Website**. These folders contained a few years worth of communications with previous external web developers, and a few pages of research notes. There was no guide for how the work should be accomplished, or where to get started. For a growing organization that needed to raise money, organize events, and increase awareness, we were doing plenty of things right but we had not yet found a way to pass along important information about where we had come from and where we intended to go.

In my first months, I became used to emails and calls from fellow staff with a request for help, from implementing design ideas to figuring out common software issues. Even though I didn’t feel like an “expert”, I was often the person on hand who was willing to learn quickly and pick up technical tasks. I found my role as a generalist; a technological omnivore. I learned as I went: how to optimize images for the web, or handling bugs in our fundraising management software, and even taking on CRM administration. If the task had to do with any kind of technology, it landed in my inbox.

My role was not limited to the web or communications. At least at a small- to medium-sized non-profit, being a technological generalist *does* tend to qualify you as a local expert. I was frequently called in to provide one-on-one training for staff and interns any time their jobs intersected with the website, CRM, and related systems like our event management or fundraising tools. Unfortunately, a lot of tasks in the organization relied on the outcomes of these limited trainings.

Although only a small part of my responsibilities, some days I might be working on training for most of my working hours. One-on-one training sessions can often be enormously helpful because they can be personalized and tend to have an immediate impact, but the time spent can be difficult to justify if one’s role is not specified as a full-time educator.

In response to this dilemma, we worked on a “curriculum” of training materials to provide a course of standardized study for new staff – to fill in these gaps and reinforce our hands-on training sessions. This curriculum would hopefully cover the *basics* so that more time could be spent in one-on-one trainings covering the *specifics*. This new process worked to some degree, but the exercises and structure provided by it only took new staff so far. Existing staff could benefit from these newly-developed materials, but they had typically already graduated past the introductory matter covered by the curriculum, and had concerns that a standardized approach could not fully address.

## A longer-term approach to training

A more complete method would be needed. In a narrow sense, I wanted to address the most frequent issues that staff would run into; to save them time researching and learning how to accomplish their goals. More broadly, my goal was to spark a tradition of institutional memory.

### Solving common issues

The tools we used (WordPress, Convio Luminate Online, Salesforce, Eventbrite) all carried a significant initial learning curve for new and current workers that task-oriented training materials could help address.

My goal was to create a reference for common tasks, such as:

- How typical interface patterns are designed for web and email in HTML and CSS.
- How to implement listings for upcoming events for the website.
- How often key parts of the website need to be updated.

I also wanted to address issues that were addressed less often, but are still important, such as:

- How seasonal updates and campaigns can be designed consistently.
- How to configure social media icons for the site.

This latter category involves tasks that might need to be referred to at any time, but are dealt with so infrequently that they are likely to be forgotten in the mean time.

{% capture a1 %}
# The result

I [wrote a summary]({% post_url 2014-10-01-casey-trees-docs %}) of my documentation efforts for Casey Trees, with an explanation of how it was implemented with Jekyll and some samples of the design.
{% endcapture %}

<aside class="ancillary">
{{ a1 | markdownify }}
</aside>

### Gathering organizational knowledge

Instead of starting with a pile of papers and forwarded email threads, I thought about how much more prepared I would have felt as a new staff member if I had a working base of knowledge – one that I would feel empowered to contribute to myself. I wanted a method for newcomers to pick up where departed members left off in an organization: indirect collaboration with others across time.

This model of accumulated knowledge is how the web&nbsp;works.
{:.focus}

The web was my direct inspiration to build a document base that would consist of HTML and be maintained with plain text and images. The base of the project had to be a robust medium for storing and sharing information. So I started with something I already knew how to build: a website. I balanced the larger goals of gathering organizational knowledge equally with the immediate concerns of task-oriented training. This method would provide a more complete picture, one that could be self-documenting – one that would describe what it is like to do a certain job.

The result was only a [small start]({% post_url 2014-10-01-casey-trees-docs %}), but one that could be built upon.