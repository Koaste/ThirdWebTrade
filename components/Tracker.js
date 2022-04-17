import React from 'react';
import styled from 'styled-components';
import { coins } from '../static/coins'
import Coin from './Coin';
import LiveData from './LiveData';

const Portfolio = () => {
  return (
    <Wrapper>
        <Content>
            <TrackerTable>
                <TableItem>
                    <Title>Live Tracker</Title>
                </TableItem>
                <Divider />
                <Table>
                    <TableItem>
                        <TableRow>
                            <div style={ {flex: 3 }}>Name</div>
                            <div style={ {flex: 1 }}>Price</div>
                        </TableRow>
                    </TableItem>
                    <Divider />
                    <div>
                        {coins.map(coin => (
                            <div>
                                <LiveData coin={coin} />
                            </div>
                        ))}
                    </div>
                </Table>
            </TrackerTable>
        </Content>
    </Wrapper>
  )
};

export default Portfolio;

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`
const Content = styled.div`
  width: 60%;
  max-width: 1000px;
  padding: 2rem 1rem;
`

const TrackerTable = styled.div`
  margin-top: 1rem;
  border: 1px solid #282b2f;
`
const Table = styled.div`
  width: 100%;
`

const TableRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  & > th {
    text-align: left;
  }
`

const TableItem = styled.div`
  padding: 1rem 2rem;
`

const Divider = styled.div`
  border-bottom: 1px solid #282b2f;
`

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
`