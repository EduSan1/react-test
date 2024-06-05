import './index.css';
import Card, { CardProps } from './components/card';
import { useState } from 'react';

function App() {

  const [cards, setCards] = useState([
    {
        "id": 1,
        "title": "Finish Homework",
        "description": "Complete the math and science homework assignments.",
        "date": new Date("2024-05-18T10:00:00Z"),
        "done": false
    },
    {
        "id": 2,
        "title": "Grocery Shopping",
        "description": "Buy vegetables, fruits, and dairy products.",
        "date": new Date("2024-05-19T15:30:00Z"),
        "done": true
    },
    {
        "id": 3,
        "title": "Meeting with Bob",
        "description": "Discuss the new project requirements and timelines.",
        "date": new Date("2024-05-20T09:00:00Z"),
        "done": false
    },
    {
        "id": 4,
        "title": "Gym Session",
        "description": "Attend the weekly training session at the gym.",
        "date": new Date("2024-05-21T18:00:00Z"),
        "done": true
    },
    {
        "id": 5,
        "title": "Dentist Appointment",
        "description": "Routine dental check-up and cleaning.",
        "date": new Date("2024-05-22T08:00:00Z"),
        "done": false
    }
])

const changeState = (id:number) => {
  const itemIndex =  cards.findIndex((card) => card.id === id)

  if (itemIndex >= 0)
    setCards(prevState => {
      const updatedData = [...prevState];
      updatedData[itemIndex] = { ...updatedData[itemIndex], done: !updatedData[itemIndex].done };
      return updatedData;
  })
  else
    console.log("item não encontrado");
}

  return (
        <div className="background">
            <div className='main-container'>
              <div className='side-bar'></div>
              <div className='body'>
                <div className='cards-container'>
                  {cards.map((card) => (
                      <Card cardInfo={card} onClick={changeState}/>
                  ))}
                </div>
              </div>
            </div>
    </div>
  );
}

export default App;
