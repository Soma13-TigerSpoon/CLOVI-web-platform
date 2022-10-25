import styled from "styled-components";

function ShopList({shops, id}){
    console.log(shops);
    let components = shops.map((shop) => shopCard(shop));
    //console.log(components);
    return components;
}
function shopCard(shop){
    
    return <ShopRow href={shop.shopUrl} target="_blank">
                <ShopLogo src={shop.logoUrl}></ShopLogo>
                <Price>{shop.price}</Price>
            </ShopRow>
}
const ShopRow = styled.a`

`;
const Left = styled.div`
`;

const ShopLogo = styled.img`

`;
const Price = styled.span`

`;

export default ShopList;