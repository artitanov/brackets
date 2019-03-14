module.exports = function check(str, bracketsConfig) {
  arrayOFstr = str.split('');
    if (arrayOFstr.length % 2 != 0) {return false} else {
      for (i=0; i<arrayOFstr.length;i++){
        for (k=0; k<bracketsConfig.length; k++){
          if (arrayOFstr[i] === bracketsConfig[k][0] && arrayOFstr[i+1] === bracketsConfig[k][1]) {
            arrayOFstr.splice(i,2);
            i = -1;
          }
        }
      }
    }
    if (arrayOFstr.length>0){return false;} else {return true};
}

