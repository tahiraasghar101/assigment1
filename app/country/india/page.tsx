export function getIndiaData() {
    return{
        Name:"India",
        Population:"1,450,935,791",
        Capital:"Dehli",
        Bigcity:"Mumbai"
    };
}

const IndiaPage = () => {
    const data = getIndiaData();
    return(
        <div>
            <h1>{data.Name}</h1>
            <p>{data.Population}</p>
            <p>{data.Capital}</p>
            <p>{data.Bigcity}</p>
        </div>
    );
};

export default IndiaPage;