import React from 'react';
import styled, {css} from 'styled-components';

var Synopsis = styled.div`
color: #231341;
word-wrap: break-word;
font-size: 12px;
line-height: 16px;
letter-spacing: normal;
font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
font-weight: 800;
display: inline;
text-align: center;
`;

var SummaryContainer = styled.div`
padding-left: 8px;
padding-right: 8px;
position: relative;
`;

var InfoContainer = styled.div`
display: inline; 
float: left;
`;

var Title = styled.div`
font-weight: 800;
margin: 0px;
padding-top: 6px;
padding-bottom: 6px;
color: #484848;
font-size: 32px;
`;

var City = styled.div`
font-size: 16px;
`;

var HostContainer = styled.div`
margin-top: 12px;
margin-bottom: 6px;
position: relative;
float: right;
flex-direction: column;
`;

var AvatarContainer = styled.div`
display: block;
position: relative;
`;

var Avatar = styled.img`
height: 64px;
width: 64px;
border-radius: 50%;
z-index: 1;
position: relative;
`;

var Badge = styled.img`
height: 32px;
width: 32px;
z-index: 2;
position: absolute;
top: 35px;
left: 40px;
display: none;

${p => p.isSuper && css`display: block;`};
`;

var HostName = styled.div`
font-size: 14px;
color: #767676;
text-align: center;
`;

var Header = ({ data }) => {
  return (
    <div>
      <Synopsis>PRIVATE ROOM IN APARTMENT</Synopsis>
      <SummaryContainer>
        <InfoContainer>
          <Title>{data.title}</Title>
          <City>{data.city}</City>
        </InfoContainer>
        <HostContainer>
          <AvatarContainer>
            <Avatar src={data.avatar}/>
            <Badge isSuper={data.superStatus} src='https://bestairbnbhostingtips.com/wp-content/uploads/2017/03/Superhost-Profile-Badge.png'/>
          </AvatarContainer>
          <HostName>{data.name}</HostName>
        </HostContainer>
      </SummaryContainer>
    </div>
  );
};

export default Header;