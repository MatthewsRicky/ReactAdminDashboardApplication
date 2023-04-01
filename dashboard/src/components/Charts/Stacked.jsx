import React from 'react'
import { ChartComponent, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip, SeriesCollectionDirective } from '@syncfusion/ej2-react-charts'

import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy'
const Stacked = ({ width, height }) => {
  return (
    <ChartComponent 
      width={width}
      height={height}
      id="charts"
      primaryXAXIS={stackedPrimaryXAxis}
      primaryYAXIS={stackedPrimaryYAxis}
      chartArea={{ border: { width : 0}}}
      tooltip={{ enable: true }}
      legendSettings={{ backgrgound: 'white'}}
    >
      <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item, index) => <SeriesDirective 
        key={index} {...item} />)}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default Stacked