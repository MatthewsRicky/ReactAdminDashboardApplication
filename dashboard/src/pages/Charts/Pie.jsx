import React from 'react'
import { SeriesCollectionDirective, SeriesDirective, Inject, DataLabel, Legend, Category, Tooltip } from '@syncfusion/ej2-react-charts'
import { FiPieChart } from 'react-icons/fi'



import {  ecomPieChartData } from '../../data/dummy'
import { Header,  Pie as PieChart } from '../../components'

const Pie = () =>  (
  <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <Header category='Pie' title='Project Cost Breakdown' />
    <div className="w-full">

      <PieChart 
        id='chart-pie' 
        data={ecomPieChartData} 
        legend   
        visible height='full'
        chartArea={{ border: { width: 0 }}}
        tooltip={{ enable : true }} />
      <Inject services={[DataLabel, Legend, Category,  Tooltip]} />
      <SeriesCollectionDirective>
          {ecomPieChartData.map((item, index) => 
          <SeriesDirective key={index} {...item} />
          )}
        </SeriesCollectionDirective>
    </div>
  </div>
)

export default Pie