import React, { useState, useContext } from 'react';
import './Events.css';
//IMAGE
import placeIcon from '../../Images/Address.png'
//CONTEXT-API
import { DataContext } from '../../context/DataContext';

function Events() {

    const { eventData,
        setEventData,
        handleBgColor,
        toggleAddToCalendar,
        filterPopup,
        setFilterPopup,
        filterBox,
        setFilterBox,
        handlePopup,
        handleFilterBox,
        category,
        setCategory,
        handleCategory,
        search,
        setSearch,
        handleSearch,
        filter,
        setFilter,
        handleFilter,
        dateFilter } = useContext(DataContext)

    return (
        <>

            {
                eventData
                    .filter(item => category ? item.type === category : item)
                    .filter(items => search ? items.title.toLowerCase().includes(search.toLowerCase()) : items)
                    .filter(items => filter ? items.place === filter : items)
                    .filter(items => dateFilter ? String(items.handleDate()) === dateFilter : items)
                    .map(info =>
                        <div className='Events' key={info.id}>

                            <div className="leftSide">
                                <div className="bgDiv">
                                    <p>{info.time}</p>
                                </div>
                                <div className="imageContainer">
                                    <div style={{ backgroundColor: handleBgColor(info.type) }} className="typeDiv">{info.type}</div>
                                    <img className='infoImage' src={info.image} alt="" />
                                </div>
                            </div>

                            <div className="rightSide">
                                <div className="rightSideInfo">
                                    <h3>{info.title}</h3>
                                    <div className="eventPlace">
                                        <img src={placeIcon} alt="" />
                                        <p style={{ fontSize: '14px', color: '#9C9C9C' }}>{info.place}</p>
                                    </div>
                                    <div className="rightinfoContainer">
                                        <p >{(info.description).slice(0, 145)}... <a style={{ textDecoration: 'none', cursor: 'pointer' }}>Detaylı Bilgi</a></p>
                                        <a style={{ textDecoration: 'underline', fontWeight: '700', cursor: 'pointer', }}>Detaylı Bilgi</a>
                                    </div>

                                </div>

                                <div className="rightSideBTNs">
                                    <button className='buyTicketBTN'>Bilet Al</button>

                                    <div className="addToCalendardiv" onClick={() => toggleAddToCalendar(info.id)} >
                                        <span style={info.isAddedToTheCalendar === "check_circle" ? { backgroundColor: '#FF0D87', color: 'white' } : { color: 'black' }} className="material-symbols-outlined">
                                            {info.isAddedToTheCalendar}
                                        </span>
                                        <p>{info.isAddedToTheCalendar === "check_circle" ? 'Takvime Eklendi' : 'Takvime Ekle'}</p>
                                    </div>
                                </div>

                            </div>

                        </div >
                    )
            }

        </>

    )
}

export default Events