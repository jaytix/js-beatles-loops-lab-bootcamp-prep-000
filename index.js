function theBeatlesPlay(musicians, instruments) {
  var arr = [];

  for (var i = 0; i < musicians.length; i++) {
    var str = musicians[i] + " plays " + instruments[i];
    arr.push(str);
  }

  return str;
}
