const Levenshtein = (a, b) => {
  var n = a.length;
  var m = b.length;

  var d = [];

  if (n == 0) return m;
  if (m == 0) return n;

  for (var i = 0; i <= n; i++) (d[i] = [])[0] = i;
  for (var j = 0; j <= m; j++) d[0][j] = j;

  for (var i = 1, I = 0; i <= n; i++, I++)
    for (var j = 1, J = 0; j <= m; j++, J++)
      if (b[J] == a[I]) d[i][j] = d[I][J];
      else d[i][j] = Math.min(d[I][j], d[i][J], d[I][J]) + 1;

  return d[n][m];
};
export default Levenshtein;
