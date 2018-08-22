module.exports = {
    "env": {
      "es6": true,
      "jest": true
    },
    "extends": [
      "eslint:recommended",
      "plugin:react/recommended"
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
