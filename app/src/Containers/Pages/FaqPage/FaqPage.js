import React, { Component } from "react";

import { PageHeader } from "react-bootstrap";

import NavigationBar from "../../../Components/NavigationBar";

import "./css/style.css";

import "./css/reset.css";

class FaqPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: "basics"
		};
		this.showContent = this.showContent.bind(this);
		this.changeSelected = this.changeSelected.bind(this);
	}

	changeSelected(newValue) {
		this.setState({
			selected: newValue
		});
	}

	showContent(event) {
		const target = event.target;
		const name = target.name;
		let val = this.state[name] ? ![this.state.name] : true;
		this.setState({
			[name]: val
		});
	}
	componentDidMount() {
		var tag = document.createElement("script");
		tag.async = false;
		tag.src = "https://code.jquery.com/jquery-3.3.1.js";
		document.head.appendChild(tag);

		tag.src =
			" https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.js";
		document.head.appendChild(tag);
	}

	render() {
		const customStyles = {
			"font-size": "1.6rem",
			"line-height": "1.8",
			color: "#000",
			margin: "15px",
			"text-align": "justify"
		};

		const customboxes = {
			"display": "inline-block",
			"padding": "5px 8px",
  			"border-radius": "5px",
  			"margin": "3px 3px",
  			"border": "2px solid #ccc",
  			"box-shadow": "0 1px 4px 0 #eee"
		};
		const fontsize = {
			"font-size":"1.8rem"
		};
		return (
			<div id="faqPage">
				<NavigationBar />
				<PageHeader className="pageheader">Frequently Asked Questions</PageHeader>

				<section className="cd-faq">
					<div className="navbar-fixed-top" style={{ top: "220px" }}>
						<ul className="cd-faq-categories">
							<li>
								<a
									className={this.state.selected === "basics" ? "selected" : ""}
									onClick={() => this.changeSelected("basics")}
									href="#basics"
									style={fontsize}
								>
									Basics
								</a>
							</li>
							<li>
								<a
									className={this.state.selected === "mobile" ? "selected" : ""}
									onClick={() => this.changeSelected("mobile")}
									href="#mobile"
									style={fontsize}
								>
									Diagnosis
								</a>
							</li>
						</ul>
					</div>
					<div className="cd-faq-items">
						<ul id="basics" className="cd-faq-group">
							<li className="cd-faq-title">
								<h1>Basics</h1>
							</li>

							{/*Question 1*/}

							<li
								className={this.state.show1 === true ? "content-visible" : ""}
							>
								<a
									name="show1"
									className="cd-faq-trigger"
									href="#0"
									onClick={this.showContent}
								>
									What is Illness prediction Site?
								</a>
								{this.state.show1 && (
									<div className="cd-faq-content::after">
										<p style={customStyles}>
											{" "}
											Illness prediction Site is a work in progress site and its
											predication administrations intended to assist people with
											identifying and comprehend their sickness. With Illness
											prediction Site, you can make an individual client record
											to spare your side effects and the predations with the fix
											anticipated.
										</p>
									</div>
								)}
							</li>

							{/*Question 2*/}

							<li
								className={this.state.show2 === true ? "content-visible" : ""}
							>
								<a
									name="show2"
									className="cd-faq-trigger"
									href="#0"
									onClick={this.showContent}
								>
									What are the expenses?
								</a>
								{this.state.show2 && (
									<div className="cd-faq-content::after">
										<p style={customStyles}>
											{" "}
											As of now there is no expense for the diagnosis made by our framework.
										</p>
									</div>
								)}
							</li>

							{/*Question 3*/}

							<li
								className={this.state.show3 === true ? "content-visible" : ""}
							>
								<a
									name="show3"
									className="cd-faq-trigger"
									href="#0"
									onClick={this.showContent}
								>
									How can I log in?
								</a>
								{this.state.show3 && (
									<div className="cd-faq-content::after">
										<p style={customStyles}>
											{" "}
											You can click <strong>"Login"</strong> on the navigation bar to login to your account.
										</p>
									</div>
								)}
							</li>

							{/*Question 4*/}

							<li
								className={this.state.show4 === true ? "content-visible" : ""}
							>
								<a
									name="show4"
									className="cd-faq-trigger"
									href="#0"
									onClick={this.showContent}
								>
									How do I sign up?
								</a>
								{this.state.show4 && (
									<div className="cd-faq-content::after">
										<p style={customStyles}>
										You can click <strong>"Sign Up"</strong> on the navigation bar to signup to your account.
										</p>
									</div>
								)}
							</li>

							{/*Question 5*/}


							{/*Question 6*/}

							<li
								className={this.state.show6 === true ? "content-visible" : ""}
							>
								<a
									name="show6"
									className="cd-faq-trigger"
									href="#0"
									onClick={this.showContent}
								>
									About Passwords
								</a>
								{this.state.show6 && (
									<div className="cd-faq-content::after">
										<p style={customStyles}>
											Picking a solid secret phrase and keeping it private are two of the most critical advances you can take to protect the security of your data. Since anybody with your username and secret key can get to your record, it is critical to guarantee the secret phrase picked is solid, novel (not utilized on different sites) and changed occasionally.
										</p>
									</div>
								)}
							</li>

							{/*Question 7*/}

							<li
								className={this.state.show7 === true ? "content-visible" : ""}
							>
								<a
									name="show7"
									className="cd-faq-trigger"
									href="#0"
									onClick={this.showContent}
								>
									How can you conact us?
								</a>
								{this.state.show7 && (
									<div className="cd-faq-content::after">
										<p style={customStyles}>
										You can click <strong>"Contact"</strong> on the navigation bar to get in touch with us.
										</p>
									</div>
								)}
							</li>

							{/*Question 8*/}

							<li
								className={this.state.show8 === true ? "content-visible" : ""}
							>
								<a
									name="show8"
									className="cd-faq-trigger"
									href="#0"
									onClick={this.showContent}
								>
									What are the specialized prerequisites for utilizing this site?
								</a>
								{this.state.show8 && (
									<div className="cd-faq-content::after">
										<p style={customStyles}>
											The stage underpins current generation forms of Firefox, Google Chrome and Safari
											on Mac OSX and current creation adaptations of Firefox, Chrome and Internet Explorer
											on Windows XP, Vista, and 7. Presently that implies:
											<br></br>
											<span style={customboxes}>Firefox 5.0</span>
											<span style={customboxes}>Safari 9</span>
											<span style={customboxes}>Google Chrome 5.5</span>
											<span style={customboxes}>IE11 and Edge</span>										
											<br></br>
											You will likewise require a web association, HTML and JavaScript bolster
										</p>
									</div>
								)}
							</li>

							{/*Question 9*/}

							<li
								className={this.state.show9 === true ? "content-visible" : ""}
							>
								<a
									name="show9"
									className="cd-faq-trigger"
									href="#0"
									onClick={this.showContent}
								>
									Download Needed? 
								</a>
								{this.state.show9 && (
									<div className="cd-faq-content::after">
										<p style={customStyles}>
										This site doesn't have to download any product to for anticipating a specific disease. 
										</p>
									</div>
								)}
							</li>

							{/*Question 10*/}

							<li
								className={this.state.show10 === true ? "content-visible" : ""}
							>
								<a
									name="show10"
									className="cd-faq-trigger"
									href="#0"
									onClick={this.showContent}
								>
									What data do I have to join to utilize the record ? 
								</a>
								{this.state.show10 && (
									<div className="cd-faq-content::after">
										<p style={customStyles}>
										Amid the join procedure, you will be made basic inquiries like contact data, 
										email address ,date of birth and so forth. 
 
										</p>
									</div>
								)}
							</li>

							{/*Question 11*/}

							<li
								className={this.state.show11 === true ? "content-visible" : ""}
							>
								<a
									name="show11"
									className="cd-faq-trigger"
									href="#0"
									onClick={this.showContent}
								>
									How before long would i be able to get to my record? 
								</a>
								{this.state.show11 && (
									<div className="cd-faq-content::after">
										<p style={customStyles}>
										Instantly after you join. 
										</p>
									</div>
								)}
							</li>
						</ul>

						<ul id="mobile" className="cd-faq-group">
							<li className="cd-faq-title">
								<h1>Diagnosis</h1>
							</li>

							{/*Question 12*/}

							<li
								className={this.state.show12 === true ? "content-visible" : ""}
							>
								<a
									name="show12"
									className="cd-faq-trigger"
									href="#0"
									onClick={this.showContent}
								>
									How does prediction work?
								</a>
								{this.state.show12 && (
									<div className="cd-faq-content::after">
										<p style={customStyles}>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit.
											Impedit quidem delectus rerum eligendi mollitia,
											repudiandae quae beatae. Et repellat quam atque corrupti
											iusto architecto impedit explicabo repudiandae qui
											similique aut iure ipsum quis inventore nulla error
											aliquid alias quia dolorem dolore, odio excepturi veniam
											odit veritatis. Quo iure magnam, et cum. Laudantium, eaque
											non? Tempore nihil corporis cumque dolor ipsum accusamus
											sapiente aliquid quis ea assumenda deserunt praesentium
											voluptatibus, accusantium a mollitia necessitatibus
											nostrum voluptatem numquam modi ab, sint rem.
										</p>
									</div>
								)}
							</li>

							{/*Question 13*/}

							<li
								className={this.state.show13 === true ? "content-visible" : ""}
							>
								<a
									name="show13"
									className="cd-faq-trigger"
									href="#0"
									onClick={this.showContent}
								>
									Accuracy of the Diagnosis  
								</a>
								{this.state.show13 && (
									<div className="cd-faq-content::after">
										<p style={customStyles}>
										The Content isn't proposed to be a substitute for expert restorative guidance, determination, 
										or treatment. Continuously look for the counsel of your doctor or other qualified wellbeing supplier 
										with any inquiries you may have in regards to a therapeutic condition. Never dismiss proficient 
										medicinal counsel or deferral in looking for it as a result of something you have perused on Illness 
										prediction Site! <br></br>
										In the event that you figure you may have a therapeutic crisis, call your specialist or 911 
										instantly. Sickness diagnosis Site does not prescribe or embrace an explicit tests, doctors, 
										items, methodology, suppositions, or other data that might be referenced on the Site. Dependence
										on any data given by Illness prediction Site, Illness diagnosis Site representatives, others showing
										up on the Site at the welcome of Illness diagnosis Site, or different guests to the Site is
										exclusively at your very own hazard. 
 
										</p>
									</div>
								)}
							</li>

							{/*Question 14*/}

							<li
								className={this.state.show14 === true ? "content-visible" : ""}
							>
								<a
									name="show14"
									className="cd-faq-trigger"
									href="#0"
									onClick={this.showContent}
								>
								Do I require any therapeutic foundation so as to utilize Illness prediction Site? 
								</a>
								{this.state.show14 && (
									<div className="cd-faq-content::after">
										<p style={customStyles}>
										No. Illness prediction Site point-and-snap site streamlined with the goal that 
										anybody can utilize it, regardless of whether you have no restorative foundation 
										encounter you can get expectation. 
										</p>
									</div>
								)}
							</li>

							{/*Question 15*/}

							<li
								className={this.state.show15 === true ? "content-visible" : ""}
							>
								<a
									name="show15"
									className="cd-faq-trigger"
									href="#0"
									onClick={this.showContent}
								>
									How can I enter my daily habits like smoking in the system?
								</a>
								{this.state.show15 && (
									<div className="cd-faq-content::after">
										<p style={customStyles}>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit.
											Nisi tempore, placeat quisquam rerum! Eligendi fugit
											dolorum tenetur modi fuga nisi rerum, autem officiis
											quaerat quos. Magni quia, quo quibusdam odio. Error magni
											aperiam amet architecto adipisci aspernatur! Officia,
											quaerat magni architecto nostrum magnam fuga nihil, ipsum
											laboriosam similique voluptatibus facilis nobis? Eius non
											asperiores, nesciunt suscipit veniam blanditiis veritatis
											provident possimus iusto voluptas, eveniet architecto
											quidem quos molestias, aperiam eum reprehenderit dolores
											ad deserunt eos amet. Vero molestiae commodi unde dolor
											dicta maxime alias, velit, nesciunt cum dolorem, ipsam
											soluta sint suscipit maiores mollitia assumenda ducimus
											aperiam neque enim! Quas culpa dolorum ipsam? Ipsum
											voluptatibus numquam natus? Eligendi explicabo eos,
											perferendis voluptatibus hic sed ipsam rerum maiores
											officia! Beatae, molestias!
										</p>
									</div>
								)}
							</li>

							{/*Question 16*/}

							<li
								className={this.state.show16 === true ? "content-visible" : ""}
							>
								<a
									name="show16"
									className="cd-faq-trigger"
									href="#0"
									onClick={this.showContent}
								>
									How do I find remedies for the illness?
								</a>
								{this.state.show16 && (
									<div className="cd-faq-content::after">
										<p style={customStyles}>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit.
											Blanditiis provident officiis, reprehenderit numquam.
											Praesentium veritatis eos tenetur magni debitis inventore
											fugit, magnam, reiciendis, saepe obcaecati ex vero quaerat
											distinctio velit.
										</p>
									</div>
								)}
							</li>
						</ul>
					</div>
				</section>
			</div>
		);
	}
}
export default FaqPage;
