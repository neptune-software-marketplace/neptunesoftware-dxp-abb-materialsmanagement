if (typeof PREQ_NO === "undefined" || PREQ_NO === null || PREQ_NO === "") { return; }  
if (typeof PREQ_ITEM === "undefined" || PREQ_ITEM === null || PREQ_ITEM === "") { return; }  

PREQ_NO = removeLeadingZeros(PREQ_NO);

var formattedText = "Purch. Req: " + PREQ_NO + " Item: " + PREQ_ITEM; 
return formattedText;