# removes these HTML elements and characters for RSS reader compatibility
# - label
# - input
# - figure/figcaption
# - stray whitespace (&nbsp;)

module Jekyll
  module SyndicationEscape
    def syndication_escape(input)
      empty = ''.freeze
      space = ' '.freeze
      input.to_s.gsub(/<label.*?<\/label>/m, empty).gsub(/<input.*?>/m, empty).gsub(/<figure.*?>/m, empty).gsub(/<\/figure>/m, empty).gsub(/<figcaption.*?>/m, empty).gsub(/<\/figcaption>/m, empty).gsub(/&nbsp;/m, space)
    end
  end
end

Liquid::Template.register_filter(Jekyll::SyndicationEscape)