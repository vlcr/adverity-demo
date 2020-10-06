import _ from 'lodash';

const campaignsFilter = campaigns => campaignDay => campaigns.length
  ? _.includes(campaigns, campaignDay.Campaign)
  : true;

const datasourcesFilter = datasources => campaignDay => datasources.length
  ? _.includes(datasources, campaignDay.Datasource)
  : true;

const dataMapper = (campaigns, date) => ({
  date: date,
  clicks: _.sumBy(campaigns, campaign => Number.parseInt(campaign.Clicks) || 0),    
  impressions: _.sumBy(campaigns, campaign => Number.parseInt(campaign.Impressions) || 0),
});

const transformData = (data, selectedFilters) => _.chain(data)
  .filter(campaignsFilter(selectedFilters.campaigns))
  .filter(datasourcesFilter(selectedFilters.datasources))
  .groupBy(el => el.Date)
  .map(dataMapper)
  .value();

export {
  campaignsFilter,
  datasourcesFilter,
  dataMapper,
  transformData,
};