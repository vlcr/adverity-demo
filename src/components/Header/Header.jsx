import React from 'react';
import styles from './Header.module.scss';

const Header = () => (
  <header className={styles.Header}>
    <h1> Adverity Advertising Data ETL-V Challange</h1>
    <div className={styles.description}>
      <ul>
        <li>Select zero to N <i>Datasources</i></li>
        <li>Select zero to N <i>Compaigns</i></li>
      </ul>
      <div className={styles.detail}>(where zero means "All")</div>
      <div className={styles.subheader}>Hitting "Apply", filters the chart to show a timeseries for both <i>Clicks</i> and <i>Impressions</i> for given <i>Datasources</i> and <i>Campaigns</i> - logical AND</div> 
    </div>
  </header>
);

export default Header;