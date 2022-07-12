/*\
title: $:/macros/add-day-now.js
type: application/javascript
module-type: macro
modify from: https://ooktech.com/jed/ExampleWikis/DateMacros/

Input: days
Description: Takes a number of days and returns now+input day of day as a date
Return: a date string added days from now
\*/
(function(){

    /*jslint node: true, browser: true */
    /*global $tw: false */
    "use strict";
    
    /*
    Information about this macro
    */
    
    exports.name = "add-day-now";
    
    exports.params = [
        {name: "days"}
    ];
    
    /*
    Run the macro
    */
    exports.run = function(days) {
    
        var dateToAdd = new Date();
        var resultDate = new Date().setTime(dateToAdd.getTime() + days * 24 * 60 * 60 * 1000);

        return new Intl.DateTimeFormat("en", {
            year: "numeric"
            , month: "2-digit"
            , day: "2-digit"
        })
        .format(resultDate);
    };
})();
