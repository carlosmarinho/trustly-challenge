import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { InputSearch } from './index';
import { searchProduct } from 'actions/product';


const Search = styled.div`
    border-bottom: 1px solid #BDBDBD;
    height: 30px;
    display: flex;
    box-sizing: border-box;
    margin: 10px 10px 50px 10px;
    align-items: center;

    img{
        width: 20px;
        height: 20px;
        margin-left: 20px;
    
    }

    input {
        height: 27px;
        text-align: center;
        font-size: 24px
    }

`

export const SearchBar = () => {

    const dispatch = useDispatch(state => state);

    const handleSearch = (e) => {
        console.log("e: ", e);
        dispatch(searchProduct(e));  
    }

    return(
        <Search>
            <img src="/images/search-icon.png" alt="Ícone de busca" />
            <InputSearch 
                name="search"
                placeholder="Search for your sneaker"
                onKeyUp={e => handleSearch(e.target.value)}
            />
        </Search>
    )
}
