const isAnagram = function (s, t) {
  s = s.split("").sort().join("");
  t = t.split("").sort().join("");

  return s === t;
};

// console.log(isAnagram("anagram","nagramaa"));

const isAnagramShort = (s, t) =>
  s.split("").sort().join("") === t.split("").sort().join("");

// console.log(isAnagramShort("ramsar","armar"));

const isAnagramWithObject = function (s, t) {
  if (s.length !== t.length) return false;

  let obj1 = {};

  let obj2 = {};

  for (let i = 0; i < s.length; i++) {
    obj1[s[i]] = (obj1[s[i]] || 0) + 1;
    obj2[t[i]] = (obj2[t[i]] || 0) + 1;

    // console.log(obj1[s[i]]);
  }

  for (const key in obj1) {
    // console.log(obj1[key]);

    if (obj1[key] !== obj2[key]) return false;
  }

  return true;
};

console.log(isAnagramWithObject("racecar", "carrace"));
