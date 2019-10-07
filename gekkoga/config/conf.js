const randomExt = require('random-ext');

const config = {
  stratName: 'MACD',
  gekkoConfig: {
    watch: {
      exchange: 'kraken',
      currency: 'USD',
      asset: 'ETH'
    },

    //daterange: 'scan',

    daterange: {
      from: '2019-08-01 00:01',
      to: '2019-09-25 00:00'
    },

    simulationBalance: {
      'asset': 1,
      'currency': 0
    },

    slippage: 0.05,
    feeTaker: 0.25,
    feeMaker: 0.15,
    feeUsing: 'taker', // maker || taker

  },
  apiUrl: 'http://localhost:3000',

  // Population size, better reduce this for larger data
  populationAmt: 10,

  // How many completely new units will be added to the population (populationAmt * variation must be a whole number!!)
  variation: 5,

  // How many components maximum to mutate at once
  mutateElements: 3,

  // How many parallel queries to run at once
  parallelqueries: 15,

  // profit || score
  // score = ideas? feedback?
  // profit = recommended!
  mainObjective: 'profit',

  // optionally recieve and archive new all time high every new all time high
  notifications: {
    email: {
      enabled: false,
      receiver: 'destination@some.com',
      senderservice: 'gmail',
      sender: 'origin@gmail.com',
      senderpass: 'password',
    },
  },

  candleValues: [15],
  getProperties: () => ({

    historySize: randomExt.integer(10, 10),

    short: randomExt.integer(200,1),
    long: randomExt.integer(200,1),
    signal: randomExt.integer(100,1),

    thresholds: {
      up: randomExt.float(0,0).toFixed(0),
      down: randomExt.float(0,0).toFixed(0),
      persistence: randomExt.integer(10,0),
    },

    candleSize: randomExt.pick(config.candleValues)
  })
};

module.exports = config;
