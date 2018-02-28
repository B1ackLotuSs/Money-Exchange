// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    var a = 0 ;
    var b = 0 ;
    var c = 0 ;
    var d = 0 ;
    var e = 0 ;
    
    if (currency<=0) {
        var pustoy = {} ;
        return pustoy ;
    } else {
        if (currency>10000){
            return {error: "You are rich, my friend! We don't have so much coins for exchange"} ;
        } else { 
    if (currency>=50) {
    while (currency>=50) {
        currency=currency-50 ;
        a++ ;
    }
    while (currency>=25) {
        currency=currency-25 ;
        b++ ;
    }
    while (currency>=10) {
        currency=currency-10 ;
        c++ ;
    }
    while (currency>=5) {
        currency=currency-5 ;
        d++ ;
    }
    while (currency>=1) {
        currency=currency-1 ;
        e++ ;
    } 
    
        var obj = {"H":0,"Q":0,"D":0,"N":0,"P":0} ;
	obj["H"]=a;
	obj["Q"]=b;
	obj["D"]=c;
	obj["N"]=d;
	obj["P"]=e;
        var array = {};
	if(obj["H"] != 0) array["H"] = obj["H"];
	if(obj["Q"] != 0) array["Q"] = obj["Q"];
	if(obj["D"] != 0) array["D"] = obj["D"];
	if(obj["N"] != 0) array["N"] = obj["N"];
	if(obj["P"] != 0) array["P"] = obj["P"];
	return array;	
    
    } else {
        if (currency>=25) {
                while (currency>=25) {
        currency=currency-25 ;
        b++ ;
    }
    while (currency>=10) {
        currency=currency-10 ;
        c++ ;
    }
    while (currency>=5) {
        currency=currency-5 ;
        d++ ;
    }
    while (currency>=1) {
        currency=currency-1 ;
        e++ ;
    }
     var obj = {"H":0,"Q":0,"D":0,"N":0,"P":0} ;
	obj["H"]=a;
	obj["Q"]=b;
	obj["D"]=c;
	obj["N"]=d;
	obj["P"]=e;
        var array = {};
	if(obj["H"] != 0) array["H"] = obj["H"];
	if(obj["Q"] != 0) array["Q"] = obj["Q"];
	if(obj["D"] != 0) array["D"] = obj["D"];
	if(obj["N"] != 0) array["N"] = obj["N"];
	if(obj["P"] != 0) array["P"] = obj["P"];
	return array;	
        } else {
            if (currency>=10) {
                    while (currency>=10) {
        currency=currency-10 ;
        c++ ;
    }
    while (currency>=5) {
        currency=currency-5 ;
        d++ ;
    }
    while (currency>=1) {
        currency=currency-1 ;
        e++ ;
    }
     var obj = {"H":0,"Q":0,"D":0,"N":0,"P":0} ;
	obj["H"]=a;
	obj["Q"]=b;
	obj["D"]=c;
	obj["N"]=d;
	obj["P"]=e;
        var array = {};
	if(obj["H"] != 0) array["H"] = obj["H"];
	if(obj["Q"] != 0) array["Q"] = obj["Q"];
	if(obj["D"] != 0) array["D"] = obj["D"];
	if(obj["N"] != 0) array["N"] = obj["N"];
	if(obj["P"] != 0) array["P"] = obj["P"];
	return array;	
            } else {
                if (currency>=5) {
                 while (currency>=5) {
        currency=currency-5 ;
        d++ ;
    }
    while (currency>=1) {
        currency=currency-1 ;
        e++ ;
    }
      var obj = {"H":0,"Q":0,"D":0,"N":0,"P":0} ;
	obj["H"]=a;
	obj["Q"]=b;
	obj["D"]=c;
	obj["N"]=d;
	obj["P"]=e;
        var array = {};
	if(obj["H"] != 0) array["H"] = obj["H"];
	if(obj["Q"] != 0) array["Q"] = obj["Q"];
	if(obj["D"] != 0) array["D"] = obj["D"];
	if(obj["N"] != 0) array["N"] = obj["N"];
	if(obj["P"] != 0) array["P"] = obj["P"];
	return array;	
                } else {
                 if (currency>=1) {
                      while (currency>=1) {
        currency=currency-1 ;
        e++ ;
    }
      var obj = {"H":0,"Q":0,"D":0,"N":0,"P":0} ;
	obj["H"]=a;
	obj["Q"]=b;
	obj["D"]=c;
	obj["N"]=d;
	obj["P"]=e;
        var array = {};
	if(obj["H"] != 0) array["H"] = obj["H"];
	if(obj["Q"] != 0) array["Q"] = obj["Q"];
	if(obj["D"] != 0) array["D"] = obj["D"];
	if(obj["N"] != 0) array["N"] = obj["N"];
	if(obj["P"] != 0) array["P"] = obj["P"];
	return array;	
                 }   
                }
            }
        }
    }
            
        }
    }
}
