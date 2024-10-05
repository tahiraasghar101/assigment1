export function getSoudiArabiaData() {
    return{
        Name:"SoudiArabia",
        Population:"33,962,757",
        Capital:"Riyadh",
        Bigcity:"Riyadh"
    };
}

const SoudiArabiaPage = () => {
    const data = getSoudiArabiaData();
    return(
        <div>
            <h1>{data.Name}</h1>
            <p>{data.Population}</p>
            <p>{data.Capital}</p>
            <p>{data.Bigcity}</p>
        </div>
    );
};

export default SoudiArabiaPage;