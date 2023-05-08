import React, { useState, useContext } from 'react';
import './Navbar.css'
//IMAGES
import searchIMG from '../../Images/Search.png';
import filterDots from '../../Images/filterDots.png';
import calendar from '../../Images/Calendar.png';
//CONTEXT-API
import { DataContext } from '../../context/DataContext';

function Navbar() {

    const {
        filterPopup,
        setFilterPopup,
        handlePopup,
        handleCategory,
        handleSearch,
        handleFilter,
        handleDateFilter,
        checkedBoxes,
        handleRemoveFilter } = useContext(DataContext)


    return (
        <div className='Navbar'>

            <div className="navbarTop">
                <ul className='navbarTitleContainer'>
                    <button onClick={handleCategory} value="" >Tüm Etkinlikler</button>
                    <button onClick={handleCategory} value="TİYATRO" >Tiyatro</button>
                    <button onClick={handleCategory} value="KONSER" >Konser</button>
                    <button onClick={handleCategory} value="STAND UP" >Stand Up</button>
                    <button onClick={handleCategory} value="SİNEMA" >Sinema</button>
                    <button onClick={handleCategory} value="ÇOCUK" >Çocuk</button>
                </ul>

                <div className="searchContainer">
                    <img className='searchImg' src={searchIMG} alt="" />
                    <input onChange={handleSearch} className='SearchInput' type="text" placeholder='Etkinlik Ara' />
                </div>
            </div>



            <div className="filterContainer">

                <div className="filter_Popup">
                    <div className="Filters" onClick={handlePopup}>
                        <img src={filterDots} alt="" />
                        Filtreler
                    </div>
                    {
                        filterPopup
                            ?
                            <>
                                <div onClick={() => setFilterPopup(false)} className="overlay"></div>

                                <div className="popupContainer">
                                    <h3>Etkinlik Mekanı</h3>
                                    <button onClick={handleRemoveFilter}>Filtreleri Kaldır</button>

                                    <button id='1' onClick={handleFilter} value='Maximum UNIQ Hall'>
                                        <span style={checkedBoxes['1'] ? { backgroundColor: '#FF0D87', color: 'white' } : { color: 'black' }} className="material-symbols-outlined">
                                            {checkedBoxes['1'] ? 'check_box' : 'check_box_outline_blank'}
                                        </span>
                                        Maximum Uniq Hall
                                    </button>

                                    <button id='2' onClick={handleFilter} value='Maximum UNIQ Box'>
                                        <span style={checkedBoxes['2'] ? { backgroundColor: '#FF0D87', color: 'white' } : { color: 'black' }} className="material-symbols-outlined">
                                            {checkedBoxes['2'] ? 'check_box' : 'check_box_outline_blank'}
                                        </span>
                                        Maximum Uniq Box
                                    </button>

                                    <button id='3' onClick={handleFilter} value='Maximum UNIQ Lounge'>
                                        <span style={checkedBoxes['3'] ? { backgroundColor: '#FF0D87', color: 'white' } : { color: 'black' }} className="material-symbols-outlined">
                                            {checkedBoxes['3'] ? 'check_box' : 'check_box_outline_blank'}
                                        </span>
                                        Maximum Uniq Lounge
                                    </button>

                                    <button id='4' onClick={handleFilter} value='Maximum UNIQ Açıkhava'>
                                        <span style={checkedBoxes['4'] ? { backgroundColor: '#FF0D87', color: 'white' } : { color: 'black' }} className="material-symbols-outlined">
                                            {checkedBoxes['4'] ? 'check_box' : 'check_box_outline_blank'}
                                        </span>
                                        Maximum Uniq Açıkava
                                    </button>

                                    <h3>Etkinlik Tarihi</h3>

                                    <button id='5' onClick={handleDateFilter} value={'true'}>
                                        <span style={checkedBoxes['5'] ? { backgroundColor: '#FF0D87', color: 'white' } : { color: 'black' }} className="material-symbols-outlined">
                                            {checkedBoxes['5'] ? 'check_box' : 'check_box_outline_blank'}
                                        </span>
                                        Güncel Ekinlikler
                                    </button>

                                    <button id='6' onClick={handleDateFilter} value={'false'}>
                                        <span style={checkedBoxes['6'] ? { backgroundColor: '#FF0D87', color: 'white' } : { color: 'black' }} className="material-symbols-outlined">
                                            {checkedBoxes['6'] ? 'check_box' : 'check_box_outline_blank'}
                                        </span>
                                        Geçmiş Etkinlikler
                                    </button>
                                    {/* 
                                    <button onClick={handleDateFilter} value={'true'}>
                                        <span className="material-symbols-outlined">
                                            check_box_outline_blank
                                        </span>
                                        Güncel Ekinlikler</button>
                                    <button onClick={handleDateFilter} value={'false'}>
                                        <span className="material-symbols-outlined">
                                            check_box_outline_blank
                                        </span>
                                        Geçmiş Etkinlikler</button> */}
                                </div>
                            </>
                            : null
                    }
                </div>

                <div className="seeOnCalendar">
                    <img src={calendar} alt="" />
                    Takvimde Gör
                </div>

            </div>
        </div>
    )
}

export default Navbar