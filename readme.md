# olivermak.es an archive

## Goals

- Build a personal website as an archive for my creative output.
- Experiment with HTML, CSS and design patterns that I have not implemented before.
- Showcase my work for friends, colleagues, and potential collaborators and employers.
- Learn more about building advanced static sites with Jekyll.
- Initially, design and implement entirely by myself, with later feedback from others.

## Principles

- Future-friendly
- Content-first
- Responsive
- High performance
- Minimalist aesthetics
- Progressive enhancement
- Respect for users and their devices
- Empathy in content, design and tone

## Implementation

- Jekyll for building
- Amazon S3 and [s3_website](https://github.com/laurilehmijoki/s3_website) for hosting and deploying
- GitHub for version control
- TypeKit for fonts: 300, 400 and 500 weights of [the Ratio typeface](http://cargocollective.com/pstype/Ratio) and 400 weight of [Source Code Pro](http://adobe-fonts.github.io/source-code-pro/)) are [hosted by Typekit](https://typekit.com/colophons/ojm0eig)
- `flexbox` for flexible CSS layout.
- Responsive images using `srcset`
- Processing of archives with the [jekyll-archives](https://github.com/jekyll/jekyll-archives) gem
- MapBox for maps
- No templates, frameworks, ~~pre-processors~~ or boilerplate (now using SCSS for minification and some variables)
- As little JavaScript as possible

## Requirements

### Configuration

- [Jekyll](http://jekyllrb.com) >3.0
- [jekyll-archives](https://github.com/jekyll/jekyll-archives) >2.0.0 (using master branch on GitHub)
- [rouge](https://github.com/jneen/rouge) >1.7.4
- [sass](https://github.com/sass/sass) >3.4.12
- [uglifier](https://github.com/lautis/uglifier) >2.7.1
- [image_optim](https://github.com/toy/image_optim) >0.20.2
- [s3_website](https://github.com/laurilehmijoki/s3_website) >2.8.3

### Front-end

- [loadJS](https://github.com/filamentgroup/loadJS) 0.2
- [Velocity.js](http://julian.com/research/velocity/) 1.2.2
- [typekit-cache](https://github.com/morris/typekit-cache)

## License

All writing and photography on the site is my original work and is licensed under [Creative Commons Attribution-NonCommercial 4.0 (CC BY-NC)](http://creativecommons.org/licenses/by-nc/4.0/). All design and code is under conventional copyright (as opposed to CC-style “copyleft” copyright), but is available for fair use [on GitHub](https://github.com/opattison/olivermakes). If you are looking at the repository, almost everything in the `_static` and `_posts` folders is CC BY-NC and the most of the rest of it is under copyright, where applicable.

[Read more](http://olivermak.es/about/#copyright) on attribution and copyright for the site. If you have any questions about licensing or use of content from the site, please [contact me by email](oliverpattison@gmail.com).
