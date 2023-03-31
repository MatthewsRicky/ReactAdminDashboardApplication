import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs'
import { GoPimitiveDot} from 'react-icons/go'
import { Stacked, Pie, Button, SparkLine } from "../components"
import { earningData, SparklineAreaData, ecomPieChartData } from '../data/dummy'
import { useStateContext } from '../contexts/ContextProvider'

const Ecommerce = () => {
  return (
    <div className='mt-12'>
      <div className="flex flex-wrap lg:flew-nowrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full md:w-80 lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className='font-bold text-gray-400'>Earnings</p>
              <p className='text-2xl'>$65,448.78k</p>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <Button 
            color='white'
            bgColor='blue'
            text='Download'
            borderRadius='10px'
            size='md'
          />
        </div>
      </div>
    </div>
  )
}

export default Ecommerce