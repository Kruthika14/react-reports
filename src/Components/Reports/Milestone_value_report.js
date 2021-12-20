/**
 *
 * MS report page
 * 
*/

import React, { Component, useEffect, useState } from 'react';
import { Urls } from '../../Config/Config';
import { Link } from 'react-router-dom';
import './Report.css';
import Select from 'react-select';
import ReactDatePicker from 'react-datepicker';

const Msreport=()=>
{
    // variable initialization
    const [MSArray, setMSArray] = useState([]);
    const [PracticeArray, setPracticeArray] = useState([]);
    const [totalMileStoneValue, setTotalMS] = useState(0);
    const [totalKickoffValue, setTotalKickoff] = useState(0);
    const [totalCarryValue, setTotalCarry] = useState(0);
    const [filterMileStoneValue, setFilterMS] = useState(0);
    const [SumofMileStoneValue, setSumMS] = useState(0);
    const [sumoffilterMileStoneValue, setSumFilterMS] = useState(0);
    const invoice_dropdown_value = Urls.milestone_achieved_dropdown_value;
    const [currentFilter, setCurrentFilter] = useState({'id':'0', 'value':'All'});
    const report = useState({});
    const user_types = Urls.user_types;
    const reports_lists = Urls.reports_lists;
    const current_report = Urls.reports_lists[0];
    /**
     * 
     * get milestone and practice data
     * 
     */
    useEffect(() =>{
        // return get(Urls.apiLink.get_tech_lead_list,{

        // })
        return fetch(Urls.apiLink.get_milestone_value_report,{
            method: "POST",                
            body: JSON.stringify({
                reportDetails:{
                    end_date: "2021-12-01T18:30:00.000Z",
                    head_id: "",
                    isCollectionPotential: false,
                    practice: [],
                    project_practice: [1, 2, 3, 10, 38, 69, 70, 96],
                    selectedInvoiceStatus: {id: "0", value: "All"},
                    service: [{id: 1, value: "Cloud - 2", head: 92, bu: 2}],
                    start_date: "2021-12-17T05:54:07.362Z",
                    userTypeId: 0,
                    viewAll: 1
                }
            }),               
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            }
        }).then(res => res.json()).then(result => {
            console.log(result)
            setMSArray(result.result.milestoneReport)
            setPracticeArray(result.result.practiceReport)
            setTotalMS(result.result.totalMileStoneValue)
            setTotalKickoff(result.result.totalKickoffValue)
            setTotalCarry(result.result.totalCarryValue)
        })
        // .then(response => response.json(); console.log(response));
        // .then(({ result: MSArray }) => {
        //     setMSArray(result);
        //     setTimeout(() => {
        //         console.log(MSArray)
        //     }, 5000);
        // });
    }, [])    
    console.log(MSArray)
    console.log(PracticeArray)
    /**
     * 
     * functions
     * 
     */    
    function selectFilterMs(value){
        setCurrentFilter(value);
        console.log(currentFilter)
    }

    /**
     * 
     * html render
     * 
     */
    return (
        <div className='content-wrapper content-wrapper--with-bg project-area report-page'>
            <div className='page-content p-0'>
                <div id="preloader" ng-if="milestonevalue_Report_Loading">
                    <div id="status">&nbsp;</div>
                    <h1>Milestone Value Report</h1>
                </div>
                <div className='row m-0'>
                    <div className='col-xs-12 fourty-fluid'>
                        <div className='col-sm-12 p-0'>
                            <hr className='border-bottom-hr'></hr>
                            <div className='row m-b-10'>
                                <div className='col-lg-12 col-sm-12 col-xs-12 p-b-15-xs p-r-15-xs'>
                                    <h1 className='p-0 col-sm-2 col-xs-12 B-G-bold f-s-16 d-gray m-t-5 m-b-0 page-head pull-left'>
                                        <div ng-if="reports_lists[6].value == current_report.value">
                                            Month Filter
                                        </div>
                                    </h1>
                                    <form className="text-right col-sm-10 col-xs-12"  name="milestone_value_report_form">
                                        <div className="row">
                                            <div className="col-lg-9 col-sm-12">
                                                <div className="row">
                                                    <div className="col-sm-1 col-xs-6 p-l-0 text-right p-t-5 general-content">
                                                        <label>Month:</label>
                                                    </div>
                                                    <div className="col-sm-3 col-xs-6 p-0">                                            
                                                        <div className="input-group" ng-if="reports_lists[6].value == current_report.value">
                                                            {/* <input className="date_bg form-control input-sm" uib-datepicker-popup="MM/yyyy" ng-model-options="{timezone: 'utc'}"
                                                            placeholder="Start Date" name="start_date" ng-model="report.start_date"
                                                            datepicker-options="{minMode:'month',datepickerMode: 'month','starting-day' : 1}"
                                                            type="text" is-open="startOpened" ng-click="startOpened = true"  close-text="Close"  required /> */}
                                                            {/* <ReactDatePicker 
                                                            selected={report.start_date} onChange={(date) => setStartDate(date)></ReactDatePicker> */}
                                                            <span className="input-group-addon p-l-5 p-r-5" id="basic-addon2" ng-click="startOpened = true;">
                                                            <i className="icon-calendar"></i>
                                                            </span>
                                                        </div>
                                                        <div className="input-group" ng-if="reports_lists[7].value == current_report.value">
                                                            {/* <input className="date_bg form-control input-sm" uib-datepicker-popup="MM/yyyy" ng-model-options="{timezone: 'utc'}"
                                                            placeholder="Start Date" name="start_date" ng-model="report.start_date"
                                                            datepicker-options="{maxDate: report.end_date,minMode:'month',datepickerMode: 'month','starting-day' : 1}"
                                                            type="text" is-open="startOpened" ng-click="startOpened = true"  close-text="Close"  required /> */}
                                                            <span className="input-group-addon p-l-5 p-r-5" id="basic-addon2" ng-click="startOpened = true;">
                                                            <i className="icon-calendar"></i>
                                                            </span>
                                                        </div>
                                                        <small ng-if="submitted && (milestone_value_report_form.start_date.$invalid  && milestone_value_report_form.start_date.$error.required)" className="text-danger dateicon">
                                                            Month is required
                                                        </small>                                            
                                                        <small ng-if="submitted && (milestone_value_report_form.start_date.$invalid  && milestone_value_report_form.start_date.$error.required)" className="text-danger dateicon">
                                                        Month is required
                                                        </small>
                                                    </div>
                                                    <div className="col-sm-8 col-xs-12 text-left">
                                                        <button ng-if="reports_lists[6].value == current_report.value" type="submit" ng-click="generateMileStoneValueReport(milestone_value_report_form.$valid)" className="btn btn-primary B-G-bold t-t-upper p-t-5 p-b-5 m-r-5 fs-12 xs-block-view m-b-10-xs m-t-10-xs pull-left">
                                                            Generate
                                                        </button>
                                                        <button ng-if="reports_lists[7].value == current_report.value" type="submit" ng-click="generateCollectionsReport(milestone_value_report_form.$valid)" className="btn btn-primary B-G-bold t-t-upper p-t-5 p-b-5 m-r-5 fs-12 xs-block-view m-b-10-xs m-t-10-xs pull-left">
                                                            Generate
                                                        </button>
                                                        <button ng-if="(reports_lists[6].value == current_report.value || reports_lists[7].value == current_report.value)&& milestoneReport.length > 0" type="submit"
                                                        ng-click="generateMileStoneValueReportAsExcel(milestone_value_report_form.$valid)"
                                                        className="btn btn-primary B-G-bold t-t-upper p-t-5 p-b-5 pull-left fs-12 xs-block-view m-b-10-xs m-r-5 m-t-10-xs">Export as Excel</button>
                                                        <button className="btn btn-primary btn-default B-G-bold t-t-upper p-t-5 p-b-5 fs-12 xs-block-view m-b-10-xs m-t-10-xs pull-left" ng-click="selectMileStoneReportPractice(0)" ng-show="loginuserRole.id != 1" ng-if="mileStoneReportPractice">View all practice</button>
                                                        <button className="btn btn-primary btn-default B-G-bold t-t-upper p-t-5 p-b-5 fs-12 xs-block-view m-b-10-xs m-t-10-xs pull-left" ng-click="selectMileStoneReportPractice(1)" ng-show="loginuserRole.id != 1" ng-if="!mileStoneReportPractice">View my practice</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-3 p-0">                           
                                                <div className="col-sm-12 col-xs-12 p-0">
                                                    <div className="form-group search-icon col-sm-12 col-xs-12">
                                                        {/* <input type="text" name="project_filter" ng-model="project_filter[searchBy]"  className="form-control B-G-bold f-s-16 d-gray pl-30" placeholder="Search..." ng-change="calculateUtilization()" /> */}
                                                        <i className="fa fa-search"></i>
                                                    </div>
                                                </div>                     
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="m-t-5 col-sm-12 m-b-8 p-0"></hr>
                <div className="row m-0">
                    <div className="col-lg-8 col-sm-12 col-xs-12 p-b-15-xs" ng-if="reports_lists[6].value == current_report.value">
                        <h1 ng-if="reports_lists[6].value == current_report.value" className="p-0 B-G-bold f-s-16 d-gray m-t-8 m-b-0 page-head">
                            <div className ='col-sm-12 p-0'>
                                <div className ='col-sm-4 p-0'>
                                    <div>Expected MS Value: $ {totalMileStoneValue}</div>
                                </div>
                                <div className ='col-sm-4 p-0'>
                                    <div ng-if="!filterByPractice">Kickoff Value: $ {totalKickoffValue}</div>
                                </div>
                                <div className ='col-sm-4 p-0'>
                                    <div ng-if="!filterByPractice">Carry Forward Value: $ {totalCarryValue}</div>
                                </div>
                            </div>
                        </h1>
                        <h1 ng-if="reports_lists[7].value == current_report.value" className="p-0 B-G-bold f-s-16 d-gray m-t-8 m-b-0 page-head">
                            <div ng-if="!filterByPractice">Collected MS Value: $ {totalMileStoneValue.toFixed(2)}</div>
                            <div ng-if="filterByPractice">Collected MS Value: $ {filterMileStoneValue.toFixed(2)}</div>
                        </h1>
                    </div>
                    <div className="col-lg-2 col-sm-3 col-xs-12 text-right" ng-if="reports_lists[6].value == current_report.value">    
                        <label className="text-uppercase m-b-5 fs-13 p-t-6">Invoice Status:</label>  
                    </div>
                    <div className="col-lg-2 col-sm-3 col-xs-12 p-t-2 text-right" ng-if="reports_lists[6].value == current_report.value"> 
                        <div className="dropdown border-bottom-light" ng-if = "reports_lists[6].value == current_report.value">
                            <a className="dropdown-toggle user_name hov-img-zoom texture" href="javascript:void(0);" type="button" id="menu1" data-toggle="dropdown">
                                <span className="l-gray B-G-bold f-s-16 pull-left">
                                    {/* <span className="d-gray fs-14">{{currentFilter.value}}</span> */}
                                </span>
                                <span className="icon-arrow-down pull-right pt-5 p-l-10"></span>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-left m-r-0" role="menu" aria-labelledby="menu1">
                                {invoice_dropdown_value.map(value=> <li onClick={selectFilterMs(value)}>{value}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>           
                <div className="row m-0">             
                    <div className="col-sm-11 p-0">
                        <h1 ng-if="reports_lists[6].value == current_report.value" className="p-0 B-G-bold f-s-16 d-gray m-t-8 m-b-0 page-head">
                            <div className="col-sm-4">Total Selected MS Value: $ {SumofMileStoneValue}</div>
                            <div className="col-sm-4 p-0">Total MS Value by practice: $ {sumoffilterMileStoneValue}</div>
                        </h1>
                    </div>
                </div>
                <div className="col-sm-12 p-0 m-t-8">
                    <div className="row m-0">
                        <div className="{'col-md-12':mileStoneReportPractice !=0,'col-md-6':mileStoneReportPractice==0}">
                            <h3 className="text-left text-uppercase heading--table m-t-10 m-b-5 fs-15">My Practice</h3>
                            <div className="white-table-className utilize-box p-t-10 p-b-10 clearfix practicebox--list scrollbar-design my-collection min-h100">
                                <div className="col-sm-12 utbox">
                                    <div className="{'col-sm-1 p-0':mileStoneReportPractice !=0,'col-sm-4 p-0':mileStoneReportPractice==0}" ng-click="filterPractice()">
                                        <div className="col-sm-12 p-l-0 p-r-5" className="{'active':!filterByPractice}">
                                            <p className="m-b-5 m-t-5 fs-12">All</p>
                                            {/* <h3 className="fs-14">$ {{myPracticeMileStone | number:2}}</h3> */}
                                            <hr className="m-t-7 m-b-0"></hr>
                                        </div>
                                    </div>
                                    <div className="{'col-sm-1 p-0':mileStoneReportPractice !=0,'col-sm-4 p-0':mileStoneReportPractice==0}" ng-repeat="practiceItem in practiceReport|filter:{myPractice:1}">
                                        <div className="col-sm-12 p-l-0 p-r-5" id="className_grey_row_" className="{'active':practiceItem.is_checked}">
                                            {/* <input type="checkbox" id="msvaluesum" ng-model="practiceItem.is_checked" style="float:left;margin-right:7px;vertical-align:top;"
                                            ng-click="filterPractice(practiceItem)" ng-if="reports_lists[6].value == current_report.value"  ng-true-value="true" ng-false-value="false"/> */}
                                            {/* <p className="m-b-5 m-t-5 fs-12 text-truncate" title="{{practiceItem.practiceName}}">{{practiceItem.practiceName}}</p> */}
                                            {/* <h3 className="fs-14">$ {{practiceItem.mileStoneValue | number:2}}</h3> */}
                                            <hr className="m-t-7 m-b-0"></hr>
                                        </div>
                                    </div>                    
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6" ng-if="mileStoneReportPractice==0">
                            <h3 className="text-left text-uppercase heading--table m-t-10 m-b-5 fs-14">Other Practices</h3>
                            <div className="white-table-className utilize-box p-t-10 p-b-10 p-l-0 p-r-0 clearfix practicebox--list scrollbar-design my-collection">
                                <div className="col-sm-12 p-0 utbox">
                                    <div className="col-sm-4 b-r-gray" className="{'active':!filterByPractice}" ng-click="filterPractice()">
                                        <p className="m-b-5 m-t-5">All</p>
                                        {/* <h3>$ {{allPracticeMileStone | number:2}}</h3> */}
                                        <hr className="m-t-7 m-b-0"></hr>
                                    </div>
                                    <div className="col-sm-4 b-r-gray" className="{'active':filterByPractice==practiceItem.practiceId}" ng-repeat="practiceItem in practiceReport|filter:{myPractice:0}" ng-click="filterPractice(practiceItem)">
                                        {/* <p className="m-b-5 m-t-5">{{practiceItem.practiceName}}</p> */}
                                        {/* <h3>$ {{practiceItem.mileStoneValue | number:2}}</h3> */}
                                        <hr className="m-t-7 m-b-0"></hr>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="table-responsive white-table-className reports--grid" ng-scrollable="">
                                <table className="table table-striped m-b-0 table-wrap">
                                    <thead>
                                        <tr>
                                            {/* <th className="" style="width:1%;">&nbsp;</th>
                                            <th className="" style="width:17%;">Project Name</th>
                                            <th className="" style="width:14%;">Milestone</th>
                                            <th className="" style="width:10%;"><span ng-if="reports_lists[6].value == current_report.value">Allocated MS</span><span ng-if="reports_lists[7].value == current_report.value">Collected MS</span></th>
                                            <th className="" style="width:11%;" ng-if="reports_lists[6].value == current_report.value">Achieved MS Value</th>
                                            <th className="" style="width:11%;"><span ng-if="reports_lists[6].value == current_report.value">Invoice status</span><span ng-if="reports_lists[7].value == current_report.value">Collection status</span></th> */}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr ng-if="(filteredMilestoneData|filter:{projectName:project_filter.name}).length == 0">
                                        <td className="r-no-data">No data available</td>
                                        </tr>
                                        <tr ng-if="(filteredMilestoneData|filter:{projectName:project_filter.name}).length > 0" ng-repeat="item in filteredMilestoneData|filter:{projectName:project_filter.name}" id="className_grey_rows_" className="{'active':item.is_checked}" ng-init="idx = $index">
                                            <td>
                                                {/* <input type="checkbox" id="msvaluesum_{{idx}}" ng-model="item.is_checked" ng-change = "msvalueSum(idx,item)" ng-if="reports_lists[6].value == current_report.value"/> */}
                                            </td> 
                                            <td>
                                                {/* <span data-toggle="tooltip" title="{{item.practiceName}}" data-trigger="hover" className="t-t-upper practise-li python" style="float:left;">{{practiceRename(item.practiceName)}}</span>
                                                <span className="name p-l-5 text-truncate txt-black p-t-3 fs-13" style="max-width:200px;" title="{{item.projectName}}">{{item.projectName}}</span>
                                                <span className="s-gray lead-name">{{item.techLead}} / {{item.businessAnalyst}}</span> */}
                                            </td>
                                            <td>
                                                <span ng-if="item.iterationNumber && !item.carryforward_targer && !item.is_carryforward">
                                                    {/* <span ng-if="!item.iteration_name">Sprint {{item.iterationNumber}}</span><span ng-if="item.iteration_name">{{item.iteration_name}}</span> */}
                                                </span>
                                                <span ng-if="!item.iterationNumber">Kickoff</span>
                                                {/* <span ng-if="item.is_carryforward">Sprint {{item.iterationNumber}}<img width="21px;" className="m-l-5" ng-if="item.is_carryforward" uib-tooltip="carryforwarded Sprint {{item.carried_to}}"  tooltip-placement="left" src="images/exchange.png" alt="noImg" /></span> */}
                                            </td>
                                            <td>
                                                {/* <span>${{item.userMilestoneValue | number:2}}</span> */}
                                            </td>
                                            <td ng-if="reports_lists[6].value == current_report.value">
                                                {/* <span className="{{msPercentageclassName(item.userMilestoneValue, item.userAchievedMilestoneValue)}} m-t-5" ng-if="item.userAchievedMilestoneValue">${{item.userAchievedMilestoneValue | number:2}}</span> */}
                                            </td>
                                            <td className="{'alert_report_row':((milestone_achieved_dropdown_value[2].id == item.invoice_status) || (milestone_achieved_dropdown_value[4].id == item.invoice_status)),'green_report_row':(milestone_achieved_dropdown_value[3].id == item.invoice_status)}">
                                                <span ng-if="item.invoice_status">
                                                    <span className="pull-left" ng-repeat="invoice in milestone_achieved_dropdown_value" ng-if="invoice.id == item.invoice_status">
                                                        {/* <span uib-tooltip="Invoice NO: {{item.invoice_no}}" tooltip-placement="left">{{invoice.value}}</span> */}
                                                    </span>
                                                </span>
                                                <span ng-if="!item.invoice_status">NA</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
 
export default Msreport;