import {useRouter} from "next/router";

const ClientProjectsPage = () => {
    const {query, push, replace} = useRouter()
    console.log(query)
    const loadProjectHandler = () => {
        push({
            pathname: '[id]/[clientprojectid]',
            query: {id: 'max', clientprojectid: 'projecta'}
        })
    }
    return (
        <div>
            <h1>The project of a Given Client</h1>
            <button onClick={loadProjectHandler}>Load Project A</button>
        </div>
    );
};

export default ClientProjectsPage;
