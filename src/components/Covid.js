import React,{useEffect,useState} from 'react'

const Covid = () => {

    const [data,setData] = useState([]);

    const getCovidData = async () =>{
      
      try{
          const res =  await   fetch('https://api.covid19india.org/data.json');
          const actualData =  await res.json();
          console.log(actualData.statewise[0]);
          setData(actualData.statewise[0]);
      }catch(err){
         console.log(err);
      }
        
    }

    useEffect(() => {
       getCovidData();
    },[])
    return (
        <>
           <h2>Covid-19 Tracker</h2> 
           <ul>
               <li>
               <div className="card">
                <div className="card-body">
                    <h5 className="card-title">OUR COUNTRY</h5>
                    <p className="card-text">INDIA</p>
                    
                </div>
                </div>
               </li>
               <li>
               <div className="card">
                <div className="card-body">
                    <h5 className="card-title">TOTAL RECOVERED</h5>
                    <p className="card-text">{data.recovered}</p>
                    
                </div>
                </div>
               </li>

               <li>
               <div className="card">
                <div className="card-body">
                    <h5 className="card-title">TOTAL CONFIRMED</h5>
                    <p className="card-text">{data.confirmed}</p>
                    
                </div>
                </div>
               </li>

               <li>
               <div className="card">
                <div className="card-body">
                    <h5 className="card-title">TOTAL DEATH</h5>
                    <p className="card-text">{data.deaths}</p>
                    
                </div>
                </div>
               </li>

               <li>
               <div className="card">
                <div className="card-body">
                    <h5 className="card-title">ACTIVE CASE</h5>
                    <p className="card-text">{data.active}</p>
                    
                </div>
                </div>
               </li>

               <li>
               <div className="card">
                <div className="card-body">
                    <h5 className="card-title">LAST UPDATED</h5>
                    <p className="card-text">{data.lastupdatedtime}</p>
                </div>
                </div>
               </li>
           </ul>
        </>
    )
}

export default Covid;

