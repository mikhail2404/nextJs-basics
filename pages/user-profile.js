const UserProfilePage = ({username}) => {
    return (
        <div>
            {username}
        </div>
    );
};

export default UserProfilePage;

export async function  getServerSideProps(context) {
    const { params, req, res } = context

    console.log({req, res})
    return {
        props: {
            username: 'Mike'
        }
    }
}
