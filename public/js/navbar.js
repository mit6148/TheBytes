function newNavItem(text, url){

    const NavListElt = document.createElement('li');
    const newNavLink = document.createElement('a');
    newNavLink.className = 'navItem';
	newNavLink.innerHTML = text;
	newNavLink.href = window.location.replace(url);
    NavListElt.appendChild(newNavLink)
	return newNavLink;

}
 

function renderNavBar(){
    const navList = document.getElementById('navList');
    
    navList.appendChild(newNavItem("Play Game", "/index"));
    navList.appendChild(newNavItem("Dashboard", "/combined"));
    navList.appendChild(newNavItem("Logout", "#"));

}

renderNavBar();


