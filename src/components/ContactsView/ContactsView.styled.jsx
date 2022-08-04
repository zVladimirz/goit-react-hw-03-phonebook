import styled from 'styled-components';

export const ContactsViewList = styled.ul`
  padding: 0px;
`;

export const ContactsViewListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-top: 1px solid black;
  border-right: 1px solid black;
  border-left: 1px solid black;
  &:last-child {
    border-bottom: 1px solid black;
}  
  /* border: 1px solid black; */
`;

export const ContactsViewListText = styled.p`
  margin: 0px;
`;
