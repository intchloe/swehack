var domains = ["c3dlaGFjay5vcmc=", "d3d3LnN3ZWhhY2sub3Jn", "c3dlaGFja216eXMyZ3BtYi5vbmlvbg=="];
var current = document.domain;

if (current != atob(domains[0]) && current != atob(domains[1]) && current != atob(domains[2])) {
	document.getElementById('site-nav').innerHTML += '<br><b><center><font color="red">Du använder inte en av våra domäner!</b></font> Klicka <a href=https://'+atob(domains[0])+'>HÄR</a> för att komma till den rätta.';
	}
