export default {
  configJson: {
    globalId: 1000,
    subModuleId: 1,
    undoIndex: 0,
    tree: {
      1:{
        type: 'FlexColumn',
        children: {
          2: {type: 'Paper', sort: 3},
          3: {type: 'DividerWrapper', sort: 2},
        }
      }
    },
    subModules: {
    },
    history: []
  },
  editor: {
    customProps: {
      AppBar: { position: 'relative' },
      AssignmentIcon: { stub: true },
      BarChartIcon: { stub: true },
      ChevronLeftIcon: { stub: true },
      DashboardIcon: { stub: true },
      DividerWrapper: { stub: true },
      GridItem: { stub: true },
      LayersIcon: { stub: true },
      Leaflet: { stub: true },
      LoremIpsum: { stub: true },
      MenuIcon: { stub: true },
      NotificationsIcon: { stub: true },
      Paper: { style: { 'minHeight': '300px', height: '100%' } },
      PeopleIcon: { stub: true },
      PermDrawer: { title: 'drop drawer', slots: ['drawerContent', 'mainContent'] },
      ShoppingCartIcon: { stub: true },
      SimpleChart: { chartType: 'Line' },
      SimpleTabs: { slots: ['tabOne', 'tabTwo', 'tabThree'] },
      FlexLayout1: { slots: ['leftSidebar', 'rightSidebar', 'mainContent', 'nav', 'footer'] },
      Stepper: { slots: ['step1', 'step2', 'step3'] },
      Test: { custom: 'Jimmy', open: 'false', stub: true },
      TileGrid: { custom: 'Jimmy' },
      Header: { variant: 'h4', component: 'h2'},
    },
    preview: false
  }
};

