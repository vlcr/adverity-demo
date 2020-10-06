import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Chart from './../Chart/Chart';
import Filters from './../Filters/Filters';
import { transformData } from '../../utils/ChartDataTransformer/ChartDataTransformer';

import styles from './FilteredChart.module.scss';

const propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      Campaign: PropTypes.string,
      Clicks: PropTypes.string,
      Date: PropTypes.string,
      Datasource: PropTypes.string,
      Impressions: PropTypes.string,
    }),
  ),
};

const FilteredChart = (props) => {
  const { data } = props;
  const [selectedFilters, setSelectedFilters] = useState({ campaigns: [], datasources: [] });

  const uniqueCampaigns = [...new Set(data.map(el => el.Campaign))]
  const uniqueDatasources = [...new Set(data.map(el => el.Datasource))];

  const chartData = transformData(data, selectedFilters);

  return (
    <div className={styles.FilteredChart}>
      <Filters 
        appliedFilters={selectedFilters}
        applyFilters={setSelectedFilters}
        campaigns={uniqueCampaigns} 
        datasources={uniqueDatasources} 
      />
      <Chart data={chartData} selectedFilters={selectedFilters} />
    </div>
  );
};

FilteredChart.propTypes = propTypes;

export default FilteredChart;