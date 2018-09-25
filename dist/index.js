'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var path = _interopDefault(require('path'));

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

// syntax
const arrowFunction = {
  name: "@babel/transform-arrow-functions"
};
const blockScopedFunction = {
  name: "@babel/transform-block-scoped-functions"
};
const blockScoping = {
  name: "@babel/transform-block-scoping"
};
const classPlugin = {
  name: "@babel/transform-classes"
};
const computedProperty = {
  name: "@babel/transform-computed-properties"
};
const destructuring = {
  name: "@babel/transform-destructuring"
};
const duplicateKeys = {
  name: "@babel/transform-duplicate-keys"
};
const forOf = {
  name: "@babel/transform-for-of"
};
const functionName = {
  name: "@babel/transform-function-name"
};
const ES2015Literals = {
  name: "@babel/transform-literals"
};
const objectSuper = {
  name: "@babel/transform-object-super"
};
const ES2015Parameters = {
  name: "@babel/transform-parameters"
};
const shorthandProperty = {
  name: "@babel/transform-shorthand-properties"
};
const spreadOperator = {
  name: "@babel/transform-spread"
};
const stickyRegex = {
  name: "@babel/transform-sticky-regex"
};
const templateLiterals = {
  name: "@babel/transform-template-literals"
};
const unicodeRegex = {
  name: "@babel/transform-unicode-regex"
};
const memberExpressionLiteral = {
  name: "@babel/transform-member-expression-literals"
};
const propertyLiteral = {
  name: "@babel/transform-property-literals"
};
const propertyMutator = {
  name: "@babel/transform-property-mutators"
};
const exponentiationOperator = {
  name: "@babel/transform-exponentiation-operator"
};
const objectRestSpreadOperator = {
  name: "@babel/proposal-object-rest-spread"
};
const regenerator = {
  name: "@babel/transform-regenerator" // module

};
const transformModuleCommonJS = {
  name: "@babel/transform-modules-commonjs"
};
const transformModuleSystemJS = {
  name: "@babel/transform-modules-systemjs"
};
const minifyConstantFolding = {
  name: "minify-constant-folding"
};
const minifyDeadCodeElimination = {
  name: "minify-dead-code-elimination",
  settings: {
    keepFnName: true,
    keepFnArgs: true,
    keepClassName: true
  }
};
const minifyGuardedExpression = {
  name: "minify-guarded-expressions"
};
const minifyMangleNames = {
  name: "minify-mangle-names",
  settings: {
    keepFnName: true,
    keepClassName: true
  }
};
const minifySimplify = {
  name: "minify-simplify"
};
const minifyTypeConstructor = {
  name: "minify-type-constructors"
};
const transformMergeSiblingVariable = {
  name: "transform-merge-sibling-variables"
};
const transformMinifyBoolean = {
  name: "transform-minify-booleans"
};
const transformSimplifyComparisonOperator = {
  name: "transform-simplify-comparison-operators"
};
const transformUndefinedToVoid = {
  name: "transform-undefined-to-void"
};

const getModuleTransformPlugin = (inputFormat, outputFormat) => {
  if (outputFormat === "cjs") {
    if (inputFormat === "es") {
      return transformModuleCommonJS;
    }

    throw new Error(`unexpected ${inputFormat} input format combined with ${outputFormat} output format`);
  }

  if (outputFormat === "systemjs") {
    // https://github.com/ModuleLoader/es-module-loader/blob/master/docs/system-register-dynamic.md
    if (inputFormat === "es") {
      return transformModuleSystemJS;
    }

    throw new Error(`unexpected ${inputFormat} input format combined with ${outputFormat} output format`);
  }

  throw new Error(`unexpected ${outputFormat} output format`);
};

const createModuleOptions = ({
  inputModuleFormat,
  outputModuleFormat
}) => {
  if (outputModuleFormat !== undefined && outputModuleFormat !== inputModuleFormat) {
    const plugin = getModuleTransformPlugin(inputModuleFormat, outputModuleFormat);
    return {
      plugins: [_objectSpread({}, plugin, {
        enabled: true
      })]
    };
  }

  return {};
};

const plugins = [arrowFunction, blockScopedFunction, blockScoping, classPlugin, computedProperty, destructuring, duplicateKeys, forOf, functionName, ES2015Literals, objectSuper, ES2015Parameters, shorthandProperty, spreadOperator, stickyRegex, templateLiterals, unicodeRegex, memberExpressionLiteral, propertyLiteral, propertyMutator, exponentiationOperator, objectRestSpreadOperator, regenerator].map(plugin => {
  return _objectSpread({}, plugin, {
    enabled: true
  });
});
const createSyntaxOptions = () => {
  return {
    plugins
  };
};

const plugins$1 = [minifyConstantFolding, minifyDeadCodeElimination, minifyGuardedExpression, minifyMangleNames, minifySimplify, minifyTypeConstructor, transformMergeSiblingVariable, transformMinifyBoolean, transformSimplifyComparisonOperator, transformUndefinedToVoid].map(plugin => {
  return _objectSpread({}, plugin, {
    enabled: true
  });
});
const createMinifyOptions = () => {
  return {
    plugins: plugins$1,
    compact: true,
    comments: true,
    minified: true
  };
};

const mergeArrayElements = (firstArray, secondArray, compare = (a, b) => a.name === b.name) => {
  const mergedElements = [];
  firstArray.forEach(elementInFirstArray => {
    const existingRule = secondArray.find(elementInSecondArray => {
      return compare(elementInFirstArray, elementInSecondArray);
    });

    if (!existingRule) {
      mergedElements.push(_objectSpread({}, elementInFirstArray));
    }
  });
  secondArray.forEach(elementInSecondArray => {
    mergedElements.push(_objectSpread({}, firstArray.find(elementInFirstArray => compare(elementInFirstArray, elementInSecondArray)) || {}, elementInSecondArray));
  });
  return mergedElements;
};

const mergeOptions = (...objects) => {
  const options = objects.reduce((accumulator, object) => {
    if (typeof object === undefined || object === null) {
      return accumulator;
    }

    return _objectSpread({}, accumulator, object, {
      presets: object.presets ? _toConsumableArray(accumulator.presets).concat(_toConsumableArray(object.presets)) : accumulator.presets,
      plugins: object.plugins ? mergeArrayElements(accumulator.plugins, object.plugins) : accumulator.plugins
    });
  }, {
    presets: [],
    plugins: []
  });
  return options;
};

const createConfig = (options = {}) => {
  return _objectSpread({}, options, {
    plugins: options.plugins ? options.plugins.filter(plugin => plugin.enabled).map(plugin => {
      return [plugin.name, plugin.settings];
    }) : []
  });
};

const {
  transformAsync,
  transformFromAstSync
} = require("@babel/core"); // do not forget this file will be execute from dist/index.js
// so we want root to be ../


const root = path.resolve(__dirname, "../");
const transform = (code, ...options) => {
  return transformAsync(code, _objectSpread({}, createConfig(mergeOptions.apply(void 0, options)), {
    cwd: root
  }));
};
const transformFromAst = (ast, code, ...options) => {
  return transformFromAstSync(ast, code, _objectSpread({}, createConfig(mergeOptions.apply(void 0, options)), {
    cwd: root
  }));
};

// https://babeljs.io/docs/plugins/
const options = mergeOptions(createModuleOptions({
  inputModuleFormat: "es",
  outputModuleFormat: "cjs"
}), createSyntaxOptions());
const config = createConfig(options);

exports.createModuleOptions = createModuleOptions;
exports.createSyntaxOptions = createSyntaxOptions;
exports.createMinifyOptions = createMinifyOptions;
exports.mergeOptions = mergeOptions;
exports.transform = transform;
exports.transformFromAst = transformFromAst;
exports.options = options;
exports.config = config;
//# sourceMappingURL=index.js.map
