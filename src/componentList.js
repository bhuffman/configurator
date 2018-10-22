
// Layout
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import DividerWrapper from 'components/layout/DividerWrapper';
import FlexColumn from 'components/layout/FlexColumn';
import Centered from 'components/layout/Centered';
import FlexRow from 'components/layout/FlexRow';
import GridContainer from 'components/layout/grid/GridContainer';
import GridItem from 'components/layout/grid/GridItem';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Paper from '@material-ui/core/Paper';
import PermDrawer from 'components/layout/PermDrawer';
import SimpleTabs from 'components/layout/SimpleTabs';
import OverflowScrollY from 'components/layout/OverflowScrollY';
import SpaceFiller from 'components/layout/SpaceFiller';
import TileGrid from 'components/layout/TileGrid';
import Typography from '@material-ui/core/Typography';

//Features
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import Leaflet from 'components/features/Leaflet';
import MenuIcon from '@material-ui/icons/Menu';
import SimpleChart from 'components/features/SimpleChart';
import SimpleTable from 'components/features/SimpleTable';
import Test from 'components/features/Test';
import Toolbar from '@material-ui/core/Toolbar';

//Data
import MockChartData from 'components/data/MockChartData';
import MockTableData from 'components/data/MockTableData';

const Layout = {
  Card,
  CardContent,
  DividerWrapper,
  FlexColumn,
  FlexRow,
  Centered,
  GridContainer,
  GridItem,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Paper,
  OverflowScrollY,
  PermDrawer,
  SimpleTabs,
  SpaceFiller,
  TileGrid,
  Typography,
}

const Features = {
  AppBar,
  Avatar,
  Drawer,
  IconButton,
  Leaflet,
  MenuIcon,
  SimpleChart,
  SimpleTable,
  Test,
  Toolbar,
}

const Data = {
  MockChartData,
  MockTableData,
}

export default {
  Data: Data,
  Feature: Features,
  Layout: Layout,
};