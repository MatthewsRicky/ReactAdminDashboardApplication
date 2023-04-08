import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Legend, Inject } 
from '@syncfusion/ej2-react-charts'
import { Header } from '../../components'

import { financialChartData, FinancialPrimaryXAxis, FinancialPrimaryYAxis } from '../../data/dummy'

const Financial = () => {
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category='Chart' title='Financial Chart' />
      <div className='w-full'>
        <ChartComponent 
          id='finance'
          height='420px'
          primaryXAxis={FinancialPrimaryXAxis}
          primaryYAxis={FinancialPrimaryYAxis}
          tooltip={{ enable : true }}
        />
      </div>
    </div>
  )

}

export default Financial