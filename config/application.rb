require File.expand_path('../boot', __FILE__)

require 'rails/all'

Bundler.require(*Rails.groups)

module MiTrabajoIdeal
  class Application < Rails::Application
    config.assets.paths << "#{Rails}/vendor/assets/fonts"
    config.active_record.raise_in_transactional_callbacks = true
  end
end
