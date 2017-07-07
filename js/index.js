window.onload=function(){
	var time=document.getElementById("time");
	var hh=time.children[1];
	var mm=time.children[3];
	var ss=time.children[5];
	var h=parseInt(hh.innerHTML);
	var m=parseInt(mm.innerHTML);
	var s=parseInt(ss.innerHTML);
	var timer=setInterval(function(){
         s--;
         if(s<0){
         	s=59;
         	m--;
         	if(m<0){
         		m=59;
         		h--;
         	}
         	if(h==0&&m==0&&h==0){
         		h=3;
         		m=0;
         		s=0;
         	}
         }

         s<10?"0"+s:s;
         ss.innerHTML=s;
         m<10?"0"+m:m;
         mm.innerHTML=m;
         h<10?"0"+h:h;
         hh.innerHTML=h;
	},1000)

}