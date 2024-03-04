import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin-left: 0; /* Замінюємо margin-left на 0 */
    padding-left: 20px;
    background-color: #040404;
    color: #EFEDE8;
    min-height: 100vh;
`;

const NavgtionContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    
    @media (max-width: 767px) {
        flex-direction: column;
        display: block;
    }
`;

const Title = styled.h2`
    margin-top: 0px;
`;

const ButtonsContainer = styled.div`
    display: flex;
    
    @media (max-width: 767px) {
        margin-top: 0;
        margin-left: -8px;
    }
`;

const CardContainer = styled.div`
    margin-left: -55px;
    position: relative;
`;

const Card = styled.li`
    width: 237px;
    height: 206px;
    background-color: gray;
    border-radius: 15px;
    
    @media (min-width: 768px) and (max-width: 1439px) {
        width: 224px;
    }
    
    @media (min-width: 320px) and (max-width: 767px) {
        width: 335px;
    }
`;

const CardDiv = styled.div``;

const CardList = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;

    @media (min-width: 1440px) {
        max-width: calc(237px * 5 + 20px * 5);
        margin: 0 auto;
    }
    @media (min-width: 768px) and (max-width: 1439px){
        max-width: calc(237px * 3 + 20px * 5);
        margin: 0 auto;
    }
    @media (min-width: 320px) and (max-width: 767px){
        max-width: calc(237px * 1 + 20px * 5);
        margin: 0 auto;
    }
`;

const TabButton = styled.button`
    background-color: ${props => props.isActive ? '#EFEDE8' : 'transparent'};
    color: ${props => props.isActive ? '#EFEDE8' : 'white'};
    border: none;
    padding: 5px 10px;
    margin-right: 10px;
    border-radius: 5px;
    cursor: pointer;
    width: 84px;
    height: 32px;

    &:not(.active) {
        opacity: 0.4;
    }

    &.active::after {
        content: '';
        display: block;
        width: 100%;
        height: 3px;
        background-color: #EF8964;
        animation: slideIn 4s ease forwards;
        border-radius: 2px;
    }
`;

export const App = () => {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    return (
        <Container>
            <NavgtionContainer>
                <Title>Exercises</Title>
                <ButtonsContainer>
                    <TabButton className={activeTab === 1 ? 'active' : ''} onClick={() => handleTabClick(1)}>Body parts</TabButton>
                    <TabButton className={activeTab === 2 ? 'active' : ''} onClick={() => handleTabClick(2)}>Muscles</TabButton>
                    <TabButton className={activeTab === 3 ? 'active' : ''} onClick={() => handleTabClick(3)}>Equipment</TabButton>
                </ButtonsContainer>
            </NavgtionContainer>
            <CardContainer>
                {activeTab === 1 && (
                    <CardList>
                        {[...Array(10)].map((_, index) => (
                            <Card key={index}><CardDiv></CardDiv></Card>
                        ))}
                    </CardList>
                )}
                {activeTab === 2 && <CardList>
                        {[...Array(10)].map((_, index) => (
                            <Card key={index}><CardDiv></CardDiv></Card>
                        ))}
                    </CardList>}
                {activeTab === 3 && <CardList>
                        {[...Array(10)].map((_, index) => (
                            <Card key={index}><CardDiv></CardDiv></Card>
                        ))}
                    </CardList>}
            </CardContainer>
        </Container>
    );
};
