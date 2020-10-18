import React, { Component } from 'react';
import {Pie} from 'react-chartjs-2';
import axios from 'axios';

export default class PieChartComponent extends Component
{
   constructor(props) {
      super(props);
      this.state = {
        Data: {}
      }
    }
       
    componentDidMount() {
      axios.get(`http://localhost:3001/budget`)
        .then(res => {
          const myBudget = res.data;
          let title = [];
          let budget = [];
          
          for (var i = 0; i < res.data.myBudget.length; i++) {
            title.push(myBudget.myBudget[i].title);
                budget.push(myBudget.myBudget[i].budget);
          }
          this.setState({ 
            Data: {
              labels: title,
              datasets:[
                 {
                    label:'Budget',
                    data: budget ,
                    backgroundColor:[
                        '#ffcd56',
                        '#ff6384',
                        '#36a2eb',
                        '#fd6b19',
                        'black',
                        'green',
                        'red'
                  ]
                 }
              ]
           }
           });
        })
    }
 render()
   {
      return(
        <div>
        <h1>Chart</h1>
        <Pie
          data={this.state.Data}
          options={{maintainAspectRatio: false}}/>
     </div>
      )
   }
}


