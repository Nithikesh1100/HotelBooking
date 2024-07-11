import React from 'react'
import '../styles/Home.css'
import HotelCard from './HotelCard'

const Home = () => {

  const featuredhotels = [
    {
      "id": 1,
      "hotelname": "The Grand Palace",
      "hotelchainname": "Luxury Stay",
      "city": "Hyderabad",
      "state": "Telangana",
      "address": "123 Palace Road, Hyderabad, Telangana",
      "rooms": 150,
      "photos": [
          "http://pix4.agoda.net/hotelimages/6/6/6_1112201742005261861.jpg?s=312x",
          "http://pix2.agoda.net/hotelimages/6/6/6_1201211018006071850.jpg?s=312x",
          "http://pix5.agoda.net/hotelimages/6/6/6_0905131455001101926.jpg?s=312x",
          "http://pix1.agoda.net/hotelimages/6/6/6_0905131455001101927.jpg?s=312x",
      ],
      "description": "A luxurious palace hotel with modern amenities.",
      "facilities": ["pool", "wifi", "spa", "pet-friendly", "gym"],
      "price": 3500,
      "rating": 4.5,
      "totalreviews": 320,
      "discount": true
  },
  {
      "id": 2,
      "hotelname": "Seaside Resort",
      "hotelchainname": "Oceanic Retreats",
      "city": "Mumbai",
      "state": "Maharashtra",
      "address": "456 Beach Avenue, Mumbai, Maharashtra",
      "rooms": 200,
      "photos": [
          "http://pix2.agoda.net/hotelimages/1/-1/0ff4876f93688b8adcbed487b5a2175d.jpg?s=312x",
          "http://pix1.agoda.net/hotelimages/1/-1/d821f80943f96ebda33f5a019fa94df4.jpg?s=312x",
          "http://pix4.agoda.net/hotelimages/1/-1/59241704e99027895aa6293d734c9fb1.jpg?s=312x",
          "http://pix5.agoda.net/hotelimages/1/-1/fce5d70fac02fcb7aa25f31dd25850a8.jpg?s=312x",
      ],
      "description": "A serene resort by the sea with all the comforts.",
      "facilities": ["pool", "wifi", "gym"],
      "price": 4000,
      "rating": 4.7,
      "totalreviews": 450,
      "discount": true
  },
  {
      "id": 3,
      "hotelname": "City Central",
      "hotelchainname": "Urban Hotels",
      "city": "Bangalore",
      "state": "Karnataka",
      "address": "789 Main Street, Bangalore, Karnataka",
      "rooms": 180,
      "photos": [
          "http://pix4.agoda.net/hotelimages/6/6/6_1112201742005261861.jpg?s=312x",
          "http://pix2.agoda.net/hotelimages/6/6/6_1201211018006071850.jpg?s=312x",
          "http://pix5.agoda.net/hotelimages/6/6/6_0905131455001101926.jpg?s=312x",
          "http://pix1.agoda.net/hotelimages/6/6/6_0905131455001101927.jpg?s=312x",
      ],
      "description": "A central hotel in the heart of the city.",
      "facilities": ["wifi", "gym", "spa"],
      "price": 1500,
      "rating": 4.3,
      "totalreviews": 290,
      "discount": false
  }
]
  return (
    <div>

      <section className='hero'>
        <h1>Welcome to our hotel booking site!</h1>

        <p>Discover the best hotels to stay...</p>
      </section>

      <h1 style={{textAlign:'center'}}> Our Featured Hotels </h1>
      <section className='featuredhotels'>
        
        {featuredhotels.map(hotel => (
          <HotelCard key={hotel.id} id={hotel.id} photo={hotel.photos[0]} hotelname={hotel.hotelname} hotelchainname={hotel.hotelchainname} city={hotel.city} address={hotel.address} totalreviews={hotel.totalreviews} />
        ))}
      </section>

    </div>
  )
}

export default Home