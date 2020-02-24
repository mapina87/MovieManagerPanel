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

 /************************************************************
 ****** Styles of FormPanel  and their components ***********
 ************************************************************/
//Style for form panel.
export const Form = styled.form`
  border: 1px solid black;
  padding: 7px 0px;
  margin-top: 14px;
  border-radius: 0.4em;
  width: 100%;
  align-items: center;
  display:flex;
  justify-content:space-between;
 @media(max-width:40rem){
    width: 83%;
    flex-direction:column;
    margin:1em 0em 0em 1.3em;
  }
`;

//Style for field of name.
export const NameData = styled(SearchName)`
  border-radius: 0.5em;
  width: 33%;
  height: 35px;
  margin-left: 5px;
  @media(max-width:40rem){
    width: 80%;
    margin-top:0.8em;
    margin-right:0.1em;
  }
`;

//Style for field of genre.
export const GenreData = styled(NameData)`
  margin-right: 4rem;
  @media(max-width:40rem){
    width: 80%;
    margin-top:0.8em;
    margin-right:0.1em;
  }
`;

//Style for button to add movie.
export const Button = styled.button`
  border-radius: 0.5em;
  width: 40px;
  height: 40px;
  margin-right: 1rem;
  @media(max-width:40rem){
    display:none;
  }
`;

export const ButtonMovil = styled.button`
    width:100%;
    height: 40px;
    border-radius: 0.5em;
    display:none;
    margin-top:5px;
    @media(max-width:40rem){
      display:block;
      width: 84%;
      margin:1.2em 0.2em 1.2em 0em;
  }
`
/************************************************************
 ****** End Styles of FormPanel  and their components *******
 ************************************************************/
 
/************************************************************
 ****** Styles of MovieTable  and their components **********
 ************************************************************/
//Style for table of list movies.
export const Table = styled.div`
  width: 100%;
  height: 430px;
  margin-top:10px;
  @media(max-width:40rem){
      width: 84%;
      margin-left:1.3em;
  }
`;

export const HeaderTable = styled.div`
  width: 100%;
  height: 70px;
  border-radius: 0.3em;
  border: 1px solid black;
  display:flex;
  font-family:Arial, Helvetica, sans-serif;
  font-size:24px;
  font-weight:bold;
  @media(max-width:40rem){
      display:none;
  }
`;

export const ButtonDelete = styled.button`
  border-radius: 0.5em;
  width: 40px;
  height: 40px;
  margin-right: 0px;
  margin-top: 0px;
  background-color:#d34545;
  visibility: hidden;
  cursor:pointer;
`;

export const ButtonDeleteMovil = styled(ButtonDelete)`
visibility: visible;
`;

export const Row = styled.div`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid lightgray;
  display:flex;
  font-family:Arial, Helvetica, sans-serif;
  font-size:20px;
  cursor:pointer;
  :hover{
    ${ButtonDelete}{
      visibility:visible;
    }
  }
  @media(max-width:40rem){
      display:none;
  }
`;


export const RowMovil = styled.div`
  display:none;
  justify-content:space-between;
  padding: 10px;
  padding-left:30px;
  border-bottom: 1px solid lightgray;
  cursor:pointer;

  @media(max-width:40rem){
      display:flex;
  }
`;

export const CardContainer = styled.div`
  display:flex;
  flex-direction: column;
  strong{
    font-size:20px;
  }
  span{
    color: gray;
  }
`

export const Columns = styled.span`
  width: 50%;
  height: 100%;
  display:flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ColumnsRows = styled(Columns)`
  width: 45%;
`;

export const ColumnsAction = styled(Columns)`
  width: 10%;
`;
