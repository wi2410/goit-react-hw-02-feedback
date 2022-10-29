import React, { Component } from 'react';
import { Container } from './App.styled'

import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };

const options = {
  good: 0,
  neutral: 0,
  bad: 0,
}

export class App extends Component {
  state = {
    ...options,
    total: 0,
    positivePercentage: 0,
  }
  onLeaveFeedback = (e) => {
    const buttonName = e.target.name;
    this.setState(prevState => {
        return {
               [buttonName]: prevState[buttonName] + 1
           }
       })
       this.countTotalFeedback();
       this.countPositiveFeedbackPercentage()
   };

   countTotalFeedback() { 
      this.setState(prevState => {
           return { total: prevState.good + prevState.neutral + prevState.bad }
       });
   };

   countPositiveFeedbackPercentage() {
      this.setState(({good, neutral, bad}) => {
           return { positivePercentage: Math.round( good/(good + neutral + bad)*100) }
       });
   };    

render() {
      return (<Container>
          <Section title="Please leave feedback">
              <FeedbackOptions options={options} onLeaveFeedback={this.onLeaveFeedback}/>
          </Section>
          <Section title="Statistic">
              {this.state.total
                  ? <Statistics title="Statistic" good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.state.total} positivePercentage={this.state.positivePercentage}/>    
                  : <Notification message="There is no feedback"/>
              }
          </Section>    
      </Container>);
  }
};