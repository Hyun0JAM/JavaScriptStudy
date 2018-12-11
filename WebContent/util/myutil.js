// 주민번호가 공식에 맞는지 검사해주는 함수 생성하기 공식에 맞으면 1 아니면 0을리턴
function func_checkJubun(jubun){
	if(jubun.length!=13){
		return 0;
	}
	// 1*2 2*3 3*4 4*5 5*6 6*7 7*8 8*9 9*2 10*3 11*4 12*5
	var sum=0;
	for(var i=0;i<jubun.length-1;i++){
		if(i<8) sum += parseInt(jubun.substring(i,i+1))*(i+2);	
		else sum += parseInt(jubun.substring(i,i+1))*(i-6);	
		var result = sum%11;
		result = 12- result;
		result%=10;
		if(result==parseInt(jubun.substring(12,13))) return 1;
		else return 0;
	}
}
//indexOf에서 검색을 시작할 값을 쓰지않으면 디폴트로 0이 들어간다.
function moneyInt(strMoney){
	if(strMoney.indexOf(",",0)==-1) return parseInt(strMoney); 
	while(true){
		if(strMoney.indexOf(",",0)==-1) break;
		strMoney = strMoney.substring(0,strMoney.indexOf(",",0))+strMoney.substring(strMoney.indexOf(",",0)+1,strMoney.length);
	}
	return parseInt(strMoney);
}
//
function moneyComma(money){
	var strMoney=String(money);
	var result="";
	if(strMoney.length<4) result = strMoney;
	else{
		for(var i=strMoney.length-1,cnt=1;i>=0;i--,cnt++){
			result = strMoney.substring(i,i+1)+result;
			if(cnt%3==0) result = ","+result;
		}
		if(result.indexOf(",")==0) result = result.substring(1);
	}
	return result;
}