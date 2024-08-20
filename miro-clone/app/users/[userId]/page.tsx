interface UserIdPageProps { 
    params: { 
        userId: string; 
    }; 
}; 

const Page = ( { params }: UserIdPageProps ) => { 
    return ( 
        <div> UserId: { params.userId } </div>
    )
}; 

export default Page; 