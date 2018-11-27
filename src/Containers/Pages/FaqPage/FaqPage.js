import React, { Component } from 'react';

import { PageHeader} from 'react-bootstrap';

import NavigationBar from '../../../Components/NavigationBar';

import './css/style.css';

import './css/reset.css';



class FaqPage extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        selected:'basics'
    }
    this.showContent = this.showContent.bind(this);
    this.changeSelected = this.changeSelected.bind(this);
    }

    changeSelected(newValue)
    {
        this.setState({
            selected: newValue
        });  
    }

    showContent(event)
    {
        const target = event.target;
        const name = target.name;
        let val = this.state[name] ? ![this.state.name]:true;
        this.setState({
            [name]: val
        });
    }
    componentDidMount () {
        var tag = document.createElement('script');
        tag.async = false;
        tag.src = 'https://code.jquery.com/jquery-3.3.1.js';
        document.head.appendChild(tag);

      
        tag.src = ' https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.js';
        document.head.appendChild(tag);

        
       
    }

  render() {



    return (

      <div id="faqPage">

        <NavigationBar />
        <PageHeader>
        Frequently Asked Questions
</PageHeader>


       <section className="cd-faq">
       <div className="navbar-fixed-top"style= {{ top: '220px' }}>
	<ul className="cd-faq-categories" >
		<li><a className={this.state.selected==='basics'? 'selected' :''} onClick={() => this.changeSelected('basics')} href="#basics">Basics</a></li>
		<li><a className={this.state.selected==='mobile'? 'selected' :'' } onClick={() => this.changeSelected('mobile')} href="#mobile">Mobile</a></li>
		<li><a className={this.state.selected==='account'? 'selected' :''} onClick={() => this.changeSelected('account')} href="#account">Account</a></li>
		<li><a className={this.state.selected==='payments'? 'selected' :'' } onClick={() => this.changeSelected('payments')} href="#payments">Payments</a></li>
	
    </ul> 
</div>
	<div className="cd-faq-items">
		<ul id="basics" className="cd-faq-group">
			<li className="cd-faq-title"><h2>Basics</h2></li>
			<li className={this.state.show1===true? 'content-visible' :''}>
				<a name='show1' className="cd-faq-trigger" href="#0" onClick={this.showContent}>How do I change my password?</a>
				{this.state.show1 && <div className="cd-faq-content::after">
					<p> go here and do
                    </p></div>
                }
			</li>

			<li className={this.state.show2===true? 'content-visible' :''}>
				<a name='show2' className="cd-faq-trigger" href="#0" onClick={this.showContent}>How do I sign up?</a>
				{this.state.show2 &&<div className="cd-faq-content::after">
					<p> sign up here</p></div>
                }
			</li>

			<li className={this.state.show3===true? 'content-visible' :''}>
				<a name="show3"className="cd-faq-trigger" href="#0" onClick={this.showContent}>Can I remove a post?</a>
				{this.state.show3  && <div className="cd-faq-content::after">
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis provident officiis, reprehenderit numquam. Praesentium veritatis eos tenetur magni debitis inventore fugit, magnam, reiciendis, saepe obcaecati ex vero quaerat distinctio velit.</p>
				</div>
                }
			</li>

			<li className={this.state.show4===true? 'content-visible' :''}>
				<a name="show4"className="cd-faq-trigger" href="#0" onClick={this.showContent}>How do reviews work?</a>
				{this.state.show4 &&<div className="cd-faq-content::after">
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis provident officiis, reprehenderit numquam. Praesentium veritatis eos tenetur magni debitis inventore fugit, magnam, reiciendis, saepe obcaecati ex vero quaerat distinctio velit.</p>
				</div>
                }
			</li>
		</ul> 

		<ul id="mobile" className="cd-faq-group">
			<li className="cd-faq-title"><h2>Mobile</h2></li>
			<li className={this.state.show5===true? 'content-visible' :''}>
				<a name="show5"className="cd-faq-trigger" href="#0" onClick={this.showContent}>How does syncing work?</a>
				{this.state.show5 && <div className="cd-faq-content::after">
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit quidem delectus rerum eligendi mollitia, repudiandae quae beatae. Et repellat quam atque corrupti iusto architecto impedit explicabo repudiandae qui similique aut iure ipsum quis inventore nulla error aliquid alias quia dolorem dolore, odio excepturi veniam odit veritatis. Quo iure magnam, et cum. Laudantium, eaque non? Tempore nihil corporis cumque dolor ipsum accusamus sapiente aliquid quis ea assumenda deserunt praesentium voluptatibus, accusantium a mollitia necessitatibus nostrum voluptatem numquam modi ab, sint rem.</p>
				</div>
                }
			</li>

			<li className={this.state.show6===true? 'content-visible' :''}>
				<a name="show6"className="cd-faq-trigger" href="#0" onClick={this.showContent}>How do I upload files from my phone or tablet?</a>
				{this.state.show6 &&<div className="cd-faq-content::after">
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempore, placeat quisquam rerum! Eligendi fugit dolorum tenetur modi fuga nisi rerum, autem officiis quaerat quos. Magni quia, quo quibusdam odio. Error magni aperiam amet architecto adipisci aspernatur! Officia, quaerat magni architecto nostrum magnam fuga nihil, ipsum laboriosam similique voluptatibus facilis nobis? Eius non asperiores, nesciunt suscipit veniam blanditiis veritatis provident possimus iusto voluptas, eveniet architecto quidem quos molestias, aperiam eum reprehenderit dolores ad deserunt eos amet. Vero molestiae commodi unde dolor dicta maxime alias, velit, nesciunt cum dolorem, ipsam soluta sint suscipit maiores mollitia assumenda ducimus aperiam neque enim! Quas culpa dolorum ipsam? Ipsum voluptatibus numquam natus? Eligendi explicabo eos, perferendis voluptatibus hic sed ipsam rerum maiores officia! Beatae, molestias!</p>
				</div>
                }
			</li>

			<li className={this.state.show7===true? 'content-visible' :''}>
				<a name="show7"className="cd-faq-trigger" href="#0" onClick={this.showContent}>How do I link to a file or folder?</a>
				{this.state.show7 && <div className="cd-faq-content::after">
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis provident officiis, reprehenderit numquam. Praesentium veritatis eos tenetur magni debitis inventore fugit, magnam, reiciendis, saepe obcaecati ex vero quaerat distinctio velit.</p>
				</div>
                }
			</li>
		</ul> 

		
	</div>

</section> 


             
        
      </div>
    )
  }
}
export default FaqPage;