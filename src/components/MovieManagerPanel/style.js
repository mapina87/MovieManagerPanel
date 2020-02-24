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