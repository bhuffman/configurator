export default {
  configJson: {
    globalId: 1000,
    subModuleId: 1,
    undoIndex: 0,
    tree:{
      "1": {
        "injectProps": {
          "title": "drop drawer"
        },
        "type": "PermDrawer",
        "children": {
          "mainContent": {
            "injectProps": {},
            "type": "SimpleTabs",
            "sort": 1001,
            "children": {
              "tabThree": {
                "injectProps": {},
                "type": "SimpleForm",
                "sort": 1009
              },
              "tabTwo": {
                "injectProps": {
                  "style": {
                    "minHeight": "300px",
                    "height": "100%"
                  }
                },
                "type": "Paper",
                "sort": 1004,
                "children": {
                  "uuid-6570-1872": {
                    "injectProps": {
                      "custom": "Jimmy"
                    },
                    "type": "TileGrid",
                    "sort": 1005,
                    "children": {
                      "uuid-31fc-2820": {
                        "injectProps": {},
                        "type": "PlaceholderImages",
                        "sort": 1008
                      },
                      "uuid-a676-4c53": {
                        "injectProps": {},
                        "type": "HeroImage",
                        "sort": 1007
                      },
                      "uuid-7cb9-0805": {
                        "injectProps": {},
                        "type": "DemoCard",
                        "sort": 1006
                      }
                    }
                  }
                }
              },
              "tabOne": {
                "injectProps": {},
                "type": "MockTableData",
                "sort": 1002,
                "children": {
                  "uuid-9087-a5f4": {
                    "injectProps": {},
                    "type": "SimpleTable",
                    "sort": 1003
                  }
                }
              }
            }
          },
          "drawerContent": {
            "injectProps": {},
            "type": "SimpleList",
            "sort": 1000
          }
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

