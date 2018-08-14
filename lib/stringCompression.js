module.exports = str => {
  var output = "";
  var count = 0;
  if (typeof str !== "string" || str === "") return 0;
  for (var i = 0; i < str.length; i++) {
    count++;
    newStr = str.replace(/[\W_]/g, "").toLocaleLowerCase();
    if (newStr[i] != newStr[i + 1]) {
      output += newStr[i] + count;
      count = 0;
    }
  }
  return output;
};
