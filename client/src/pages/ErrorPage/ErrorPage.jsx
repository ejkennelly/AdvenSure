import React from 'react'
import "./ErrorPage.css"
import Background from "../../assets/image/404.jpeg"

export default function ErrorPage() {
	var sectionStyle = {
		backgroundSize: "cover",
		backgroundImage: "url(" + Background + ")",
		width: '100vw',
		height: '100vh',
	}
	return (
		<div style={sectionStyle}>
			<div id="notfound">
				<div className="notfound">
					<div className="notfound-404">
						<h1>4<span></span>4</h1>
					</div>
					<h2>Oops! Page Not Be Found</h2>
					<p>Sorry. Looks like something went wrong on our end. Head back to the homepage to get back on track.</p>
					<a href="/user">Back to homepage</a>
				</div>
			</div>
		</div>
	)
}
