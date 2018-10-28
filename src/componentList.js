
// Layout
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Centered from 'components/layout/Centered';
import DividerWrapper from 'components/layout/DividerWrapper';
import FlexColumn from 'components/layout/FlexColumn';
import FadeWrapper from 'components/layout/FadeWrapper';
import FlexRow from 'components/layout/FlexRow';
import FlexLayout1 from 'components/layout/FlexLayout1';
import Header from 'components/layout/Header';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import OverflowScrollY from 'components/layout/OverflowScrollY';
import Paper from '@material-ui/core/Paper';
import PermDrawer from 'components/layout/PermDrawer';
import SimpleTabs from 'components/layout/SimpleTabs';
import SpaceFiller from 'components/layout/SpaceFiller';
import Stepper from 'components/layout/Stepper';
import TileGrid from 'components/layout/TileGrid';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

//Features
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Drawer from '@material-ui/core/Drawer';
import DemoCard from 'components/features/DemoCard';
import HeroImage from 'components/features/HeroImage';
import IconButton from '@material-ui/core/IconButton';
import Leaflet from 'components/features/Leaflet';
import LoremIpsum from 'components/features/LoremIpsum';
import MenuIcon from '@material-ui/icons/Menu';
import PlaceholderImages from 'components/features/PlaceholderImages';
import SimpleChart from 'components/features/SimpleChart';
import SimpleForm from 'components/features/SimpleForm';
import SimpleList from 'components/features/SimpleList';
import SimpleTable from 'components/features/SimpleTable';
import Test from 'components/features/Test';

//Data
import MockChartData from 'components/data/MockChartData';
import MockTableData from 'components/data/MockTableData';

const Layout = {
  Card,
  CardContent,
  Centered,
  DividerWrapper,
  FadeWrapper,
  FlexColumn,
  FlexRow,
  FlexLayout1,
  Header,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  OverflowScrollY,
  Paper,
  PermDrawer,
  SimpleTabs,
  SpaceFiller,
  Stepper,
  TileGrid,
  Typography,
  Toolbar,
}

const Features = {
  AppBar,
  Avatar,
  Drawer,
  DemoCard,
  HeroImage,
  IconButton,
  Leaflet,
  LoremIpsum,
  MenuIcon,
  PlaceholderImages,
  SimpleChart,
  SimpleForm,
  SimpleList,
  SimpleTable,
  Test,
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