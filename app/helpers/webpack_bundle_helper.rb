require 'open-uri'

module WebpackBundleHelper
  class BundleNotFound < StandardError; end

  def packs_bundle_path(file)
    valid_file?(file)
    if ENV['DEV_SERVER'] == "true"
      return "http://localhost:8081/packs/#{manifest.fetch(file)}"
    else
      return "/packs/" + manifest.fetch(file)
    end
  end

  private

  def manifest
    if ENV['DEV_SERVER'] == "true"
      file = open("http://localhost:8081/packs/manifest.json")
      return @manifest ||= JSON.parse(file.read)
    else
      return @manifest ||= JSON.parse(File.read("public/packs/manifest.json"))
    end
  end

  def valid_file?(entry)
    return true if manifest.key?(entry)
    raise BundleNotFound, "Could not find bundle with name #{entry}"
  end

end
