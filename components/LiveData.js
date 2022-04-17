import styled from "styled-components";
import Image from "next/image";
import axios from "axios";
import React, {useState, useEffect} from 'react';

const LiveData = ({coin }) => {
  return (
    <Wrapper>
        <div>
            <div style={{ flex: 3 }}>
                <NameCol>
                    <CoinIcon>
                        <Image src={coin.logo} alt={coin.name} />
                    </CoinIcon>
                    <div>
                        <Primary>{coin.name}</Primary>
                        <Secondary>{coin.sign}</Secondary>
                    </div>
                </NameCol>
            </div>
            <div style={{ flex: 1 }}>
                <Primary>
                    {'$'}
                    {coin.priceUsd}                    
                </Primary>
            </div>
        </div>
    </Wrapper>
  )};

export default LiveData;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  & > div {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;
  }
`
const NameCol = styled.div`
  display: flex;
  align-items: center;
`

const CoinIcon = styled.div`
  width: 1.8rem;
  margin-right: 1rem;
`
const Primary = styled.div`
  margin-bottom: 0.1rem;
`

const Secondary = styled.div`
  color: #8a919e;
  font-size: 0.8rem;
`
