import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin-left: 20px; /* Змініть потрібний відступ від лівого краю */
`;

const NavgtionContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Title = styled.h2`
    margin-top: 10px;
`;

const ButtonsContainer = styled.div`
    display: flex;
    margin-top: 10px;
    margin-left: auto;
`;

const CardContainer = styled.div`
    margin-top: 40px;
`;

const Card = styled.li`
    width: 270px;
    height: 200px;
    background-color: green;
    border-radius: 15px;
`;

const CardDiv = styled.div`
  
`;
const CardList = styled.ul`
  display: flex;
  gap: 10px;
  list-style: none;
  padding-top: 80px;
`;

const TabButton = styled.button`
    background-color: ${props => props.isActive ? 'black' : 'transparent'};
    color: ${props => props.isActive ? 'white' : 'black'};
    border: none;
    padding: 5px 10px;
    margin-right: 10px; /* Змініть потрібний відступ між кнопками */
    border-radius: 5px;
    cursor: pointer;
    width: 84px;
    height: 32px;
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
                    <TabButton isActive={activeTab === 1} onClick={() => handleTabClick(1)}>Body parts</TabButton>
                    <TabButton isActive={activeTab === 2} onClick={() => handleTabClick(2)}>Muscles</TabButton>
                    <TabButton isActive={activeTab === 3} onClick={() => handleTabClick(3)}>Equipment</TabButton>
                </ButtonsContainer>
            </NavgtionContainer>
                <CardContainer>
                    {activeTab === 1 && <CardList><Card><CardDiv></CardDiv></Card><Card><CardDiv></CardDiv></Card><Card><CardDiv></CardDiv></Card></CardList>}
                    {activeTab === 2 && <p>Tab 2 Content</p>}
                    {activeTab === 3 && <p>Tab 3 Content</p>}
                </CardContainer>
        </Container>
    );
};
