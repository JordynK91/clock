
 function time() {
	var d = new Date();
	var h = d.getHours();
	var m = d.getMinutes();
	var s = d.getMinutes();
	var clock = document.getElementById('clock');
	clock.innerHTML = h.toString() + (":") + m.toString() + (":") + s.toString();
}


setInterval(function time),1000)

