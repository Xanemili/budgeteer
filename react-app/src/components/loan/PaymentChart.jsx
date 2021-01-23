import React from 'react'

import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';


const CustomTooltip = ({active, payload, label}) => {
  if (active && payload) {
    return (
      <div className='custom-tooltip'>
        <p className='label'>{`${payload[0].dataKey} : ${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(payload[0].value)}`}</p>
        <p className='label'>{`${payload[1].dataKey} : ${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(payload[1].value)}`}</p>
        <p className='label'>{`${payload[2].dataKey} : ${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(payload[2].value)}`}</p>
      </div>
    )
  }
  return null;
}

const PaymentBreakdown = ({ data }) => {

    return(
      <>
      {console.log(data)}
    <ResponsiveContainer width={'100%'} height={'100%'}>
      <AreaChart
        data={data}
        margin={{
          top: 10, right: 10, left: 10, bottom: 10,
        }}
        // implement mouseover update of state here
        >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis type='number' domain={['auto', 'dataMax + 10000']} />
        <Tooltip content={<CustomTooltip />} />
        <Area type="monotone" dataKey="balance" stackId="1" stroke="#8884d8" fill="#8884d8" />
        <Area type="monotone" dataKey="principal" stackId="2" stroke="#82ca9d" fill="#82ca9d" />
        <Area type="monotone" dataKey="interest" stackId="2" stroke="#ffc658" fill="#ffc658" />
      </AreaChart>
    </ResponsiveContainer>
    </>
  )
}

export default PaymentBreakdown
