export default {
  configJson: {
    globalId: 1000,
    subModuleId: 1,
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
      AssignmentIcon: {stub: true},
      BarChartIcon: {stub: true},
      ChevronLeftIcon: {stub: true},
      DashboardIcon: {stub: true},
      DividerWrapper: {stub: true},
      GridItem: {stub: true},
      LayersIcon: {stub: true},
      Leaflet: {stub: true},
      MenuIcon: {stub: true},
      NotificationsIcon: {stub: true},
      Paper: {style: {'minHeight': '100px', height: '100%'}},
      PeopleIcon: {stub: true},
      PermDrawer: {title: 'drop drawer', slots: ['drawerContent', 'mainContent']},
      ShoppingCartIcon: {stub: true},
      SimpleChart: {chartType: 'Line'},
      SimpleTabs: { slots: ['tabOne','tabTwo', 'tabThree']},
      FlexLayout1: { slots: ['leftSidebar','rightSidebar', 'mainContent', 'nav', 'footer']},
      Test: {custom: 'Jimmy', open: 'false', stub: true},
      TileGrid: {custom: 'Jimmy'},
      Typography: {stub: true},
    },
    preview: false
  }
};

