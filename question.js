const QUESTIONS = {
  "probability": [
    {
      numb: 1,
      question:
        "Tickets number 1 to 20 are mixed up and then a ticket is drawn at random.What is the probablity that the ticket drawn has a number which is multiple of 3 or 5?",
      answer: "9/20",
      options: ["1/2", "2/5", "8/15", "9/20"],
    },
    {
      numb: 2,
      question:
        "What is the probablity of getting a sum 9 from two throws of a dice?",
      answer: "1/9",
      options: ["3/9", "2/9", "1/9", "5/9"],
    },
    {
      numb: 3,
      question:
        "Three unbiased coins are tossed.What is the probability of getting at most two heads?",
      answer: "7/18",
      options: ["5/15", "6/10", "2/30", "7/18"],
    },
    {
      numb: 4,
      question:
        "A card is drawn from a pack of 52 cards.The probablityof getting a queen of club or a king of heart is:",
      answer: "1/26",
      options: ["1/26", "4/10", "3/29", "8/23"],
    },
    {
      numb: 5,
      question:
        "A bag contains 4 white, 5 red and 6 blue balls.Three balls are drawn at random from the bag.The probablity that all of them are red, is:",
      answer: "2/91",
      options: ["7/20", "4/21", "2/87", "2/91"],
    },
    {
      numb: 6,
      question:
        "In a lottery, there are 10 prizes and 25 blanks.A lottery is drawn at random.What is the probablity of getting a prize?",
      answer: "5/9",
      options: ["5/7", "5/9", "2/9", "2/7"],
    },
    {
      numb: 7,
      question:
        "Two cards are drawn together from a pack of 52 cards.The probablity that one is a spade and one is a heart,is:",
      answer: "13/102",
      options: ["20/87", "13/102", "26/56", "27/44"],
    },
    {
      numb: 8,
      question:
        "One card is drawn at random from a pack of 52 cards.What is the probablity that the card drawn is a face card (jack,queen and king only)?",
      answer: "3/13",
      options: ["3/13", "6/20", "10/13", "9/12"],
    },
    {
      numb: 9,
      question:
        "Two dice are tossed.The probability that the total score is a prime number is:",
      answer: "5/12",
      options: ["2/12", "5/12", "9/16", "13/24"],
    },
    {
      numb: 10,
      question:
        "Out of 17 applicants,there are 8 boys and 9 girls.Two persons are to be selected for the job.Find the probability that at least one of the selected persons will be a girl.",
      answer: "27/34",
      options: ["27/34", "13/24", "10/28", "9/25"],
    },
  ],
  //pipes and citerns
  "pipes": [
    {
      numb: 1,
      question:
        "Three pipes A, B and C can fill a tank full in 30 minutes, 20 minutes and 10 minutes respestively. When the tank is empty, When the tank is empty, all the three pipes are openend.A,B and C discharged chemical solutions P,Q and R respectively. What is the proportion of the solution R in the liquid in the tank after 3 minutes?",
      options: ["5/11", "6/11", "7/11", "8/11"],
      answer: "6/11",
    },
    {
      numb: 2,
      question:
        "A tank is filled by three pipes with uniform flow.The first two pipes operting simultaneously fill the tank in the same time during which the tank is filled by the tank is filled by the third pipe filles the tank 5 hours faster than the first pipe and 4 hours slower than the third pipe.The time required by the first pipe is:",
      options: ["6 hours", "10 hours", "15 hours", "20 hours"],
      answer: "15 houres",
    },
    {
      numb: 3,
      question:
        "Two pipes A and B can fill a cistern in 37 minutes and 45 minutes respectively.Both pipes are opened. The cistern will be filled in just half an hour, if the B is turned off after:",
        options: ["5 mins", "9 mins", "10 mins", "15 mins"],
      answer: "9 mins",
    },
    {
      numb: 4,
      question:
        "Two pipes can fill a tank in 20 and 24 minutes respectively and a waste pipe can empty 3 gallons per minute, All the three pipes working together can fill the tank in 15 minutes, The capacity of the tank is:",
        options: ["60 gallons", "100 gallons", "120 gallons", "180 gallons"],
      answer: "120 gallons",
    },
    {
      numb: 5,
      question:
        "A tank is filled in 5 hours by three pipes A, B and C.The pipe C is twice as fast as A, how much time will pipe A alone take to fill the tank?",
      options: ["20 hours", "25 hours", "35 hours", "Cannot be determined"],
      answer: "35 hours",
    },
    {
      numb: 6,
      question:
        "Two pipes A and B together can fill a cistern in 4 hours. Had they been opened separately, then B would have taken 6 hours more than A to fill the cistern.How much time will be taken by A to fill the cistern separately?",
      options: ["1 hours", "2 hours", "6 hours", "8 hours"],
      answer: "6 hours",
    },
    {
      numb: 7,
      question:
        "Two pipes A and B fill a tank in 20 and 30 minutes respectively. If both the pipes are used together, then how long will it take to fill the tank?",
      options: ["12 mins", "15 mins", "25 mins", "30 mins"],
      answer: "12 mins",
    },
    {
      numb: 8,
      question:
        "three pipes A,B and C can fill a tank in 6 hours. After working at it together for 2 hours, C is closed and A and B can fill the remaining part in 7 hours. The number of hours taken by C alone to fill the tank is:",
      options: ["10", "12", "14", "16"],
      answer: "14",
    },
    {
      numb: 9,
      question:
        "Two pipes A and B can fill a tank in 15 minutes and 20 minutes respectively.Both the pipes are opened together but after 4 minutes, pipe A is turned off. What is the total time required to fill the tank?",
      options: ["10min 20 sec", "11min 45sec", "12min 30 sec", "14min 40sec"],
      answwer: "14min 40sec",
    },
    {
      numb: 10,
      question:
        "One pipe can fill a tank three times as fast as another pipe. If together the two pipes can fill the tank in 36 minutes, then the slower pipe alone will be abke to fill the tank in:",
      options: ["81", "108", "144", "192"],
      answwer: "144",
    },
  ],

  //problem on age
  "problem": [
    {
      numb: 1,
      question:
        "the sum of ages of 5 children born at the intervals of 3 years each is 50 years.What is the age of the youngest child?",
      options: ["4 years", "8 years", "10 years", "None"],
      answwer: "4 years",
    },
    {
      numb: 2,
      question:
        "A is two years older than B who is twice as old as C.If the total of the ages of A, B and C be 27, then how old is B?",
      options: ["7", "8", "9", "10"],
      answer: "10",
    },
    {
      numb: 3,
      question:
        "Present ages of Sameer and Anand are in the ratio of 5 : 4 respectively. Three years hence,the ratio of their ages will become 11 : 9 respectively.What is Anand's present age in years?",
      options: ["24", "27", "40", "None"],
      answer: "24",
    },
    {
      numb: 4,
      question:
        "A man is 24 years older than his son.In two years, his age will be twice the age of his son.The present age of his son is:",
      options: ["14", "18", "20", "22"],
      answer: "22",
    },
    {
      numb: 5,
      question:
        "Six years ago, the ratio of the ages of Kunal and Sagar was 6 : 5. Four years hence, the ratio of their ages will be 11 : 10.What is Sagar's age at present?",
      options: ["16", "18", "20", "26"],
      answer: "16",
    },
    {
      numb: 6,
      question:
        "The sum of the present ages of a father and his son is 60 years.Six years ago, father's age was five times the age of the son. After 6 years, son's age will be:",
        options: ["19", "22", "21", "20"],
      answer: "20",
    },
    {
      numb: 7,
      question:
        "At present, the ratio between the ages of Arun and Deepak is 4 : 3.After 6 years,Arun's age will be 26 years.What is the age of Deepak at present ?",
      options: ["15", "18", "19", "12"],
      answer: "15",
    },
    {
      numb: 8,
      question:
        "Sachin is younger than Rahul by 7 years. If their ages are in the respective ratio of 7 : 9, how old is Sachin?",
        options: ["24.5", "28", "22.5", "19"],
      answer: "24.5",
    },
    {
      numb: 9,
      question:
        "Ayesha's father was 38 years of age when she was born while her mother four years younger to her was born. What is the difference between the ages of her parents?",
      options: ["2", "3", "6", "10"],
      answer: "6",
    },
    {
      numb: 10,
      question:
        "A person's present age is two-fifth of the age of his mother.After 8 years, he will be one-half of the age of his mother, How old is the mother at present?",
      options: ["32", "36", "40", "49"],
      answer: "40",
    },
  ],
  //profit and loss
  "profit": [
    {
      numb: 1,
      question:
        "The cost price of 20 article is the same as the selling price of x articles.If the profit is 25%,then the value of x is:",
      answer: "16",
      options: ["15", "16", "18", "25"],
    },
    {
      numb: 2,
      question:
        "A vender bought toffees at 6 for a rupee,How many for a rupee must he sell to gain 20%?",
      answer: "5",
      options: ["2", "6", "5", "8"],
    },
    {
      numb: 3,
      question:
        "Sam purchased 20 dozens of toys at the rate of Rs. 375 per  dozen.he sold each one of them at the rate of Rs. 33.What was his percentage profit?",
      options: ["2.0", "5.5", "4.5", "5.6"],
      answer: "5.6",
    },
    {
      numb: 4,
      question:
        "On selling 17 balls at Rs. 720, there is a loss equal to the cost price of 5 balls.The cost price of a ball is:",
      options: ["25", "60", "55", "40"],
      answer: "60",
    },
    {
      numb: 5,
      question:
        "By selling an article at Rs. 800, a shopkeeper makes a profit of 25%.At what price should he sell the article so as to make a loss of 25%?",

      options: ["220", "480", "300", "460"],
      answer: "480",
    },
    {
      numb: 6,
      question:
        "Profit after selling a commodity for Es. 425 is same as loss after selling it for Rs. 355. The cost of the commodity is:",
      options: ["120", "200", "390", "480"],
      answer: "390",
    },
    {
      numb: 7,
      question:
        "Bhajan singh purchesed 120 reams of paper at Rs. 80 per ream.He spent rs.280 on transportation.Paid octrai at the rate of 40 paise per ream and paid Rs. 72 to the coolie.if he wants to have a gain of 8 %.What must be the selling price per ream?",
      options: ["76", "23", "87", "90"],
      answer: "90",
    },
    {
      numb: 8,
      question:
        "A person sold a pen at Rs. 96 in such a way that his percentage profit is same as the cost price of the watch. If he sells it at twice the percentage profit of its previous percentage profit then new selling price will be?",
      options: ["100", "220", "132", "126"],
      answer: "132",
    },
    {
      numb: 9,
      question:
        " The cost price of a radio is Rs.1500 and it was sold for Rs.1230, find the loss %?",
      options: ["9%", "19%", "23%", "18%"],
      answer: "18%",
    },
    {
      numb: 10,
      question:
        "A watch was sold at a loss of 10%. If it was sold for Rs.140 more, there would have been a gain of 4%. What is the cost price?",
      options: ["1000", "320", "780", "820"],
      answer: "1000",
    },
  ],
};
