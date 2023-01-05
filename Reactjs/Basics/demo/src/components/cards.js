import react from 'react';
import { Component } from 'react';
// class base components
class Card extends Component{
  constructor(props){
    super(props);
  }
render(){
    return(
        <react.Fragment>
      <div class="ui card d-inline">
  <div class="image">
    
    <img alt='img' src="https://picsum.photos/200/200"/>
  </div>
  <div class="content">
    <a  href="https://githubuser.me" class="header" >{this.props.name}</a>
    <div class="meta">
      <span class="date">{this.props.joinDate}</span>
    </div>
    <div class="description">
      {this.props.description}
    </div>
  </div>
  <div class="extra content">
    <a href='https://user.name'>
      <i class="user icon"></i>
      {this.props.friends} Friends
    </a>
  </div>
</div>
        </react.Fragment>
    );
}
}

export default Card;