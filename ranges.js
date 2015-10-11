 var range_element;

var getValue =  function(){
  range_element = document.getElementById('range');
  return range_element.value;
};

var giveResult = function(){
  var range = getValue();
  var regexp =   /\d.[^-]+/g;
  var rangeMatch = range.match(regexp); //put two ip limit addreses in an array

  console.log(rangeMatch);

  var range_begin = rangeMatch[0]; //set begin ip address
  var range_end = rangeMatch[1]; //set end ip address

  console.log("begin range:",range_begin);
  console.log("end range:",range_end);

  var firstPart_IP_regexp = /\d+\./g; //get first part of ip without last numbers
  var firstpartIP_aray = range_begin.match(firstPart_IP_regexp);

   console.log("firstpart Array:", firstpartIP_aray);

   var lenghtFirstPart = firstpartIP_aray.length; //determine length of the first part
   console.log(lenghtFirstPart);
  var firstpart='';
   for (var i=0;i<lenghtFirstPart;i++){
    firstpart += firstpartIP_aray[i];
   }
  //var firstpart = firstpartIP_aray[0]  + firstpartIP_aray[1];

  console.log("firstpart :", firstpart);

  var end_IP_Regexp = /\d+\s|\d+$/g; //regEx to find lastnumber in ip address
  var beginIP = range_begin.match(end_IP_Regexp); //store begin integer of ip address
  var last_of_begin_IpNumber = parseInt(beginIP[0]); //get the last number of this ip address

   console.log(last_of_begin_IpNumber);

  console.log(firstpart.concat(last_of_begin_IpNumber));

  var endIP = range_end.match(end_IP_Regexp); //use last ip and the last number to limit the for loop
  var endIpNumber = parseInt(endIP[0]);
  console.log(endIpNumber);
  for(var y=0;y<256;y++){
    nextIP_of_begin_number = last_of_begin_IpNumber + y;

    newIP = firstpart.concat(nextIP_of_begin_number);

    if(nextIP_of_begin_number==endIpNumber+1){
      break;
    }


    document.getElementById('results').innerHTML += newIP+"\r\n";

  }



};

