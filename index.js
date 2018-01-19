function time() {
	var d = new Date();
	var h = d.getHours();
	var m = d.getMinutes();
	var s = d.getSeconds();
	var clock = document.getElementById('clock');
	if (s < 10){
		var sec = ("0" + s.toString())
		} 
	else {
		var sec = (s.toString())
		}
	if (m < 10){
		var min = ("0" + m.toString())
		} 
	else {
		var min = (m.toString())
		}
	if (h < 10){
		var hr = ("0" + h.toString())
		} 
	else {
		var min = (h.toString())
		}
	clock.innerHTML = h.toString() + (":") + m.toString() + (":") + sec
	}


var t = setInterval(function(){time()}, 1000)

