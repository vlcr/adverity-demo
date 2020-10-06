import React, { useState } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Dropdown } from 'semantic-ui-react';

import styles from './Filters.module.scss';

const propTypes = {
  appliedFilters: PropTypes.shape({
    campaigns: PropTypes.arrayOf(PropTypes.string),
    datasources: PropTypes.arrayOf(PropTypes.string),
  }),
  applyFilters: PropTypes.func,
  campaigns: PropTypes.arrayOf(PropTypes.string).isRequired,
  datasources: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const defaultProps = {
  appliedFilters: {
    campaigns: [],
    datasources: [],
  }
};

const Filters = (props) => {
  const { appliedFilters, applyFilters, campaigns, datasources } = props;
  const [selectedCampaigns, setSelectedCampaigns] = useState([]);
  const [selectedDatasources, setSelectedDatasources] = useState([]);

  const isButtonDisabled = _.isEqual(appliedFilters.datasources, selectedDatasources)
    && _.isEqual(appliedFilters.campaigns, selectedCampaigns);

  return (
    <div className={styles.Filters}>
      <h2>Filter dimension values</h2>
      <label>Datasource:</label>
      <Dropdown
        fluid 
        multiple 
        onChange={(e, { value }) => setSelectedDatasources(value)}
        options={datasources.map((el, idx) => ({ key: idx, text: el, value: el }))}
        placeholder='All'
        selection 
        value={selectedDatasources}
      />
      <label>Campaign:</label>
      <Dropdown
        fluid 
        multiple 
        onChange={(e, { value }) => setSelectedCampaigns(value)}
        options={campaigns.map((el, idx) => ({ key: idx, text: el, value: el }))}
        placeholder='All'
        selection
        value={selectedCampaigns}
      />
      <br />
      <button 
        disabled={isButtonDisabled} 
        onClick={() => applyFilters({ campaigns: selectedCampaigns, datasources: selectedDatasources })}
      >
        Apply
      </button>
    </div>
  );
}

Filters.defaultProps = defaultProps;
Filters.propTypes = propTypes;

export default Filters;