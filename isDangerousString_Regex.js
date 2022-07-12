/*\
title: $:/macros/isDangerousString.js
type: application/javascript
module-type: macro
modify from: onlywei.github.io/explain-git-with-d3/#mergehttps://referencesource.microsoft.com/#mscorlib/system/string.cs,23a8597f842071f4,references

Return if a string is a dangerous string
This macro use regex to check
\*/
(function(){

    /*jslint node: true, browser: true */
    /*global $tw: false */
    "use strict";
    
    /*
    Information about this macro
    */
    
    exports.name = "isDangerousString";
    
    exports.params = [
        {name: "str"}
    ];
    
    /*
    Run the macro
    */
    exports.run = function(str) {
        const regex = /(<\\)|(<!)|(<[a-zA-Z])|(&#)/g;
        if (str.match(regex) !== null)
            return "true";
        else
            return "false";
    };
})();
