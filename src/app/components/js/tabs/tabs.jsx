import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import EnhancedTable from '../dashboard/table';
import Box from '@material-ui/core/Box';
import Dashboard from '../dashboard/dashboard';
import UnApprovedUsers from '../dashboard/unApprovedUsers';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={5}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function tabProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    // width: 1000,
  },
}));

export default function TabsNav() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Unapproved User" {...tabProps(0)} />
          <Tab label="Temp Card user" {...tabProps(1)} />
          <Tab label="Today" {...tabProps(2)} />
          <Tab label="This Month" {...tabProps(3)} />
          <Tab label="Ongoing Visits" {...tabProps(4)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <UnApprovedUsers />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        List of top 10 Employees Using Temporary Access for Facility
          <Dashboard />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
        No of Visitors to Facility today
          <Dashboard />
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
        No of Visitors to Facility this month
        <EnhancedTable />
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
        List of Ongoing Visits for Facility
        <Dashboard />
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}