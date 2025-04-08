import "./countryFlagCard.css"
export function CountryFlagCard({name, flag }) {
    return (
      <div className="countryCard">
        <div style ={{
          display:"flex",
          justifyContent: "center",
          alignItems: "center",
          height: "70%",
          width: "100%",
        }}>
          <img 
            style ={{
              height: "100%",
              width: "70%",
              marginTop: "10px",
              objectFit: "cover",
            }}
            src = {flag} alt = {`flag of ${name}`} />
        </div>
        <h2>{name}</h2>
      </div>
    );
}