import React, { useState, useContext } from 'react';
import './Navbar.css'
//IMAGES
import searchIMG from '../../Images/Search.png';
import filterDots from '../../Images/filterDots.png';
import calendar from '../../Images/Calendar.png';
//CONTEXT-API
import { DataContext } from '../../context/DataContext';

function Navbar() {

    const { filterPopup,
        setFilterPopup,
        filterBox,
        setFilterBox,
        handlePopup,
        category,
        setCategory,
        handleCategory,
        search,
        setSearch,
        handleSearch,
        filter,
        setFilter,
        handleFilter,
        dateFilter,
        setDateFilter,
        handleDateFilter } = useContext(DataContext)



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
                                    <button onClick={handleFilter} value=''>Filtreleri Kaldır</button>
                                    <button onClick={handleFilter} value='Maximum UNIQ Hall'>
                                        <span class="material-symbols-outlined">
                                            check_box_outline_blank
                                        </span>
                                        Maximum Uniq Hall</button>
                                    <button onClick={handleFilter} value='Maximum UNIQ Box'>
                                        <span class="material-symbols-outlined">
                                            check_box_outline_blank
                                        </span>
                                        Maximum Uniq Box</button>
                                    <button onClick={handleFilter} value='Maximum UNIQ Lounge'>
                                        <span class="material-symbols-outlined">
                                            check_box_outline_blank
                                        </span>
                                        Maximum Uniq Lounge</button>
                                    <button onClick={handleFilter} value='Maximum UNIQ Açıkhava'>
                                        <span class="material-symbols-outlined">
                                            check_box_outline_blank
                                        </span>
                                        Maximum Uniq Açıkava</button>



                                    <h3>Etkinlik Tarihi</h3>

                                    <button onClick={handleDateFilter} value={'true'}>
                                        <span class="material-symbols-outlined">
                                            check_box_outline_blank
                                        </span>
                                        Güncel Ekinlikler</button>
                                    <button onClick={handleDateFilter} value={'false'}>
                                        <span class="material-symbols-outlined">
                                            check_box_outline_blank
                                        </span>
                                        Geçmiş Etkinlikler</button>
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