module.exports = {
  "extends": "=react-app",
  "env": {
    "browser": true,
    "node": true,
    "mocha": true
  },
  "rules": {
    "camelcase": 0,
    "comma-dangle": 0,
    "guard-for-in": 1,
    "import/default": 0,
    "import/extensions": 0,
    "import/no-duplicates": 0,
    "import/no-extraneous-dependencies": 0,
    "import/named": 0,
    "import/namespace": 0,
    "import/no-unresolved": 0,
    "import/no-named-as-default": 2,
    "indent": [2, 2, {
      "SwitchCase": 1
    }],
    "jsx-a11y/interactive-supports-focus": 1,
    "max-len": 0,
    "new-cap": [2, {
      "capIsNewExceptions": ["List", "Map", "Set"]
    }],
    "no-alert": 1,
    "no-console": 2,
    "no-unused-vars": 2,
    "no-use-before-define": ["error", {
      "functions": false
    }],
    "react/jsx-boolean-value": 0,
    "react/jsx-filename-extension": 0,
    "react/no-multi-comp": 0,
    "global-require": 0
  },
  "parser": "babel-eslint",
  "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
            "modules": true,
            "experimentalObjectRestSpread": true
        }
    },
  "plugins": [
    "react", "import"
  ],
  "settings": {
    "import/parser": "babel-eslint",
    "import/resolve": {
      "moduleDirectory": ["node_modules", "src"]
    }
  },
  "globals": {
    "__DEVELOPMENT__": true,
    "__CLIENT__": true,
    "__SERVER__": true,
    "__DISABLE_SSR__": true,
    "__DEVTOOLS__": true,
    "webpackIsomorphicTools": true
  }
};
