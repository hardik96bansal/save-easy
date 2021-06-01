export const dateTimeData = [{
    name:'facebook',
  data: [{
    x: new Date('2018-02-12').getTime(),
    y: 78
  }, {
    x: new Date('2018-02-13').getTime(),
    y: 65
  }
  ,{
      x: new Date('2018-02-14').getTime(),
      y: 60
    },{
      x: new Date('2018-02-15').getTime(),
      y: 52
    },{
      x: new Date('2018-02-16').getTime(),
      y: 93
    },{
      x: new Date('2018-02-17').getTime(),
      y: 85
    },]
}];

export const dataTimeXaxis = {
    type: 'datetime'
  }  


  export const simpleData = [
    {
        name:'Facebook',
        data: [852.71, 845, 745, 781, 796, 685,985,521]
    },
    {
        name:'Amazon',
        data:[652.71, 945, 845, 881, 596, 685,785,821]
    },
    {
        name:'Microsoft',
        data:[752.71, 645, 545, 481, 996, 885,685,621]
    }
]

export const simpleDataXaxis = {
    categories:['22/04/2021', '23/04/2021', '24/04/2021','25/04/2021','26/04/2021','27/04/2021','28/04/2021','29/04/2021']
}

export interface plottingData {
    x:number,
    y:number
}

export const amazonUrl = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=AMZN&outputsize=compact&apikey=CEGMSFBO6Z4U1N09';
export const facebookUrl = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=FB&outputsize=compact&apikey=CEGMSFBO6Z4U1N09';
export const microsoftUrl = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=MSFT&outputsize=compact&apikey=CEGMSFBO6Z4U1N09';

export const options = {
    chart : {
        height: 450,
        width: '100%',
        type: 'datetime',
        background: '#f4f4f4',
        foreColor:'#333'
    },
    stroke: {
        curve: 'straight',
      },
      series: [
          {
              name:'Facebook',
              data:[]
          }
      ], 
    //   series: graphData, 
      xaxis: dataTimeXaxis
    // series : [
    //     {
    //         name:'Facebook',
    //         data:[852.71, 845, 745, 781, 796, 685,985,521]
    //     },
    //     {
    //         name:'Amazon',
    //         data:[652.71, 945, 845, 881, 596, 685,785,821]
    //     },
    //     {
    //         name:'Microsoft',
    //         data:[752.71, 645, 545, 481, 996, 885,685,621]
    //     }
    // ],
    // xaxis: {
    //     categories:['22/04/2021', '23/04/2021', '24/04/2021','25/04/2021','26/04/2021','27/04/2021','28/04/2021','29/04/2021']
    // }
}