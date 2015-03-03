# removes paragraph tags from Markdown>HTML blocks (<p></p>)

module Jekyll
  module ParagraphEscape
    def p_escape(input)
      input.to_s.gsub(/<p>|<\/p>/m, ''.freeze)
    end
  end
end

Liquid::Template.register_filter(Jekyll::ParagraphEscape)