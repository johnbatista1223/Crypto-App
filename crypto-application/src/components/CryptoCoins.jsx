import React from 'react'
import styled from "styled-components";
const Table = styled.table`
  height:50px;
  border:white;
  margin-left:60px;
  width: 90%;
}
 
`;
const TableRow = styled.tr`
  height: 5.625rem;
  border-top: 1px solid #81cdba;
`;
const TableHeader = styled.th`
  color: #81cdba;
  padding:20px
   height: 10px;
`;

const CryptoCoins = ({fetchAllData}) => {
  return (
    <div>   
      <Table>

        {fetchAllData.map((data)=> (
          <div>
            <div style={{borderTop: "1px solid #81cdba",width:'100%'}}></div>
    <br/>
  <TableRow key={data.id}>
    <span><img src={data.image} style={{height:'20px'}} /></span>
    <td>{data.name}</td>
    <td>{data.symbol}</td>
    <td>{data.current_price}</td>
    
  </TableRow>
  </div>
        ))}
  
</Table>
    </div>
  )
}

export default CryptoCoins
