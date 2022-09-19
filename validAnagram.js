// Solution One
var isAnagramOne = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < s.length; i++) {
    let letter = s[i];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let j = 0; j < t.length; j++) {
    let letter = t[j];

    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
};

// SolutionTwo
var isAnagramTwo = function (s, t) {
  const str1 = String(s.split("").sort());
  const str2 = String(t.split("").sort());
  return str1 === str2;
};

// SolutionThree
var isAnagramThree = function (s, t) {
  return s.split("").sort().join("") === t.split("").sort().join("");
};

// SolutionFour
var isAnagramFour = function (s, t) {
  if (t.length !== s.length) return false;
  const counts = {};
  for (let c of s) {
    counts[c] = (counts[c] || 0) + 1;
  }
  for (let c of t) {
    if (!counts[c]) return false;
    counts[c]--;
  }
  return true;
};

// SolutionFive
var isAnagramFive = function (s, t, m = {}) {
  for (let c of s) m[c] = (m[c] || 0) + 1;
  for (let c of t) if (!m[c]--) return false;
  return Object.values(m).every((v) => !v);
};
