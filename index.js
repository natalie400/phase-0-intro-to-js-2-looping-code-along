// Code your solutions in this file

function writeCards(names, eventName) {
    const messages = [];
  
    for (let i = 0; i < names.length; i++) {
      const thankMessage = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
      messages.push(thankMessage);
    }
  
    return messages;
  }
  
  console.log(writeCards(["Guadalupe", "Ollie", "Ali"], 'surprise'));
  














function countDown(counter){
    while(counter >= 0){
        console.log(counter--)
    }
    
}