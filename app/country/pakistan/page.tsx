export function getPakistanData() {
    return{
        Name:"Pakistan",
        Population:"269,264,164",
        Capital:"Islamabad",
        Bigcity:"Karachi"
    };
}

const PakistanPage = () => {
    const data = getPakistanData();
    return(
        <div>
            <h1>{data.Name}</h1>
            <p>{data.Population}</p>
            <p>{data.Capital}</p>
            <p>{data.Bigcity}</p>
        </div>
    );
};

export default PakistanPage;