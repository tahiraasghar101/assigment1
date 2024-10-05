export function getTurkeyData() {
    return{
        Name:"Turkey",
        Population:"87,473,805",
        Capital:"Ankara",
        Bigcity:"Istambul"
    };
}

const TurkeyPage = () => {
    const data = getTurkeyData();
    return(
        <div>
            <h1>{data.Name}</h1>
            <p>{data.Population}</p>
            <p>{data.Capital}</p>
            <p>{data.Bigcity}</p>
        </div>
    );
};

export default TurkeyPage;