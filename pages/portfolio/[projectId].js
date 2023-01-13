import {useRouter} from "next/router";

const PortfolioProjectPage = () => {
    const {query} = useRouter()
console.log(1)
    return (
        <div>
            ProjectId {query.projectId}
        </div>
    );
};
export default PortfolioProjectPage;
