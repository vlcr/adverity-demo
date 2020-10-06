import _ from 'lodash';
import { campaignsFilter, datasourcesFilter, dataMapper } from './ChartDataTransformer';

describe('ChartDataTransformer', () => {
  describe('campaignsFilter', () => {
    let input;

    beforeEach(() => {
      input = [
        { Date: '01.01.2019', Datasource: 'Facebook Ads', Campaign: 'Campaign 1', Clicks: '274', Impressions: '1979' },
        { Date: '01.01.2019', Datasource: 'Facebook Ads', Campaign: 'Campaign 2', Clicks: '10245', Impressions: '764627'},
        { Date: '01.01.2019', Datasource: 'Google Adwords', Campaign: 'Campaign 3', Clicks: '7', 'Impressions': '444' },
        { Date: '01.01.2019', Datasource: 'Google Adwords', Campaign: 'Campaign 4', Clicks: '16', 'Impressions': '12535' },
      ]
    });

    it('should filter out given campaigns', () => {
      const selectedCampaigns = [];
      const correctOutput = [];

      const result = campaignsFilter(input, selectedCampaigns);
    });

    it('should not filter out any campaigns if no campains where selected', () => {
      const selectedCampaigns = [];
      const correctOutput = [];

      const result = campaignsFilter(selectedCampaigns)(input);
    });
  });

  describe('datasourcesFilter', () => {
    let input;

    beforeEach(() => {
      input = [
        { Date: '01.01.2019', Datasource: 'Facebook Ads', Campaign: 'Campaign 1', Clicks: '274', Impressions: '1979' },
        { Date: '01.01.2019', Datasource: 'Facebook Ads', Campaign: 'Campaign 2', Clicks: '10245', Impressions: '764627'},
        { Date: '01.01.2019', Datasource: 'Google Adwords', Campaign: 'Campaign 3', Clicks: '7', 'Impressions': '444' },
        { Date: '01.01.2019', Datasource: 'Google Adwords', Campaign: 'Campaign 4', Clicks: '16', 'Impressions': '12535' },
      ]
    });

    it('should keep given datasources', () => {
      const selectedDatasources = ['Facebook Ads'];

      const result = datasourcesFilter(selectedDatasources)(input[0]);
      expect(result).toBeTruthy();

      const result2 = _.filter(input, datasourcesFilter(selectedDatasources));
      expect(result2).toHaveLength(2);
    });

    it('should not filter out any datasources if no datasources where selected', () => {
      const selectedDatasources = [];

      const result = datasourcesFilter(selectedDatasources)(input[0]);
      expect(result).toBeTruthy();
      
      const result2 = _.filter(input, datasourcesFilter(selectedDatasources));
      expect(result2).toHaveLength(input.length);
    });
  });

  describe('dataMapper', () => {
    let input;
    
    beforeEach(() => {
      input = {
        '01.01.2019': [
          {
            Date: '01.01.2019',
            Datasource: 'Facebook Ads',
            Campaign: 'Like Ads',
            Clicks: '274',
            Impressions: '1979'
          },
          {
            Date: '01.01.2019',
            Datasource: 'Facebook Ads',
            Campaign: 'Offer Campaigns - Conversions',
            Clicks: '10245',
            Impressions: '764627'
          },
          {
            Date: '01.01.2019',
            Datasource: 'Google Adwords',
            Campaign: 'B2B - Leads',
            Clicks: '7',
            Impressions: '444'
          }
        ]
      };
    });
    
    it('should transform data to proper format', () => {
      const date = '01.01.2019';
      
      const result = dataMapper(input[date], date);

      expect(result).toEqual({ 
        date: '01.01.2019', 
        clicks: 10526, 
        impressions: 767050 
      });
    });
  });
});