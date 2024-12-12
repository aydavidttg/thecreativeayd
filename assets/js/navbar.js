const nav = document.querySelector(".navbar");

let tDot = document.title;
if (tDot.includes(':')) {
  tDot = "..";
} else {
  tDot = ".";
}

nav.innerHTML = `
	<div class="container-fluid pt-2 pb-2 px-3">
		<a class="navbar-brand" href="https://aydavidttg.com.ng">
			<span><img src="${tDot}/assets/img/logo.png"></span>
		</a>
		<button
			class="navbar-toggler"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarSupportedContent"
			aria-controls="navbarSupportedContent"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="material-icons mi-24">menu</span>
		</button>
		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav mx-0 mx-auto">
				<li class="nav-item">
					<a class="nav-link" href="${tDot}/index.html">Home</a>
				</li>
				<!--li class="nav-item submenu">
					<span class="nav-link dropdown-btn">
						<span class="txt">Graphics Design</span>
						<span class="material-icons mi-24 drop-icon">expand_more</span>
					</span>
					<ul class="dropdown-content m-auto">
						<li><a class="submenu-item" href="./designs.html">Designs</a></li>
						<li><a class="submenu-item" href="./resources.html">Resources</a></li>
						<li>
							<a class="submenu-item" href="./fsgdc.html">FSGDC with PixelLab</a>
						</li>
					</ul>
				</li-->
				<li class="nav-item">
					<a class="nav-link" href="${tDot}/designs.html">Designs</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="${tDot}/webdev-projects.html">Web Dev Projects</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="${tDot}/posts.html">Posts</a>
				</li>
				<li class="nav-item">
					<a class="nav-link ct" href="${tDot}/connect.html">Connect</a>
				</li>
			</ul>
		</div>
	</div>
    `;
