# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "jekyll-rubin-collab-theme"
  spec.version       = "0.1.1"
  spec.authors       = ["EiffL"]
  spec.email         = [""]

  spec.summary       = "A beautiful and easy-to-use Jekyll theme for Rubin LSST Science Collaborations."
  spec.homepage      = "https://github.com/LSSTISSC/jekyll-rubin-collab-theme"
  spec.license       = "MIT"

  spec.files         = `git ls-files --recurse-submodules -z`.split("\x0").select { |f| f.match(%r!^(assets|_data|_layouts|_includes|_sass|_third_party|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.3"
end
