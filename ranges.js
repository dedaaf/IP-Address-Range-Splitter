 var range_element;

var getValue =  function(){
  range_element = document.getElementById('range');
  return range_element.value;
};

var extractRange =  function(){
  var range = getValue();
  var regexp =   /\d.[^-]+/g;
  var rangeArray = range.match(regexp); //put two ip limit addreses in an array

  var range_begin = rangeArray[0]; //set begin ip address
  var range_end = rangeArray[1]; //set end ip address
  return rangeArray;
};

var getFirstPart_of_IP = function(ip){

  var begin_IP_Regexp = /\d+\./g; //get first part of ip without last numbers
  var firstpartIP_aray = ip.match(begin_IP_Regexp);
  var lenghtFirstPart = firstpartIP_aray.length; //determine length of the first part of th ip address
  var firstpart='';
  for (var i=0;i<lenghtFirstPart;i++){
    firstpart += firstpartIP_aray[i];
  }

  return firstpart;
};

var getLastPart_of_IP = function(ip){
  var end_IP_Regexp = /\d+\s|\d+$/g; //regEx to find lastnumber in ip address
  var beginIP = ip.match(end_IP_Regexp); //store begin integer of ip address
  var lastNumber_of_IP = parseInt(beginIP[0]); //get the last number of this ip address

  return lastNumber_of_IP;
};

var getLastNumber_of_LastIP =  function(ip){
  var end_IP_Regexp = /\d+\s|\d+$/g; //regEx to find lastnumber in ip address
  var endIP = ip.match(end_IP_Regexp); //use last ip and the last number to limit the for loop
  var endIpNumber = parseInt(endIP[0]);
  return endIpNumber;
};

var checkIfOneLevelRange = function(){
    var firstIP  =getFirstPart_of_IP(extractRange()[0]);
    var lastIP = getFirstPart_of_IP(extractRange()[1]);
    if(firstIP == lastIP){
      return true;
    }else{
      return false;
    }
};

var sameRange = function(ip){
    var firstPart_of_firstIP = getFirstPart_of_IP(extractRange()[0]); //create the firstpart of the ip
    var lastPart_of_firstIP =  getLastPart_of_IP(extractRange()[0]); // create the lastpart of the ip
    var lastPart_of_lastIP =  getLastNumber_of_LastIP(extractRange()[1]); // check what the last number is of the ip.
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

var differentRange =  function(){

  var firstIP = extractRange()[0];
  var lastIP = extractRange()[1];

  var firstIP_Array = firstIP.split(".");
  var lastIP_Array = lastIP.split(".");
  console.log(firstIP_Array);
  console.log(lastIP_Array);

  if(firstIP_Array[2] != lastIP_Array[2]){

      var difference =  lastIP_Array[2] - firstIP_Array[2];

      var third_ip_value = firstIP_Array[2];
      for(var i=0; i<=difference;i++){
        new_third_ip_value = parseInt(third_ip_value)+i;

        firstIP_Array[2] = new_third_ip_value;

        var ip =firstIP_Array.join('.');

        var firstPart_of_firstIP = getFirstPart_of_IP(ip); //create the firstpart of the ip
        var lastPart_of_firstIP =  getLastPart_of_IP(ip); // create the lastpart of the ip
        var lastPart_of_lastIP =  getLastNumber_of_LastIP(extractRange()[1]); // check what the last number is of the ip.
        var nextIP;

    for(var y=0;y<256;y++){
      nextIP = lastPart_of_firstIP + y;

      newIP = firstPart_of_firstIP.concat(nextIP);

      if(nextIP==lastPart_of_lastIP+1){
        break;
      }
      document.getElementById('results').innerHTML += newIP+"\r\n";

    }



      }


  }


  firstIP.toLocaleString();

};

var addOneToRange = function(){

};
var giveResult =  function(){

  if(!checkIfOneLevelRange()){
    differentRange();
  }
  else{

    sameRange();
  }

};

