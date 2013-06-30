            var osonfit = {
            	 originalw : 1920,
            	 originalh : 1080,
            	 flip : {
            	 	  onoff : 0,
            	     verticalw : 1080,
            	     verticalh : 1920,
            	     verticalhtml : "<div class='desktopvertical'></div>",
            	     horizontalw : 1920,
            	     horizontalh : 1080,
            	     horizontalhtml : "<div class='desktophorizontal'></div>",
            	 },           	 
            	 interval : "",
            	 marginleft : 0,
            	 margintop : 0,
            	 currentw : 0,
            	 currenth : 0,
            	 aranyw : 0,
            	 aranyh : 0,
            	 oldw : 0,
            	 oldh : 0,
            	 scale : 1,
            	 rescale : 0,
                resizel = document.getElementsByClassName('desktopbigclass')[0],              	
            }  

            document.onkeydown = function(e) {
                var k = e.keyCode;
                if ((k >= 37 && k <= 40) || (k >= 33 && k <= 34)) {
                    return false;
                }
            }
        
            function osonfitflip() {
                if (osonfit.currentw > osonfit.currenth ){
                    oson.resizel.innerHTML=osonfit.flip.horizontalhtml;
                    osonfit.originalw = osonfit.flip.horizontalw;
                    osonfit.originalh = osonfit.flip.horizontalh;
                    oson.resizel.style.width = osonfit.originalw.toString()+"px";
                    oson.resizel.style.height = osonfit.originalh.toString()+"px"; 
                }	else {
                    oson.resizel.innerHTML=osonfit.flip.verticalhtml;
                    osonfit.originalw = osonfit.flip.verticalw;
                    osonfit.originalh = osonfit.flip.verticalh;
                    oson.resizel.style.width = osonfit.originalw.toString()+"px";
                    oson.resizel.style.height = osonfit.originalh.toString()+"px"; 
                }
            }        
        
            function osonfitscale(){
                osonfit.aranyw=osonfit.currentw/osonfit.originalw;
                osonfit.aranyh=osonfit.currenth/osonfit.originalh;
                if(osonfit.aranyw > osonfit.aranyh){
                    if(1>osonfit.aranyh){
                    	   var testmargoa = osonfit.currentw-(osonfit.aranyh*osonfit.originalw);
                    	   var testmargob = (testmargoa-2)/2;
                    	   var testmargotext = testmargob.toString()+"px";
                        var fitscalebale = "scale("+osonfit.aranyh.toString()+")";
                        var testmargoleft = testmargotext;
                        var testmargotop = "0";
                        osonfit.margintop = 0;
                        osonfit.marginleft = testmargob;
                        osonfit.scale = osonfit.aranyh;
                    }
                }else{
                    if(1>osonfit.aranyw){
                    	   var testmargoa = osonfit.currenth-(osonfit.aranyw*osonfit.originalh);
                    	   var testmargob = (testmargoa-2)/2;
                    	   var testmargotext = testmargob.toString()+"px";
                        var fitscalebale = "scale("+osonfit.aranyw.toString()+")";
                        var testmargoleft = "0";
                        var testmargotop = testmargotext;
                        osonfit.margintop = testmargob;
                        osonfit.marginleft = 0;
                        osonfit.scale = osonfit.aranyw;
                    }
                }

                oson.resizel..style.webkitTransform=fitscalebale;
                oson.resizel..style.webkitTransformOrigin="0 0";
                oson.resizel..style.transform=fitscalebale;
                oson.resizel..style.transformOrigin="0 0";
                oson.resizel..style.marginLeft=testmargoleft;
                oson.resizel..style.marginTop=testmargotop;

            }
            
            function osonfitinterval(){
                if (document.body && document.body.offsetWidth) {
                    osonfit.currentw = document.body.offsetWidth;
                    osonfit.currenth = document.body.offsetHeight;
                }
                if (document.compatMode=='CSS1Compat' &&
                    document.documentElement &&
                    document.documentElement.offsetWidth ) {
                    osonfit.currentw = document.documentElement.offsetWidth;
                    osonfit.currenth = document.documentElement.offsetHeight;
                }
                if (window.innerWidth && window.innerHeight) {
                    osonfit.currentw = window.innerWidth;
                    osonfit.currenth = window.innerHeight;
                }
                if (osonfit.flip.onoff == 1) {
                	  osonfitflip();
                
                }
                if(osonfit.currentw !=osonfit.oldw  || osonfit.currenth!=osonfit.oldh){
                    osonfitscale();
                    osonfit.oldw = osonfit.currentw;
                    osonfit.oldh = osonfit.currenth;
                }
               
            }
            
            function osonfitintervalstart(){
          //      clearInterval(osondesktopinterval);
			       osonfit.interval = setInterval("osonfitinterval()", 1000);
            }
            
            osonfitinterval();
            osonfitintervalstart();  