import { Grid } from "@mui/material";

const City = ({name, population, area, district, photo}) => {
    const vetsiMesto = (parseInt(area) > 100 ? "item__vetsi" : "item__normalni");
      return (
        //<div className="mesta">
        <>
          <article>
            <Grid sx="auto">
              <h3>{name}</h3>
              <div><img src={photo} alt=''></img></div>
              <div className="populace"> Pocet obyvatel: {population} </div>
              <div className={vetsiMesto}> Vetsi mesto:  </div>
              <div> Okres: {district}</div>
             </Grid>  
          </article>
        </>
    // </div>
    );
}
export default City;