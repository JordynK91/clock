function time() {
	var d = new Date();
	var h = d.getHours();
	var m = d.getMinutes();
	var s = d.getSeconds();
	var clock = document.getElementById('clock');
	
		
	if (s < 10){
		var sec = '0' + s} 
	else {
		var sec = (s)
		}
	if (m < 10){
		var min = ("0" + m)
		} 
	else {
		var min = (m)
		}
	if (h < 10){
		var hr = ("0" + h)
		} 
	else if (h > 12){
		var hr = ("0")+(h-12)
	}
	else {
		var hr = (h)
		}
	if (h > 12){
		var am = document.getElementById('am')
		am.style.display = 'none'
		}
	else {
		var pm = document.getElementById('pm')
		pm.style.diplay = 'none'
		}

		var color = document.body;
		color.style.backgroundColor = '#' + hr + min+ sec;
	clock.innerHTML = hr + (":") + min + (":") + sec
}





var t = setInterval(function()
	{time()}, 1000)


