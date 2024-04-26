import { useState, useEffect } from 'react';
import Places from './Places.jsx';

const places = localStorage.getItem('places');

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false)
  const [availablePlaces, setAvailablePlaces] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true)

      try {
        const response = await fetch('http://localhost:3000/places')

        // if (response == !ok) {
        //   throw error('')
        // }
        const resData = await response.json()
        setAvailablePlaces(resData.places)
      } catch (error) {

      }

      setIsFetching(false)
    }
    fetchData();
    // fetch('http://localhost:3000/places')
    //   .then((response) => {
    //     return response.json()
    //   }).then((response) => {
    //     setAvailablePlaces(response.places);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   })
  }, [])
  console.log(availablePlaces);

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Data is loading"
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
