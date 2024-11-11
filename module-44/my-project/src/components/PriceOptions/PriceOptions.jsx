import React from 'react'
import PriceOption from '../PriceOption/PriceOption'

const PriceOptions = () => {
    const priceOptions  = [
        {
          "id": 1,
          "name": "Basic",
          "price": 30,
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "Free water refill",
            "Access during staffed hours only",
            "1 free body assessment per year"
          ]
        },
        {
          "id": 2,
          "name": "Standard",
          "price": 50,
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "Group fitness classes",
            "2 guest passes per month",
            "Free water refill",
            "24/7 gym access",
            "2 free body assessments per year",
            "Discount on gym merchandise (5%)"
          ]
        },
        {
          "id": 3,
          "name": "Premium",
          "price": 70,
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "Unlimited group fitness classes",
            "4 guest passes per month",
            "1 personal training session per month",
            "Free water refill",
            "24/7 gym access",
            "Access to sauna and steam room",
            "Monthly nutrition counseling",
            "Discount on gym merchandise (10%)"
          ]
        },
        {
          "id": 4,
          "name": "VIP",
          "price": 100,
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "Unlimited group fitness classes",
            "Unlimited guest passes",
            "Weekly personal training sessions",
            "Free water refill and towels",
            "24/7 gym access",
            "Access to sauna, steam room, and hot tub",
            "Bi-weekly nutrition counseling",
            "Priority class booking",
            "Exclusive VIP lounge access",
            "Discount on gym merchandise (15%)",
            "Annual health and wellness check"
          ]
        }
      ]
      
  return (
    <div className='m-12'>
        <h3 className='text-5xl'>Best prices in town</h3>
        <div className='grid grid-cols-3 gap-5'>
        {
            priceOptions.map((option)=><PriceOption key={option.id} option={option}></PriceOption>)
        }
        </div>
    </div>
  )
}

export default PriceOptions
