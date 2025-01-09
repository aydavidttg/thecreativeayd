const nav = document.querySelector(".navbar");

nav.innerHTML = `
	<div class="container-fluid pt-2 pb-2">
		<a class="navbar-brand" href="https://aydavidttg.github.io/thecreatieayd">
			<span><img src="./assets/img/logo.png"></span>
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
			<ul class="navbar-nav ms-0 ms-auto">
				<li class="nav-item my-auto">
					<a class="nav-link" href="./index.html">Home</a>
				</li>
				<li class="nav-item submenu my-auto">
					<span class="nav-link dropdown-btn">
						<span class="txt">Services</span>
						<span class="material-icons mi-24 drop-icon">expand_more</span>
					</span>
					<ul class="dropdown-content m-auto">
						<li><a class="submenu-item" href="graphic-design.html">Graphic Design</a></li>
						<li><a class="submenu-item" href="web-dev.html">Web Development</a></li>
					</ul>
				</li>
				<li class="nav-item my-auto">
					<a class="nav-link" href="our-works.html">Our Works</a>
				</li>
                <!--li class="nav-item submenu my-auto">
					<span class="nav-link dropdown-btn">
						<span class="txt">Learn</span>
						<span class="material-icons mi-24 drop-icon">expand_more</span>
					</span>
					<ul class="dropdown-content m-auto">
                        <li><a class="submenu-item" href="#">All Tutorials</a></li>
						<li><a class="submenu-item" href="#">HTML & CSS</a></li>
						<li><a class="submenu-item" href="#">JavaScript</a></li>
                        <li><a class="submenu-item" href="#">Graphics Design<br> with PixelLab</a></li>
					</ul>
				</li-->
				<li class="nav-item my-auto">
					<a class="nav-link" href="./blog.html">Blog</a>
				</li>
				<li class="nav-item ct my-auto">
					<a class="nav-link ct btn" href="./contact-us.html">Contact Us</a>
				</li>
			</ul>
		</div>
	</div>
    `;


   
   
   
   
   