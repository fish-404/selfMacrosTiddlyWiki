/*\
title: $:/macros/isDangerousString.js
type: application/javascript
module-type: macro
modify from: onlywei.github.io/explain-git-with-d3/#mergehttps://referencesource.microsoft.com/#mscorlib/system/string.cs,23a8597f842071f4,references

Parameter: string to check
Description: Return if a string is a dangerous string (to explain .Net Potentially dangerous
Return: "true" or "false"
Note: Tiddly Wiki Seems can't return false if I return a bool type, so take string type instead

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
        for (var i = 0; i < (str.length - 1); i++) {
            if (str[i] === '<' && leftAngleBracketInvalid(str, i+1))
                return "true";
            if (str[i] === '&' && esperluetteInvalid(str, i+1))
                return "true";
        }
        return "false";   
    };

    function isAtoZ(character) {
        return (character >= 'a' && character <= 'z') || (character >= 'A' && character <= 'Z');
    }

    // '<!' | '</' | '<?' | '<[a-zA-Z]'
    function leftAngleBracketInvalid(str, nextIndex) {
        if (isAtoZ(str[nextIndex]) || str[nextIndex] === '!' || str[nextIndex] === '/' || str[nextIndex] === '?')
            return true;
        else 
            return false;
    }

    // '&#'
    function esperluetteInvalid(str, nextIndex) {
        if (str[nextIndex] === '#')
            return true;
        else 
            return false;
    }
})();
