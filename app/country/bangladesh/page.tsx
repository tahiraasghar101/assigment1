export function getBangladeshData() {
    return{
        Name:"Bangladesh",
        Population:"173,562,364",
        Capital:"Dhaka",
        Bigcity:"Dhaka"
    };
}

const BangladeshPage = () => {
    const data = getBangladeshData();
    return(
        <div>
            <h1>{data.Name}</h1>
            <p>{data.Population}</p>
            <p>{data.Capital}</p>
            <p>{data.Bigcity}</p>
        </div>
    );
};

export default BangladeshPage;