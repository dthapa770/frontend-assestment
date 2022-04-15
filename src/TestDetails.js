
//component to display grades with expand toggle
const generateTest = (grades) =>{
    let res =[]
    for(let i = 0; i< grades.length; i++){
        res.push(`Test${i+1}: ${grades[i]}%`)
    };
    return res
}
const TestDetails = ({grades,id}) => {
    return ( 
        <div className="test-details" key={id}>
            {generateTest(grades).join("\r\n")}
        </div>  
     );
}
 

export default TestDetails;