
function extractedDataArray(){
    const data = fetch(SWIGGY_API);
    data
    .then((res)=>{
        return res.json();
    })
    .then((res)=>{
        return res;
    })
}

export default extractedDataArray;