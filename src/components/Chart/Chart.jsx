import React from 'react';
import PropTypes from 'prop-types';
import { LineChart, Line, Legend, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

import styles from './Chart.module.scss';

const propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.date,
      clicks: PropTypes.number,
      impressions: PropTypes.number,
    }),
  ),
  selectedFilters: PropTypes.shape({
    campaigns: PropTypes.arrayOf(PropTypes.string),
    datasources: PropTypes.arrayOf(PropTypes.string),
  }),
};

const Chart = ({ data, selectedFilters: { campaigns, datasources} }) => (
  <div className={styles.Chart}>
    <h2>
      Datasource: { datasources.length === 0 ? 'All' : datasources.join(', ')};
      Campaigns: { campaigns.length === 0 ? 'All' : campaigns.join(', ')};
    </h2>
    <LineChart width={1200} height={600} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
      <Line yAxisId="left" type="monotone" dataKey="impressions" stroke="#3DADF2" />
      <Line yAxisId="right" type="monotone" dataKey="clicks" stroke="#03178C" />
      <CartesianGrid />
      <XAxis dataKey="date" />
      <YAxis yAxisId="left" label={{ value: 'Impressions', angle: -90, position: 'insideLeft' }} width={100} />
      <YAxis yAxisId="right" label={{ value: 'Clicks', angle: 90, position: 'insideRight' }} width={80} orientation="right" />
      <Tooltip />
      <Legend />
    </LineChart>
  </div>
)

Chart.propTypes = propTypes;

export default Chart;