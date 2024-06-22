import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import Sidebar from "./HodDashboard";
import { useNavigate } from "react-router-dom";
import useFetch from "../CUSTOM_HOOK/Usefetch";


function Dashboard() {
  const navigate = useNavigate();
  const [todayRegisteredCount, setTodayRegisteredCount] = useState(0);
  const [todayEnrolledCount, setTodayEnrolledCount] = useState(0);
  const [todayBranchCount, setTotalBranchCount] = useState(0);
  const [totalFeePaid, setTotalFeePaid] = useState(0);

  console.log(todayRegisteredCount)
  console.log(todayEnrolledCount)
  console.log(todayBranchCount)

  const userData = JSON.parse(sessionStorage.getItem("AnkitHOD"));
  const branch1 = userData?.Branch;

  console.log(userData,"userdata")
  console.log(branch1, "branch1111111`")
  const { data, loading, error } = useFetch(process.env.REACT_APP_HOD_STD_COUNT + `${branch1}`);

  console.log(data, loading, error, "datdcdadsa")

  useEffect(() => {
    if (error) {
      console.error("Error fetching today's registered count:", error);
    }
  }, [error]);

  useEffect(() => {
    if (data) {
      setTodayRegisteredCount(data.count || 0);
      setTodayEnrolledCount(data.TotalEnrolled || 0);
      setTotalBranchCount(data.Totalcount || 0);
      setTotalFeePaid(data.paidStudentCount || 0);
    }
  }, [data]);

  function TotalRegistered() {
    navigate("/total/student/Registered");
  }

  function TotalEnrolled() {
    navigate("/totalenrolled");
  }

  function TotalBranchStudent() {
    navigate("/total/student/branch");
  }

  function TotalStudentPay() {
    navigate("/total/student/feepaid");
  }

  const columnChartData = [
    ["Category", "Count"],
    ["TODAY'S REGISTERED", todayRegisteredCount],
    ["TOTAL STUDENT IN " + branch1, todayBranchCount],
    ["TODAY'S ENROLLED STUDENT", todayEnrolledCount],
    ["TOTAL FEE PAID", totalFeePaid],
  ];

  const pieChartData = [
    ["Task", "Count"],
    ["TODAY'S REGISTERED", todayRegisteredCount],
    ["TOTAL STUDENT IN " + branch1, todayBranchCount],
    ["TODAY'S ENROLLED STUDENT", todayEnrolledCount],
    ["TOTAL FEE PAID", totalFeePaid],
  ];

  const pieChartOptions = {
    title: "My Daily Activities",
    pieHole: 0.4,
    is3D: false,
  };


  return (
    <>
      <Sidebar />
      <style>
        {`


.namediv{
  border-radius:10px;
  color:black;
  height:85px;
  width:85%;
  margin-left:100px;
  margin-top:70px

}
.container-fluid{ 
  display: flex;
   margin-left: 110px;
    margin-top: 30px
  }
       .card-purple-blue {
  //  background: linear-gradient(45deg, #6d80fe 0%, #23d2fd 100%);
 background:  #1b263b;
  box-shadow: 0 5px 20px rgba(35, 210, 253, 0.3); }
  
  .card-salmon-pink {
  // background: linear-gradient(45deg, #ff998b 0%, #ff6d88 100%);
  background:  #1b263b;
  box-shadow: 0 5px 20px rgba(255, 153, 139, 0.3); }
  
  .card-blue-green {
  // background: linear-gradient(45deg, #09afe8 0%, #29f499 100%);
  background:  #1b263b;
  box-shadow: 0 5px 20px rgba(41, 244, 153, 0.3); }
  
  .card-purple-pink {
  // background: linear-gradient(45deg, #707cff 0%, #fa81e8 100%);
   background:  #1b263b;
  box-shadow: 0 5px 20px rgba(250, 129, 232, 0.3); }

  
  .card {
  height: 110px;
  border: 60px;

 
  width: 280px;
  border-radius: 15px; }

  .card-body {
    padding: 15px 20px; 
  }

.docharts{
 
    display: flex;

    flex-direction: row;

    // marginLeft: "5px",
    // marginLeft:'-400px',
    justify-content: center;
    
    align-items: flex-start;

    flex-wrap: wrap;

}


.row22{

    margin-top: -10px;

   width: 42%;

   max-width: 700px;
   height: 415px;
   background-color: #fff;
   margin-left: 120px;

}


.row23{

    margin-left: 30px;
    width: 46%;

    max-width: 590px;
    margin-top:-10px;
    height: 415px;

    background-color: #fff
  
}



.row24{
 
    margin: 20px auto;
    height: 400px;
    width: 80%;
    max-width: 900px;
    margin-left: 30%;
    margin-top: 60px;

}
  @media screen and (max-width: 500px){
.dashdash{
   height:2800px;
   overflow-x:hidden;
}


.namediv{
  margin-top:160px;
}

    .row22{
     width:80%;
    }
    .row23{
      width:80%;
      margin-top:30px;
      height:300px;
      margin-left:120px;
    }
  }
// //////////////////////////////////////////////////////counter csss////////////////////////////////////
.counter{padding: 30px 0;}
.counter .counter-content{
    height: 140px;
    width: 140px;
    color: #303030;
    text-align: center;
    padding: 40px 10px;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 3px 3px 5px rgba(0,0,0,0.5);
    position: relative;
    transition: all 0.3s;
}
.counter .counter-content:hover{
    background-color: rgba(0,0,0,0.05);
}
.counter .counter-content:before,
.counter .counter-content:after{
    content: '';
    height: 180px;
    width: 180px;
    border: 3px solid #B9C233;
    border-left: none;
    border-right: none;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%) rotate(10deg);
    transition: all 0.3s;
}
 
.counter .counter-content:after{
    border: 10px solid #B9C233;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    transform: translateX(-50%) translateY(-50%) rotate(45deg);
}
.counter .counter-content:hover:before{
    transform: translateX(-50%) translateY(-50%) rotate(190deg);
    box-shadow: 0 0 20px -5px rgba(0,0,0,0.9);
}
.counter .counter-content:hover:after{transform: translateX(-50%) translateY(-50%) rotate(-225deg);}
.counter .counter-value{
    font-size: 35px;
    font-weight: 600;
}
.counter .title{
    display: block;
    font-size: 16px;
    font-weight: 600;
    margin: 0 0 5px 0;
    text-transform: uppercase;
}
.counter.purple .counter-content:before{border-color: #67478A;}
.counter.purple .counter-content:after{
    border: 10px solid #67478A;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
}


.counter.red .counter-content:before{border-color: #c1121f;}
.counter.red .counter-content:after{
    border: 10px solid #c1121f;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
}
.counter.yellow .counter-content:before{border-color: #E5BA21;}
.counter.yellow .counter-content:after{
    border: 10px solid #E5BA21;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
}
.counter.blue .counter-content:before{border-color: #5A9BA1;}
.counter.blue .counter-content:after{
    border: 10px solid #5A9BA1;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
}
@media screen and (max-width: 500px) {
  .counter{margin-bottom: 30px;
    margin-left:-160px;
    flex-direction: row;

  
    justify-content: space-between;
    
    align-items: flex-start;

    flex-wrap: wrap;
  
  }

}




}

////////////////////////////////////////////////////////////////////////////////////////////////////////
  

  
       `}
      </style>


      <div className="dashdash">
        <div className='namediv'>
          <div className="content rounded-3 p-3">
            <h1 className="fs-3">Welcome {userData.Name}</h1>
            <p className="mb-0">
              Hello {userData.Name}, welcome to your awesome dashboard!
            </p>
          </div>
        </div>
        <div
          className="container-fluid"

        >

          <div className="row mb-5"  >
            <div className="col-12 col-sm-6 col-md-3">
              <div className="card card-purple-blue text-white mb-3 mb-md-0">
                <div className="card-body d-flex justify-content-between align-items-end">
                  <div className="card-number" onClick={TotalRegistered}>
                    <div className="h3 m-0">{todayRegisteredCount}</div>
                    <small>
                      <strong >TODAY'S REGISTERED {branch1}</strong>
                    </small>
                  </div>

                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-3">
              <div className="card card-blue-green text-white mb-3 mb-md-0">
                <div className="card-body d-flex justify-content-between align-items-end">
                  <div className="card-number" onClick={TotalBranchStudent}>
                    <div className="h3 m-0">{todayBranchCount}</div>
                    <small>
                      <strong>TOTAL STUDENT IN {branch1}</strong>
                    </small>
                  </div>

                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-3">
              <div className="card card-salmon-pink text-white mb-3 mb-md-0">
                <div className="card-body d-flex justify-content-between align-items-end">
                  <div className="card-number" onClick={TotalEnrolled}>
                    <div className="h3 m-0">{todayEnrolledCount}</div>
                    <small>
                      <strong>TOTAL ENROLLED STUDENT</strong>
                    </small>
                  </div>

                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-3">
              <div className="card card-purple-pink text-white mb-3 mb-md-0">
                <div className="card-body d-flex justify-content-between align-items-end">
                  <div className="card-number" onClick={TotalStudentPay}>
                    <div className="h3 m-0">{totalFeePaid}</div>
                    <small>
                      <strong>Total Fee paid</strong>
                    </small>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
        {/* ///////////////////////////////////////////////////////////////////////////////////////////////// */}

        <div className="docharts"

        >
          <div
            className="row22 shadow p-3 bg-body rounded"

          >
            <Chart
              chartType="ColumnChart"
              width="100%"
              height="400px"
              marginTop='60px'
              data={columnChartData}
              options={{ title: "Today's Data" }}
            />
          </div>

          <div
            className="row23 shadow p-3 bg-body rounded"

          >
            <Chart
              chartType="PieChart"
              width="100%"
              height="100%"

              data={pieChartData}
              options={pieChartOptions}
            />
          </div>
        </div>

        <div class="container "
          style={{ marginTop: '50px', marginLeft: '140px', }}>
          <div class="row" style={{ justifyContent: 'space-between', }}>
            <div class="col-md-2 col-sm-6">
              <div class="counter blue">
                <div class="counter-content">
                  <h3 class="title">Student</h3>
                  <span class="counter-value"></span>
                </div>
              </div>
            </div>
            <div class="col-md-2 col-sm-6">
              <div class="counter yellow">
                <div class="counter-content">
                  <h3 class="title">Student</h3>
                  <span class="counter-value"></span>
                </div>
              </div>
            </div>
            <div class="col-md-2 col-sm-6">
              <div class="counter yellow">
                <div class="counter-content">
                  <h3 class="title">Student</h3>
                  <span class="counter-value"></span>
                </div>
              </div>
            </div>
            <div class="col-md-2 col-sm-6">
              <div class="counter purple">
                <div class="counter-content">
                  <h3 class="title">Student</h3>
                  <span class="counter-value"></span>
                </div>
              </div>
            </div>
            <div class="col-md-2 col-sm-6">
              <div class="counter red">
                <div class="counter-content">
                  <h3 class="title">Student</h3>
                  <span class="counter-value"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Dashboard;


