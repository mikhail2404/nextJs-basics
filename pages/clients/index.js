import Link from "next/link";

const ClientPage = () => {
    const clients = [{id: 'max', name: 'Maximilian'}, {id: 'manu', name: 'Manuel'},]
    return (<div>
            <ul>
                <h1>Client Page</h1>
                {clients.map(client => (
                    <li key={client.id}><Link href={{pathname: 'clients/[id]', query: {id: client.id}}}>{client.name}</Link></li>
                ))}
            </ul>
        </div>);
};

export default ClientPage;
