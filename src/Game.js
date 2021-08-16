

class Game extends React.Component{
  constructor(props){
  super(props)
    this.state={
      value1:valuesArray[0],
      value2:valuesArray[1],
      value3:valuesArray[2],
      proposedAnswer: valuesArray[3],
      
    };
  
  }
  makeNewQuestion=()=>{
	value1 = Math.floor(Math.random() * 100);
	value2 = Math.floor(Math.random() * 100);
	value3 = Math.floor(Math.random() * 100);
	proposedAnswer = Math.floor(Math.random() * 3) +( value1 + value2 + value3); 
    return[value1,value2,value3,proposedAnswer];
  }
  
  updateState = newValuesArray=>{
 	this.setState(currState=>({value1 = Math.floor(Math.random() * 100);
	value2 = Math.floor(Math.random() * 100);
	value3 = Math.floor(Math.random() * 100);
	proposedAnswer = Math.floor(Math.random() * 3) +( value1 + value2 + value3)}))
  }
}