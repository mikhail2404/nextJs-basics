import {useEffect, useState} from "react";
import useSWR from 'swr'
const LastSalesPage = ({preLoadedSales}) => {
    const [sales, setSales] = useState(preLoadedSales)

    const {data, error} = useSWR('https://next-js-bca96-default-rtdb.firebaseio.com/sales.json', (apiURL) => fetch(apiURL).then(res => res.json()))
    useEffect(() => {
        if(data){
            const transformedData = Object.entries(data).map(sale => ({...sale[1], id: sale[0]}))
            setSales(transformedData)

        }
    }, [data])

    if(error || !sales){
        return <p>Failed to Load</p>
    }


    return (
        <div>
            {sales.map(sale => (
                <li key={sale.id}>{sale.username} - ${sale.volume}</li>
            ))}
        </div>
    );
};

export async function getStaticProps() {
    const response = await  fetch('https://next-js-bca96-default-rtdb.firebaseio.com/sales.json')
    const data = await  response.json()
    const transformedData = Object.entries(data).map(sale => ({...sale[1], id: sale[0]}))
    return {props : { preLoadedSales: transformedData}, revalidate: 10}
}

export default LastSalesPage;
