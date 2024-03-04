import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin-left: 0;
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
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    color: white;
    position: relative;
    
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
        max-width: calc(237px * 3 + 20px * 3);
        margin: 0 auto;
    }
    @media (min-width: 320px) and (max-width: 767px){
        max-width: calc(335px * 1 + 20px * 1);
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

const NavigationPanel = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;

const CircleButton = styled.button`
    background-color: ${props => props.isActive ? '#EFEDE8' : 'transparent'};
    color: ${props => props.isActive ? '#EFEDE8' : 'white'};
    border: none;
    padding: 5px;
    margin: 0 5px;
    border-radius: 50%;
    width: 25px;
    height: 25px;

    &:not(.active) {
        opacity: 0.4;
    }
`;

export const App = () => {
    const [activeTab, setActiveTab] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
        setCurrentPage(1);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const getCardsPerPage = () => {
        if (window.innerWidth >= 1440) {
            return activeTab === 1 ? 10 : 3;
        } else if (window.innerWidth >= 768 && window.innerWidth < 1440) {
            return activeTab === 1 ? 9 : 3;
        } else if (window.innerWidth < 767) {
            return activeTab === 1 ? 10 : 1;
        } else {
            return 1;
        }
    };

    const cardsPerPage = getCardsPerPage();
    const totalCards = {
        1: 13,
        2: 13,
        3: 13
    };
    const totalPages = Math.ceil(totalCards[activeTab] / cardsPerPage);

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
                <CardList>
                    {[...Array(cardsPerPage)].map((_, index) => {
                        const cardNumber = index + (currentPage - 1) * cardsPerPage + (activeTab - 1) * 13 + 1;
                        if (cardNumber <= totalCards[activeTab]) {
                            return (
                                <Card key={index + (currentPage - 1) * cardsPerPage}>
                                    <CardDiv>{cardNumber}</CardDiv>
                                </Card>
                            );
                        }
                        return null;
                    })}
                </CardList>
                {totalPages > 1 && (
                    <NavigationPanel>
                        {[...Array(totalPages)].map((_, index) => (
                            <CircleButton
                                key={index}
                                isActive={index + 1 === currentPage}
                                onClick={() => handlePageChange(index + 1)}
                            >
                                {index + 1}
                            </CircleButton>
                        ))}
                    </NavigationPanel>
                )}
            </CardContainer>
        </Container>
    );
};
