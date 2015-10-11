 var range_element;

var getValue =  function(){
  range_element = document.getElementById('range');
  return range_element.value;
};

var extractRange =  function(){
  var range = getValue();
  var regexp =   /\d.[^-]+/g;
  var rangeMatch = range.match(regexp); //put two ip limit addreses in an array

  var range_begin = rangeMatch[0]; //set begin ip address
  var range_end = rangeMatch[1]; //set end ip address

  return rangeMatch;
};

var getFirstPart_of_FirstIP = function(range_begin){

  var begin_IP_Regexp = /\d+\./g; //get first part of ip without last numbers
  var firstpartIP_aray = range_begin.match(begin_IP_Regexp);

  console.log("firstpart Array:", firstpartIP_aray);

  var lenghtFirstPart = firstpartIP_aray.length; //determine length of the first part of th ip address
  var firstpart='';
  for (var i=0;i<lenghtFirstPart;i++){
    firstpart += firstpartIP_aray[i];
  }
  return firstpart;
};

var getLastPart_of_FirstIP = function(range_begin){
  var end_IP_Regexp = /\d+\s|\d+$/g; //regEx to find lastnumber in ip address
  var beginIP = range_begin.match(end_IP_Regexp); //store begin integer of ip address
  var lastNumber_of_IP = parseInt(beginIP[0]); //get the last number of this ip address

  return lastNumber_of_IP;
};

var getIP_of_LastIP =  function(range_end){
  var end_IP_Regexp = /\d+\s|\d+$/g; //regEx to find lastnumber in ip address
  var endIP = range_end.match(end_IP_Regexp); //use last ip and the last number to limit the for loop
  var endIpNumber = parseInt(endIP[0]);
  return endIpNumber;
};

var giveResult =  function(){
  var firstPart_of_firstIP = getFirstPart_of_FirstIP(extractRange()[0]); //create the firstpart of the ip
  var lastPart_of_firstIP =  getLastPart_of_FirstIP(extractRange()[0]); // create the lastpart of the ip
  var lastPart_of_lastIP =  getIP_of_LastIP(extractRange()[1]); // check what the last number is of the ip.
  var nextIP;

  for(var y=0;y<256;y++){
    nextIP = lastPart_of_firstIP + y;

    newIP = firstPart_of_firstIP.concat(nextIP);

    if(nextIP==lastPart_of_lastIP+1){
      break;
    }
    document.getElementById('results').innerHTML += newIP+"\r\n";

  }

};

