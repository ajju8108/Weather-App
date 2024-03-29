import React from 'react'
import './Details.css'

import { FaArrowUp, FaArrowDown, FaWind } from 'react-icons/fa'
import { BiHappy } from 'react-icons/bi'
import { MdCompress, MdOutlineWaterDrop } from 'react-icons/md'

export default function Details({ weather, units }) {
    const tempUnit = units === 'metric' ? '*C' : 'F';
    const windUnit = units === 'metric' ? 'm/s' : 'm/h'

    const cards = [
        {
            id: 1,
            icon: <FaArrowDown />,
            title: "min",
            data: weather.temp_min.toFixed(),
            unit: tempUnit,
        },
        {
            id: 2,
            icon: <FaArrowUp />,
            title: "max",
            data: weather.temp_max.toFixed(),
            unit: tempUnit,
        },
        {
            id: 3,
            icon: <BiHappy />,
            title: "feels like",
            data: weather.feels_like.toFixed(),
            unit: tempUnit,
        },
        {
            id: 4,
            icon: <MdCompress />,
            title: "pressure",
            data: weather.pressure,
            unit: 'hPa',
        },
        {
            id: 5,
            icon: <MdOutlineWaterDrop />,
            title: "wind speed",
            data: weather.speed.toFixed(),
            unit: "%",
        },
        {
            id: 6,
            icon: <FaWind />,
            title: "wind speed",
            data: weather.speed.toFixed(),
            unit: windUnit,
        },
    ]

    return (
        <>
            <div className="section details">
                {cards.map((card) => (
                    <div key={card.id} className="card">
                        <div className="detail_card_icon">
                            {card.icon}
                            <small>{card.title}</small>
                        </div>
                        <h2>{`${card.data} ${card.unit}`}</h2>
                    </div>
                ))}
            </div>
        </>
    )
}
