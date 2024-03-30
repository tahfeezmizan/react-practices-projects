import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { BallTriangle } from 'react-loader-spinner'

const Phones = () => {
    const [phones, setPhonesData] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res => res.json())
        // .then(data => setPhonesData(data.data))

        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const phonesData = data.data.data;
                const phonesWithFackData = phonesData.map(phone => {
                    const obj = {
                        name: phone.phone_name,
                        price: phone.slug.split('-')[1]
                    }
                    return obj
                })
                console.log(phonesWithFackData);
                setPhonesData(phonesWithFackData);
                setLoading(false)
            })

    }, []);
    return (
        <div className="mb-4">
            <h2 className="text-3xl mb-4">Total Phones of API: {phones.length}</h2>

            {loading &&
                <BallTriangle
                    height={100}
                    width={100}
                    radius={5}
                    color="#4fa94d"
                    ariaLabel="ball-triangle-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
            }
            <BarChart width={600} height={350} data={phones}>
                <Bar dataKey="price" fill="#8884d8" />
                <YAxis></YAxis>
                <XAxis></XAxis>
                <Tooltip></Tooltip>
            </BarChart>
        </div>
    );
};

export default Phones;