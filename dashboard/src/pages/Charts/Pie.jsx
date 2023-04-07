import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, DataLabel, Legend, Category, Tooltip, ColumnSeries } from '@syncfusion/ej2-react-charts'

import { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis } from '../../data/dummy'

import { pieChartData } from '../../data/dummy'
import { Header,  Pie as PieChart } from '../../components'

const Pie = () =>  (
  <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <Header category='Pie' title='project Cost breakdown' />
    <div className="w-full">
      <PieChart id='chart-pie' data={pieChartData} legend visible height='full' />
      <pie
      id='pie'
      height='420'

      >

      </pie>
    </div>
  </div>
)

export default Pie