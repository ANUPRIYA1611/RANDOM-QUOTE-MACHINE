import React, { Component } from 'react';
 class Quote extends Component {
 state = {
     count: 0 ,name:"Zero"
    }
 changeCount(){
 if(this.state.count===0 )
 return"Spread love everywhere you go. Let no one ever come to you without leaving happier. -Mother Teresa";
 else if(this.state.count===1)
 return"When you reach the end of your rope, tie a knot in it and hang on. -Franklin D. Roosevelt";
 else if(this.state.count==2)
 return "Always remember that you are absolutely unique. Just like everyone else. -Margaret Mead";
 else if(this.state.count==3)
 return "Don't judge each day by the harvest you reap but by the seeds that you plant. -Robert Louis Stevenson";
 else if(this.state.count==4)
 return "The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt";
 else if(this.state.count==5)
 return "Tell me and I forget. Teach me and I remember. Involve me and I learn. -Benjamin Franklin";
 else if(this.state.count==6)
 return "The best and most beautiful things in the world cannot be seen or even touched ";
 else if(this.state.count==7)
 return "You will face many defeats in life, but never let yourself be defeated. ";
 else if(this.state.count==8)
 return "Do not go where the path may lead, go instead where there is no path and leave a trail.";
 else if(this.state.count==9)
 return "It is during our darkest moments that we must focus to see the light. ";
 else if(this.state.count==10)
 return "Don't judge each day by the harvest you reap but by the seeds that you plant.";
 else if(this.state.count==11)
 return"In this life we cannot do great things. We can only do small things with great love.";
 else if(this.state.count==12)
 return"Go confidently in the direction of your dreams! Live the life you've imagined.";
 else if(this.state.count==13)
 return "Do not let making a living prevent you from making a life.";
 else if(this.state.count==14)
 return "In three words I can sum up everything I've learned about life: it goes on.";
 else if(this.state.count==15)
 return "Love the life you live. Live the life you love.";
 else if(this.state.count==16)
 return "Success is not final; failure is not fatal: It is the courage to continue that counts.";
 else if(this.state.count==17)
 return"The way to get started is to quit talking and begin doing.";
 else if(this.state.count==18)
 return "Success usually comes to those who are too busy to be looking for it." ;
 else if(this.state.count==19)
 return "It is better to fail in originality than to succeed in imitation.";
 else
 return "Your time is limited, so don't waste it living someone else's life";
 }
 render() {
 return (<div>
 <h1 id="a"> RANDOM QUOTE MACHINE</h1>
 <div id="b">
 <span id="card">{this.changeCount()}</span>
 </div>
 <button id="but"
 onClick={() => { this.setState({ count: this.state.count + 1 }) }}>A NEW ONE!!</button>
 </div>);
 }
}
export default Quote