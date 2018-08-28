module.exports = {
    "env": {
      "es6": true,
      "browser": true,
      "node": true,
      "jest": true
    },
    "extends": [
      "eslint:recommended",
      "plugin:react/recommended"
    ],
    "settings": {
      "react": {
        "createClass": "createReactClass",
        "pragma": "React",
        "version": "16.0",
        "flowVersion": "0.53"
      },
      "propWrapperFunctions": [ "forbidExtraProps" ]
    },
    "plugins": [
      "react"
    ],
    "parserOptions": {
      "ecmaVersion": 2018,
      "sourceType": "module"
    },
    "rules": {
      "no-console": [
        "error", 
        {
          allow: [
            "log",
            "warn", 
            "error"
          ] 
        }
      ], 
      "indent": [
        "error",
        "tab"
      ],
      "linebreak-style": [
        "error",
        "windows"
      ],
      "quotes": [
        "error",
        "single"
      ],
      "semi": [
        "error",
        "always"
      ]
  }
};
