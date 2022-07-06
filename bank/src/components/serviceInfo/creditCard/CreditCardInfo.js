import standardCreditCard from './standardCreditCard.png'
import goldCard from './goldCard.png'
import wePayForYou from './wePayForYou.png'
import railway from './railway.png'
export const CreditCardInfo = [
  {
    name : 'Standard Credit Card',
    dis : 'We got all your bets covered with our Standard Credit Card option. With a max credit line of $1,000,000 and a yearly interest rate of .5% you\'ll be rolling in no time. We also alow customers to have as many of these accounts as they would like!',
    image : standardCreditCard,
    options : {
      'maxBal' : 1000000,
      'interestRate' : '.005'
    }
  },
  {
    name : 'We Pay For You Credit',
    dis : 'Sometimes you don\'t want to pay for something and that is where we come in. With our We Pay For You Credit, any money that is taken form this account is on us just for you.',
    image : wePayForYou,
    options : {
      'noCharge' : true
    }
  },
  {
    name : 'Gold Rewards',
    dis : 'Every bank has a gold rewards system but ours is different. At Dice Bank we feel that our customers deserve the best gold rewards, so for every perchance adding up to $5,000 we\'ll send you 13kg of the finest 24k gold.',
    image : goldCard,
    options : {
      'noCharge' : true
    }
  },
  {
    name : 'Railway+ Credit Card',
    dis : 'Not every roll gives box cars but here at Dice Bank it is our belief that if you need a box car for transportation of your businesses goods, it should come at a cost effective rate. The Railway+ Credit Card gives you 4 two 4s be exact 4% interest and 4% cash back at all minor railways.',
    image : railway,
    options : {
      'interestRate' : '4%',
      'cashBack' : '4%'
    }
  }
]