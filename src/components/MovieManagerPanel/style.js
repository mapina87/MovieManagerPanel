import styled from "styled-components";

/************************************************************
 ****** Style for MovieManagerPanel *************************
 ************************************************************/
export const ContainerMovieManager = styled.div`
  width: 700px;
  height: 600px;
  padding: 0.5em;
  @media(max-width:40rem){
    width: 98%;
    /*padding: 2em;*/
  }
`;
/************************************************************
 ****** End Style for MovieManagerPanel *********************
 ************************************************************/
 
 
 /************************************************************
 ****** Styles of SearchPanel  and their components *********
 ************************************************************/
//Style for Selection filter.
export const FilterCategory = styled.select`
  font-size: 20px;
  padding-left: 5px;
  border-radius: 0.7em;
  width: 36%;
  height: 36px;
  @media(max-width:40rem){
    width: 93%;
    border-radius: 0.3em;
    margin-top:1em;
  }
`;

//Style for search input.
export const SearchName = styled.input`
  font-size: 20px;
  padding-left: 5px;
  border-radius: 0.7em;
  width: 60%;
  height: 30px; 
  @media(max-width:40rem){
    width: 90%;
    border-radius: 0.3em;
  }
`;

export const ContainerSearch = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media(max-width:40rem){
    width: 90%;
    flex-direction:column;
    margin:1em 0em 0em 1em;
    padding:0em 0em 0em 0.3em;
  }
`;
/****************************************************************
 ****** End Styles of SearchPanel and their components **********
 ****************************************************************/

 