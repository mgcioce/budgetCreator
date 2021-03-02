/**
 * File: parse.js
 * Date: 2/28/21
 * Author: Mike Cioce
 * Purpose: adds text parsing and editing functions
 */

export const parser = {
    replace: (originalString,regex,replaceString) => {
        return originalString.replace(regex,replaceString);
    }
} 