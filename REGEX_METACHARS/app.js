let re;

// Literal characters
re = /hello/;
re = /hello/i;

// Metacharacter Symbols
re = /^h/i; // Must start with
re = /World$/i; // Must end with
re = /^hello$/i; // Must begin and end with
re = /h.llo/i; // Matches any ONE character
re = /h*llo/i; // Matches any ONE character (or none)
re = /gra?e?y/i; // Optional character (or none)
re = /gra?e?y/i; // Optional character (or none)
re = /gra?e?y\?/i; // Optional character (or none)

// String to match
const str = 'Gray?';

// Log results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does NOT match $(re.source})`);
  }
}

reTest(re, str);
