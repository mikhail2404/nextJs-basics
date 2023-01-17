const UserIdPage = ({id}) => {
    return (
        <div>
            UserIdPage {id}
        </div>
    );
};

export default UserIdPage;

export async  function  getServerSideProps(context) {
    console.log('Server-side')
    const {params} = context
    const userId = params.uid

    return {
        props: {
            id: 'userid' + userId
        }
    }
}
