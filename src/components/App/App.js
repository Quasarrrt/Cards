import api from '../../api/api';
import './app.css';
import { useEffect, useState} from 'react';
import Card from '../Card/Card.js';
import Input from "../Input/Input";
import Button from "../Button/Button";

function App() {
  const [searchQuery, setSearchQuery]= useState('Sunset');
  const [cards, setCards]=useState([]);
  const [isLoading, setIsLoading]= useState(false);


    useEffect(()=>{
    handleRequest();
  }, []);

const handleRequest= ()=>{
    if(searchQuery!==''){
        setIsLoading(true);
        api.search(searchQuery)
            .then(res=> {
                const cards= res.results.map(item=>{
                    return{
                        id: item.id,
                        src: item.urls.small,
                        title: item.user.name,
                        subtitle: item.description,
                    }
                })
                setCards(cards);
            })
            .finally(()=> setIsLoading(false))
    }
}

const handleInputChange=(e)=>{
      setSearchQuery(e.target.value)
}

const handleFormSubmit=(e)=>{
      e.preventDefault();
      handleRequest();
}

  return (
    <div className="app">
        <div className="app__content">
            <form className="app__search" onSubmit={handleFormSubmit}>
                <Input
                placeholder={'Search free small photos'}
                handleChange={handleInputChange}
                />
                <Button text={'Search'}/>
            </form>
            {isLoading
                ? <p>Loading...</p>
                : (<div className="app__cards">
                    {cards.map(item => <Card key={item.id} {...item}/>)}
                </div>)}
        </div>
    </div>
  );
}

export default App;
