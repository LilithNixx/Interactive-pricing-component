module.exports = {
    // ...
    module: {
     rules: [
      {
       test: /\.scss$/,
       use: [
            "style-loader", //3. Injects styles into DOM
            "css-loader", //2. Turns css into common js
            "sass-loader" //1. Turns sass into css
        ]
      },
      // ...
     ]
    }
   };