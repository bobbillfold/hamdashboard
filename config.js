const topBarCenterText = `CRATER LAKE`;

// Grid layout
var layout_cols = 3;
var layout_rows = 3;

// Menu items
// Structure is as follows HTML Color code, Option, target URL, scaling 1=Original Size, side (optional, nothing is Left, "R" is Right)
// The values are [color code, menu text, target link, scale factor, side],
// add new lines following the structure for extra menu options. The comma at the end is important!
const aURL = [
  ["add10d", "BACK", "#", "1"],
  ["add10d", "BACK", "#", "1", "R"],
  ["ff9100", "Refresh", "#", "1"],
  ["0dd1a7", "Help", "#", "1"],
  ["2196F3", "CLUBLOG", "https://clublog.org/livestream/VA3HDL", "1.7"],
  [
    "2196F3",
    "CONTEST",
    "https://www.contestcalendar.com/fivewkcal.html",
    "1",
  ],
  ["2196F3", "DX CLUSTER", "https://dxcluster.ha8tks.hu/map/", "1"],
  [
    "2196F3",
    "LIGHTNING",
    "https://map.blitzortung.org/#3.87/36.5/-89.41",
    "1",
    "R",
  ],
  ["2196F3", "PISTAR", "http://pi-star.local/", "1.2"],
  [
    "2196F3",
    "RADAR",
    "https://weather.gc.ca/?layers=alert,radar&center=43.39961001,-78.53212031&zoom=6&alertTableFilterProv=ON",
    "1",
    "R"
  ],
  ["2196F3", "TIME.IS", "https://time.is/", "1", "R"],
  [
    "2196F3",
    "WEATHER",
    "https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=44.0157&lon=-79.4591&zoom=5",
    "1",
    "R",
  ],
  [
    "2196F3",
    "WINDS",
    "https://earth.nullschool.net/#current/wind/surface/level/orthographic=-78.79,44.09,3000",
    "1",
    "R",
  ],
];

// Dashboard items
// Structure is Title, Image Source URL
// [Title, Image Source URL],
// the comma at the end is important!
// You can't add more items because there are only 12 placeholders on the dashboard
// but you can replace the titles and the images with anything you want.

//  [
//    "LIGHTNING",
//    "https://images.lightningmaps.org/blitzortung/america/index.php?animation=usa",
//  ],
//  [
//    "LIGHTNING LOCAL",
//    "https://www.blitzortung.org/en/Images/image_b_ny.png",
//  ],
//  ["APRS", "https://aprs.fi/#!lat=42.5463&lng=-121.745"],
const aIMG = [
  [
    "REGIONAL RADAR",
    "https://radar.weather.gov/ridge/standard/KMAX_loop.gif",
  ],
  ["NATIONAL RADAR", "https://radar.weather.gov/ridge/standard/CONUS_loop.gif"],
  [
    "REGIONAL RADAR",
    "https://radar.weather.gov/ridge/standard/KMAX_loop.gif",
  ],
  [
    "SATELLITE PNW",
    "https://cdn.star.nesdis.noaa.gov/GOES16/GLM/SECTOR/pnw/EXTENT3/GOES16-PNW-EXTENT3-600x600.gif",
  ],

  [
    "SATELLITE CAN",
    "https://cdn.star.nesdis.noaa.gov/GOES16/GLM/SECTOR/can/EXTENT3/GOES16-CAN-EXTENT3-1125x560.gif",
  ],
  
  ["NWS Hourly",
    "https://forecast.weather.gov/meteograms/Plotter.php?lat=42.8895&lon=-122.1414&wfo=MFR&zcode=ORZ027&gset=18&gdiff=3&unit=0&tinfo=PY8&ahour=0&pcmd=10001000001100000000000000000000000000000000000000000000000&lg=en&indu=1!1!1!&dd=&bw=&hrspan=48&pqpfhr=6&psnwhr=6"],
  
 
  
  ["FEES CAM", "https://www.nps.gov/webcams-crla/camera0.jpg?1732755786020"],

  [
    "VC CAM",
    "https://www.nps.gov/webcams-crla/cameraHQ0.jpg?1732482728079",
  ],
  [
    "CRATER CAM",
    "https://www.nps.gov/webcams-crla/camerasinnott.jpg?1732478804250",
  ],
  

];

// Image rotation intervals in milliseconds per tile - If the line below is commented, all tiles will be rotated every 30000 milliseconds (30s)
const tileDelay = [180000,180000,180000,180000,180000,180000,180000,180000,180000,];
