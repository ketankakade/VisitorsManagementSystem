import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';


class PieChart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pieData: {
                labels: ["Active", "Planned", "Visited"],
                type: "doughnut",

                datasets: [{
                    backgroundColor: ['#08a131', '#f2b366', '#3f5d99'],
                    data: [25, 10, 5],
                }]
            },

            options: {
                responsive: true,
                maintainAspectRatio: false,
                radius: "90%",
                innerRadius: "70%",
                legend: {
                    position: 'bottom',
                    float:'right'
                  }
            }
        };
    }
    render() {
        return (
            <div>
                <div className="pieChart">
                    <Doughnut data={this.state.pieData} options={this.state.options} width={200} height={200} />
                </div>
            </div>
        )
    }
}

export default PieChart;
