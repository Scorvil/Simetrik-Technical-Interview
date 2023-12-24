module.exports = {
  default: {
    parallel: 1,
    format: ["html:cucumber-report.html"],
    require: ["./steps/definitions.steps.js", "./support/hooks.js"],
    paths: ["./features/**.feature"],
  },
};