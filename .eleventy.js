module.exports = function(eleventyConfig) {
 eleventyConfig.addPassthroughCopy("src/assets"); 

 return{
  templateFormats: ["md", "njk", "html", "liquid"],
  markdownTemplateEngine: "njk",
  htmlTemeplateEngine: "njk",
  dir: {
    input: "src",
    output: "public",
    data: "_data",
    includes: "_includes",
    layouts: "_layouts"
  },
  pathPrefix: "/",
 }
}
