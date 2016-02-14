# <a href="https://olivermak.es/"><img src="https://olivermak.es/icons/favicon32.svg" width="32" height="32"></a> <a href="https://olivermak.es/">olivermak.es</a> an archive

[Read about my process for building this site](https://olivermak.es/2014/12/oliver-pattison/).

## Goals

- Build a personal website as an archive for my creative output.
- Experiment with HTML, CSS, and JavaScript using design patterns that I have not implemented before.
- Self-built: design and implement as much as possible by myself.
- Showcase my work for others.
- Improve at building advanced static sites with Jekyll.

## Principles

- Future-friendly
- Focused on content
- Economical, high performance design
- Progressively enhanced
- Flexible in layout and form
- Respectful of users and their devices
- Usable and accessible
- Empathetic in content, design and tone

## Implementation

- Jekyll (with help from npm) for building
- Amazon CloudFront, S3 and [imgix](https://www.imgix.com) for hosting
- [s3_website](https://github.com/laurilehmijoki/s3_website) for deploying to Amazon Web Services
- GitHub for version control
- TypeKit for fonts: 300, 400 and 500 weights of [the Ratio typeface](http://cargocollective.com/pstype/Ratio) and 400 weight of [Source Code Pro](http://adobe-fonts.github.io/source-code-pro/)) are [hosted by Typekit](https://typekit.com/colophons/ojm0eig)
- `flexbox` for flexible CSS layout
- Responsive images using [`srcset` syntax](https://responsiveimages.org), processed with imgix
- Generation of archives with the [Jekyll Archives](https://github.com/jekyll/jekyll-archives) gem
- MapBox for maps
- No templates, frameworks or boilerplate
- As little JavaScript as possible

## Requirements

### Configuration

- [Jekyll](http://jekyllrb.com) >3.0
- [Jekyll Archives](https://github.com/jekyll/jekyll-archives)
- [rouge](https://github.com/jneen/rouge)
- [Sass (SCSS)](https://github.com/sass/sass)
- [jekyll-imgix](https://github.com/imgix/jekyll-imgix)
- [s3_website](https://github.com/laurilehmijoki/s3_website)
- [npm for dependencies and building](https://www.npmjs.com)
- [uglifyJS](https://github.com/mishoo/UglifyJS2)
- [watch](https://github.com/mikeal/watch)
- [npm-run-all](https://github.com/mysticatea/npm-run-all)

### Front-end

- [Velocity.js](http://julian.com/research/velocity/)
- [typekit-cache](https://github.com/morris/typekit-cache)

## License

All writing and photography on the site is my original work and is licensed under [Creative Commons Attribution-NonCommercial 4.0 (CC BY-NC)](http://creativecommons.org/licenses/by-nc/4.0/). All design and code is under conventional copyright (as opposed to CC-style “copyleft” copyright), but is available for fair use [on GitHub](https://github.com/opattison/olivermakes). If you are looking at the repository, almost everything in the `_pages`, `_posts`, `icons`, and `images` folders is CC BY-NC and the most of the rest of it is under copyright, where applicable.

[Read more](https://olivermak.es/license/) on attribution and copyright for the site. If you have any questions about licensing or use of content from the site, please [contact me by email](oliverpattison@gmail.com).

<a href="https://olivermak.es/"><img src="https://olivermak.es/icons/favicon144.svg" width="100%" height="144"></a>
