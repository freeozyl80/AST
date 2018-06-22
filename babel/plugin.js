module.exports = function({
    types: t
  }) {
    return {
      name: "transform-remove-console",
      visitor: {
        CallExpression(path, state) {
          const callee = path.get("callee");

          if (!callee.isMemberExpression()) return;

          if (isIncludedConsole(callee, state.opts.exclude)) {
            // console.log()
            if (path.parentPath.isExpressionStatement()) {
              path.remove();
            } else {
              //var a = console.log()
              path.replaceWith(createVoid0());
            }
          } else if (isIncludedConsoleBind(callee, state.opts.exclude)) {
            // console.log.bind()
            path.replaceWith(createNoop());
          }
        },
        MemberExpression: {
          exit(path, state) {
            if (
              isIncludedConsole(path, state.opts.exclude) &&
              !path.parentPath.isMemberExpression()
            ) {
              //console.log = func
              if (
                path.parentPath.isAssignmentExpression() &&
                path.parentKey === "left"
              ) {
                path.parentPath.get("right").replaceWith(createNoop());
              } else {
                //var a = console.log
                path.replaceWith(createNoop());
              }
            }
          }
        }
      }
    };