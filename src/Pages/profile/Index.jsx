// import { Navigate } from "react-router-dom"
import { jwtDecode } from "jwt-decode"
import Navbar from "../../components/Navbar/Index"
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Bar } from 'react-chartjs-2';
import "chart.js/auto"


import Chart from 'react-apexcharts'
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";




const ProfilePage = () => {
    const handleLogin = (e) => {
        e.preventDefault()
        window.location.href = "/login"
    }

    const handleLogout = () => {
        const logout = confirm("Are you sure you want to log out?")
        if (logout) {
            localStorage.removeItem("access_token")
            window.location.href = "/login"
        }

    }

    const token = localStorage.getItem("access_token")
    const decoded = jwtDecode(token)

    const option = {
        responsive: true,
        plugins: {
            display: true,
            position: "top",
        },
        title: {
            display: true,
            text: "data keuangan"
        }
    }

    const dataSet = {
        labels: ["Jun", "Jul", "Aug"],
        datasets: [
            {
                id: 1,
                label: "",
                data: [5, 6, 7],
            },
            {
                id: 2,
                lable: "",
                data: [3, 2, 1],
            },
        ],
    }



    const [dateFrom, setDateFrom] = useState('')
    const [dateUntil, setDateUntil] = useState('')


    const getReportData = async () => {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTcxODg5MDY2MH0.WLWnMOa5rwS7RVe1zdPMrSnn2-jbpRKjnoO-44YhIDw'
        const config = {
            headers: {
                access_token: `${token}`,
            },
        }
        try {
            const res = await axios.get(`https://api-car-rental.binaracademy.org/admin/order/reports?from=${dateFrom}&until=${dateUntil}`, config)
            setDataReports(res.data)
            console.log(res.data);
        } catch (error) {
            console.log(error?.response);
        }
    }


    useEffect(() => {
        getReportData()
    }, [])


    const [dataReports, setDataReports] = useState([])

    const day = dataReports.map((d) => {
        return d.day
    })

    const countOrder = dataReports.map((c) => {
        return c.orderCount
    })

    // console.log(countOrder);
    // console.log(day)



    const options = {
        series: countOrder,
        options: {
            chart: {
                width: 380,
                type: 'pie',
            },
            labels: day,
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        },
    }


    const OptionsColumChart = {
        series: [{
            name: 'Count Order',
            data: countOrder,
        }],
        options: {
            chart: {
                height: 350,
                type: 'bar',
            },
            plotOptions: {
                bar: {
                    borderRadius: 10,
                    dataLabels: {
                        position: 'top', // top, center, bottom
                    },
                }
            },
            dataLabels: {
                enabled: true,
                formatter: function (val) {
                    return val + "%";
                },
                offsetY: -20,
                style: {
                    fontSize: '12px',
                    colors: ["#304758"]
                }
            },

            xaxis: {
                categories: day,
                position: 'top',
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                },
                crosshairs: {
                    fill: {
                        type: 'gradient',
                        gradient: {
                            colorFrom: '#D8E3F0',
                            colorTo: '#BED1E6',
                            stops: [0, 100],
                            opacityFrom: 0.4,
                            opacityTo: 0.5,
                        }
                    }
                },
                tooltip: {
                    enabled: true,
                }
            },
            yaxis: {
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false,
                },
                labels: {
                    show: false,
                    formatter: function (val) {
                        return val + "%";
                    }
                }

            },
            title: {
                text: 'Hasil Rental Bulanan',
                floating: true,
                offsetY: 330,
                align: 'center',
                style: {
                    color: '#444'
                }
            }
        },

    }


    

    const handleGetDateFrom = (e) => {
        setDateFrom(e.target.value)
    }
    const handleGetDateUntil = (e) => {
        setDateUntil(e.target.value)
    }

    console.log(dateFrom, dateUntil);

    return (
        <div>
            <Navbar handleLogin={handleLogin} userName={decoded.userData.username}
                handleLogout={handleLogout} />
            <h1>Profile Page</h1>
            <div className="w-5/6 pt-32">
                <Bar datasetIdKey="id" data={dataSet} options={option}></Bar>
            </div>

            <div>
                <div id="chart">
                    <Chart options={options.options} series={options.series} type="pie" width={380} />
                </div>
                <div id="html-dist"></div>
            </div>


            <div className=" pt-10 flex flex-col justify-center items-center">
                <div className="flex gap-5">
                    <input type="date" value={dateFrom} onChange={handleGetDateFrom}/>
                    <input type="date" value={dateUntil} onChange={handleGetDateUntil}/>
                    <button onClick={getReportData}> Go</button>
                </div>
                <div id="chart" className="w-5/6">
                    <Chart options={OptionsColumChart.options} series={OptionsColumChart.series} type="bar"  />
                </div>
                <div id="html-dist"></div>
            </div>


        </div>
    )
}

export default ProfilePage