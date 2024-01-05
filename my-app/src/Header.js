import { useEffect, useState } from 'react';

// import { Container } from './styles';

function Header() {
    let url = "http://localhost:3300/todos";

   const[data , setdata] = useState([]);
   useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3300/todos');
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        console.log(result);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      } 
    };

    fetchData();
  }, []);

  return(
    <div>
        <h1>sandip bhande</h1>
    </div>
  );
}

export default Header;