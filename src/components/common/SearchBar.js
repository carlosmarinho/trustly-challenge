import React from 'react';
import styled from 'styled-components';

const Search = styled.div`
    border-bottom: 1px solid #BDBDBD;
    height: 20px;
    display: flex;
    box-sizing: border-box;
    margin: 10px 10px 30px 10px;

    >img{
        width: 20px;
        height: 20px;
        margin-left: 20px;
    }
`

export const SearchBar = () => {
    return(
        <Search>
            <img src="/images/search-icon.png" alt="Ícone de busca" />
            <p>Search for your sneaker</p>
        </Search>
    )
}
