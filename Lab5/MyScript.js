function channgetext(id){
	var answer=["Yes","No","Maybe"];
	var answer = answer[Math.floor(Math.random()*answer.length)];
	id.innerHTML=answer;
	
}