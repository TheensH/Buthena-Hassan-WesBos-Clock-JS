// const secondHand = document.querySelector('.second-hand')
// const minsHand = document.querySelector('.min-hand');
// const hourHand = document.querySelector('.hour-hand');

// function setDate(){
//   const now = new Date();
  
//   const seconds = now.getSeconds();
//   const secondsDegrees = ((seconds/ 60) * 360) + 90;
//   secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  
//   const mins = now.getMinutes();
//   const minsDegrees = ((mins / 60) * 360) + 90;
//   minsHand.style.transform = `rotate(${minsDegrees}deg)`;

//   const hour = now.getHour();
//   const hourDegrees = ((mins /12) * 360) + 90;
//   hourHand.style.tranform = `rotate(${hourDegrees}deg)`;
// }

// setInterval(setDate, 1000);


//credit by https://codepen.io/CHUN-PIN-CHEN/pen/yVRBEw?editors=1010
//like the cleaner way of the setup
const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hoursHand = document.querySelector('.hour-hand');



function setDate(){
  const now = new Date();
  const seconds = now.getSeconds();
  const mins = now.getMinutes();
  const hours = now.getHours();
  
  console.log("hours : " + hours); 
  console.log("mins : " + mins);
  console.log("seconds : " + seconds);
  
  const secondsDegree  = seconds * ( 360 / 60 ) + 90;
  const minsDegree = mins * ( 360 / 60 ) + 90;
  const hoursDegree = hours * ( 360 / 12 ) + 90;;
  
  secondHand.style.transform = `rotate(${secondsDegree}deg)`;
  minsHand.style.transform = `rotate(${minsDegree}deg)`;
  hoursHand.style.transform  = `rotate(${hoursDegree}deg)`;

}

  setInterval(setDate, 1000);