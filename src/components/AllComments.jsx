
function AllComments({allComments}) {


  return (
    <div>
        <h1>All Comments</h1>
    
      {
        allComments.map((comments) => {
          return(
            <li key={comments.id}>{comments.body}</li>
          )
        })
      }
    </div>

  )
}

export default AllComments
