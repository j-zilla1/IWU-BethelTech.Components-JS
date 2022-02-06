import React from 'react';
import ReactDOM from 'react-dom';

const App = props => {
   const favoriteCars = [
    {make: 'Honda CR-V'},
    {make: 'Toyota Highlander'},
    {make: 'Ford F-150'},
    {make:'BMW X 3'},
    {make:'Subaru Crosstrek'}
]
   return <List favoriteCars = {favoriteCars}/>;

};
const List = props =>{
    const carsList = props.favoriteCars.map((favoriteCars, index)=>(
        <li key={index}>{favoriteCars.make}</li>
    ));
    return <ul>{carsList}</ul>
};
ReactDOM.render(<App/>,document.getElementById('root'));