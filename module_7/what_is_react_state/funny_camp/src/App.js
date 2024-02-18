import './App.css';
import { useState } from 'react';
import Title from './Component/Title'
import CampsiteList from './Component/CampsiteList';

function App() {
  const [campsiteList, setCampsiteList] = useState([
    {id: 1, name: 'Campsite 1', status: 'Vacant', url: 'https://images.unsplash.com/photo-1598417136294-7c1c4c94931f'},
    {id: 2, name: 'Campsite 2', status: 'Vacant', url: 'https://images.unsplash.com/photo-1550957886-ac45931e5779' },
    {id: 3, name: 'Campsite 3', status: 'Vacant', url: 'https://images.unsplash.com/photo-1636569999480-7eed231a7633'},
    {id: 4, name: 'Campsite 4', status: 'Vacant', url: 'https://images.unsplash.com/photo-1488790881751-9068aa742b9b'}
  ])

  return (
    <div className="App">
      <Title campsiteList={campsiteList} />
      <CampsiteList campsiteList={campsiteList} setCampsiteList={setCampsiteList}/>
    </div>
  );
}

export default App;
