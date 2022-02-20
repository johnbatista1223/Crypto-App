import React from 'react'
import styled from "styled-components";
const Table = styled.table`
  height:50px;
  border:white;
  margin-left:90px;
  width: 90%;
}
 
`;
const TableRow = styled.tr`
  height: 5.625rem;
  display:flex;
  justify-content:space-evenly;
`;
const TableData = styled.td`
font-size:20px;
color: white;
`

const CryptoCoins = ({fetchAllData, indexOfFirstUser ,indexOfLastUser }) => {
  return (
    <div>   
      <Table>
        {fetchAllData
        .slice(indexOfFirstUser, indexOfLastUser)
        .map((data,index)=> (
          <div key={index}>
            <div style={{borderTop: "1px solid #81cdba",width:'100%'}}></div>
    <br/>
  <TableRow key={data.id}>
    <span><img src={data.image} style={{height:'35px'}} /></span>
    <TableData>{data.name}</TableData><br/>
    <TableData>{data.symbol}</TableData>
    <TableData>{data.current_price}</TableData>
    <TableData>{data.total_volume.toLocaleString()}</TableData>
    <TableData>{data.market_cap}</TableData>
    {data.price_change_percentage_24h < 0 ? 
    <TableData style={{color:'red'}}>{data.price_change_percentage_24h.toFixed(2)}%</TableData> :
    <TableData style={{color:'green'}}>{data.price_change_percentage_24h.toFixed(2)}%</TableData> }
  </TableRow>
  </div>
        ))} 
</Table>
    </div>
  )
}

export default CryptoCoins
