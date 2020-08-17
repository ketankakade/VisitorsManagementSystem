import React from "react";
import { Chart } from "react-charts";

export default function MyChart() {
  const data = React.useMemo(
    () => [
      {
        label: "Visited",
        data: [
          [6, null],
          [7, null],
          [8, 1],
          [9, 13],
          [10, 6],
          [11, 10],
          [12, 7],
        ],
        color:'#FFA843',
      },
      {
        label: "Planned",
        data: [
          [12, 7],
          [13, 6],
          [14, 8],
          [15, 5],
          [16, 3],
          [17, 3],
          [18, 2],
          [19, 3],
          [20, 4],
          [21, null],
        ],
        color:'#34B1FF',
      },
       {
        label: "Active",
        data: [
          
          [12, 0],
          [12, 14],          
        ],
        color:'#13D121',
      
      }
    ],
    []
  );

  const axes = React.useMemo(
    () => [
      { primary: true, type: "linear", position: "bottom" },
      { type: "linear", position: "left" }
    ],
    []
  );
const series = React.useMemo(
    () => ({
      type: 'line'
    }),
    []
  )
  return (
    <div
      style={{
        width: "100%",
        height: "150px"
      }}
    >
    <div style={{float:'right'}}>
    <div style={{width:'16px',height:'16px',backgroundColor:'#13D121', marginRight:'10px',display:'inline-block'}}>;
      </div>
      <span>Active</span>
      
      <div style={{width:'16px',height:'16px',backgroundColor:'#FFA843', marginLeft:'10px',marginRight:'10px',display:'inline-block'}}>;
      </div>
      <span>Visited</span>
      
      <div style={{width:'16px',height:'16px',backgroundColor:'#34B1FF', marginLeft:'10px', marginRight:'10px',display:'inline-block'}}>;
      </div>
      <span>Planned</span>
      </div>
      <Chart data={data} axes={axes} series={series} />
    </div>
  );
}
