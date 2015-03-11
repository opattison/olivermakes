# removes stray whitespace (&nbsp; character)

module Jekyll
  module NonBreakingSpaceEscape
    def nbsp_escape(input)
      input.to_s.gsub(/&nbsp;/m, ' '.freeze)
    end
  end
end

Liquid::Template.register_filter(Jekyll::NonBreakingSpaceEscape)