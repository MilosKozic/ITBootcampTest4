import axios from 'axios'
import { useState } from 'react'

export const getLaunches = () => axios.get('https://api.spacexdata.com/v4/launches')

export const Launches = ({ launches }) => {
    return (
        <div>
            {launches.map(launch => <Launch key={launch.id} launch={launch} single={true} />)}
        </div>
    )
}

const Launch = ({ launch }) => {
    const [single, setSingle] = useState(true)
    return (
        <div>
            <button onClick={() => {
                setSingle(!single)
            }}>Click</button>

            {single ? <div>
                <p>Naziv: {launch.name}<br /><br />{launch.date_utc}</p>
                <img src={launch.links.patch.small} width="100px" alt="slike lansiranja"></img>
            </div>
                : <div>
                    <p>Naziv: {launch.name}<br /><br />{launch.static_fire_date_unix}</p>
                    <p>Lansiranje uspesno:{launch.success ? "DA" : "Ne"}</p>
                    <img src={launch.links.patch.small} width="100px" alt="slike lansiranja"></img>
                </div>}

        </div>
    )
}

export const Select = ({ select, all, setSelect }) => {
    return (
        <div>
            <select value={select} onChange={(e) => {
                setSelect(Number(e.target.value))
            }}>
                <option value={`${Number(all)}`}>All</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
            </select>
            <hr />
        </div>
    )
}