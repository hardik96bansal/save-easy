export interface qaTemplate {
  sl_no: number;
  question: string;
  type: string;
  image: string;
  options: options;
  descriptions?: options;
}

export interface options {
  a: string;
  b: string;
  c: string;
  d: string;
  e?: string;
  f?: string;
}

export interface allQuestions {
  questions: qaTemplate[];
}

export interface allScores {
  questionNumber: number;
  options: options;
}

export const intialScore = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

export const intialSelection = [false, false, false, false, false, false];

export const QUESTIONS: allQuestions = {
  questions: [
    {
      sl_no: 1,
      question:
        "Which of the following best describes your current stage of life?",
      type: "radio",
      image: "no",
      options: {
        a: "Single with few financial burdens.",
        b: "A couple without children.",
        c: "Young family with a home.",
        d: "Mature family.",
        e: "Preparing for retirement.",
        f: "Retired.",
      },
      descriptions: {
        a: "Ready to accumulate wealth for future short term and long-term goals.",
        b: "Preparing for the future by establishing a home. Expecting to have or already have a high purchase rate of household and consumer items.",
        c: "You have a mortgage and childcare costs and maintain only small cash balances.",
        d: "You are in your peak earning years and your mortgage is under control. You both work and you may or may not have children that are growing up or have left home. You’re ready to start thinking about your retirement years.",
        e: "You own your home and have few financial burdens; you want to ensure you can afford a comfortable retirement.",
        f: "You rely on existing funds and investments to maintain your lifestyle in retirement. You may already be receiving a Government pension and/or Superannuation pension.",
      },
    },
    {
      sl_no: 2,
      question:
        "How secure is your current and future income from sources such as salary, pensions or other investments?",
      type: "slider",
      image: "no",
      options: {
        a: "Not secure.",
        b: "Somewhat secure.",
        c: "Fairly secure.",
        d: "Very secure",
        e: "",
        f: "",
      },
    },
    {
      sl_no: 3,
      question:
        "What would you estimate your total annual income (before tax) to be from these sources?",
      type: "slider",
      image: "no",
      options: {
        a: "Less than $30,000",
        b: "Between $30,000 and $80,000",
        c: "Between $80,000 and $180,000",
        d: "Between $180,000 and $250,000",
        e: "Greater than $250,000",
      },
    },
    {
      sl_no: 4,
      question:
        "What would you estimate your Net Worth to be, that is total assets excluding the family home less liabilities?",
      type: "slider",
      image: "no",
      options: {
        a: "Less than $250,000",
        b: "Between $250,000 and $500,000",
        c: "Between $500,000 and $750,000",
        d: "Between $750,000 and $1,000,000",
        e: "Greater than $1,000,000",
      },
    },
    {
      sl_no: 5,
      question:
        "If you have borrowed before to invest how would you rate your experience?",
      type: "radio",
      image: "no",
      options: {
        a: "It met my objectives for creating wealth.",
        b: "I was generally comfortable with this strategy",
        c: "The potential for tax benefits was not worth the risk.",
        d: "I experienced an investment loss due to borrowing.",
        e: "N/A – I have never borrowed to invest before.",
      },
    },
    {
      sl_no: 6,
      question: "How familiar are you with investment matters?",
      type: "radio",
      image: "no",
      options: {
        a: "Not familiar at all with investments and feel uncomfortable with the complexity.",
        b: "Not very familiar when it comes to investments.",
        c: "Somewhat familiar. I don’t fully understand investments, including the share market.",
        d: "Fairly familiar. I understand the various factors which influence investment performance",
        e: "Very familiar. I use research and other investment information to make investment decisions. I understand the various factors which influence investment performance.",
      },
    },
    {
      sl_no: 7,
      question:
        "How long would you invest the majority of your money before you think you would need access to it? (Assuming you already have plans in place to meet short term cashflow and/or emergencies.)",
      type: "slider",
      image: "no",
      options: {
        a: "In 2 years or less.",
        b: "Within 3 - 5 years.",
        c: "Within 6 - 10 years.",
        d: "Not for 10 + years.",
      },
    },
    {
      sl_no: 8,
      question:
        "In some instances, tax savings can be obtained from investments but this means taking on more risk. Which of the following statements best describes your goal for investing?",
      type: "radio",
      image: "no",
      options: {
        a: "Preferably guaranteed returns, before tax savings.",
        b: "Stable, reliable returns, minimal tax savings.",
        c: "Some variability in returns, some tax savings.",
        d: "Moderate variability in returns, reasonable tax savings.",
        e: "Unstable but potentially higher returns, maximise tax savings.",
      },
    },
    {
      sl_no: 9,
      question:
        "When considering your investments and making investment decisions, do you think about the impact of possible losses or possible gains?",
      type: "radio",
      image: "no",
      options: {
        a: "I am always concerned about possible losses.",
        b: "I am somewhat concerned about possible losses.",
        c: "I usually consider possible gains.",
        d: "I always consider possible gains.",
      },
    },
    {
      sl_no: 10,
      question:
        "Assume you had an initial investment portfolio worth $100,000. If, due to market conditions, your portfolio fell to $85,000 within a short period, say a month, would you: (If your portfolio has experienced a drop like this, choose the answer that corresponds to your actual behaviour.)",
      type: "radio",
      image: "no",
      options: {
        a: "Sell all of the investments? You do not intend to take risks.",
        b: "Sell a portion of your portfolio to cut your losses and reinvest into more secure investment assets?",
        c: "Hold the investment and sell nothing, expecting performance to improve?",
        d: "Invest more funds to lower your average investment price?",
      },
    },
    {
      sl_no: 11,
      question:
        "If the value of your investments then fell to $60,000 over the next 12 months, would you: (If your portfolio has experienced a drop like this, choose the answer that corresponds to your actual behaviour.)",
      type: "radio",
      image: "no",
      options: {
        a: "Sell all of the remaining investment?",
        b: "Sell a portion of the remaining investment?",
        c: "Hold your investments and sell nothing, expecting conditions to improve?",
        d: "Invest more funds. You can tolerate short term losses in expectation of future growth?",
      },
    },
    {
      sl_no: 12,
      question:
        "The table below shows the highest one year gain and highest one year loss on five different hypothetical investments of $100,000. Given the potential gain or loss in any one year, where would you invest your money?",
      type: "radio",
      image: "table.svg",
      options: {
        a: "Investment Portfolio A.",
        b: "Investment Portfolio B.",
        c: "Investment Portfolio C.",
        d: "Investment Portfolio D.",
        e: "Investment Portfolio E.",
      },
    },
    {
      sl_no: 13,
      question:
        "Which one of the following statements describes your feelings towards choosing an investment?",
      type: "radio",
      image: "no",
      options: {
        a: "I would prefer investments with little or no fluctuation in value and have a low degree of risk associated with them. I am willing to accept the lower return associated with these investments.",
        b: "I prefer to diversify with a mix of investments that have an emphasis on low risk. I am happy to have a small proportion of the portfolio invested in assets that have a higher degree of risk in order to achieve a slightly higher return.",
        c: "I prefer to have a spread of investments in a balanced portfolio.",
        d: "I prefer to diversify my investments with an emphasis on more investments that have higher returns, but still having a small amount of low risk investments.",
        e: "I would select investments that have a higher degree of investment price fluctuation so that I can earn higher long term returns.",
      },
    },
  ],
};

export const SCORES = [
  {
    questionNumber: 1,
    options: {
      a: 5,
      b: 3,
      c: 1,
      d: 5,
      e: 3,
      f: 2,
    },
  },
  {
    questionNumber: 2,
    options: {
      a: 1,
      b: 3,
      c: 5,
      d: 7,
    },
  },
  {
    questionNumber: 3,
    options: {
      a: 1,
      b: 3,
      c: 5,
      d: 7,
      e: 9,
    },
  },
  {
    questionNumber: 4,
    options: {
      a: 1,
      b: 3,
      c: 5,
      d: 7,
      e: 9,
    },
  },
  {
    questionNumber: 5,
    options: {
      a: 7,
      b: 5,
      c: 3,
      d: 1,
      e: 1,
    },
  },
  {
    questionNumber: 6,
    options: {
      a: 1,
      b: 2,
      c: 3,
      d: 5,
      e: 7,
    },
  },
  {
    questionNumber: 7,
    options: {
      a: 1,
      b: 3,
      c: 5,
      d: 7,
    },
  },
  {
    questionNumber: 8,
    options: {
      a: 1,
      b: 3,
      c: 5,
      d: 7,
      e: 9,
    },
  },
  {
    questionNumber: 9,
    options: {
      a: 1,
      b: 3,
      c: 5,
      d: 7,
    },
  },
  {
    questionNumber: 10,
    options: {
      a: 1,
      b: 3,
      c: 5,
      d: 7,
    },
  },
  {
    questionNumber: 11,
    options: {
      a: 1,
      b: 3,
      c: 5,
      d: 7,
    },
  },
  {
    questionNumber: 12,
    options: {
      a: 1,
      b: 3,
      c: 5,
      d: 7,
      e: 9,
    },
  },
  {
    questionNumber: 13,
    options: {
      a: 1,
      b: 3,
      c: 5,
      d: 7,
      e: 9,
    },
  },
];
