var moment = require("moment");

function isNaturalDate(s){
    //Matches "Month Date, Year" format
    var re = /(^\w+\s[0-9]+,\s[0-9]+)/gm
    return s.match(re);
}    

function isUnixDate(s){
    //Matches single word consisting of only numbers
    var re = /(^\w+[0-9]$)/gm
    return s.match(re);
}

function parse(s){
  
    var d = null;
  
    if (isNaturalDate(s)){
        d = moment(s,"MMM DD, YYYY");
    }
    else if (isUnixDate(s)){
        d = moment.unix(s);
    }
    
    //Build & Return JSON Data
    if (d){
      
      var dateObject = {
          "unix" : d.unix(),
          "natural": d.format("MMMM DD, YYYY")
      }
      
      return dateObject;
    }
  
    //Bail if we couldn't parse it
    return null;
}

module.exports = parse;
