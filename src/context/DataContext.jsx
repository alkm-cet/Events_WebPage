import React, { createContext, useState } from 'react';
//DATA
import data from '../Datas';

export const DataContext = createContext();

function DataContextProvider({ children }) {

    const [eventData, setEventData] = useState(data);
    const [filterPopup, setFilterPopup] = useState(false);

    //-----------------------------EVENTS
    const handleBgColor = (type) => {
        if (type === 'SİNEMA') {
            return '#F07266'
        } else if (type === 'KONSER') {
            return '#9FAE5D'
        } else if (type === 'STAND UP') {
            return '#F19653'
        } else if (type === 'TİYATRO') {
            return '#B77CB8'
        } else if (type === 'ÇOCUK') {
            return '#f1c40f'
        }
    }

    const toggleAddToCalendar = (id) => {
        setEventData(prevData => prevData.map(info => {
            if (info.id === id) {
                const updatedInfo = { ...info, isAddedToTheCalendar: info.isAddedToTheCalendar === 'add_circle' ? 'check_circle' : 'add_circle' }
                return updatedInfo
            }
            return info
        }))
    }

    //--------------------------NAVBAR
    const [category, setCategory] = useState('');
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('');
    const [dateFilter, setDateFilter] = useState('')

    const handlePopup = () => {
        setFilterPopup(prev => !prev)
    }

    const handleCategory = (e) => {
        setCategory(e.target.value)
    }

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    const handleFilter = (e) => {
        setFilter(e.target.value)
        setDateFilter('')
        setFilterPopup(false)
    }

    const handleDateFilter = (e) => {
        setFilterPopup(false)
        setDateFilter(e.target.value)
    }


    return (
        <DataContext.Provider
            value={{
                eventData,
                setEventData,
                handleBgColor,
                toggleAddToCalendar,
                filterPopup,
                setFilterPopup,
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
                handleDateFilter
            }}
        >
            {children}
        </DataContext.Provider>
    )
}

export default DataContextProvider