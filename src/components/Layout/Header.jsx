import React from 'react'
import Link from 'next/link'


const Header = () => {
	return (
		<header className="text-white md:px-16 px-6 flex flex-wrap items-center py-3">
			<div className="text-2xl mr-10">Logo Videlop</div>
			<nav className="site-nav md:flex md:pt-0 hidden md:w-auto w-full">
			<label for="menu-toggle" class="pointer-cursor md:hidden block"><svg class="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><title>menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg></label>
			<input class="hidden" type="checkbox" id="menu-toggle" />
				<Link className="md:p-4 py-3 px-0 block border-b-2 border-transparent" href="/"><a>Trang chủ</a></Link>
				<Link className="md:p-4 py-3 px-0 block border-b-2 border-transparent" href="/blog"><a>Blog</a></Link>
				<Link className="md:p-4 py-3 px-0 block border-b-2 border-transparent" href="/kb"><a>Kho kiến thức</a></Link>

			</nav>
		</header>
	)
}

export default Header
