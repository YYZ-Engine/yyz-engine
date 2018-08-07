module.exports = {
    "env": {
        "es6": true,
        "node": true,
        "jasmine": true
    },
    "extends": "eslint:recommended",
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
