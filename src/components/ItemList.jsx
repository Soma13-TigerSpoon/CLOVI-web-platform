import styled from "styled-components";
import Items from "./Item";
function ItemList({index}){
    return <Clovi>
        <Clv_header></Clv_header>
        <Clv_main>
            <Items index = {index}></Items>
        </Clv_main>
    </Clovi>
}

export default ItemList;
const Clovi = styled.div`
    width: 360px;
    min-height: 80px;
    max-height: 420px;
    border-radius: 10px;
    /* overflow: hidden; */
    overflow: hidden;
    box-shadow: rgba(100, 100, 111, 0.7) 0px 7px 29px 0px;
`

const Clv_header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 44px;
    box-sizing: border-box;
    padding: 0px 12px;
    background-color: white;
`;
const Clv_main = styled.div`
    display: flex;
    flex-direction: column;
    width: 360px;
    overflow-y: scroll;
    max-height: 380px;
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar{
        display: none;
    }
`
