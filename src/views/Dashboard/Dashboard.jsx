import React, { Component } from 'react';
import ChartistGraph from 'react-chartist';
import { Grid, Row, Col } from 'react-bootstrap';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import BigCalendar from 'react-big-calendar';


import {Card} from 'components/Card/Card.jsx';
import {StatsCard} from 'components/StatsCard/StatsCard.jsx';
import {Tasks} from 'components/Tasks/Tasks.jsx';
import 'react-web-tabs/dist/react-web-tabs.css';
import {
    dataPie,
    legendPie,
    dataSales,
    optionsSales,
    responsiveSales,
    legendSales,
    dataBar,
    optionsBar,
    responsiveBar,
    legendBar
} from 'variables/Variables.jsx';

class Dashboard extends Component {

    createLegend(json){
        var legend = [];
        for(var i = 0; i < json["names"].length; i++){
            var type = "fa fa-circle text-"+json["types"][i];
            legend.push(
                <i className={type} key={i}></i>
            );
            legend.push(" ");
            legend.push(
                json["names"][i]
            );
        }
        return legend;

    }
    render() {
        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col lg={3} sm={6}>
                            <StatsCard
                                bigIcon={<i className="pe-7s-server text-warning"></i>}
                                statsText="Trip"
                                statsValue="105"
                                statsIcon={<i className="fa fa-refresh"></i>}
                                statsIconText="Updated now"
                            />
                        </Col>
                        <Col lg={3} sm={6}>
                            <StatsCard
                                bigIcon={<i className="pe-7s-wallet text-success"></i>}
                                statsText="INCOME"
                                statsValue="$1,345"
                                statsIcon={<i className="fa fa-calendar-o"></i>}
                                statsIconText="Last day"
                            />
                        </Col>
                        <Col lg={3} sm={6}>
                            <StatsCard
                                bigIcon={<i className="pe-7s-star text-danger"></i>}
                                statsText="Followers"
                                statsValue="23"
                                statsIcon={<i className="fa fa-clock-o"></i>}
                                statsIconText="In the last hour"
                            />
                        </Col>
                        {/*<Col lg={3} sm={6}>*/}
                            {/*<StatsCard*/}
                                {/*bigIcon={<i className="fa fa-twitter text-info"></i>}*/}
                                {/*statsText="Followers"*/}
                                {/*statsValue="+45"*/}
                                {/*statsIcon={<i className="fa fa-refresh"></i>}*/}
                                {/*statsIconText="Updated now"*/}
                            {/*/>*/}
                        {/*</Col>*/}
                    </Row>
                    <Row>
                        <Col md={4}>
                            <Card
                                statsIcon="fa fa-history"
                                id="chartHours"
                                title="HIT TRIP"
                                category=""
                                stats="Updated 3 minutes ago"
                                content={
                                    <div className="ct-chart">
                                        <ChartistGraph
                                            data={dataPie}
                                            type="Pie"
                                            // options={optionsSales}
                                            responsiveOptions={responsiveSales}
                                        />
                                    </div>
                                    }
                                legend={
                                    <div className="legend">
                                        {this.createLegend(legendPie)}
                                    </div>
                                }
                            />
                        </Col>
                        <Col md={4}>
                            <Card
                                statsIcon="fa fa-clock-o"
                                title="MAP"
                                category=""
                                stats="Campaign sent 2 days ago"
                                content={
                                    <div className="ct-chart">

                                        <Map

                                             style={{width: '80%', height: '60%', position: 'relative'}}
                                            google={this.props.google}
                                            initialCenter={{
                                                lat: 40.7484405,
                                                lng: -73.9856644
                                            }}
                                            zoom={13}
                                            clickableIcons={false}
                                        >
                                            <Marker onClick={this.onMarkerClick}
                                                    name={'Current location'}
                                            />

                                        </Map>


                                    </div>

                                }
                                legend={
                                    <div className="legend">

                                    </div>
                                }

                            />
                        </Col>
                        <Col md={4}>
                            <Card
                                statsIcon="fa fa-clock-o"
                                title="NEWS"
                                category=""
                                stats="Campaign sent 2 days ago"
                                content={
                                    <Tabs
                                        defaultTab="one"
                                        onChange={(tabId) => { console.log(tabId) }}
                                    >
                                        <TabList>
                                            <Tab tabFor="one">Tab 1</Tab>
                                            <Tab tabFor="two">Tab 2</Tab>
                                            <Tab tabFor="three">Tab 3</Tab>
                                        </TabList>
                                        <TabPanel tabId="one">
                                            <p>Tab 1 content</p>
                                        </TabPanel>
                                        <TabPanel tabId="two">
                                            <p>Tab 2 content</p>
                                        </TabPanel>
                                        <TabPanel tabId="three">
                                            <p>Tab 3 content</p>
                                        </TabPanel>
                                    </Tabs>


                                }
                                legend={
                                    <div className="legend">

                                    </div>
                                }

                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col md={6}>
                            <Card
                                id="chartActivity"
                                title="2014 Sales"
                                category="All products including Taxes"
                                stats="Data information certified"
                                statsIcon="fa fa-check"
                                content={
                                    <div className="ct-chart">
                                       
                                    </div>
                                }
                                legend={
                                    <div className="legend">

                                    </div>
                                }
                            />
                        </Col>

                        <Col md={6}>
                            <Card
                                title="Tasks"
                                category="Backend development"
                                stats="Updated 3 minutes ago"
                                statsIcon="fa fa-history"
                                content={
                                    <div className="table-full-width">
                                        <table className="table">
                                            <Tasks />
                                        </table>
                                    </div>
                                }
                            />
                        </Col>
                    </Row>

                </Grid>
            </div>
        );
    }
}
export default GoogleApiWrapper({
    apiKey: "AIzaSyBJExNOdS9QRcNOIbNfpViuorNj1uTEcp4"
})(Dashboard)
