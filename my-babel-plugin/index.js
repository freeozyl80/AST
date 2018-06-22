function isArray(array) {
  return Object.prototype.toString.call(array) === '[object Array]'
}

module.exports = function() {
  return {
    name: "transform-remove-console-enhance",
    visitor: {
      CallExpression(path, { opts }) {
        const calleePath = path.get("callee")
        console.log('...............start.....................')
        if (opts && isArray(opts.exclude)) {
          const hasTarget = opts.exclude.some(type => {
            return calleePath.matchesPattern("console." + type)
          })

          if (hasTarget) return
        }

        if (calleePath.matchesPattern("console", true)) {
          path.remove()
        }
      },
    },
  };
};